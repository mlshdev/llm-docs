> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationsettings](https://developer.apple.com/documentation/uikit/uiusernotificationsettings)

# UIUserNotificationSettings (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The types of notifications that can be displayed to the user by your app.

> Use [UNNotificationSettings](../usernotifications/unnotificationsettings.md) instead.

## Declaration

```swift
@MainActor class UIUserNotificationSettings
```

<a id="overview"></a>

## Overview

Apps that use visible or audible alerts in conjunction with a local or push notification must register the types of alerts they employ. UIKit correlates the information you provide with the user’s preferences to determine what types of alerts your app is allowed to employ.

Use this class to encapsulate your initial registration request and to view the request results. After creating an instance of this class and specifying your preferred settings, call the [registerUserNotificationSettings(\_:)](uiapplication/registerusernotificationsettings%28__%29.md) method of the [UIApplication](uiapplication.md) class to register those settings. After checking your request against the user preferences, the app delivers the results to the [application(\_:didRegister:)](uiapplicationdelegate/application%28__didregister_%29.md) method of its app delegate. The object passed to that method specifies the types of notifications that your app is allowed to use.

In addition to registering your app’s alert types, you can also use this class to register groups of custom actions to display in conjunction with local or push notifications. Custom actions represent immediate tasks your app can perform in response to the notification. You define groups of actions and associate the entire group with a given notification. When the corresponding alert is displayed, the system adds buttons for each action you specified. When the user taps the button for one of the actions, the system wakes your app and calls the [application(\_:handleActionWithIdentifier:forRemoteNotification:completionHandler:)](uiapplicationdelegate/application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md) or [application(\_:handleActionWithIdentifier:for:completionHandler:)](uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) method of its app delegate. Use those methods to perform the requested action.

## Topics

### Creating a settings object

- [init(types:categories:)](uiusernotificationsettings/init%28types_categories_%29.md): Deprecated. Creates and returns a settings object that you can use to register your requested notification and action types.

### Getting the configured settings

- [types](uiusernotificationsettings/types.md): Deprecated. A bitmask of the notification types that your app is allowed to use.
- [categories](uiusernotificationsettings/categories.md): Deprecated. The app’s registered groups of actions.

### Constants

- [UIUserNotificationType](uiusernotificationtype.md): Deprecated. Constants indicating how the app alerts the user when a local or push notification arrives.

### Initializers

- [init(forTypes:categories:)](uiusernotificationsettings/init%28fortypes_categories_%29.md): Deprecated.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Deprecated classes

- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
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

# UIUserNotificationSettings (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The types of notifications that can be displayed to the user by your app.

> Use [UNNotificationSettings](../usernotifications/unnotificationsettings.md) instead.

## Declaration

```objectivec
@interface UIUserNotificationSettings : NSObject
```

<a id="overview"></a>

## Overview

Apps that use visible or audible alerts in conjunction with a local or push notification must register the types of alerts they employ. UIKit correlates the information you provide with the user’s preferences to determine what types of alerts your app is allowed to employ.

Use this class to encapsulate your initial registration request and to view the request results. After creating an instance of this class and specifying your preferred settings, call the [registerUserNotificationSettings:](uiapplication/registerusernotificationsettings%28__%29.md) method of the [UIApplication](uiapplication.md) class to register those settings. After checking your request against the user preferences, the app delivers the results to the [application:didRegisterUserNotificationSettings:](uiapplicationdelegate/application%28__didregister_%29.md) method of its app delegate. The object passed to that method specifies the types of notifications that your app is allowed to use.

In addition to registering your app’s alert types, you can also use this class to register groups of custom actions to display in conjunction with local or push notifications. Custom actions represent immediate tasks your app can perform in response to the notification. You define groups of actions and associate the entire group with a given notification. When the corresponding alert is displayed, the system adds buttons for each action you specified. When the user taps the button for one of the actions, the system wakes your app and calls the [application:handleActionWithIdentifier:forRemoteNotification:completionHandler:](uiapplicationdelegate/application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md) or [application:handleActionWithIdentifier:forLocalNotification:completionHandler:](uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) method of its app delegate. Use those methods to perform the requested action.

## Topics

### Creating a settings object

- [settingsForTypes:categories:](uiusernotificationsettings/init%28types_categories_%29.md): Deprecated. Creates and returns a settings object that you can use to register your requested notification and action types.

### Getting the configured settings

- [types](uiusernotificationsettings/types.md): Deprecated. A bitmask of the notification types that your app is allowed to use.
- [categories](uiusernotificationsettings/categories.md): Deprecated. The app’s registered groups of actions.

### Constants

- [UIUserNotificationType](uiusernotificationtype.md): Deprecated. Constants indicating how the app alerts the user when a local or push notification arrives.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated classes

- [UIAcceleration](uiacceleration.md): Deprecated. An acceleration event that represents immediate, three-dimensional acceleration data.
- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
