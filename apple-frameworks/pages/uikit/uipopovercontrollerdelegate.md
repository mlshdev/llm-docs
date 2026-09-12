> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontrollerdelegate](https://developer.apple.com/documentation/uikit/uipopovercontrollerdelegate)

# UIPopoverControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface for the delegate of a popover controller object.

> In iOS 9 and later, a popover is implemented as a [UIViewController](uiviewcontroller.md) presentation. To create a popover, use [UIPopoverPresentationController](uipopoverpresentationcontroller.md) and specify the [UIModalPresentationStyle.popover](uimodalpresentationstyle/popover.md) style.

## Declaration

```swift
@MainActor protocol UIPopoverControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Popover controllers notify their delegate whenever user interactions would cause the dismissal of the popover and, in some cases, give the user a chance to prevent that dismissal.

For more information about the [UIPopoverController](uipopovercontroller.md) class, see [UIPopoverController](uipopovercontroller.md).

## Topics

### Responding to popover position changes

- [popoverController(\_:willRepositionPopoverTo:in:)](uipopovercontrollerdelegate/popovercontroller%28__willrepositionpopoverto_in_%29.md): Deprecated. Tells the delegate that the popover controller needs to change the popover’s location in its view.

### Managing the popover’s dismissal

- [popoverControllerShouldDismissPopover(\_:)](uipopovercontrollerdelegate/popovercontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
- [popoverControllerDidDismissPopover(\_:)](uipopovercontrollerdelegate/popovercontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.

# UIPopoverControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface for the delegate of a popover controller object.

> In iOS 9 and later, a popover is implemented as a [UIViewController](uiviewcontroller.md) presentation. To create a popover, use [UIPopoverPresentationController](uipopoverpresentationcontroller.md) and specify the [UIModalPresentationPopover](uimodalpresentationstyle/popover.md) style.

## Declaration

```objectivec
@protocol UIPopoverControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Popover controllers notify their delegate whenever user interactions would cause the dismissal of the popover and, in some cases, give the user a chance to prevent that dismissal.

For more information about the [UIPopoverController](uipopovercontroller.md) class, see [UIPopoverController](uipopovercontroller.md).

## Topics

### Responding to popover position changes

- [popoverController:willRepositionPopoverToRect:inView:](uipopovercontrollerdelegate/popovercontroller%28__willrepositionpopoverto_in_%29.md): Deprecated. Tells the delegate that the popover controller needs to change the popover’s location in its view.

### Managing the popover’s dismissal

- [popoverControllerShouldDismissPopover:](uipopovercontrollerdelegate/popovercontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
- [popoverControllerDidDismissPopover:](uipopovercontrollerdelegate/popovercontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIAccelerometerDelegate](uiaccelerometerdelegate.md): Deprecated. The interface for receiving acceleration-related data from the system.
- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.
