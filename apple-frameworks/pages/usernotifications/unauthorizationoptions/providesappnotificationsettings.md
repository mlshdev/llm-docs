> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unauthorizationoptions/providesappnotificationsettings](https://developer.apple.com/documentation/usernotifications/unauthorizationoptions/providesappnotificationsettings)

# providesAppNotificationSettings (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An option indicating the system should display a button for in-app notification settings.

## Declaration

```swift
static var providesAppNotificationSettings: UNAuthorizationOptions { get }
```

## See Also

### Options

- [badge](badge.md): The ability to update the app’s badge.
- [sound](sound.md): The ability to play sounds.
- [alert](alert.md): The ability to display alerts.
- [carPlay](carplay.md): The ability to display notifications in a CarPlay environment.
- [criticalAlert](criticalalert.md): The ability to play sounds for critical alerts.
- [provisional](provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.

# UNAuthorizationOptionProvidesAppNotificationSettings (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An option indicating the system should display a button for in-app notification settings.

## Declaration

```objectivec
UNAuthorizationOptionProvidesAppNotificationSettings
```

## See Also

### Options

- [UNAuthorizationOptionBadge](badge.md): The ability to update the app’s badge.
- [UNAuthorizationOptionSound](sound.md): The ability to play sounds.
- [UNAuthorizationOptionAlert](alert.md): The ability to display alerts.
- [UNAuthorizationOptionCarPlay](carplay.md): The ability to display notifications in a CarPlay environment.
- [UNAuthorizationOptionCriticalAlert](criticalalert.md): The ability to play sounds for critical alerts.
- [UNAuthorizationOptionProvisional](provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.
