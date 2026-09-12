> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/present(from:in:permittedarrowdirections:animated:)](https://developer.apple.com/documentation/uikit/uipopovercontroller/present(from:in:permittedarrowdirections:animated:))

# present(from:in:permittedArrowDirections:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Displays the popover and anchors it to the specified location in the view.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
func present(from rect: CGRect, in view: UIView, permittedArrowDirections arrowDirections: UIPopoverArrowDirection, animated: Bool)
```

## Parameters

- `rect`: The rectangle in view at which to anchor the popover window.
- `view`: The view containing the anchor rectangle for the popover.
- `arrowDirections`: The arrow directions the popover is permitted to use. You can use this value to force the popover to be positioned on a specific side of the rectangle. However, it is generally better to specify [any](../uipopoverarrowdirection/any.md) and let the popover decide the best placement. You must not specify [unknown](../uipopoverarrowdirection/unknown.md) for this parameter.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the popover or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

## See Also

### Presenting and dismissing the popover

- [present(from:permittedArrowDirections:animated:)](present%28from_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified bar button item.
- [dismiss(animated:)](dismiss%28animated_%29.md): Deprecated. Dismisses the popover programmatically.

# presentPopoverFromRect:inView:permittedArrowDirections:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Displays the popover and anchors it to the specified location in the view.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
- (void) presentPopoverFromRect:(CGRect) rect inView:(UIView *) view permittedArrowDirections:(UIPopoverArrowDirection) arrowDirections animated:(BOOL) animated;
```

## Parameters

- `rect`: The rectangle in view at which to anchor the popover window.
- `view`: The view containing the anchor rectangle for the popover.
- `arrowDirections`: The arrow directions the popover is permitted to use. You can use this value to force the popover to be positioned on a specific side of the rectangle. However, it is generally better to specify [UIPopoverArrowDirectionAny](../uipopoverarrowdirection/any.md) and let the popover decide the best placement. You must not specify [UIPopoverArrowDirectionUnknown](../uipopoverarrowdirection/unknown.md) for this parameter.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the popover or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

## See Also

### Presenting and dismissing the popover

- [presentPopoverFromBarButtonItem:permittedArrowDirections:animated:](present%28from_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified bar button item.
- [dismissPopoverAnimated:](dismiss%28animated_%29.md): Deprecated. Dismisses the popover programmatically.
