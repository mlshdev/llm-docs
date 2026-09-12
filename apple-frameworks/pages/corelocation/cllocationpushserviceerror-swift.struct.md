> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationpushserviceerror-swift.struct](https://developer.apple.com/documentation/corelocation/cllocationpushserviceerror-swift.struct)

# CLLocationPushServiceError

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+

Error codes the location manager returns if starting to monitor for location push notifications fails.

## Declaration

```swift
struct CLLocationPushServiceError
```

## Topics

### Getting the error code

- [unknown](cllocationpushserviceerror-swift.struct/unknown.md): An error code that indicates the app was unable to start the location push service for an unknown reason.
- [missingPushExtension](cllocationpushserviceerror-swift.struct/missingpushextension.md): An error code that indicates the app is missing a Location Push Service Extension.
- [missingPushServerEnvironment](cllocationpushserviceerror-swift.struct/missingpushserverenvironment.md): An error code that indicates the app is missing an Apple Push Notification service (APNs) environment entitlement.
- [missingEntitlement](cllocationpushserviceerror-swift.struct/missingentitlement.md): An error code that indicates the app is missing the entitlement it needs to use the location push service.
- [unsupportedPlatform](cllocationpushserviceerror-swift.struct/unsupportedplatform.md): An error code that indicates the location push service isn’t available on this platform.
- [CLLocationPushServiceError.Code](cllocationpushserviceerror-swift.struct/code.md): Error codes the location manager returns if starting to monitor for location push notifications fails.

### Type Properties

- [errorDomain](cllocationpushserviceerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Location push service extension

- [Location Push Service Extension](../bundleresources/entitlements/com.apple.developer.location.push.md): An entitlement to enable a location-sharing app to query someone’s location in response to a push notification.
- [CLLocationPushServiceExtension](cllocationpushserviceextension.md): The interface you adopt in the type that acts as the main entry point for a Location Push Service Extension.
- [CLLocationPushServiceErrorDomain](cllocationpushserviceerrordomain.md): The domain for Location Push Service Extension errors.
- [CLLocationPushServiceError.Code](cllocationpushserviceerror-swift.struct/code.md): Error codes the location manager returns if starting to monitor for location push notifications fails.
