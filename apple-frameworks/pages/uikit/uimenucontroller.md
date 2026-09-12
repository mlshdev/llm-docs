> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller](https://developer.apple.com/documentation/uikit/uimenucontroller)

# UIMenuController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.

> Use [UIEditMenuInteraction](uieditmenuinteraction.md) instead.

## Declaration

```swift
@MainActor class UIMenuController
```

<a id="overview"></a>

## Overview

The singleton [UIMenuController](uimenucontroller.md) instance is referred to as the editing menu. When you make this menu visible, [UIMenuController](uimenucontroller.md) positions it relative to a target rectangle on the screen; this rectangle usually defines a selection. The menu appears above the target rectangle or, if there isn’t enough space for it, below it. The menu’s pointer is placed at the center of the top or bottom of the target rectangle, as appropriate. Be sure to set the tracking rectangle before you make the menu visible. You’re also responsible for detecting, tracking, and displaying selections.

The [UIResponderStandardEditActions](uiresponderstandardeditactions.md) informal protocol declares methods that are invoked when the user taps a menu command. The [canPerformAction(\_:withSender:)](uiresponder/canperformaction%28__withsender_%29.md) method of [UIResponder](uiresponder.md) is also related to the editing menu. A responder implements this method to enable and disable commands of the editing menu just before the menu is displayed. You can force the menu commands enabled state to update by calling the [update()](uimenucontroller/update%28%29.md) method.

You can also provide your own menu items via the [menuItems](uimenucontroller/menuitems.md) property. When you modify the menu items, you can use the [update()](uimenucontroller/update%28%29.md) method to force the menu to update its display.

## Topics

### Getting the menu controller instance

- [shared](uimenucontroller/shared.md): Deprecated. Returns the menu controller.

### Showing and hiding the menu

- [showMenu(from:rect:)](uimenucontroller/showmenu%28from_rect_%29.md): Deprecated.
- [hideMenu(from:)](uimenucontroller/hidemenu%28from_%29.md): Deprecated.
- [hideMenu()](uimenucontroller/hidemenu%28%29.md): Deprecated.
- [isMenuVisible](uimenucontroller/ismenuvisible.md): Deprecated. The visibility of the editing menu.
- [setMenuVisible(\_:animated:)](uimenucontroller/setmenuvisible%28__animated_%29.md): Deprecated. Shows or hides the editing menu, optionally animating the action.

### Positioning the menu

- [menuFrame](uimenucontroller/menuframe.md): Deprecated. Returns the frame of the editing menu.
- [arrowDirection](uimenucontroller/arrowdirection-swift.property.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [UIMenuController.ArrowDirection](uimenucontroller/arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [setTargetRect(\_:in:)](uimenucontroller/settargetrect%28__in_%29.md): Deprecated. Sets the area in a view above or below which the editing menu is positioned.

### Updating the menu

- [update()](uimenucontroller/update%28%29.md): Deprecated. Updates the appearance and enabled state of menu commands.

### Customizing menu items

- [menuItems](uimenucontroller/menuitems.md): Deprecated. The custom menu items for the editing menu.

### Notifications

- [willShowMenuNotification](uimenucontroller/willshowmenunotification.md): Deprecated. Posted by the menu controller just before it shows the menu.
- [didShowMenuNotification](uimenucontroller/didshowmenunotification.md): Deprecated. Posted by the menu controller just after it shows the menu.
- [willHideMenuNotification](uimenucontroller/willhidemenunotification.md): Deprecated. Posted by the menu controller just before it hides the menu.
- [didHideMenuNotification](uimenucontroller/didhidemenunotification.md): Deprecated. Posted by the menu controller just after it hides the menu.
- [menuFrameDidChangeNotification](uimenucontroller/menuframedidchangenotification.md): Deprecated. Posted when the frame of a visible menu changes.

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

# UIMenuController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.

> Use [UIEditMenuInteraction](uieditmenuinteraction.md) instead.

## Declaration

```objectivec
@interface UIMenuController : NSObject
```

<a id="overview"></a>

## Overview

The singleton [UIMenuController](uimenucontroller.md) instance is referred to as the editing menu. When you make this menu visible, [UIMenuController](uimenucontroller.md) positions it relative to a target rectangle on the screen; this rectangle usually defines a selection. The menu appears above the target rectangle or, if there isn’t enough space for it, below it. The menu’s pointer is placed at the center of the top or bottom of the target rectangle, as appropriate. Be sure to set the tracking rectangle before you make the menu visible. You’re also responsible for detecting, tracking, and displaying selections.

The [UIResponderStandardEditActions](uiresponderstandardeditactions.md) informal protocol declares methods that are invoked when the user taps a menu command. The [canPerformAction:withSender:](uiresponder/canperformaction%28__withsender_%29.md) method of [UIResponder](uiresponder.md) is also related to the editing menu. A responder implements this method to enable and disable commands of the editing menu just before the menu is displayed. You can force the menu commands enabled state to update by calling the [update](uimenucontroller/update%28%29.md) method.

You can also provide your own menu items via the [menuItems](uimenucontroller/menuitems.md) property. When you modify the menu items, you can use the [update](uimenucontroller/update%28%29.md) method to force the menu to update its display.

## Topics

### Getting the menu controller instance

- [sharedMenuController](uimenucontroller/shared.md): Deprecated. Returns the menu controller.

### Showing and hiding the menu

- [showMenuFromView:rect:](uimenucontroller/showmenu%28from_rect_%29.md): Deprecated.
- [hideMenuFromView:](uimenucontroller/hidemenu%28from_%29.md): Deprecated.
- [hideMenu](uimenucontroller/hidemenu%28%29.md): Deprecated.
- [menuVisible](uimenucontroller/ismenuvisible.md): Deprecated. The visibility of the editing menu.
- [setMenuVisible:animated:](uimenucontroller/setmenuvisible%28__animated_%29.md): Deprecated. Shows or hides the editing menu, optionally animating the action.

### Positioning the menu

- [menuFrame](uimenucontroller/menuframe.md): Deprecated. Returns the frame of the editing menu.
- [arrowDirection](uimenucontroller/arrowdirection-swift.property.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [UIMenuControllerArrowDirection](uimenucontroller/arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [setTargetRect:inView:](uimenucontroller/settargetrect%28__in_%29.md): Deprecated. Sets the area in a view above or below which the editing menu is positioned.

### Updating the menu

- [update](uimenucontroller/update%28%29.md): Deprecated. Updates the appearance and enabled state of menu commands.

### Customizing menu items

- [menuItems](uimenucontroller/menuitems.md): Deprecated. The custom menu items for the editing menu.

### Notifications

- [UIMenuControllerWillShowMenuNotification](uimenucontroller/willshowmenunotification.md): Deprecated. Posted by the menu controller just before it shows the menu.
- [UIMenuControllerDidShowMenuNotification](uimenucontroller/didshowmenunotification.md): Deprecated. Posted by the menu controller just after it shows the menu.
- [UIMenuControllerWillHideMenuNotification](uimenucontroller/willhidemenunotification.md): Deprecated. Posted by the menu controller just before it hides the menu.
- [UIMenuControllerDidHideMenuNotification](uimenucontroller/didhidemenunotification.md): Deprecated. Posted by the menu controller just after it hides the menu.
- [UIMenuControllerMenuFrameDidChangeNotification](uimenucontroller/menuframedidchangenotification.md): Deprecated. Posted when the frame of a visible menu changes.

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
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
