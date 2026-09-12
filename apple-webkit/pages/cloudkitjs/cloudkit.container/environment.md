> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/environment](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/environment)

# environment

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The container environment, either development or production.

## Declaration

```
attribute String environment;
```

<a id="Discussion"></a>

## Discussion

Possible values are [CloudKit](../cloudkit.md).[DEVELOPMENT_ENVIRONMENT](../cloudkit/development_environment.md)and [CloudKit](../cloudkit.md).[PRODUCTION_ENVIRONMENT](../cloudkit/production_environment.md).

## See Also

### Getting the Identifier and Environment

- [containerIdentifier](containeridentifier.md): The string that identifies the app’s container.
- [apnsEnvironment](apnsenvironment.md): The Apple Push Notification service (APNs) environment associated with this container.
