> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter)

# UNUserNotificationCenter (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The central object for managing notification-related activities for your app or app extension.

## Declaration

```swift
class UNUserNotificationCenter
```

## Mentioned In

- [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md)
- [Asking permission to use notifications](asking-permission-to-use-notifications.md)
- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md)

<a id="overview"></a>

## Overview

Use the shared [UNUserNotificationCenter](unusernotificationcenter.md) object to manage all notification-related behaviors in your app or app extension. Specifically, use this object to do the following:

- Request authorization to interact with the user through alerts, sounds, and icon badges. See [Asking permission to use notifications](asking-permission-to-use-notifications.md).
- Declare the notification types that your app supports and the custom actions the user may perform when the system delivers those notifications. See [Declaring your actionable notification types](declaring-your-actionable-notification-types.md).
- Schedule the delivery of notifications from your app. See [Scheduling a notification locally from your app](scheduling-a-notification-locally-from-your-app.md).
- Process the payloads from remote notifications the system delivers by Apple Push Notification service (APNs). See [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md).
- Manage the already delivered notifications the system displays in Notification Center. See Managing Delivered Notifications.
- Handle user-selected actions associated with your custom notification types. See [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md).
- Get the notification-related settings for your app. See Managing Settings and Authorization.

To handle incoming notifications and notification-related actions, create an object that adopts the [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md) protocol and assign it to the [delegate](unusernotificationcenter/delegate.md) property. Always assign an object to the [delegate](unusernotificationcenter/delegate.md) property before performing any tasks that might interact with that delegate.

You may use the shared user notification center object simultaneously from any of your app’s threads. The object processes requests serially in the order that the system initiates them.

## Topics

### Managing the notification center

- [current()](unusernotificationcenter/current%28%29.md): Returns your app’s notification center.
- [getNotificationSettings(completionHandler:)](unusernotificationcenter/getnotificationsettings%28completionhandler_%29.md): Retrieves the authorization and feature-related settings for your app.
- [setBadgeCount(\_:withCompletionHandler:)](unusernotificationcenter/setbadgecount%28__withcompletionhandler_%29.md): Updates the badge count for your app’s icon.

### Requesting authorization

- [requestAuthorization(options:completionHandler:)](unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md): Requests a person’s authorization to allow local and remote notifications for your app.
- [UNAuthorizationOptions](unauthorizationoptions.md): Options that determine the authorized features of local and remote notifications.

### Processing received notifications

