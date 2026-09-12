> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontrollerdelegate/popovercontrollershoulddismisspopover(_:)](https://developer.apple.com/documentation/uikit/uipopovercontrollerdelegate/popovercontrollershoulddismisspopover(_:))

# popoverControllerShouldDismissPopover(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Asks the delegate if the popover should be dismissed.

## Declaration

```swift
optional func popoverControllerShouldDismissPopover(_ popoverController: UIPopoverController) -> Bool
```

## Parameters

- `popoverController`: The popover controller to be dismissed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the popover should be dismissed or [false](https://developer.apple.com/documentation/swift/false) if it should remain visible.

<a id="Discussion"></a>

## Discussion

This method is called in response to user-initiated attempts to dismiss the popover. It is not called when you dismiss the popover using the [dismiss(animated:)](../uipopovercontroller/dismiss%28animated_%29.md) method of the popover controller.

If you do not implement this method in your delegate, the default return value is assumed to be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the popover’s dismissal

- [popoverControllerDidDismissPopover(\_:)](popovercontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.

# popoverControllerShouldDismissPopover: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Asks the delegate if the popover should be dismissed.

## Declaration

```objectivec
- (BOOL) popoverControllerShouldDismissPopover:(UIPopoverController *) popoverController;
```

## Parameters

- `popoverController`: The popover controller to be dismissed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the popover should be dismissed or [false](https://developer.apple.com/documentation/swift/false) if it should remain visible.

<a id="Discussion"></a>

## Discussion

This method is called in response to user-initiated attempts to dismiss the popover. It is not called when you dismiss the popover using the [dismissPopoverAnimated:](../uipopovercontroller/dismiss%28animated_%29.md) method of the popover controller.

If you do not implement this method in your delegate, the default return value is assumed to be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the popover’s dismissal

- [popoverControllerDidDismissPopover:](popovercontrollerdiddismisspopover%28__%29.md): Deprecated. Tells the delegate that the popover was dismissed.
