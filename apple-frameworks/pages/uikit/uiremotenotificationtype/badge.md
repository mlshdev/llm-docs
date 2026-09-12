> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiremotenotificationtype/badge](https://developer.apple.com/documentation/uikit/uiremotenotificationtype/badge)

# badge (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app accepts notifications that badge the app icon.

> Use [requestAuthorization(options:completionHandler:)](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) and [setNotificationCategories(\_:)](../../usernotifications/unusernotificationcenter/setnotificationcategories%28__%29.md) instead.

## Declaration

```swift
static var badge: UIRemoteNotificationType { get }
```

## See Also

### Constants

- [sound](sound.md): Deprecated. The app accepts alert sounds as notifications.
- [alert](alert.md): Deprecated. The app accepts alert messages as notifications.
- [newsstandContentAvailability](newsstandcontentavailability.md): Deprecated. The app accepts notifications that start the downloading of issue assets for Newsstand apps.

# UIRemoteNotificationTypeBadge (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app accepts notifications that badge the app icon.

> Use [requestAuthorizationWithOptions:completionHandler:](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) and [setNotificationCategories:](../../usernotifications/unusernotificationcenter/setnotificationcategories%28__%29.md) instead.

## Declaration

```objectivec
UIRemoteNotificationTypeBadge
```

## See Also

### Constants

- [UIRemoteNotificationTypeNone](uiremotenotificationtypenone.md): Deprecated. The app accepts no notifications.
- [UIRemoteNotificationTypeSound](sound.md): Deprecated. The app accepts alert sounds as notifications.
- [UIRemoteNotificationTypeAlert](alert.md): Deprecated. The app accepts alert messages as notifications.
- [UIRemoteNotificationTypeNewsstandContentAvailability](newsstandcontentavailability.md): Deprecated. The app accepts notifications that start the downloading of issue assets for Newsstand apps.
