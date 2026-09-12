> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertviewdelegate](https://developer.apple.com/documentation/uikit/uialertviewdelegate)

# UIAlertViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst

The interface for the delegate of an alert view object.

> Use [UIAlertController](uialertcontroller.md) instead.

## Declaration

```swift
@MainActor protocol UIAlertViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The delegate implements the button actions and any other custom behavior. Some of the methods defined in this protocol are optional.

If you add your own buttons or customize the behavior of an alert view, implement a delegate conforming to this protocol to handle the corresponding delegate messages. Use the [delegate](uialertview/delegate.md) property of an alert view to specify one of your application objects as the delegate.

If you add your own buttons to an alert view, the delegate must implement the [alertView(\_:clickedButtonAt:)](uialertviewdelegate/alertview%28__clickedbuttonat_%29.md) message to respond when those buttons are clicked; otherwise, your custom buttons do nothing. The alert view is automatically dismissed after the [alertView(\_:clickedButtonAt:)](uialertviewdelegate/alertview%28__clickedbuttonat_%29.md) delegate method is invoked.

Optionally, you can implement the [alertViewCancel(\_:)](uialertviewdelegate/alertviewcancel%28__%29.md) method to take the appropriate action when the system cancels your alert view. If the delegate doesn’t implement this method, the default behavior is to simulate the user clicking the cancel button and closing the view.

You can also optionally augment the behavior of presenting and dismissing alert views using the methods in Customizing behavior.

## Topics

### Responding to actions

- [alertView(\_:clickedButtonAt:)](uialertviewdelegate/alertview%28__clickedbuttonat_%29.md): Deprecated. Sent to the delegate when the user clicks a button on an alert view.

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton(\_:)](uialertviewdelegate/alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [willPresent(\_:)](uialertviewdelegate/willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresent(\_:)](uialertviewdelegate/didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView(\_:willDismissWithButtonIndex:)](uialertviewdelegate/alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.
- [alertView(\_:didDismissWithButtonIndex:)](uialertviewdelegate/alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.

### Canceling

- [alertViewCancel(\_:)](uialertviewdelegate/alertviewcancel%28__%29.md): Deprecated. Sent to the delegate before an alert view is canceled.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.

# UIAlertViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst

The interface for the delegate of an alert view object.

> Use [UIAlertController](uialertcontroller.md) instead.

## Declaration

```objectivec
@protocol UIAlertViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The delegate implements the button actions and any other custom behavior. Some of the methods defined in this protocol are optional.

If you add your own buttons or customize the behavior of an alert view, implement a delegate conforming to this protocol to handle the corresponding delegate messages. Use the [delegate](uialertview/delegate.md) property of an alert view to specify one of your application objects as the delegate.

If you add your own buttons to an alert view, the delegate must implement the [alertView:clickedButtonAtIndex:](uialertviewdelegate/alertview%28__clickedbuttonat_%29.md) message to respond when those buttons are clicked; otherwise, your custom buttons do nothing. The alert view is automatically dismissed after the [alertView:clickedButtonAtIndex:](uialertviewdelegate/alertview%28__clickedbuttonat_%29.md) delegate method is invoked.

Optionally, you can implement the [alertViewCancel:](uialertviewdelegate/alertviewcancel%28__%29.md) method to take the appropriate action when the system cancels your alert view. If the delegate doesn’t implement this method, the default behavior is to simulate the user clicking the cancel button and closing the view.

You can also optionally augment the behavior of presenting and dismissing alert views using the methods in Customizing behavior.

## Topics

### Responding to actions

- [alertView:clickedButtonAtIndex:](uialertviewdelegate/alertview%28__clickedbuttonat_%29.md): Deprecated. Sent to the delegate when the user clicks a button on an alert view.

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton:](uialertviewdelegate/alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [willPresentAlertView:](uialertviewdelegate/willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresentAlertView:](uialertviewdelegate/didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView:willDismissWithButtonIndex:](uialertviewdelegate/alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.
- [alertView:didDismissWithButtonIndex:](uialertviewdelegate/alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.

### Canceling

- [alertViewCancel:](uialertviewdelegate/alertviewcancel%28__%29.md): Deprecated. Sent to the delegate before an alert view is canceled.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIAccelerometerDelegate](uiaccelerometerdelegate.md): Deprecated. The interface for receiving acceleration-related data from the system.
- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.
