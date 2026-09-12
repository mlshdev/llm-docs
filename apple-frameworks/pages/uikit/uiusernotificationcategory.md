> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationcategory](https://developer.apple.com/documentation/uikit/uiusernotificationcategory)

# UIUserNotificationCategory (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Information about custom actions that your app can perform in response to a local or push notification.

> Use [UNNotificationCategory](../usernotifications/unnotificationcategory.md) instead.

## Declaration

```swift
@MainActor class UIUserNotificationCategory
```

<a id="overview"></a>

## Overview

Each instance of `UIUserNotificationCategory` represents a group of actions to display in conjunction with a single notification. The title of each action is uses as the title of a button in the alert displayed to the user. When the user taps a button, the system reports the selected action to your app delegate.

Typically, you create an instance of the [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md) class instead of this class. You use the mutable object to add actions and specify a category name before registering them with a [UIUserNotificationSettings](uiusernotificationsettings.md) object.

To display a group of actions for a specific notification, configure the local or push notification with the category name of the group. For local notifications, you specify this name when configuring your [UILocalNotification](uilocalnotification.md) object. For push notifications, your server specifies a group of actions by adding a `category` key (whose value is the [identifier](uiusernotificationcategory/identifier.md) of the group) to the push notification’s payload.

## Topics

### Creating the action group

- [init()](uiusernotificationcategory/init%28%29.md): Deprecated. Creates an action group.
- [init(coder:)](uiusernotificationcategory/init%28coder_%29.md): Deprecated. Creates an action group from data in an unarchiver.

### Getting the group configuration

- [identifier](uiusernotificationcategory/identifier.md): Deprecated. The name of the action group.
- [actions(for:)](uiusernotificationcategory/actions%28for_%29.md): Deprecated. Returns the actions to be displayed for the given notification context.

### Constants

- [UIUserNotificationActionContext](uiusernotificationactioncontext.md): Deprecated. Constants indicating the amount of space available for displaying actions in a notification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md)

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
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.

# UIUserNotificationCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Information about custom actions that your app can perform in response to a local or push notification.

> Use [UNNotificationCategory](../usernotifications/unnotificationcategory.md) instead.

## Declaration

```objectivec
@interface UIUserNotificationCategory : NSObject
```

<a id="overview"></a>

## Overview

Each instance of `UIUserNotificationCategory` represents a group of actions to display in conjunction with a single notification. The title of each action is uses as the title of a button in the alert displayed to the user. When the user taps a button, the system reports the selected action to your app delegate.

Typically, you create an instance of the [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md) class instead of this class. You use the mutable object to add actions and specify a category name before registering them with a [UIUserNotificationSettings](uiusernotificationsettings.md) object.

To display a group of actions for a specific notification, configure the local or push notification with the category name of the group. For local notifications, you specify this name when configuring your [UILocalNotification](uilocalnotification.md) object. For push notifications, your server specifies a group of actions by adding a `category` key (whose value is the [identifier](uiusernotificationcategory/identifier.md) of the group) to the push notification’s payload.

## Topics

### Creating the action group

- [init](uiusernotificationcategory/init%28%29.md): Deprecated. Creates an action group.
- [initWithCoder:](uiusernotificationcategory/init%28coder_%29.md): Deprecated. Creates an action group from data in an unarchiver.

### Getting the group configuration

- [identifier](uiusernotificationcategory/identifier.md): Deprecated. The name of the action group.
- [actionsForContext:](uiusernotificationcategory/actions%28for_%29.md): Deprecated. Returns the actions to be displayed for the given notification context.

### Constants

- [UIUserNotificationActionContext](uiusernotificationactioncontext.md): Deprecated. Constants indicating the amount of space available for displaying actions in a notification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md)

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
