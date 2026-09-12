> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/dismiss(animated:)](https://developer.apple.com/documentation/uikit/uipopovercontroller/dismiss(animated:))

# dismiss(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Dismisses the popover programmatically.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
func dismiss(animated: Bool)
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the popover or [false](https://developer.apple.com/documentation/swift/false) to dismiss it immediately.

<a id="Discussion"></a>

## Discussion

You can use this method to dismiss the popover programmatically in response to taps inside the popover window. Taps outside of the popover’s contents automatically dismiss the popover.

## See Also

### Presenting and dismissing the popover

- [present(from:in:permittedArrowDirections:animated:)](present%28from_in_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified location in the view.
- [present(from:permittedArrowDirections:animated:)](present%28from_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified bar button item.

# dismissPopoverAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Dismisses the popover programmatically.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
- (void) dismissPopoverAnimated:(BOOL) animated;
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the popover or [false](https://developer.apple.com/documentation/swift/false) to dismiss it immediately.

<a id="Discussion"></a>

## Discussion

You can use this method to dismiss the popover programmatically in response to taps inside the popover window. Taps outside of the popover’s contents automatically dismiss the popover.

## See Also

### Presenting and dismissing the popover

- [presentPopoverFromRect:inView:permittedArrowDirections:animated:](present%28from_in_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified location in the view.
- [presentPopoverFromBarButtonItem:permittedArrowDirections:animated:](present%28from_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified bar button item.
