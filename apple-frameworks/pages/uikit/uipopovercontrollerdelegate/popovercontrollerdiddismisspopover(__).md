> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontrollerdelegate/popovercontrollerdiddismisspopover(_:)](https://developer.apple.com/documentation/uikit/uipopovercontrollerdelegate/popovercontrollerdiddismisspopover(_:))

# popoverControllerDidDismissPopover(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Tells the delegate that the popover was dismissed.

## Declaration

```swift
optional func popoverControllerDidDismissPopover(_ popoverController: UIPopoverController)
```

## Parameters

- `popoverController`: The popover controller that was dismissed.

<a id="Discussion"></a>

## Discussion

The popover controller does not call this method in response to programmatic calls to the [dismiss(animated:)](../uipopovercontroller/dismiss%28animated_%29.md) method. If you dismiss the popover programmatically, you should perform any cleanup actions immediately after calling the [dismiss(animated:)](../uipopovercontroller/dismiss%28animated_%29.md) method.

You can use this method to incorporate any changes from the popover’s content view controller back into your application. If you do not plan to use the object in the `popoverController` parameter again, it is safe to release it from this method.

## See Also

### Managing the popover’s dismissal

- [popoverControllerShouldDismissPopover(\_:)](popovercontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.

# popoverControllerDidDismissPopover: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Tells the delegate that the popover was dismissed.

## Declaration

```objectivec
- (void) popoverControllerDidDismissPopover:(UIPopoverController *) popoverController;
```

## Parameters

- `popoverController`: The popover controller that was dismissed.

<a id="Discussion"></a>

## Discussion

The popover controller does not call this method in response to programmatic calls to the [dismissPopoverAnimated:](../uipopovercontroller/dismiss%28animated_%29.md) method. If you dismiss the popover programmatically, you should perform any cleanup actions immediately after calling the [dismissPopoverAnimated:](../uipopovercontroller/dismiss%28animated_%29.md) method.

You can use this method to incorporate any changes from the popover’s content view controller back into your application. If you do not plan to use the object in the `popoverController` parameter again, it is safe to release it from this method.

## See Also

### Managing the popover’s dismissal

- [popoverControllerShouldDismissPopover:](popovercontrollershoulddismisspopover%28__%29.md): Deprecated. Asks the delegate if the popover should be dismissed.
