# problem statement
creates an azure event hub consumer group (if it doesn't already exist)

# example usage

> note: in examples, VERSION represents a version of the azure.eventhub.consumergroup.create pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/azure.eventhub.consumergroup.create#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/azure.eventhub.consumergroup.create#VERSION
```

## compose

```yaml
run:
  op:
    pkg: { ref: github.com/opspec-pkgs/azure.eventhub.consumergroup.create#VERSION }
    inputs: 
      subscriptionId:
      loginId:
      loginSecret:
      loginTenantId:
      resourceGroup:
      namespace:
      eventHub:
      name:
      # begin optional args
      loginType:
      # end optional args
```