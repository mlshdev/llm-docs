> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus

# ATTrackingManager.AuthorizationStatus (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A type that represents the tracking-authorization status of an app.

## Declaration

```swift
enum AuthorizationStatus
```

<a id="overview"></a>

## Overview

[trackingAuthorizationStatus](trackingauthorizationstatus.md) returns this type, and [requestTrackingAuthorization(completionHandler:)](requesttrackingauthorization%28completionhandler_%29.md) passes an instance of this type to your completion handler when a person answers the system alert.

## Topics

### Determining the status

- [ATTrackingManager.AuthorizationStatus.authorized](authorizationstatus/authorized.md): A value that indicates someone grants your app permission to access data your app can use to track a person or device.
- [ATTrackingManager.AuthorizationStatus.denied](authorizationstatus/denied.md): A value that indicates someone denies your app permission to access data your app can use to track a person or device.
- [ATTrackingManager.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md): A value that indicates the person hasn’t responded to a tracking authorization request.
- [ATTrackingManager.AuthorizationStatus.restricted](authorizationstatus/restricted.md): A value that indicates the system restricts tracking authorization.

### Creating a status

- [init(rawValue:)](authorizationstatus/init%28rawvalue_%29.md): Initializes an authorization status.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization status and results

- [trackingAuthorizationStatus](trackingauthorizationstatus.md): A value that indicates the status of the app’s tracking authorization.

# ATTrackingManagerAuthorizationStatus (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A type that represents the tracking-authorization status of an app.

## Declaration

```objectivec
enum ATTrackingManagerAuthorizationStatus : NSUInteger;
```

<a id="overview"></a>

## Overview

[trackingAuthorizationStatus](trackingauthorizationstatus.md) returns this type, and [requestTrackingAuthorizationWithCompletionHandler:](requesttrackingauthorization%28completionhandler_%29.md) passes an instance of this type to your completion handler when a person answers the system alert.

## Topics

### Determining the status

- [ATTrackingManagerAuthorizationStatusAuthorized](authorizationstatus/authorized.md): A value that indicates someone grants your app permission to access data your app can use to track a person or device.
- [ATTrackingManagerAuthorizationStatusDenied](authorizationstatus/denied.md): A value that indicates someone denies your app permission to access data your app can use to track a person or device.
- [ATTrackingManagerAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md): A value that indicates the person hasn’t responded to a tracking authorization request.
- [ATTrackingManagerAuthorizationStatusRestricted](authorizationstatus/restricted.md): A value that indicates the system restricts tracking authorization.

## See Also

### Authorization status and results

- [trackingAuthorizationStatus](trackingauthorizationstatus.md): A value that indicates the status of the app’s tracking authorization.
