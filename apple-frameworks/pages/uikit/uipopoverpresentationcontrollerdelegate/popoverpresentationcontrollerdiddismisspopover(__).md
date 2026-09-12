> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollerdiddismisspopover(_:)](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollerdiddismisspopover(_:))

# popoverPresentationControllerDidDismissPopover(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the popover was dismissed.

## Declaration

```swift
optional func popoverPresentationControllerDidDismissPopover(_ popoverPresentationController: UIPopoverPresentationController)
```

## Parameters

- `popoverPresentationController`: The popover presentation controller that is managing the popover interface.

<a id="Discussion"></a>

## Discussion

The popover presentation controller calls this method after dismissing the popover to let you know that it is no longer onscreen. The presentation controller calls this method only in response to user actions. It does not call this method if you dismiss the popover programmatically.

Use this method to incorporate any changes from the popover’s content view controller back into your app.

## See Also

### Presenting and dismissing the popover

- [prepareForPopoverPresentation(\_:)](prepareforpopoverpresentation%28__%29.md): Notifies the delegate that the popover is about to be presented.
- [popoverPresentationControllerShouldDismissPopover(\_:)](popoverpresentationcontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.

# popoverPresentationControllerDidDismissPopover: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the popover was dismissed.

## Declaration

```objectivec
- (void) popoverPresentationControllerDidDismissPopover:(UIPopoverPresentationController *) popoverPresentationController;
```

## Parameters

- `popoverPresentationController`: The popover presentation controller that is managing the popover interface.

<a id="Discussion"></a>

## Discussion

The popover presentation controller calls this method after dismissing the popover to let you know that it is no longer onscreen. The presentation controller calls this method only in response to user actions. It does not call this method if you dismiss the popover programmatically.

Use this method to incorporate any changes from the popover’s content view controller back into your app.

## See Also

### Presenting and dismissing the popover

- [prepareForPopoverPresentation:](prepareforpopoverpresentation%28__%29.md): Notifies the delegate that the popover is about to be presented.
- [popoverPresentationControllerShouldDismissPopover:](popoverpresentationcontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
