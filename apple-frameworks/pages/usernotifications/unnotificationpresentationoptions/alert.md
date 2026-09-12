> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationpresentationoptions/alert](https://developer.apple.com/documentation/usernotifications/unnotificationpresentationoptions/alert)

# alert (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.14+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Display the alert using the content provided by the notification.

> Use [list](list.md) and [banner](banner.md) instead.

## Declaration

```swift
static var alert: UNNotificationPresentationOptions { get }
```

## See Also

### Constants

- [badge](badge.md): Apply the notification’s badge value to the app’s icon.
- [banner](banner.md): Present the notification as a banner.
- [list](list.md): Show the notification in Notification Center.
- [sound](sound.md): Play the sound associated with the notification.

# UNNotificationPresentationOptionAlert (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.14+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Display the alert using the content provided by the notification.

> Use [UNNotificationPresentationOptionList](list.md) and [UNNotificationPresentationOptionBanner](banner.md) instead.

## Declaration

```objectivec
UNNotificationPresentationOptionAlert
```

## See Also

### Constants

- [UNNotificationPresentationOptionBadge](badge.md): Apply the notification’s badge value to the app’s icon.
- [UNNotificationPresentationOptionBanner](banner.md): Present the notification as a banner.
- [UNNotificationPresentationOptionList](list.md): Show the notification in Notification Center.
- [UNNotificationPresentationOptionSound](sound.md): Play the sound associated with the notification.
