> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enauthorizationstatus](https://developer.apple.com/documentation/exposurenotification/enauthorizationstatus)

# ENAuthorizationStatus (Swift)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A set of cases that indicates the authorization status for the app.

> No longer supported.

## Declaration

```swift
enum ENAuthorizationStatus
```

<a id="overview"></a>

## Overview

> **Important**

>  This enumeration is available in iOS 12.5, and in iOS 13.5 and later.

## Topics

### Authorization States

- [ENAuthorizationStatus.authorized](enauthorizationstatus/authorized.md): Deprecated. Authorization is granted.
- [ENAuthorizationStatus.notAuthorized](enauthorizationstatus/notauthorized.md): Deprecated. Authorization is denied.
- [ENAuthorizationStatus.restricted](enauthorizationstatus/restricted.md): Deprecated. Authorization is restricted.
- [ENAuthorizationStatus.unknown](enauthorizationstatus/unknown.md): Deprecated. Authorization is not determined.

### Initializers

- [init(rawValue:)](enauthorizationstatus/init%28rawvalue_%29.md): Deprecated.

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

- [ENStatus](enstatus.md): Deprecated. A set of cases that represents the overall status of exposure notification on the system.

# ENAuthorizationStatus (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A set of cases that indicates the authorization status for the app.

> No longer supported.

## Declaration

```objectivec
enum ENAuthorizationStatus : NSInteger;
```

<a id="overview"></a>

## Overview

> **Important**

>  This enumeration is available in iOS 12.5, and in iOS 13.5 and later.

## Topics

### Authorization States

- [ENAuthorizationStatusAuthorized](enauthorizationstatus/authorized.md): Deprecated. Authorization is granted.
- [ENAuthorizationStatusNotAuthorized](enauthorizationstatus/notauthorized.md): Deprecated. Authorization is denied.
- [ENAuthorizationStatusRestricted](enauthorizationstatus/restricted.md): Deprecated. Authorization is restricted.
- [ENAuthorizationStatusUnknown](enauthorizationstatus/unknown.md): Deprecated. Authorization is not determined.

## See Also

### Status

- [ENStatus](enstatus.md): Deprecated. A set of cases that represents the overall status of exposure notification on the system.
