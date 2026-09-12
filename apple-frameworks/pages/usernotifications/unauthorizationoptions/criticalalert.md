> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unauthorizationoptions/criticalalert](https://developer.apple.com/documentation/usernotifications/unauthorizationoptions/criticalalert)

# criticalAlert (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The ability to play sounds for critical alerts.

## Declaration

```swift
static var criticalAlert: UNAuthorizationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Critical alerts ignore the mute switch and Do Not Disturb; the system plays a critical alert’s sound regardless of the device’s mute or Do Not Disturb settings. You can specify a custom sound and volume.

Critical alerts require a special entitlement issued by Apple.

## See Also

### Options

- [badge](badge.md): The ability to update the app’s badge.
- [sound](sound.md): The ability to play sounds.
- [alert](alert.md): The ability to display alerts.
- [carPlay](carplay.md): The ability to display notifications in a CarPlay environment.
- [providesAppNotificationSettings](providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.
- [provisional](provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.

# UNAuthorizationOptionCriticalAlert (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The ability to play sounds for critical alerts.

## Declaration

```objectivec
UNAuthorizationOptionCriticalAlert
```

<a id="Discussion"></a>

## Discussion

Critical alerts ignore the mute switch and Do Not Disturb; the system plays a critical alert’s sound regardless of the device’s mute or Do Not Disturb settings. You can specify a custom sound and volume.

Critical alerts require a special entitlement issued by Apple.

## See Also

### Options

- [UNAuthorizationOptionBadge](badge.md): The ability to update the app’s badge.
- [UNAuthorizationOptionSound](sound.md): The ability to play sounds.
- [UNAuthorizationOptionAlert](alert.md): The ability to display alerts.
- [UNAuthorizationOptionCarPlay](carplay.md): The ability to display notifications in a CarPlay environment.
- [UNAuthorizationOptionProvidesAppNotificationSettings](providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.
- [UNAuthorizationOptionProvisional](provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.
