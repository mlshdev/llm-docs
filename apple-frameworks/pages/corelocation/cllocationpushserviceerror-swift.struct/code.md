> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationpushserviceerror-swift.struct/code](https://developer.apple.com/documentation/corelocation/cllocationpushserviceerror-swift.struct/code)

# CLLocationPushServiceError.Code (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Error codes the location manager returns if starting to monitor for location push notifications fails.

## Declaration

```swift
enum Code
```

<a id="Overview"></a>

## Overview

These error codes are returned from [startMonitoringLocationPushes(completion:)](../cllocationmanager/startmonitoringlocationpushes%28completion_%29.md)

## Topics

### Getting the error code

- [CLLocationPushServiceError.Code.unknown](code/unknown.md): An error code that indicates the app was unable to start the location push service for an unknown reason.
- [CLLocationPushServiceError.Code.missingPushExtension](code/missingpushextension.md): An error code that indicates the app is missing a Location Push Service Extension.
- [CLLocationPushServiceError.Code.missingPushServerEnvironment](code/missingpushserverenvironment.md): An error code that indicates the app is missing an Apple Push Notification service (APNs) environment entitlement.
- [CLLocationPushServiceError.Code.missingEntitlement](code/missingentitlement.md): An error code that indicates the app is missing the entitlement it needs to use the location push service.
- [CLLocationPushServiceError.Code.unsupportedPlatform](code/unsupportedplatform.md): An error code that indicates the location push service isn’t available on this platform.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Location push service extension

- [Location Push Service Extension](../../bundleresources/entitlements/com.apple.developer.location.push.md): An entitlement to enable a location-sharing app to query someone’s location in response to a push notification.
- [CLLocationPushServiceExtension](../cllocationpushserviceextension.md): The interface you adopt in the type that acts as the main entry point for a Location Push Service Extension.
- [CLLocationPushServiceError](../cllocationpushserviceerror-swift.struct.md): Error codes the location manager returns if starting to monitor for location push notifications fails.
- [CLLocationPushServiceErrorDomain](../cllocationpushserviceerrordomain.md): The domain for Location Push Service Extension errors.

# CLLocationPushServiceError (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+

Error codes the location manager returns if starting to monitor for location push notifications fails.

## Declaration

```objectivec
enum CLLocationPushServiceError : NSInteger;
```

<a id="Overview"></a>

## Overview

These error codes are returned from [startMonitoringLocationPushesWithCompletion:](../cllocationmanager/startmonitoringlocationpushes%28completion_%29.md)

## Topics

### Getting the error code

- [CLLocationPushServiceErrorUnknown](code/unknown.md): An error code that indicates the app was unable to start the location push service for an unknown reason.
- [CLLocationPushServiceErrorMissingPushExtension](code/missingpushextension.md): An error code that indicates the app is missing a Location Push Service Extension.
- [CLLocationPushServiceErrorMissingPushServerEnvironment](code/missingpushserverenvironment.md): An error code that indicates the app is missing an Apple Push Notification service (APNs) environment entitlement.
- [CLLocationPushServiceErrorMissingEntitlement](code/missingentitlement.md): An error code that indicates the app is missing the entitlement it needs to use the location push service.
- [CLLocationPushServiceErrorUnsupportedPlatform](code/unsupportedplatform.md): An error code that indicates the location push service isn’t available on this platform.

## See Also

### Location push service extension

- [Location Push Service Extension](../../bundleresources/entitlements/com.apple.developer.location.push.md): An entitlement to enable a location-sharing app to query someone’s location in response to a push notification.
- [CLLocationPushServiceExtension](../cllocationpushserviceextension.md): The interface you adopt in the type that acts as the main entry point for a Location Push Service Extension.
- [CLLocationPushServiceErrorDomain](../cllocationpushserviceerrordomain.md): The domain for Location Push Service Extension errors.
