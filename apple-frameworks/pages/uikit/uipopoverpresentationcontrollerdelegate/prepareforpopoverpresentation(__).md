> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontrollerdelegate/prepareforpopoverpresentation(_:)](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollerdelegate/prepareforpopoverpresentation(_:))

# prepareForPopoverPresentation(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate that the popover is about to be presented.

## Declaration

```swift
optional func prepareForPopoverPresentation(_ popoverPresentationController: UIPopoverPresentationController)
```

## Parameters

- `popoverPresentationController`: The popover presentation controller that is about to display the popover.

<a id="Discussion"></a>

## Discussion

Use this method to perform any last minute customizations of the popover appearance and behavior. At the time this method is called, the popover is not yet on the screen. You can use this method to modify the configuration of the popover presentation controller or perform any other actions that your app requires.

## See Also

### Presenting and dismissing the popover

- [popoverPresentationControllerShouldDismissPopover(\_:)](popoverpresentationcontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
- [popoverPresentationControllerDidDismissPopover(\_:)](popoverpresentationcontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.

# prepareForPopoverPresentation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Notifies the delegate that the popover is about to be presented.

## Declaration

```objectivec
- (void) prepareForPopoverPresentation:(UIPopoverPresentationController *) popoverPresentationController;
```

## Parameters

- `popoverPresentationController`: The popover presentation controller that is about to display the popover.

<a id="Discussion"></a>

## Discussion

Use this method to perform any last minute customizations of the popover appearance and behavior. At the time this method is called, the popover is not yet on the screen. You can use this method to modify the configuration of the popover presentation controller or perform any other actions that your app requires.

## See Also

### Presenting and dismissing the popover

- [popoverPresentationControllerShouldDismissPopover:](popoverpresentationcontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
- [popoverPresentationControllerDidDismissPopover:](popoverpresentationcontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.
