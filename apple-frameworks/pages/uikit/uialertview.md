> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview](https://developer.apple.com/documentation/uikit/uialertview)

# UIAlertView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A view that displays an alert message.

> Instead, use [UIAlertController](uialertcontroller.md) with a [preferredStyle](uialertcontroller/preferredstyle.md) of [UIAlertController.Style.alert](uialertcontroller/style/alert.md).

## Declaration

```swift
@MainActor class UIAlertView
```

<a id="overview"></a>

## Overview

In apps that run in versions of iOS prior to iOS 8, use the [UIAlertView](uialertview.md) class to display an alert message to the user. An alert view functions similar to but differs in appearance from an action sheet (an instance of [UIActionSheet](uiactionsheet.md)).

<a id="Using-an-alert-view"></a>

### Using an alert view

Use the properties and methods defined in this class to set the title, message, and delegate of an alert view and configure the buttons in apps that run in versions of iOS prior to iOS 8. You must set a delegate if you add custom buttons. The delegate should conform to the [UIAlertViewDelegate](uialertviewdelegate.md) protocol. Use the [show()](uialertview/show%28%29.md) method to display an alert view after it’s configured.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [UIAlertView](uialertview.md) class is intended to be used as-is and doesn’t support subclassing. The view hierarchy for this class is private and must not be modified.

## Topics

### Creating alert views

- [init(title:message:delegate:cancelButtonTitle:)](uialertview/init%28title_message_delegate_cancelbuttontitle_%29.md): Deprecated. Convenience method for initializing an alert view.
- [init(title:message:delegate:cancelButtonTitle:otherButtonTitles:\_:)](uialertview/init%28title_message_delegate_cancelbuttontitle_otherbuttontitles___%29.md): Deprecated. Creates an alert view with the specified values.
- [init(frame:)](uialertview/init%28frame_%29.md): Deprecated. Creates an alert view with the specified frame.
- [init(coder:)](uialertview/init%28coder_%29.md): Deprecated. Creates an alert view from data in an unarchiver.

### Setting properties

- [delegate](uialertview/delegate.md): Deprecated. The receiver’s delegate or `nil` if it doesn’t have a delegate.
- [alertViewStyle](uialertview/alertviewstyle.md): Deprecated. The kind of alert displayed to the user.
- [title](uialertview/title.md): Deprecated. The string that appears in the receiver’s title bar.
- [message](uialertview/message.md): Deprecated. Descriptive text that provides more details than the title.
- [isVisible](uialertview/isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.

### Configuring buttons

- [addButton(withTitle:)](uialertview/addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](uialertview/numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitle(at:)](uialertview/buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [textField(at:)](uialertview/textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](uialertview/cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](uialertview/firstotherbuttonindex.md): Deprecated. The index of the first other button.

### Displaying

- [show()](uialertview/show%28%29.md): Deprecated. Displays the receiver using animation.

### Dismissing

- [dismiss(withClickedButtonIndex:animated:)](uialertview/dismiss%28withclickedbuttonindex_animated_%29.md): Deprecated. Dismisses the receiver, optionally with animation.

### Constants

- [UIAlertViewStyle](uialertviewstyle.md): The presentation style of the alert.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Deprecated classes

- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
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
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIAlertView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A view that displays an alert message.

> Instead, use [UIAlertController](uialertcontroller.md) with a [preferredStyle](uialertcontroller/preferredstyle.md) of [UIAlertControllerStyleAlert](uialertcontroller/style/alert.md).

## Declaration

```objectivec
@interface UIAlertView : UIView
```

<a id="overview"></a>

## Overview

In apps that run in versions of iOS prior to iOS 8, use the [UIAlertView](uialertview.md) class to display an alert message to the user. An alert view functions similar to but differs in appearance from an action sheet (an instance of [UIActionSheet](uiactionsheet.md)).

<a id="Using-an-alert-view"></a>

### Using an alert view

Use the properties and methods defined in this class to set the title, message, and delegate of an alert view and configure the buttons in apps that run in versions of iOS prior to iOS 8. You must set a delegate if you add custom buttons. The delegate should conform to the [UIAlertViewDelegate](uialertviewdelegate.md) protocol. Use the [show](uialertview/show%28%29.md) method to display an alert view after it’s configured.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [UIAlertView](uialertview.md) class is intended to be used as-is and doesn’t support subclassing. The view hierarchy for this class is private and must not be modified.

## Topics

### Creating alert views

- [initWithTitle:message:delegate:cancelButtonTitle:otherButtonTitles:](uialertview/init%28title_message_delegate_cancelbuttontitle_%29.md): Deprecated. Convenience method for initializing an alert view.
- [initWithFrame:](uialertview/init%28frame_%29.md): Deprecated. Creates an alert view with the specified frame.
- [initWithCoder:](uialertview/init%28coder_%29.md): Deprecated. Creates an alert view from data in an unarchiver.

### Setting properties

- [delegate](uialertview/delegate.md): Deprecated. The receiver’s delegate or `nil` if it doesn’t have a delegate.
- [alertViewStyle](uialertview/alertviewstyle.md): Deprecated. The kind of alert displayed to the user.
- [title](uialertview/title.md): Deprecated. The string that appears in the receiver’s title bar.
- [message](uialertview/message.md): Deprecated. Descriptive text that provides more details than the title.
- [visible](uialertview/isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.

### Configuring buttons

- [addButtonWithTitle:](uialertview/addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](uialertview/numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitleAtIndex:](uialertview/buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [textFieldAtIndex:](uialertview/textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](uialertview/cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](uialertview/firstotherbuttonindex.md): Deprecated. The index of the first other button.

### Displaying

- [show](uialertview/show%28%29.md): Deprecated. Displays the receiver using animation.

### Dismissing

- [dismissWithClickedButtonIndex:animated:](uialertview/dismiss%28withclickedbuttonindex_animated_%29.md): Deprecated. Dismisses the receiver, optionally with animation.

### Constants

- [UIAlertViewStyle](uialertviewstyle.md): The presentation style of the alert.

## Relationships

### Inherits From

- [UIView](uiview.md)

## See Also

### Deprecated classes

- [UIAcceleration](uiacceleration.md): Deprecated. An acceleration event that represents immediate, three-dimensional acceleration data.
- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
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
