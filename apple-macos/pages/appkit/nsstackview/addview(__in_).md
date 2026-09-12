> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/addview(_:in:)](https://developer.apple.com/documentation/appkit/nsstackview/addview(_:in:))

# addView(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a view to the end of the stack view gravity area.

## Declaration

```swift
func addView(_ view: NSView, in gravity: NSStackView.Gravity)
```

## Parameters

- `view`: The view to add to the specified gravity area.
- `gravity`: The gravity area that you are adding the specified view to. Valid values are those in the [NSStackView.Gravity](gravity.md) enumeration.

<a id="Discussion"></a>

## Discussion

The location of a newly added view depends on the stack view layout direction and, for a horizontal stack view, on user interface language:

- *Horizontal*: A newly added view appears at the trailing edge of the specified gravity area, as determined by the value of the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property of the stack view. For a left to right language, a new view appears at the right side of the gravity area.
- *Vertical*: A newly added view appears at the bottom of the specified gravity area.

Calling this method updates the stack view’s layout, which can change the stack view size. As a result, views could detach or clip according to the clipping resistance of the stack view and the visibility priorities of its views.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. To respond to detachment and reattachment of views, implement an [NSStackViewDelegate](../nsstackviewdelegate.md) object and assign it to the [delegate](delegate.md) property.

## See Also

### Related Documentation

- [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [setClippingResistancePriority(\_:for:)](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Managing Views in Gravity Areas

- [insertView(\_:at:in:)](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews(\_:in:)](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView(\_:)](removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackView.Gravity](gravity.md): The gravity areas available in a stack view.

# addView:inGravity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a view to the end of the stack view gravity area.

## Declaration

```objectivec
- (void) addView:(NSView *) view inGravity:(NSStackViewGravity) gravity;
```

## Parameters

- `view`: The view to add to the specified gravity area.
- `gravity`: The gravity area that you are adding the specified view to. Valid values are those in the [NSStackViewGravity](gravity.md) enumeration.

<a id="Discussion"></a>

## Discussion

The location of a newly added view depends on the stack view layout direction and, for a horizontal stack view, on user interface language:

- *Horizontal*: A newly added view appears at the trailing edge of the specified gravity area, as determined by the value of the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property of the stack view. For a left to right language, a new view appears at the right side of the gravity area.
- *Vertical*: A newly added view appears at the bottom of the specified gravity area.

Calling this method updates the stack view’s layout, which can change the stack view size. As a result, views could detach or clip according to the clipping resistance of the stack view and the visibility priorities of its views.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. To respond to detachment and reattachment of views, implement an [NSStackViewDelegate](../nsstackviewdelegate.md) object and assign it to the [delegate](delegate.md) property.

## See Also

### Related Documentation

- [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [setClippingResistancePriority:forOrientation:](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Managing Views in Gravity Areas

- [insertView:atIndex:inGravity:](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews:inGravity:](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView:](removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackViewGravity](gravity.md): The gravity areas available in a stack view.
