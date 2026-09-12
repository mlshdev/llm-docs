> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apptrackingtransparency/attrackingmanager](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager)

# ATTrackingManager (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that provides a tracking authorization request and the tracking authorization status of the app.

## Declaration

```swift
class ATTrackingManager
```

## Topics

### Requesting Authorization

- [requestTrackingAuthorization(completionHandler:)](attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md): The request for user authorization to access app-related data.

### Determining Tracking Authorization Status

- [trackingAuthorizationStatus](attrackingmanager/trackingauthorizationstatus.md): The authorization status that is current for the calling application.
- [ATTrackingManager.AuthorizationStatus](attrackingmanager/authorizationstatus.md): The status values for app tracking authorization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# ATTrackingManager (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that provides a tracking authorization request and the tracking authorization status of the app.

## Declaration

```objectivec
@interface ATTrackingManager : NSObject
```

## Topics

### Requesting Authorization

- [requestTrackingAuthorizationWithCompletionHandler:](attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md): The request for user authorization to access app-related data.

### Determining Tracking Authorization Status

- [trackingAuthorizationStatus](attrackingmanager/trackingauthorizationstatus.md): The authorization status that is current for the calling application.
- [ATTrackingManagerAuthorizationStatus](attrackingmanager/authorizationstatus.md): The status values for app tracking authorization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
