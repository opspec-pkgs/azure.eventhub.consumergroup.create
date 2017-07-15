# Problem statement
creates an azure event hub consumer group (if it doesn't already exist)

# Example usage

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

# Support

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/azure.eventhub.consumergroup.create/issues)
