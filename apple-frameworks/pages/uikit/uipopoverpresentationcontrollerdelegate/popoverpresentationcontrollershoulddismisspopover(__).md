> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollershoulddismisspopover(_:)](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollerdelegate/popoverpresentationcontrollershoulddismisspopover(_:))

# popoverPresentationControllerShouldDismissPopover(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate if the popover should be dismissed.

## Declaration

```swift
optional func popoverPresentationControllerShouldDismissPopover(_ popoverPresentationController: UIPopoverPresentationController) -> Bool
```

## Parameters

- `popoverPresentationController`: The popover presentation controller that is managing the popover interface.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the popover should be dismissed or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The popover presentation controller calls this method in response to user-initiated attempts to dismiss the popover. It is not called when you dismiss the popover programmatically using the [dismissModalViewControllerAnimated:](../uiviewcontroller/dismissmodalviewcontrolleranimated_.md) method.

If you do not implement this method in your delegate, the default return value is assumed to be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Presenting and dismissing the popover

- [prepareForPopoverPresentation(\_:)](prepareforpopoverpresentation%28__%29.md): Notifies the delegate that the popover is about to be presented.
- [popoverPresentationControllerDidDismissPopover(\_:)](popoverpresentationcontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.

# popoverPresentationControllerShouldDismissPopover: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate if the popover should be dismissed.

## Declaration

```objectivec
- (BOOL) popoverPresentationControllerShouldDismissPopover:(UIPopoverPresentationController *) popoverPresentationController;
```

## Parameters

- `popoverPresentationController`: The popover presentation controller that is managing the popover interface.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the popover should be dismissed or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The popover presentation controller calls this method in response to user-initiated attempts to dismiss the popover. It is not called when you dismiss the popover programmatically using the [dismissModalViewControllerAnimated:](../uiviewcontroller/dismissmodalviewcontrolleranimated_.md) method.

If you do not implement this method in your delegate, the default return value is assumed to be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Presenting and dismissing the popover

- [prepareForPopoverPresentation:](prepareforpopoverpresentation%28__%29.md): Notifies the delegate that the popover is about to be presented.
- [popoverPresentationControllerDidDismissPopover:](popoverpresentationcontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.
