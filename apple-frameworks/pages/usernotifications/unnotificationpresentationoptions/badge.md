> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/unnotificationpresentationoptions/badge

# badge (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Apply the notification’s badge value to the app’s icon.

## Declaration

```swift
static var badge: UNNotificationPresentationOptions { get }
```

## See Also

### Constants

- [banner](banner.md): Present the notification as a banner.
- [list](list.md): Show the notification in Notification Center.
- [sound](sound.md): Play the sound associated with the notification.
- [alert](alert.md): Deprecated. Display the alert using the content provided by the notification.

# UNNotificationPresentationOptionBadge (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Apply the notification’s badge value to the app’s icon.

## Declaration

```objectivec
UNNotificationPresentationOptionBadge
```

## See Also

### Constants

- [UNNotificationPresentationOptionBanner](banner.md): Present the notification as a banner.
- [UNNotificationPresentationOptionList](list.md): Show the notification in Notification Center.
- [UNNotificationPresentationOptionSound](sound.md): Play the sound associated with the notification.
- [UNNotificationPresentationOptionAlert](alert.md): Deprecated. Display the alert using the content provided by the notification.
