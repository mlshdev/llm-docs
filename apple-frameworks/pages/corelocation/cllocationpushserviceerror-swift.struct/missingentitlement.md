> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationpushserviceerror-swift.struct/missingentitlement](https://developer.apple.com/documentation/corelocation/cllocationpushserviceerror-swift.struct/missingentitlement)

# missingEntitlement

**Framework:** Core Location  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+

An error code that indicates the app is missing the entitlement it needs to use the location push service.

## Declaration

```swift
static var missingEntitlement: CLLocationPushServiceError.Code { get }
```

<a id="Discussion"></a>

## Discussion

For more information, see [Creating a location push service extension](../creating-a-location-push-service-extension.md).

## See Also

### Getting the error code

- [unknown](unknown.md): An error code that indicates the app was unable to start the location push service for an unknown reason.
- [missingPushExtension](missingpushextension.md): An error code that indicates the app is missing a Location Push Service Extension.
- [missingPushServerEnvironment](missingpushserverenvironment.md): An error code that indicates the app is missing an Apple Push Notification service (APNs) environment entitlement.
- [unsupportedPlatform](unsupportedplatform.md): An error code that indicates the location push service isn’t available on this platform.
- [CLLocationPushServiceError.Code](code.md): Error codes the location manager returns if starting to monitor for location push notifications fails.
