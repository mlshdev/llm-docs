> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/huggingpriority(for:)](https://developer.apple.com/documentation/appkit/nsstackview/huggingpriority(for:))

# huggingPriority(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

## Declaration

```swift
func huggingPriority(for orientation: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Priority
```

## Parameters

- `orientation`: The user interface axis (horizontal or vertical) whose hugging priority you want to get from the stack view. Valid values are those in the [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md) enumeration.

<a id="return-value"></a>

## Return Value

The Auto Layout priority for the stack view to minimize its size.

## See Also

### Related Documentation

- [setHuggingPriority(\_:for:)](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [views(in:)](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriority(for:)](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

# huggingPriorityForOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

## Declaration

```objectivec
- (NSLayoutPriority) huggingPriorityForOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `orientation`: The user interface axis (horizontal or vertical) whose hugging priority you want to get from the stack view. Valid values are those in the [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md) enumeration.

<a id="return-value"></a>

## Return Value

The Auto Layout priority for the stack view to minimize its size.

## See Also

### Related Documentation

- [setHuggingPriority:forOrientation:](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [viewsInGravity:](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriorityForOrientation:](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
