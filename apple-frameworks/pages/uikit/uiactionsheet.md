> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet](https://developer.apple.com/documentation/uikit/uiactionsheet)

# UIActionSheet (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

A view that presents a set of alternatives for how to proceed with a task.

> Instead, use [UIAlertController](uialertcontroller.md) with a [preferredStyle](uialertcontroller/preferredstyle.md) of [UIAlertController.Style.actionSheet](uialertcontroller/style/actionsheet.md).

## Declaration

```swift
@MainActor class UIActionSheet
```

<a id="overview"></a>

## Overview

In apps that target versions of iOS prior to iOS 8, use the [UIActionSheet](uiactionsheet.md) class to present the user with a set of alternatives for how to proceed with a given task. You can also use action sheets to prompt the user to confirm a potentially dangerous action. The action sheet contains an optional title and one or more buttons, each of which corresponds to an action to take.

Use the properties and methods of this class to configure the action sheet’s message, style, and buttons before presenting it. You should also assign a delegate to your action sheet. Your delegate object is responsible for performing the action associated with any buttons when they’re tapped and should conform to the [UIActionSheetDelegate](uiactionsheetdelegate.md) protocol. For more information about implementing the methods of the delegate, see [UIActionSheetDelegate](uiactionsheetdelegate.md).

You can present an action sheet from a toolbar, tab bar, button bar item, or from a view. This class takes the starting view and current platform into account when determining how to present the action sheet. For applications running on iPhone and iPod touch devices, the action sheet typically slides up from the bottom of the window that owns the view. For applications running on iPad devices, the action sheet is typically displayed in a popover that’s anchored to the starting view in an appropriate way. Taps outside of the popover automatically dismiss the action sheet, as do taps within any custom buttons. You can also dismiss it programmatically.

When presenting an action sheet on an iPad, there are times when you shouldn’t include a cancel button. If you’re presenting just the action sheet, the system displays the action sheet inside a popover without using an animation. Because taps outside the popover dismiss the action sheet without selecting an item, this results in a default way to cancel the sheet. Including a cancel button would therefore only cause confusion. However, if you have an existing popover and are displaying an action sheet on top of other content using an animation, a cancel button is still appropriate. For more information, see [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/).

> **Important**

>  In iOS 4 and later, action sheets aren’t dismissed automatically when an application moves to the background. This behavior differs from earlier versions of the operating system, where action sheets were automatically canceled (and their cancellation handler executed) as part of the termination sequence for the application. Now, it’s up to you to decide whether to dismiss the action sheet (and execute its cancellation handler) or leave it visible for when your application moves back to the foreground. Remember that your application can still be terminated while in the background, so some type of action may be necessary in either case.

<a id="Subclassing-notes"></a>

### Subclassing notes

[UIActionSheet](uiactionsheet.md) isn’t designed to be subclassed, nor should you add views to its hierarchy. If you need to present a sheet with more customization than provided by the [UIActionSheet](uiactionsheet.md) API, you can create your own and present it modally with [present(\_:animated:completion:)](uiviewcontroller/present%28__animated_completion_%29.md).

## Topics

### Creating action sheets

- [init(title:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:\_:)](uiactionsheet/init%28title_delegate_cancelbuttontitle_destructivebuttontitle_otherbuttontitles___%29.md): Deprecated. Creates an action sheet with the specified values.
- [init(title:delegate:cancelButtonTitle:destructiveButtonTitle:)](uiactionsheet/init%28title_delegate_cancelbuttontitle_destructivebuttontitle_%29.md): Deprecated. Initializes the action sheet using the specified starting parameters.

### Setting properties

- [delegate](uiactionsheet/delegate.md): Deprecated. The receiver’s delegate or `nil` if it doesn’t have a delegate.
- [title](uiactionsheet/title.md): Deprecated. The string that appears in the receiver’s title bar.
- [isVisible](uiactionsheet/isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.
- [actionSheetStyle](uiactionsheet/actionsheetstyle.md): Deprecated. The receiver’s presentation style.

### Configuring buttons

- [addButton(withTitle:)](uiactionsheet/addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](uiactionsheet/numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitle(at:)](uiactionsheet/buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [cancelButtonIndex](uiactionsheet/cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](uiactionsheet/destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](uiactionsheet/firstotherbuttonindex.md): Deprecated. The index of the first custom button.

### Presenting the action sheet

- [show(from:)](uiactionsheet/show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [show(from:)](uiactionsheet/show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [show(in:)](uiactionsheet/show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [show(from:animated:)](uiactionsheet/show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.
- [show(from:in:animated:)](uiactionsheet/show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.

### Dismissing the action sheet

- [dismiss(withClickedButtonIndex:animated:)](uiactionsheet/dismiss%28withclickedbuttonindex_animated_%29.md): Deprecated. Dismisses the action sheet immediately using an optional animation.

### Constants

- [UIActionSheetStyle](uiactionsheetstyle.md): Deprecated. Specifies the style of an action sheet.

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
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIActionSheet (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

A view that presents a set of alternatives for how to proceed with a task.

> Instead, use [UIAlertController](uialertcontroller.md) with a [preferredStyle](uialertcontroller/preferredstyle.md) of [UIAlertControllerStyleActionSheet](uialertcontroller/style/actionsheet.md).

## Declaration

```objectivec
@interface UIActionSheet : UIView
```

<a id="overview"></a>

## Overview

In apps that target versions of iOS prior to iOS 8, use the [UIActionSheet](uiactionsheet.md) class to present the user with a set of alternatives for how to proceed with a given task. You can also use action sheets to prompt the user to confirm a potentially dangerous action. The action sheet contains an optional title and one or more buttons, each of which corresponds to an action to take.

Use the properties and methods of this class to configure the action sheet’s message, style, and buttons before presenting it. You should also assign a delegate to your action sheet. Your delegate object is responsible for performing the action associated with any buttons when they’re tapped and should conform to the [UIActionSheetDelegate](uiactionsheetdelegate.md) protocol. For more information about implementing the methods of the delegate, see [UIActionSheetDelegate](uiactionsheetdelegate.md).

You can present an action sheet from a toolbar, tab bar, button bar item, or from a view. This class takes the starting view and current platform into account when determining how to present the action sheet. For applications running on iPhone and iPod touch devices, the action sheet typically slides up from the bottom of the window that owns the view. For applications running on iPad devices, the action sheet is typically displayed in a popover that’s anchored to the starting view in an appropriate way. Taps outside of the popover automatically dismiss the action sheet, as do taps within any custom buttons. You can also dismiss it programmatically.

When presenting an action sheet on an iPad, there are times when you shouldn’t include a cancel button. If you’re presenting just the action sheet, the system displays the action sheet inside a popover without using an animation. Because taps outside the popover dismiss the action sheet without selecting an item, this results in a default way to cancel the sheet. Including a cancel button would therefore only cause confusion. However, if you have an existing popover and are displaying an action sheet on top of other content using an animation, a cancel button is still appropriate. For more information, see [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/).

> **Important**

>  In iOS 4 and later, action sheets aren’t dismissed automatically when an application moves to the background. This behavior differs from earlier versions of the operating system, where action sheets were automatically canceled (and their cancellation handler executed) as part of the termination sequence for the application. Now, it’s up to you to decide whether to dismiss the action sheet (and execute its cancellation handler) or leave it visible for when your application moves back to the foreground. Remember that your application can still be terminated while in the background, so some type of action may be necessary in either case.

<a id="Subclassing-notes"></a>

### Subclassing notes

[UIActionSheet](uiactionsheet.md) isn’t designed to be subclassed, nor should you add views to its hierarchy. If you need to present a sheet with more customization than provided by the [UIActionSheet](uiactionsheet.md) API, you can create your own and present it modally with [presentViewController:animated:completion:](uiviewcontroller/present%28__animated_completion_%29.md).

## Topics

### Creating action sheets

- [initWithTitle:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:](uiactionsheet/init%28title_delegate_cancelbuttontitle_destructivebuttontitle_%29.md): Deprecated. Initializes the action sheet using the specified starting parameters.

### Setting properties

- [delegate](uiactionsheet/delegate.md): Deprecated. The receiver’s delegate or `nil` if it doesn’t have a delegate.
- [title](uiactionsheet/title.md): Deprecated. The string that appears in the receiver’s title bar.
- [visible](uiactionsheet/isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.
- [actionSheetStyle](uiactionsheet/actionsheetstyle.md): Deprecated. The receiver’s presentation style.

### Configuring buttons

- [addButtonWithTitle:](uiactionsheet/addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](uiactionsheet/numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitleAtIndex:](uiactionsheet/buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [cancelButtonIndex](uiactionsheet/cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](uiactionsheet/destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](uiactionsheet/firstotherbuttonindex.md): Deprecated. The index of the first custom button.

### Presenting the action sheet

- [showFromTabBar:](uiactionsheet/show%28from_%29-9i3tw.md): Deprecated. Displays an action sheet that originates from the specified tab bar.
- [showFromToolbar:](uiactionsheet/show%28from_%29-1p4ap.md): Deprecated. Displays an action sheet that originates from the specified toolbar.
- [showInView:](uiactionsheet/show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.
- [showFromBarButtonItem:animated:](uiactionsheet/show%28from_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified bar button item.
- [showFromRect:inView:animated:](uiactionsheet/show%28from_in_animated_%29.md): Deprecated. Displays an action sheet that originates from the specified view.

### Dismissing the action sheet

- [dismissWithClickedButtonIndex:animated:](uiactionsheet/dismiss%28withclickedbuttonindex_animated_%29.md): Deprecated. Dismisses the action sheet immediately using an optional animation.

### Constants

- [UIActionSheetStyle](uiactionsheetstyle.md): Deprecated. Specifies the style of an action sheet.

## Relationships

### Inherits From

- [UIView](uiview.md)

## See Also

### Deprecated classes

- [UIAcceleration](uiacceleration.md): Deprecated. An acceleration event that represents immediate, three-dimensional acceleration data.
- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
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
