> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/clippingresistancepriority(for:)](https://developer.apple.com/documentation/appkit/nsstackview/clippingresistancepriority(for:))

# clippingResistancePriority(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

## Declaration

```swift
func clippingResistancePriority(for orientation: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Priority
```

## Parameters

- `orientation`: The stack view layout direction to which the clipping resistance priority applies.

<a id="return-value"></a>

## Return Value

A layout constraint priority that identifies the clipping resistance for the stack view.

<a id="Discussion"></a>

## Discussion

For an explanation of clipping resistance and how to use it for a stack view, see the [setClippingResistancePriority(\_:for:)](setclippingresistancepriority%28__for_%29.md) method.

## See Also

### Related Documentation

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [setClippingResistancePriority(\_:for:)](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [views(in:)](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [huggingPriority(for:)](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

# clippingResistancePriorityForOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

## Declaration

```objectivec
- (NSLayoutPriority) clippingResistancePriorityForOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `orientation`: The stack view layout direction to which the clipping resistance priority applies.

<a id="return-value"></a>

## Return Value

A layout constraint priority that identifies the clipping resistance for the stack view.

<a id="Discussion"></a>

## Discussion

For an explanation of clipping resistance and how to use it for a stack view, see the [setClippingResistancePriority:forOrientation:](setclippingresistancepriority%28__for_%29.md) method.

## See Also

### Related Documentation

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [setClippingResistancePriority:forOrientation:](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [viewsInGravity:](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [huggingPriorityForOrientation:](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.
