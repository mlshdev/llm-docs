> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontrollerdelegate](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollerdelegate)

# UIPopoverPresentationControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for a popover presentation delegate, which lets you customize the behavior of a popover-based presentation.

## Declaration

```swift
@MainActor protocol UIPopoverPresentationControllerDelegate : UIAdaptivePresentationControllerDelegate
```

<a id="overview"></a>

## Overview

A popover presentation controller notifies your delegate at appropriate points during the presentation process. You can use the delegate methods to customize this process and respond to changes dynamically.

After defining an object that adopts this protocol, assign that object to the [delegate](uipopoverpresentationcontroller/delegate.md) property of a [UIPopoverPresentationController](uipopoverpresentationcontroller.md) object. You must present a view controller using the [UIModalPresentationStyle.popover](uimodalpresentationstyle/popover.md) style before you can obtain such an object. For more information about popover presentation controllers, see [UIPopoverPresentationController](uipopoverpresentationcontroller.md).

## Topics

### Presenting and dismissing the popover

- [prepareForPopoverPresentation(\_:)](uipopoverpresentationcontrollerdelegate/prepareforpopoverpresentation%28__%29.md): Notifies the delegate that the popover is about to be presented.
- [popoverPresentationControllerShouldDismissPopover(\_:)](uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
- [popoverPresentationControllerDidDismissPopover(\_:)](uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.

### Repositioning the popover

- [popoverPresentationController(\_:willRepositionPopoverTo:in:)](uipopoverpresentationcontrollerdelegate/popoverpresentationcontroller%28__willrepositionpopoverto_in_%29.md): Tells the delegate that UIKit needs to reposition the popover’s location.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIAdaptivePresentationControllerDelegate](uiadaptivepresentationcontrollerdelegate.md)

## See Also

### Customizing the popover behavior

- [delegate](uipopoverpresentationcontroller/delegate.md): The delegate that handles popover-related messages.

# UIPopoverPresentationControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for a popover presentation delegate, which lets you customize the behavior of a popover-based presentation.

## Declaration

```objectivec
@protocol UIPopoverPresentationControllerDelegate <UIAdaptivePresentationControllerDelegate>
```

<a id="overview"></a>

## Overview

A popover presentation controller notifies your delegate at appropriate points during the presentation process. You can use the delegate methods to customize this process and respond to changes dynamically.

After defining an object that adopts this protocol, assign that object to the [delegate](uipopoverpresentationcontroller/delegate.md) property of a [UIPopoverPresentationController](uipopoverpresentationcontroller.md) object. You must present a view controller using the [UIModalPresentationPopover](uimodalpresentationstyle/popover.md) style before you can obtain such an object. For more information about popover presentation controllers, see [UIPopoverPresentationController](uipopoverpresentationcontroller.md).

## Topics

### Presenting and dismissing the popover

- [prepareForPopoverPresentation:](uipopoverpresentationcontrollerdelegate/prepareforpopoverpresentation%28__%29.md): Notifies the delegate that the popover is about to be presented.
- [popoverPresentationControllerShouldDismissPopover:](uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
- [popoverPresentationControllerDidDismissPopover:](uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.

### Repositioning the popover

- [popoverPresentationController:willRepositionPopoverToRect:inView:](uipopoverpresentationcontrollerdelegate/popoverpresentationcontroller%28__willrepositionpopoverto_in_%29.md): Tells the delegate that UIKit needs to reposition the popover’s location.

## Relationships

### Inherits From

- [UIAdaptivePresentationControllerDelegate](uiadaptivepresentationcontrollerdelegate.md)

## See Also

### Customizing the popover behavior

- [delegate](uipopoverpresentationcontroller/delegate.md): The delegate that handles popover-related messages.
