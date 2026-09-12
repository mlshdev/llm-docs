> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification](https://developer.apple.com/documentation/uikit/uilocalnotification)

# UILocalNotification (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A notification that an app can schedule for presentation at a specific date and time.

> Use [UNNotificationRequest](../usernotifications/unnotificationrequest.md) instead.

## Declaration

```swift
@MainActor class UILocalNotification
```

<a id="overview"></a>

## Overview

The operating system is responsible for delivering local notifications at their scheduled times; the app does not have to be running for this to happen. Although local notifications are similar to remote notifications in that they are used for displaying alerts, playing sounds, and badging app icons, they are composed and delivered locally and do not require connection with remote servers.

Local notifications are primarily intended for apps with timer-based behaviors and simple calendar or to-do list apps. An app that is running in the background may also schedule a local notification to inform the user of an incoming message, chat, or update. An app can have only a limited number of scheduled notifications; the system keeps the soonest-firing 64 notifications (with automatically rescheduled notifications counting as a single notification) and discards the rest.

When you create a local notification, you must specify either a specific date or a geographic region as the trigger for delivering the notification. Date-based notifications are delivered at the day and time you specify, and allowances can be made for time zone changes as needed. Region-based notifications are delivered when the user enters or exits the specified region. In both cases, you can specify whether the notifications are one-time events or can be rescheduled and delivered again.

After creating a `UILocalNotification` object, schedule it using either the [scheduleLocalNotification(\_:)](uiapplication/schedulelocalnotification%28__%29.md) or [presentLocalNotificationNow(\_:)](uiapplication/presentlocalnotificationnow%28__%29.md) method of the [UIApplication](uiapplication.md) class. The [scheduleLocalNotification(\_:)](uiapplication/schedulelocalnotification%28__%29.md) method uses the fire date to schedule delivery; the [presentLocalNotificationNow(\_:)](uiapplication/presentlocalnotificationnow%28__%29.md) method presents the notification immediately, regardless of the value of `fireDate`. You can cancel one or more local notifications using the [cancelLocalNotification(\_:)](uiapplication/cancellocalnotification%28__%29.md) or [cancelAllLocalNotifications()](uiapplication/cancelalllocalnotifications%28%29.md) method of the [UIApplication](uiapplication.md) object.

When the system delivers a local notification, several things can happen, depending on the app state and the type of notification. If the app is not frontmost and visible, the system displays the alert message, badges the app, and plays a sound—whatever is specified in the notification. If the notification is an alert and the user taps the action button (or, if the device is locked, drags open the action slider), the app is woken up or launched. (If the user taps one of the custom actions you specify using the [category](uilocalnotification/category.md) property, the app is woken up or launched into the background.) In its [application(\_:didFinishLaunchingWithOptions:)](uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method, the app delegate can obtain the `UILocalNotification` object from the launch options dictionary using the [localNotification](uiapplication/launchoptionskey/localnotification.md) key. The delegate can inspect the properties of the notification and, if the notification includes custom data in its [userInfo](uilocalnotification/userinfo.md) dictionary, it can access that data and process it accordingly. On the other hand, if the local notification only badges the app icon, and the user in response launches the app, the [application(\_:didFinishLaunchingWithOptions:)](uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method is called, but no `UILocalNotification` object is included in the options dictionary. When the user selects a custom action, the app delegate’s [application(\_:handleActionWithIdentifier:for:completionHandler:)](uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) method is called to handle the action.

If the app is foremost and visible when the system delivers the notification, the app delegate’s [application(\_:didReceive:)](uiapplicationdelegate/application%28__didreceive_%29.md) is called to process the notification. Use the information in the provided `UILocalNotification` object to decide what action to take. The system does not display any alerts, badge the app’s icon, or play any sounds when the app is already frontmost.

An app is responsible for managing the badge number displayed on its icon. For example, if a text-messaging app processes all incoming messages after receiving a local notification, it should remove the icon badge by setting the [applicationIconBadgeNumber](uiapplication/applicationiconbadgenumber.md) property of the [UIApplication](uiapplication.md) object to 0.

## Topics

### Scheduling a local notification

- [fireDate](uilocalnotification/firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](uilocalnotification/timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](uilocalnotification/repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](uilocalnotification/repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](uilocalnotification/region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](uilocalnotification/regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

### Composing the alert

- [alertBody](uilocalnotification/alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](uilocalnotification/alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](uilocalnotification/alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](uilocalnotification/hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](uilocalnotification/alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](uilocalnotification/category.md): Deprecated. The name of a group of actions to display in the alert.

### Configuring other parts of the notification

- [applicationIconBadgeNumber](uilocalnotification/applicationiconbadgenumber.md): Deprecated. The number to display as the app’s icon badge.
- [soundName](uilocalnotification/soundname.md): Deprecated. The name of the file containing the sound to play when an alert is displayed.
- [userInfo](uilocalnotification/userinfo.md): Deprecated. A dictionary for passing custom information to the notified app.

### Constants

- [Notification sound](notification-sound.md): The default system sound for local notifications.

### Initializers

- [init()](uilocalnotification/init%28%29.md): Deprecated.
- [init(coder:)](uilocalnotification/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Deprecated classes

- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UILocalNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A notification that an app can schedule for presentation at a specific date and time.

> Use [UNNotificationRequest](../usernotifications/unnotificationrequest.md) instead.

## Declaration

```objectivec
@interface UILocalNotification : NSObject
```

<a id="overview"></a>

## Overview

The operating system is responsible for delivering local notifications at their scheduled times; the app does not have to be running for this to happen. Although local notifications are similar to remote notifications in that they are used for displaying alerts, playing sounds, and badging app icons, they are composed and delivered locally and do not require connection with remote servers.

Local notifications are primarily intended for apps with timer-based behaviors and simple calendar or to-do list apps. An app that is running in the background may also schedule a local notification to inform the user of an incoming message, chat, or update. An app can have only a limited number of scheduled notifications; the system keeps the soonest-firing 64 notifications (with automatically rescheduled notifications counting as a single notification) and discards the rest.

When you create a local notification, you must specify either a specific date or a geographic region as the trigger for delivering the notification. Date-based notifications are delivered at the day and time you specify, and allowances can be made for time zone changes as needed. Region-based notifications are delivered when the user enters or exits the specified region. In both cases, you can specify whether the notifications are one-time events or can be rescheduled and delivered again.

After creating a `UILocalNotification` object, schedule it using either the [scheduleLocalNotification:](uiapplication/schedulelocalnotification%28__%29.md) or [presentLocalNotificationNow:](uiapplication/presentlocalnotificationnow%28__%29.md) method of the [UIApplication](uiapplication.md) class. The [scheduleLocalNotification:](uiapplication/schedulelocalnotification%28__%29.md) method uses the fire date to schedule delivery; the [presentLocalNotificationNow:](uiapplication/presentlocalnotificationnow%28__%29.md) method presents the notification immediately, regardless of the value of `fireDate`. You can cancel one or more local notifications using the [cancelLocalNotification:](uiapplication/cancellocalnotification%28__%29.md) or [cancelAllLocalNotifications](uiapplication/cancelalllocalnotifications%28%29.md) method of the [UIApplication](uiapplication.md) object.

When the system delivers a local notification, several things can happen, depending on the app state and the type of notification. If the app is not frontmost and visible, the system displays the alert message, badges the app, and plays a sound—whatever is specified in the notification. If the notification is an alert and the user taps the action button (or, if the device is locked, drags open the action slider), the app is woken up or launched. (If the user taps one of the custom actions you specify using the [category](uilocalnotification/category.md) property, the app is woken up or launched into the background.) In its [application:didFinishLaunchingWithOptions:](uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method, the app delegate can obtain the `UILocalNotification` object from the launch options dictionary using the [UIApplicationLaunchOptionsLocalNotificationKey](uiapplication/launchoptionskey/localnotification.md) key. The delegate can inspect the properties of the notification and, if the notification includes custom data in its [userInfo](uilocalnotification/userinfo.md) dictionary, it can access that data and process it accordingly. On the other hand, if the local notification only badges the app icon, and the user in response launches the app, the [application:didFinishLaunchingWithOptions:](uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method is called, but no `UILocalNotification` object is included in the options dictionary. When the user selects a custom action, the app delegate’s [application:handleActionWithIdentifier:forLocalNotification:completionHandler:](uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) method is called to handle the action.

If the app is foremost and visible when the system delivers the notification, the app delegate’s [application:didReceiveLocalNotification:](uiapplicationdelegate/application%28__didreceive_%29.md) is called to process the notification. Use the information in the provided `UILocalNotification` object to decide what action to take. The system does not display any alerts, badge the app’s icon, or play any sounds when the app is already frontmost.

An app is responsible for managing the badge number displayed on its icon. For example, if a text-messaging app processes all incoming messages after receiving a local notification, it should remove the icon badge by setting the [applicationIconBadgeNumber](uiapplication/applicationiconbadgenumber.md) property of the [UIApplication](uiapplication.md) object to 0.

## Topics

### Scheduling a local notification

- [fireDate](uilocalnotification/firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](uilocalnotification/timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](uilocalnotification/repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](uilocalnotification/repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](uilocalnotification/region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](uilocalnotification/regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

### Composing the alert

- [alertBody](uilocalnotification/alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](uilocalnotification/alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](uilocalnotification/alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](uilocalnotification/hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](uilocalnotification/alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](uilocalnotification/category.md): Deprecated. The name of a group of actions to display in the alert.

### Configuring other parts of the notification

- [applicationIconBadgeNumber](uilocalnotification/applicationiconbadgenumber.md): Deprecated. The number to display as the app’s icon badge.
- [soundName](uilocalnotification/soundname.md): Deprecated. The name of the file containing the sound to play when an alert is displayed.
- [userInfo](uilocalnotification/userinfo.md): Deprecated. A dictionary for passing custom information to the notified app.

### Constants

- [Notification sound](notification-sound.md): The default system sound for local notifications.

### Initializers

- [init](uilocalnotification/init%28%29.md): Deprecated.
- [initWithCoder:](uilocalnotification/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Deprecated classes

- [UIAcceleration](uiacceleration.md): Deprecated. An acceleration event that represents immediate, three-dimensional acceleration data.
- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
