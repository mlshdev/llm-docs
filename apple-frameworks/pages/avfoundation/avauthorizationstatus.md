> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avauthorizationstatus](https://developer.apple.com/documentation/avfoundation/avauthorizationstatus)

# AVAuthorizationStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

Constants that indicate the status of an app’s authorization to capture media.

## Declaration

```swift
enum AVAuthorizationStatus
```

<a id="overview"></a>

## Overview

Call [authorizationStatus(for:)](avcapturedevice/authorizationstatus%28for_%29.md) to determine the app’s current permission to capture media.

## Topics

### Status values

- [AVAuthorizationStatus.notDetermined](avauthorizationstatus/notdetermined.md): A status that indicates the user hasn’t yet granted or denied authorization.
- [AVAuthorizationStatus.restricted](avauthorizationstatus/restricted.md): A status that indicates the app isn’t permitted to use media capture devices.
- [AVAuthorizationStatus.denied](avauthorizationstatus/denied.md): A status that indicates the user has explicitly denied an app permission to capture media.
- [AVAuthorizationStatus.authorized](avauthorizationstatus/authorized.md): A status that indicates the user has explicitly granted an app permission to capture media.

### Initializers

- [init(rawValue:)](avauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorizing device access

- [requestAccess(for:completionHandler:)](avcapturedevice/requestaccess%28for_completionhandler_%29.md): Requests the user’s permission to allow the app to capture media of a particular type.
- [authorizationStatus(for:)](avcapturedevice/authorizationstatus%28for_%29.md): Returns an authorization status that indicates whether the user grants the app permission to capture media of a particular type.

# AVAuthorizationStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

Constants that indicate the status of an app’s authorization to capture media.

## Declaration

```objectivec
enum AVAuthorizationStatus : NSInteger;
```

<a id="overview"></a>

## Overview

Call [authorizationStatusForMediaType:](avcapturedevice/authorizationstatus%28for_%29.md) to determine the app’s current permission to capture media.

## Topics

### Status values

- [AVAuthorizationStatusNotDetermined](avauthorizationstatus/notdetermined.md): A status that indicates the user hasn’t yet granted or denied authorization.
- [AVAuthorizationStatusRestricted](avauthorizationstatus/restricted.md): A status that indicates the app isn’t permitted to use media capture devices.
- [AVAuthorizationStatusDenied](avauthorizationstatus/denied.md): A status that indicates the user has explicitly denied an app permission to capture media.
- [AVAuthorizationStatusAuthorized](avauthorizationstatus/authorized.md): A status that indicates the user has explicitly granted an app permission to capture media.

## See Also

### Authorizing device access

- [requestAccessForMediaType:completionHandler:](avcapturedevice/requestaccess%28for_completionhandler_%29.md): Requests the user’s permission to allow the app to capture media of a particular type.
- [authorizationStatusForMediaType:](avcapturedevice/authorizationstatus%28for_%29.md): Returns an authorization status that indicates whether the user grants the app permission to capture media of a particular type.
