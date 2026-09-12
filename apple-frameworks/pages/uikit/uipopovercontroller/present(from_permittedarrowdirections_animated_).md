> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/present(from:permittedarrowdirections:animated:)](https://developer.apple.com/documentation/uikit/uipopovercontroller/present(from:permittedarrowdirections:animated:))

# present(from:permittedArrowDirections:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Displays the popover and anchors it to the specified bar button item.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
func present(from item: UIBarButtonItem, permittedArrowDirections arrowDirections: UIPopoverArrowDirection, animated: Bool)
```

## Parameters

- `item`: The bar button item on which to anchor the popover.
- `arrowDirections`: The arrow directions the popover is permitted to use. You can use this value to force the popover to be positioned on a specific side of the bar button item. However, it is generally better to specify [any](../uipopoverarrowdirection/any.md) and let the popover decide the best placement. You must not specify [unknown](../uipopoverarrowdirection/unknown.md) for this parameter.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the popover or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="Discussion"></a>

## Discussion

When presenting the popover, this method adds the toolbar that owns the button to the popover’s list of passthrough views. Thus, taps in the toolbar result in the action methods of the corresponding toolbar items being called. If you want the popover to be dismissed when a different toolbar item is tapped, you must implement that behavior in your action handler methods.

## See Also

### Presenting and dismissing the popover

- [present(from:in:permittedArrowDirections:animated:)](present%28from_in_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified location in the view.
- [dismiss(animated:)](dismiss%28animated_%29.md): Deprecated. Dismisses the popover programmatically.

# presentPopoverFromBarButtonItem:permittedArrowDirections:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Displays the popover and anchors it to the specified bar button item.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
- (void) presentPopoverFromBarButtonItem:(UIBarButtonItem *) item permittedArrowDirections:(UIPopoverArrowDirection) arrowDirections animated:(BOOL) animated;
```

## Parameters

- `item`: The bar button item on which to anchor the popover.
- `arrowDirections`: The arrow directions the popover is permitted to use. You can use this value to force the popover to be positioned on a specific side of the bar button item. However, it is generally better to specify [UIPopoverArrowDirectionAny](../uipopoverarrowdirection/any.md) and let the popover decide the best placement. You must not specify [UIPopoverArrowDirectionUnknown](../uipopoverarrowdirection/unknown.md) for this parameter.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the popover or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="Discussion"></a>

## Discussion

When presenting the popover, this method adds the toolbar that owns the button to the popover’s list of passthrough views. Thus, taps in the toolbar result in the action methods of the corresponding toolbar items being called. If you want the popover to be dismissed when a different toolbar item is tapped, you must implement that behavior in your action handler methods.

## See Also

### Presenting and dismissing the popover

- [presentPopoverFromRect:inView:permittedArrowDirections:animated:](present%28from_in_permittedarrowdirections_animated_%29.md): Deprecated. Displays the popover and anchors it to the specified location in the view.
- [dismissPopoverAnimated:](dismiss%28animated_%29.md): Deprecated. Dismisses the popover programmatically.
