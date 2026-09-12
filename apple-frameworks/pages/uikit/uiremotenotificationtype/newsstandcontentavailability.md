> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiremotenotificationtype/newsstandcontentavailability](https://developer.apple.com/documentation/uikit/uiremotenotificationtype/newsstandcontentavailability)

# newsstandContentAvailability (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app accepts notifications that start the downloading of issue assets for Newsstand apps.

> Use [requestAuthorization(options:completionHandler:)](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) and [setNotificationCategories(\_:)](../../usernotifications/unusernotificationcenter/setnotificationcategories%28__%29.md) instead.

## Declaration

```swift
static var newsstandContentAvailability: UIRemoteNotificationType { get }
```

## See Also

### Constants

- [badge](badge.md): Deprecated. The app accepts notifications that badge the app icon.
- [sound](sound.md): Deprecated. The app accepts alert sounds as notifications.
- [alert](alert.md): Deprecated. The app accepts alert messages as notifications.

# UIRemoteNotificationTypeNewsstandContentAvailability (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app accepts notifications that start the downloading of issue assets for Newsstand apps.

> Use [requestAuthorizationWithOptions:completionHandler:](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) and [setNotificationCategories:](../../usernotifications/unusernotificationcenter/setnotificationcategories%28__%29.md) instead.

## Declaration

```objectivec
UIRemoteNotificationTypeNewsstandContentAvailability
```

## See Also

### Constants

- [UIRemoteNotificationTypeNone](uiremotenotificationtypenone.md): Deprecated. The app accepts no notifications.
- [UIRemoteNotificationTypeBadge](badge.md): Deprecated. The app accepts notifications that badge the app icon.
- [UIRemoteNotificationTypeSound](sound.md): Deprecated. The app accepts alert sounds as notifications.
- [UIRemoteNotificationTypeAlert](alert.md): Deprecated. The app accepts alert messages as notifications.
