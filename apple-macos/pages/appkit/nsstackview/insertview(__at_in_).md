> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/insertview(_:at:in:)](https://developer.apple.com/documentation/appkit/nsstackview/insertview(_:at:in:))

# insertView(\_:at:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a view to a stack view gravity area at a specified index position.

## Declaration

```swift
func insertView(_ view: NSView, at index: Int, in gravity: NSStackView.Gravity)
```

## Parameters

- `view`: The view to add to the specified gravity area.
- `index`: The index position, within the gravity area, for the new view. The position of index `0` depends on the stack view layout direction and, for a horizontal stack view, on the user interface layout direction:

  - *Horizontal*: The `0` index for a gravity area is at the leading side, as determined by the value of the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property of the stack view. For a left to right language, index `0` is at the left of the gravity area.
  - *Vertical*: The `0` index for a gravity area is at the top.

  See the [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md) property and the [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) method.

  > **Important**

  >  If you specify an out-of-bounds value for the `index` parameter, the system raises an [rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception) exception.
- `gravity`: The gravity area that you are adding the specified view to. Valid values are those in the [NSStackView.Gravity](gravity.md) enumeration.

<a id="Discussion"></a>

## Discussion

Calling this method updates the stack view’s layout, which can change the stack view size. As a result, views could detach or clip according to the clipping resistance of the stack view and the visibility priorities of its views.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. To respond to detachment and reattachment of views, implement an [NSStackViewDelegate](../nsstackviewdelegate.md) object and assign it to the [delegate](delegate.md) property.

## See Also

### Related Documentation

- [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [setClippingResistancePriority(\_:for:)](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Managing Views in Gravity Areas

- [addView(\_:in:)](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [setViews(\_:in:)](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView(\_:)](removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackView.Gravity](gravity.md): The gravity areas available in a stack view.

# insertView:atIndex:inGravity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a view to a stack view gravity area at a specified index position.

## Declaration

```objectivec
- (void) insertView:(NSView *) view atIndex:(NSUInteger) index inGravity:(NSStackViewGravity) gravity;
```

## Parameters

- `view`: The view to add to the specified gravity area.
- `index`: The index position, within the gravity area, for the new view. The position of index `0` depends on the stack view layout direction and, for a horizontal stack view, on the user interface layout direction:

  - *Horizontal*: The `0` index for a gravity area is at the leading side, as determined by the value of the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property of the stack view. For a left to right language, index `0` is at the left of the gravity area.
  - *Vertical*: The `0` index for a gravity area is at the top.

  See the [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md) property and the [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) method.

  > **Important**

  >  If you specify an out-of-bounds value for the `index` parameter, the system raises an [NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception) exception.
- `gravity`: The gravity area that you are adding the specified view to. Valid values are those in the [NSStackViewGravity](gravity.md) enumeration.

<a id="Discussion"></a>

## Discussion

Calling this method updates the stack view’s layout, which can change the stack view size. As a result, views could detach or clip according to the clipping resistance of the stack view and the visibility priorities of its views.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. To respond to detachment and reattachment of views, implement an [NSStackViewDelegate](../nsstackviewdelegate.md) object and assign it to the [delegate](delegate.md) property.

## See Also

### Related Documentation

- [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [setClippingResistancePriority:forOrientation:](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Managing Views in Gravity Areas

- [addView:inGravity:](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [setViews:inGravity:](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView:](removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackViewGravity](gravity.md): The gravity areas available in a stack view.
