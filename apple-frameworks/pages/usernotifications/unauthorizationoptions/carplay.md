> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unauthorizationoptions/carplay](https://developer.apple.com/documentation/usernotifications/unauthorizationoptions/carplay)

# carPlay (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The ability to display notifications in a CarPlay environment.

## Declaration

```swift
static var carPlay: UNAuthorizationOptions { get }
```

## See Also

### Options

- [badge](badge.md): The ability to update the app’s badge.
- [sound](sound.md): The ability to play sounds.
- [alert](alert.md): The ability to display alerts.
- [criticalAlert](criticalalert.md): The ability to play sounds for critical alerts.
- [providesAppNotificationSettings](providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.
- [provisional](provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.

# UNAuthorizationOptionCarPlay (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The ability to display notifications in a CarPlay environment.

## Declaration

```objectivec
UNAuthorizationOptionCarPlay
```

## See Also

### Options

- [UNAuthorizationOptionBadge](badge.md): The ability to update the app’s badge.
- [UNAuthorizationOptionSound](sound.md): The ability to play sounds.
- [UNAuthorizationOptionAlert](alert.md): The ability to display alerts.
- [UNAuthorizationOptionCriticalAlert](criticalalert.md): The ability to play sounds for critical alerts.
- [UNAuthorizationOptionProvidesAppNotificationSettings](providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.
- [UNAuthorizationOptionProvisional](provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.
