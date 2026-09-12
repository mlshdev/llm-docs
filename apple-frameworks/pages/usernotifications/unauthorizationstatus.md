> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unauthorizationstatus](https://developer.apple.com/documentation/usernotifications/unauthorizationstatus)

# UNAuthorizationStatus (Swift)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating whether the app is allowed to schedule notifications.

## Declaration

```swift
enum UNAuthorizationStatus
```

## Topics

### Status

- [UNAuthorizationStatus.notDetermined](unauthorizationstatus/notdetermined.md): The user hasn’t yet made a choice about whether the app is allowed to schedule notifications.
- [UNAuthorizationStatus.denied](unauthorizationstatus/denied.md): The app isn’t authorized to schedule or receive notifications.
- [UNAuthorizationStatus.authorized](unauthorizationstatus/authorized.md): The app is authorized to schedule or receive notifications.
- [UNAuthorizationStatus.provisional](unauthorizationstatus/provisional.md): The application is provisionally authorized to post noninterruptive user notifications.
- [UNAuthorizationStatus.ephemeral](unauthorizationstatus/ephemeral.md): The app is authorized to schedule or receive notifications for a limited amount of time.

### Initializers

- [init(rawValue:)](unauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Authorization Status

- [authorizationStatus](unnotificationsettings/authorizationstatus.md): The app’s ability to schedule and receive local and remote notifications.

# UNAuthorizationStatus (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating whether the app is allowed to schedule notifications.

## Declaration

```objectivec
enum UNAuthorizationStatus : NSInteger;
```

## Topics

### Status

- [UNAuthorizationStatusNotDetermined](unauthorizationstatus/notdetermined.md): The user hasn’t yet made a choice about whether the app is allowed to schedule notifications.
- [UNAuthorizationStatusDenied](unauthorizationstatus/denied.md): The app isn’t authorized to schedule or receive notifications.
- [UNAuthorizationStatusAuthorized](unauthorizationstatus/authorized.md): The app is authorized to schedule or receive notifications.
- [UNAuthorizationStatusProvisional](unauthorizationstatus/provisional.md): The application is provisionally authorized to post noninterruptive user notifications.
- [UNAuthorizationStatusEphemeral](unauthorizationstatus/ephemeral.md): The app is authorized to schedule or receive notifications for a limited amount of time.

## See Also

### Getting the Authorization Status

- [authorizationStatus](unnotificationsettings/authorizationstatus.md): The app’s ability to schedule and receive local and remote notifications.
