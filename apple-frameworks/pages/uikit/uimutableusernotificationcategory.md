> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationcategory](https://developer.apple.com/documentation/uikit/uimutableusernotificationcategory)

# UIMutableUserNotificationCategory (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Information about custom actions that your app can perform in response to a local or push notification.

> Use [UNNotificationCategory](../usernotifications/unnotificationcategory.md) instead.

## Declaration

```swift
@MainActor class UIMutableUserNotificationCategory
```

<a id="overview"></a>

## Overview

Use instances of this class to customize the actions included in an alert when space onscreen is constrained.

After creating an instance of this class using the standard alloc/init pattern, use it to modify the actions or category name as needed. The most common use of this class is to specify the subset of actions to display when the size of the alert is relatively small.

## Topics

### Modifying the action settings

- [identifier](uimutableusernotificationcategory/identifier.md): Deprecated. The name of the action group.
- [setActions(\_:for:)](uimutableusernotificationcategory/setactions%28__for_%29.md): Deprecated. Sets the actions to display for different alert styles.

## Relationships

### Inherits From

- [UIUserNotificationCategory](uiusernotificationcategory.md)

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

## See Also

### Deprecated classes

- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIMutableUserNotificationCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Information about custom actions that your app can perform in response to a local or push notification.

> Use [UNNotificationCategory](../usernotifications/unnotificationcategory.md) instead.

## Declaration

```objectivec
@interface UIMutableUserNotificationCategory : UIUserNotificationCategory
```

<a id="overview"></a>

## Overview

Use instances of this class to customize the actions included in an alert when space onscreen is constrained.

After creating an instance of this class using the standard alloc/init pattern, use it to modify the actions or category name as needed. The most common use of this class is to specify the subset of actions to display when the size of the alert is relatively small.

## Topics

### Modifying the action settings

- [identifier](uimutableusernotificationcategory/identifier.md): Deprecated. The name of the action group.
- [setActions:forContext:](uimutableusernotificationcategory/setactions%28__for_%29.md): Deprecated. Sets the actions to display for different alert styles.

## Relationships

### Inherits From

- [UIUserNotificationCategory](uiusernotificationcategory.md)

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
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
