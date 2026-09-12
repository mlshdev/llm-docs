> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationpushserviceerror-swift.struct/unsupportedplatform](https://developer.apple.com/documentation/corelocation/cllocationpushserviceerror-swift.struct/unsupportedplatform)

# unsupportedPlatform

**Framework:** Core Location  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+

An error code that indicates the location push service isn’t available on this platform.

## Declaration

```swift
static var unsupportedPlatform: CLLocationPushServiceError.Code { get }
```

## See Also

### Getting the error code

- [unknown](unknown.md): An error code that indicates the app was unable to start the location push service for an unknown reason.
- [missingPushExtension](missingpushextension.md): An error code that indicates the app is missing a Location Push Service Extension.
- [missingPushServerEnvironment](missingpushserverenvironment.md): An error code that indicates the app is missing an Apple Push Notification service (APNs) environment entitlement.
- [missingEntitlement](missingentitlement.md): An error code that indicates the app is missing the entitlement it needs to use the location push service.
- [CLLocationPushServiceError.Code](code.md): Error codes the location manager returns if starting to monitor for location push notifications fails.
