> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationaction](https://developer.apple.com/documentation/uikit/uiusernotificationaction)

# UIUserNotificationAction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A custom action that your app can perform in response to a remote or local notification.

> Use [UNNotificationAction](../usernotifications/unnotificationaction.md) instead.

## Declaration

```swift
@MainActor class UIUserNotificationAction
```

<a id="overview"></a>

## Overview

When a notification is delivered, the system displays a button for each custom action associated with the notification. Tapping a button launches your app (either in the foreground or background) and gives you a chance to perform the indicated action. You use this class to specify the text that is displayed in the button and the information your app needs to perform the corresponding action.

Typically, you create an instance of the [UIMutableUserNotificationAction](uimutableusernotificationaction.md) class instead of this class. You use the mutable object to configure the action and then call the setActions:forContext: method of UIMutableUserNotificationActionSettings to add the resulting actions to a group.

For each action you define, you must specify whether execution of that action requires the app to be running in the foreground or background. You can also specify whether the device must be unlocked or can remain locked while the action is performed. Unlocking the device may be necessary if the action involves reading or writing files that are encrypted on disk using the system’s data protection mechanism. When the user selects an action, the system puts your app into the appropriate mode and calls your app delegate’s [application(\_:handleActionWithIdentifier:forRemoteNotification:completionHandler:)](uiapplicationdelegate/application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md) or [application(\_:handleActionWithIdentifier:for:completionHandler:)](uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) method to perform the action.

## Topics

### Creating the action

- [init()](uiusernotificationaction/init%28%29.md): Deprecated. Creates a user notification action.
- [init(coder:)](uiusernotificationaction/init%28coder_%29.md): Deprecated. Creates a user notification action from data in an unarchiver.

### Getting the action information

- [identifier](uiusernotificationaction/identifier.md): Deprecated. The string that you use internally to identify the action.
- [title](uiusernotificationaction/title.md): Deprecated. The localized string to use as the button title for the action.

### Getting the action’s configuration

- [activationMode](uiusernotificationaction/activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [isAuthenticationRequired](uiusernotificationaction/isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [isDestructive](uiusernotificationaction/isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](uiusernotificationaction/behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](uiusernotificationaction/parameters.md): Deprecated. A dictionary of additional parameters to include with the action.

### Constants

- [UIUserNotificationActivationMode](uiusernotificationactivationmode.md): Deprecated. Constants indicating whether the app should activate to the foreground or background.
- [UIUserNotificationActionBehavior](uiusernotificationactionbehavior.md): Deprecated. Constants indicating additional behavior that the action supports.
- [Action Parameter Key](action-parameter-key.md): Key to include among the parameters of the action.
- [Behavior Key](behavior-key.md): Key related to action-related behaviors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMutableUserNotificationAction](uimutableusernotificationaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
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
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIUserNotificationAction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A custom action that your app can perform in response to a remote or local notification.

> Use [UNNotificationAction](../usernotifications/unnotificationaction.md) instead.

## Declaration

```objectivec
@interface UIUserNotificationAction : NSObject
```

<a id="overview"></a>

## Overview

When a notification is delivered, the system displays a button for each custom action associated with the notification. Tapping a button launches your app (either in the foreground or background) and gives you a chance to perform the indicated action. You use this class to specify the text that is displayed in the button and the information your app needs to perform the corresponding action.

Typically, you create an instance of the [UIMutableUserNotificationAction](uimutableusernotificationaction.md) class instead of this class. You use the mutable object to configure the action and then call the setActions:forContext: method of UIMutableUserNotificationActionSettings to add the resulting actions to a group.

For each action you define, you must specify whether execution of that action requires the app to be running in the foreground or background. You can also specify whether the device must be unlocked or can remain locked while the action is performed. Unlocking the device may be necessary if the action involves reading or writing files that are encrypted on disk using the system’s data protection mechanism. When the user selects an action, the system puts your app into the appropriate mode and calls your app delegate’s [application:handleActionWithIdentifier:forRemoteNotification:completionHandler:](uiapplicationdelegate/application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md) or [application:handleActionWithIdentifier:forLocalNotification:completionHandler:](uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) method to perform the action.

## Topics

### Creating the action

- [init](uiusernotificationaction/init%28%29.md): Deprecated. Creates a user notification action.
- [initWithCoder:](uiusernotificationaction/init%28coder_%29.md): Deprecated. Creates a user notification action from data in an unarchiver.

### Getting the action information

- [identifier](uiusernotificationaction/identifier.md): Deprecated. The string that you use internally to identify the action.
- [title](uiusernotificationaction/title.md): Deprecated. The localized string to use as the button title for the action.

### Getting the action’s configuration

- [activationMode](uiusernotificationaction/activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [authenticationRequired](uiusernotificationaction/isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [destructive](uiusernotificationaction/isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](uiusernotificationaction/behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](uiusernotificationaction/parameters.md): Deprecated. A dictionary of additional parameters to include with the action.

### Constants

- [UIUserNotificationActivationMode](uiusernotificationactivationmode.md): Deprecated. Constants indicating whether the app should activate to the foreground or background.
- [UIUserNotificationActionBehavior](uiusernotificationactionbehavior.md): Deprecated. Constants indicating additional behavior that the action supports.
- [Action Parameter Key](action-parameter-key.md): Key to include among the parameters of the action.
- [Behavior Key](behavior-key.md): Key related to action-related behaviors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMutableUserNotificationAction](uimutableusernotificationaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

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
