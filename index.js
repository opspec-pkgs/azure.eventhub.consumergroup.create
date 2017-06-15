const msRestAzure = require('ms-rest-azure');
const AzureArmEventhub = require('azure-arm-eventhub');

const login = async () => {
    const loginType = process.env.loginType;
    const loginId = process.env.loginId;
    const loginSecret = process.env.loginSecret;
    const loginOpts = { domain: process.env.loginTenantId};

    if (loginType === 'sp') {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L397
        return msRestAzure.loginWithServicePrincipalSecret(loginId, loginSecret, loginOpts);
    } else {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L356
        return msRestAzure.loginWithUsernamePassword(loginId, loginSecret, loginOpts);
    }
};

console.log('logging in');
credentials = login().then(credentials => {
    console.log('login successful');

    const armEventHub = new AzureArmEventhub(credentials, process.env.subscriptionId);

    // see https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/eventHubManagement/lib/operations/consumerGroups.js#L999
    console.log('creating/updating consumer group');
    armEventHub.consumerGroups.createOrUpdate(
        process.env.resourceGroup,
        process.env.namespace,
        process.env.eventHub,
        process.env.name,
        error => {
            if (error) {
                throw error;
            }
            console.log('creating/updating consumer group successful');
        }
    );
});