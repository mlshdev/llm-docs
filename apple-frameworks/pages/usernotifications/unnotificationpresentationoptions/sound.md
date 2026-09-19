> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/unnotificationpresentationoptions/sound

# sound (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Play the sound associated with the notification.

## Declaration

```swift
static var sound: UNNotificationPresentationOptions { get }
```

## Mentioned In

- [Handling notifications and notification-related actions](../handling-notifications-and-notification-related-actions.md)

## See Also

### Constants

- [badge](badge.md): Apply the notification’s badge value to the app’s icon.
- [banner](banner.md): Present the notification as a banner.
- [list](list.md): Show the notification in Notification Center.
- [alert](alert.md): Deprecated. Display the alert using the content provided by the notification.

# UNNotificationPresentationOptionSound (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Play the sound associated with the notification.

## Declaration

```objectivec
UNNotificationPresentationOptionSound
```

## Mentioned In

- [Handling notifications and notification-related actions](../handling-notifications-and-notification-related-actions.md)

## See Also

### Constants

- [UNNotificationPresentationOptionBadge](badge.md): Apply the notification’s badge value to the app’s icon.
- [UNNotificationPresentationOptionBanner](banner.md): Present the notification as a banner.
- [UNNotificationPresentationOptionList](list.md): Show the notification in Notification Center.
- [UNNotificationPresentationOptionAlert](alert.md): Deprecated. Display the alert using the content provided by the notification.
