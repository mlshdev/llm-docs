> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unauthorizationstatus/ephemeral](https://developer.apple.com/documentation/usernotifications/unauthorizationstatus/ephemeral)

# UNAuthorizationStatus.ephemeral (Swift)

**Framework:** User Notifications  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The app is authorized to schedule or receive notifications for a limited amount of time.

## Declaration

```swift
case ephemeral
```

<a id="Discussion"></a>

## Discussion

An App Clip may have the ability to schedule or receive notifications for a limited amount of time. For more information, see [Enabling notifications in App Clips](https://developer.apple.com/documentation/appclip/enabling-notifications-in-app-clips).

## See Also

### Status

- [UNAuthorizationStatus.notDetermined](notdetermined.md): The user hasn’t yet made a choice about whether the app is allowed to schedule notifications.
- [UNAuthorizationStatus.denied](denied.md): The app isn’t authorized to schedule or receive notifications.
- [UNAuthorizationStatus.authorized](authorized.md): The app is authorized to schedule or receive notifications.
- [UNAuthorizationStatus.provisional](provisional.md): The application is provisionally authorized to post noninterruptive user notifications.

# UNAuthorizationStatusEphemeral (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The app is authorized to schedule or receive notifications for a limited amount of time.

## Declaration

```objectivec
UNAuthorizationStatusEphemeral
```

<a id="Discussion"></a>

## Discussion

An App Clip may have the ability to schedule or receive notifications for a limited amount of time. For more information, see [Enabling notifications in App Clips](https://developer.apple.com/documentation/appclip/enabling-notifications-in-app-clips).

## See Also

### Status

- [UNAuthorizationStatusNotDetermined](notdetermined.md): The user hasn’t yet made a choice about whether the app is allowed to schedule notifications.
- [UNAuthorizationStatusDenied](denied.md): The app isn’t authorized to schedule or receive notifications.
- [UNAuthorizationStatusAuthorized](authorized.md): The app is authorized to schedule or receive notifications.
- [UNAuthorizationStatusProvisional](provisional.md): The application is provisionally authorized to post noninterruptive user notifications.
