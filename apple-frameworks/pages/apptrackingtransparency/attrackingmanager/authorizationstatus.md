> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apptrackingtransparency/attrackingmanager/authorizationstatus](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus)

# ATTrackingManager.AuthorizationStatus (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The status values for app tracking authorization.

## Declaration

```swift
enum AuthorizationStatus
```

<a id="overview"></a>

## Overview

After a device receives an authorization request to approve access to app-related data that can be used for tracking the user or the device, the returned value is either:

- [ATTrackingManager.AuthorizationStatus.authorized](authorizationstatus/authorized.md), or
- [ATTrackingManager.AuthorizationStatus.denied](authorizationstatus/denied.md).

Before a device receives an authorization request to approve access to app-related data that can be used for tracking the user or the device, the returned value is: [ATTrackingManager.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md).

If authorization to use app tracking data is restricted, the value is: [ATTrackingManager.AuthorizationStatus.restricted](authorizationstatus/restricted.md).

## Topics

### Cases

- [ATTrackingManager.AuthorizationStatus.authorized](authorizationstatus/authorized.md): The value that returns if the user authorizes access to app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.denied](authorizationstatus/denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md): The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.restricted](authorizationstatus/restricted.md): The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.

### Initializers

- [init(rawValue:)](authorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Tracking Authorization Status

- [trackingAuthorizationStatus](trackingauthorizationstatus.md): The authorization status that is current for the calling application.

# ATTrackingManagerAuthorizationStatus (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The status values for app tracking authorization.

## Declaration

```objectivec
enum ATTrackingManagerAuthorizationStatus : NSUInteger;
```

<a id="overview"></a>

## Overview

After a device receives an authorization request to approve access to app-related data that can be used for tracking the user or the device, the returned value is either:

- [ATTrackingManagerAuthorizationStatusAuthorized](authorizationstatus/authorized.md), or
- [ATTrackingManagerAuthorizationStatusDenied](authorizationstatus/denied.md).

Before a device receives an authorization request to approve access to app-related data that can be used for tracking the user or the device, the returned value is: [ATTrackingManagerAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md).

If authorization to use app tracking data is restricted, the value is: [ATTrackingManagerAuthorizationStatusRestricted](authorizationstatus/restricted.md).

## Topics

### Cases

- [ATTrackingManagerAuthorizationStatusAuthorized](authorizationstatus/authorized.md): The value that returns if the user authorizes access to app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusDenied](authorizationstatus/denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md): The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusRestricted](authorizationstatus/restricted.md): The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.

## See Also

### Determining Tracking Authorization Status

- [trackingAuthorizationStatus](trackingauthorizationstatus.md): The authorization status that is current for the calling application.
