> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardpopoversegue](https://developer.apple.com/documentation/uikit/uistoryboardpopoversegue)

# UIStoryboardPopoverSegue (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

A specific type of segue for presenting content in a popover.

> Instead, access the [popoverPresentationController](uiviewcontroller/popoverpresentationcontroller.md) property of the [destination](uistoryboardsegue/destination.md) view controller from [perform()](uistoryboardsegue/perform%28%29.md).

## Declaration

```swift
@MainActor class UIStoryboardPopoverSegue
```

<a id="overview"></a>

## Overview

For popover segues, the destination view controller contains the content to be displayed in the popover. This class provides an additional [popoverController](uistoryboardpopoversegue/popovercontroller.md) property so that your custom code has access to the popover controller object. For example, you might want to store the popover controller elsewhere in your code so that you can dismiss the popover programmatically.

## Topics

### Accessing the segue attributes

- [popoverController](uistoryboardpopoversegue/popovercontroller.md): Deprecated. The popover controller used to display the destination view controller.

## Relationships

### Inherits From

- [UIStoryboardSegue](uistoryboardsegue.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

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
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIStoryboardPopoverSegue (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

A specific type of segue for presenting content in a popover.

> Instead, access the [popoverPresentationController](uiviewcontroller/popoverpresentationcontroller.md) property of the [destinationViewController](uistoryboardsegue/destination.md) view controller from [perform](uistoryboardsegue/perform%28%29.md).

## Declaration

```objectivec
@interface UIStoryboardPopoverSegue : UIStoryboardSegue
```

<a id="overview"></a>

## Overview

For popover segues, the destination view controller contains the content to be displayed in the popover. This class provides an additional [popoverController](uistoryboardpopoversegue/popovercontroller.md) property so that your custom code has access to the popover controller object. For example, you might want to store the popover controller elsewhere in your code so that you can dismiss the popover programmatically.

## Topics

### Accessing the segue attributes

- [popoverController](uistoryboardpopoversegue/popovercontroller.md): Deprecated. The popover controller used to display the destination view controller.

## Relationships

### Inherits From

- [UIStoryboardSegue](uistoryboardsegue.md)

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
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