- [delegate](unusernotificationcenter/delegate.md): The notification center’s delegate.
- [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
- [supportsContentExtensions](unusernotificationcenter/supportscontentextensions.md): A Boolean value that indicates whether the device supports notification content extensions.

### Scheduling notifications

- [add(\_:withCompletionHandler:)](unusernotificationcenter/add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [getPendingNotificationRequests(completionHandler:)](unusernotificationcenter/getpendingnotificationrequests%28completionhandler_%29.md): Fetches all of your app’s local notifications that are pending delivery.
- [removePendingNotificationRequests(withIdentifiers:)](unusernotificationcenter/removependingnotificationrequests%28withidentifiers_%29.md): Removes your app’s local notifications that are pending and match the specified identifiers.
- [removeAllPendingNotificationRequests()](unusernotificationcenter/removeallpendingnotificationrequests%28%29.md): Removes all of your app’s pending local notifications.

### Removing delivered notifications

- [getDeliveredNotifications(completionHandler:)](unusernotificationcenter/getdeliverednotifications%28completionhandler_%29.md): Fetches all of your app’s delivered notifications that are still present in Notification Center.
- [removeDeliveredNotifications(withIdentifiers:)](unusernotificationcenter/removedeliverednotifications%28withidentifiers_%29.md): Removes your app’s notifications from Notification Center that match the specified identifiers.
- [removeAllDeliveredNotifications()](unusernotificationcenter/removealldeliverednotifications%28%29.md): Removes all of your app’s delivered notifications from Notification Center.

### Managing notification categories

- [setNotificationCategories(\_:)](unusernotificationcenter/setnotificationcategories%28__%29.md): Registers the notification categories that your app supports.
- [getNotificationCategories(completionHandler:)](unusernotificationcenter/getnotificationcategories%28completionhandler_%29.md): Fetches your app’s registered notification categories.

### Handling errors

- [UNError](unerror.md): An object that represents a notification error.
- [UNError.Code](unerror/code.md): Constants that identify notification errors.
- [UNErrorDomain](unerrordomain.md): The error domain for notifications.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Notification management

- [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
- [UNNotificationSettings](unnotificationsettings.md): The object for managing notification-related settings and the authorization status of your app.

# UNUserNotificationCenter (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The central object for managing notification-related activities for your app or app extension.

## Declaration

```objectivec
@interface UNUserNotificationCenter : NSObject
```

## Mentioned In

- [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md)
- [Asking permission to use notifications](asking-permission-to-use-notifications.md)
- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md)

<a id="overview"></a>

## Overview

Use the shared [UNUserNotificationCenter](unusernotificationcenter.md) object to manage all notification-related behaviors in your app or app extension. Specifically, use this object to do the following:

- Request authorization to interact with the user through alerts, sounds, and icon badges. See [Asking permission to use notifications](asking-permission-to-use-notifications.md).
- Declare the notification types that your app supports and the custom actions the user may perform when the system delivers those notifications. See [Declaring your actionable notification types](declaring-your-actionable-notification-types.md).
- Schedule the delivery of notifications from your app. See [Scheduling a notification locally from your app](scheduling-a-notification-locally-from-your-app.md).
- Process the payloads from remote notifications the system delivers by Apple Push Notification service (APNs). See [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md).
- Manage the already delivered notifications the system displays in Notification Center. See Managing Delivered Notifications.
- Handle user-selected actions associated with your custom notification types. See [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md).
- Get the notification-related settings for your app. See Managing Settings and Authorization.

To handle incoming notifications and notification-related actions, create an object that adopts the [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md) protocol and assign it to the [delegate](unusernotificationcenter/delegate.md) property. Always assign an object to the [delegate](unusernotificationcenter/delegate.md) property before performing any tasks that might interact with that delegate.

You may use the shared user notification center object simultaneously from any of your app’s threads. The object processes requests serially in the order that the system initiates them.

## Topics

### Managing the notification center

- [currentNotificationCenter](unusernotificationcenter/current%28%29.md): Returns your app’s notification center.
- [getNotificationSettingsWithCompletionHandler:](unusernotificationcenter/getnotificationsettings%28completionhandler_%29.md): Retrieves the authorization and feature-related settings for your app.
- [setBadgeCount:withCompletionHandler:](unusernotificationcenter/setbadgecount%28__withcompletionhandler_%29.md): Updates the badge count for your app’s icon.

### Requesting authorization

- [requestAuthorizationWithOptions:completionHandler:](unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md): Requests a person’s authorization to allow local and remote notifications for your app.
- [UNAuthorizationOptions](unauthorizationoptions.md): Options that determine the authorized features of local and remote notifications.

### Processing received notifications

- [delegate](unusernotificationcenter/delegate.md): The notification center’s delegate.
- [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
- [supportsContentExtensions](unusernotificationcenter/supportscontentextensions.md): A Boolean value that indicates whether the device supports notification content extensions.

### Scheduling notifications

- [addNotificationRequest:withCompletionHandler:](unusernotificationcenter/add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [getPendingNotificationRequestsWithCompletionHandler:](unusernotificationcenter/getpendingnotificationrequests%28completionhandler_%29.md): Fetches all of your app’s local notifications that are pending delivery.
- [removePendingNotificationRequestsWithIdentifiers:](unusernotificationcenter/removependingnotificationrequests%28withidentifiers_%29.md): Removes your app’s local notifications that are pending and match the specified identifiers.
- [removeAllPendingNotificationRequests](unusernotificationcenter/removeallpendingnotificationrequests%28%29.md): Removes all of your app’s pending local notifications.

### Removing delivered notifications

- [getDeliveredNotificationsWithCompletionHandler:](unusernotificationcenter/getdeliverednotifications%28completionhandler_%29.md): Fetches all of your app’s delivered notifications that are still present in Notification Center.
- [removeDeliveredNotificationsWithIdentifiers:](unusernotificationcenter/removedeliverednotifications%28withidentifiers_%29.md): Removes your app’s notifications from Notification Center that match the specified identifiers.
- [removeAllDeliveredNotifications](unusernotificationcenter/removealldeliverednotifications%28%29.md): Removes all of your app’s delivered notifications from Notification Center.

### Managing notification categories

- [setNotificationCategories:](unusernotificationcenter/setnotificationcategories%28__%29.md): Registers the notification categories that your app supports.
- [getNotificationCategoriesWithCompletionHandler:](unusernotificationcenter/getnotificationcategories%28completionhandler_%29.md): Fetches your app’s registered notification categories.

### Handling errors

- [UNErrorCode](unerror/code.md): Constants that identify notification errors.
- [UNErrorDomain](unerrordomain.md): The error domain for notifications.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Notification management

- [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
- [UNNotificationSettings](unnotificationsettings.md): The object for managing notification-related settings and the authorization status of your app.
