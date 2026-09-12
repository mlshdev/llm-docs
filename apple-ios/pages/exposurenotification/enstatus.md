> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enstatus](https://developer.apple.com/documentation/exposurenotification/enstatus)

# ENStatus (Swift)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A set of cases that represents the overall status of exposure notification on the system.

> No longer supported.

## Declaration

```swift
enum ENStatus
```

<a id="overview"></a>

## Overview

> **Important**

>  This enumeration is available in iOS 12.5, and in iOS 13.5 and later.

## Topics

### States

- [ENStatus.active](enstatus/active.md): Deprecated. Notification is active.
- [ENStatus.bluetoothOff](enstatus/bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENStatus.disabled](enstatus/disabled.md): Deprecated. Notification is disabled.
- [ENStatus.restricted](enstatus/restricted.md): Deprecated. Notification is not active due to system restrictions, such as parental controls.
- [ENStatus.unknown](enstatus/unknown.md): Deprecated. Notification is unknown.
- [ENStatus.paused](enstatus/paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatus.unauthorized](enstatus/unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.

### Initializers

- [init(rawValue:)](enstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Status

- [ENAuthorizationStatus](enauthorizationstatus.md): Deprecated. A set of cases that indicates the authorization status for the app.

# ENStatus (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A set of cases that represents the overall status of exposure notification on the system.

> No longer supported.

## Declaration

```objectivec
enum ENStatus : NSInteger;
```

<a id="overview"></a>

## Overview

> **Important**

>  This enumeration is available in iOS 12.5, and in iOS 13.5 and later.

## Topics

### States

- [ENStatusActive](enstatus/active.md): Deprecated. Notification is active.
- [ENStatusBluetoothOff](enstatus/bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENStatusDisabled](enstatus/disabled.md): Deprecated. Notification is disabled.
- [ENStatusRestricted](enstatus/restricted.md): Deprecated. Notification is not active due to system restrictions, such as parental controls.
- [ENStatusUnknown](enstatus/unknown.md): Deprecated. Notification is unknown.
- [ENStatusPaused](enstatus/paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatusUnauthorized](enstatus/unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.

## See Also

### Status

- [ENAuthorizationStatus](enauthorizationstatus.md): Deprecated. A set of cases that indicates the authorization status for the app.
