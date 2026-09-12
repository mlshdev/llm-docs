> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unauthorizationoptions/provisional](https://developer.apple.com/documentation/usernotifications/unauthorizationoptions/provisional)

# provisional (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The ability to post noninterrupting notifications provisionally to the Notification Center.

## Declaration

```swift
static var provisional: UNAuthorizationOptions { get }
```

## Mentioned In

- [Asking permission to use notifications](../asking-permission-to-use-notifications.md)

## See Also

### Options

- [badge](badge.md): The ability to update the app’s badge.
- [sound](sound.md): The ability to play sounds.
- [alert](alert.md): The ability to display alerts.
- [carPlay](carplay.md): The ability to display notifications in a CarPlay environment.
- [criticalAlert](criticalalert.md): The ability to play sounds for critical alerts.
- [providesAppNotificationSettings](providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.

# UNAuthorizationOptionProvisional (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The ability to post noninterrupting notifications provisionally to the Notification Center.

## Declaration

```objectivec
UNAuthorizationOptionProvisional
```

## Mentioned In

- [Asking permission to use notifications](../asking-permission-to-use-notifications.md)

## See Also

### Options

- [UNAuthorizationOptionBadge](badge.md): The ability to update the app’s badge.
- [UNAuthorizationOptionSound](sound.md): The ability to play sounds.
- [UNAuthorizationOptionAlert](alert.md): The ability to display alerts.
- [UNAuthorizationOptionCarPlay](carplay.md): The ability to display notifications in a CarPlay environment.
- [UNAuthorizationOptionCriticalAlert](criticalalert.md): The ability to play sounds for critical alerts.
- [UNAuthorizationOptionProvidesAppNotificationSettings](providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.
