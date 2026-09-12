> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller](https://developer.apple.com/documentation/uikit/uipopovercontroller)

# UIPopoverController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An object that manages the presentation of content in a popover.

> In iOS 9 and later, a popover is implemented as a [UIViewController](uiviewcontroller.md) presentation. To create a popover, [UIPopoverPresentationController](uipopoverpresentationcontroller.md) and specify the [UIModalPresentationStyle.popover](uimodalpresentationstyle/popover.md) style.

## Declaration

```swift
@MainActor class UIPopoverController
```

<a id="overview"></a>

## Overview

The `UIPopoverController` class is used to manage the presentation of content in a popover. You use popovers to present information temporarily. The popover content is layered on top of your existing content and the background is dimmed automatically. The popover remains visible until the user taps outside of the popover window or you explicitly dismiss it. Popover controllers are for use exclusively on iPad devices. Attempting to create one on other devices results in an exception.

To display a popover, create an instance of this class and present it using one of the appropriate methods. When initializing an instance of this class, you must specify the view controller that provides the content for the popover. Popovers normally derive their size from the view controller they present. However, you can change the size of the popover by modifying the value in the [contentSize](uipopovercontroller/contentsize.md) property or by calling the [setContentSize(\_:animated:)](uipopovercontroller/setcontentsize%28__animated_%29.md) method. The latter approach is particularly effective if you need to animate changes to the popover’s size. The size you specify is just the preferred size for the popover’s view. The actual size may be altered to ensure that the popover fits on the screen and does not collide with the keyboard.

When displayed, taps outside of the popover window cause the popover to be dismissed automatically. To allow the user to interact with the specified views and not dismiss the popover, you can assign one or more views to the [passthroughViews](uipopovercontroller/passthroughviews.md) property. Taps inside the popover window do not automatically cause the popover to be dismissed. Your view and view controller code must handle actions and events inside the popover explicitly and call the [dismiss(animated:)](uipopovercontroller/dismiss%28animated_%29.md) method as needed.

If the user rotates the device while a popover is visible, the popover controller hides the popover and then shows it again at the end of the rotation. The popover controller attempts to position the popover appropriately for you but you can also implement the [popoverController(\_:willRepositionPopoverTo:in:)](uipopovercontrollerdelegate/popovercontroller%28__willrepositionpopoverto_in_%29.md) method in the popover delegate to specify a new position.

You can assign a delegate to the popover to manage interactions with the popover and receive notifications about its dismissal. For information about the methods of the delegate object, see [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md).

## Topics

### Initializing the popover

- [init(contentViewController:)](uipopovercontroller/init%28contentviewcontroller_%29.md): Deprecated. Returns an initialized popover controller object.

### Presenting and dismissing the popover

- [present(from:in:permittedArrowDirections:animated:)](uipopovercontroller/present%28from_in_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified location in the view.
- [present(from:permittedArrowDirections:animated:)](uipopovercontroller/present%28from_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified bar button item.
- [dismiss(animated:)](uipopovercontroller/dismiss%28animated_%29.md): Deprecated. Dismisses the popover programmatically.

### Configuring the popover content

- [contentViewController](uipopovercontroller/contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentView(\_:animated:)](uipopovercontroller/setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [contentSize](uipopovercontroller/contentsize.md): Deprecated. The size of the popover’s content view.
- [setContentSize(\_:animated:)](uipopovercontroller/setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](uipopovercontroller/passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.

### Getting the popover attributes

- [isPopoverVisible](uipopovercontroller/ispopovervisible.md): Deprecated. A Boolean value indicating whether the popover is currently visible.
- [arrowDirection](uipopovercontroller/arrowdirection.md): Deprecated. The direction of the popover’s arrow.

### Accessing the delegate

- [delegate](uipopovercontroller/delegate.md): Deprecated. The delegate you want to receive popover controller messages.

### Customizing the popover appearance

- [layoutMargins](uipopovercontroller/layoutmargins.md): Deprecated. The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundViewClass](uipopovercontroller/backgroundviewclass.md): Deprecated. The class to use for displaying the popover background content.
- [backgroundColor](uipopovercontroller/backgroundcolor.md): Deprecated. The color of the popover’s backdrop view.

### Constants

- [UIPopoverArrowDirection](uipopoverarrowdirection.md): Constants for specifying the direction of the popover arrow.

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
- [UIAppearanceContainer](uiappearancecontainer.md)

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
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIPopoverController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An object that manages the presentation of content in a popover.

> In iOS 9 and later, a popover is implemented as a [UIViewController](uiviewcontroller.md) presentation. To create a popover, [UIPopoverPresentationController](uipopoverpresentationcontroller.md) and specify the [UIModalPresentationPopover](uimodalpresentationstyle/popover.md) style.

## Declaration

```objectivec
@interface UIPopoverController : NSObject
```

<a id="overview"></a>

## Overview

The `UIPopoverController` class is used to manage the presentation of content in a popover. You use popovers to present information temporarily. The popover content is layered on top of your existing content and the background is dimmed automatically. The popover remains visible until the user taps outside of the popover window or you explicitly dismiss it. Popover controllers are for use exclusively on iPad devices. Attempting to create one on other devices results in an exception.

To display a popover, create an instance of this class and present it using one of the appropriate methods. When initializing an instance of this class, you must specify the view controller that provides the content for the popover. Popovers normally derive their size from the view controller they present. However, you can change the size of the popover by modifying the value in the [popoverContentSize](uipopovercontroller/contentsize.md) property or by calling the [setPopoverContentSize:animated:](uipopovercontroller/setcontentsize%28__animated_%29.md) method. The latter approach is particularly effective if you need to animate changes to the popover’s size. The size you specify is just the preferred size for the popover’s view. The actual size may be altered to ensure that the popover fits on the screen and does not collide with the keyboard.

When displayed, taps outside of the popover window cause the popover to be dismissed automatically. To allow the user to interact with the specified views and not dismiss the popover, you can assign one or more views to the [passthroughViews](uipopovercontroller/passthroughviews.md) property. Taps inside the popover window do not automatically cause the popover to be dismissed. Your view and view controller code must handle actions and events inside the popover explicitly and call the [dismissPopoverAnimated:](uipopovercontroller/dismiss%28animated_%29.md) method as needed.

If the user rotates the device while a popover is visible, the popover controller hides the popover and then shows it again at the end of the rotation. The popover controller attempts to position the popover appropriately for you but you can also implement the [popoverController:willRepositionPopoverToRect:inView:](uipopovercontrollerdelegate/popovercontroller%28__willrepositionpopoverto_in_%29.md) method in the popover delegate to specify a new position.

You can assign a delegate to the popover to manage interactions with the popover and receive notifications about its dismissal. For information about the methods of the delegate object, see [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md).

## Topics

### Initializing the popover

- [initWithContentViewController:](uipopovercontroller/init%28contentviewcontroller_%29.md): Deprecated. Returns an initialized popover controller object.

### Presenting and dismissing the popover

- [presentPopoverFromRect:inView:permittedArrowDirections:animated:](uipopovercontroller/present%28from_in_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified location in the view.
- [presentPopoverFromBarButtonItem:permittedArrowDirections:animated:](uipopovercontroller/present%28from_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified bar button item.
- [dismissPopoverAnimated:](uipopovercontroller/dismiss%28animated_%29.md): Deprecated. Dismisses the popover programmatically.

### Configuring the popover content

- [contentViewController](uipopovercontroller/contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentViewController:animated:](uipopovercontroller/setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [popoverContentSize](uipopovercontroller/contentsize.md): Deprecated. The size of the popover’s content view.
- [setPopoverContentSize:animated:](uipopovercontroller/setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](uipopovercontroller/passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.

### Getting the popover attributes

- [popoverVisible](uipopovercontroller/ispopovervisible.md): Deprecated. A Boolean value indicating whether the popover is currently visible.
- [popoverArrowDirection](uipopovercontroller/arrowdirection.md): Deprecated. The direction of the popover’s arrow.

### Accessing the delegate

- [delegate](uipopovercontroller/delegate.md): Deprecated. The delegate you want to receive popover controller messages.

### Customizing the popover appearance

- [popoverLayoutMargins](uipopovercontroller/layoutmargins.md): Deprecated. The margins that define the portion of the screen in which it is permissible to display the popover.
- [popoverBackgroundViewClass](uipopovercontroller/backgroundviewclass.md): Deprecated. The class to use for displaying the popover background content.
- [backgroundColor](uipopovercontroller/backgroundcolor.md): Deprecated. The color of the popover’s backdrop view.

### Constants

- [UIPopoverArrowDirection](uipopoverarrowdirection.md): Constants for specifying the direction of the popover arrow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIAppearanceContainer](uiappearancecontainer.md)

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
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
