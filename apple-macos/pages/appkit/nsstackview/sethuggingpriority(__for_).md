> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/sethuggingpriority(_:for:)](https://developer.apple.com/documentation/appkit/nsstackview/sethuggingpriority(_:for:))

# setHuggingPriority(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

## Declaration

```swift
func setHuggingPriority(_ huggingPriority: NSLayoutConstraint.Priority, for orientation: NSLayoutConstraint.Orientation)
```

## Parameters

- `huggingPriority`: The Auto Layout priority for the stack view to minimize its size. The default value is [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). Other valid values are those in the [NSLayoutConstraint.Priority](../nslayoutconstraint/priority-swift.struct.md) enumeration.
- `orientation`: The horizontal or vertical user interface axis for which you’re setting the stack view’s hugging priority; one of the constants from the [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md) enumeration.

  - To specify horizontal-axis hugging for any stack view (whether it uses vertical or horizontal layout), use the [NSUserInterfaceLayoutOrientation.horizontal](../nsuserinterfacelayoutorientation/horizontal.md) constant.
  - To specify vertical-axis hugging for any stack view  (whether it uses vertical or horizontal layout), use the [NSUserInterfaceLayoutOrientation.vertical](../nsuserinterfacelayoutorientation/vertical.md) constant.

<a id="Discussion"></a>

## Discussion

This method lets you specify a different hugging priority for each user interface axis. The default value for hugging priority, on both user interface axes, is [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). If you have not added constraints between the stack view and its enclosing view, the stack view stays as small as possible to fully contain its views—independent of the size of the view that contains it.

To configure a stack view to grow and shrink according to the size of its enclosing view, add constraints between the stack view and its enclosing view by using Auto Layout priorities higher than the hugging priority.

To configure a stack view to prevent its enclosing view from growing, use priorities for the constraints between the stack view and its enclosing view that are lower than the hugging priority.

The value of the hugging priority also affects spacing between views and between gravity areas, as described in the discussion for the [spacing](spacing.md) property.

> **Note**

>  The hugging priority for a stack view behaves differently than the content hugging priority for a generic view as configured with the [NSView](../nsview.md) method [setContentHuggingPriority(\_:for:)](../nsview/setcontenthuggingpriority%28__for_%29.md). A stack view has no intrinsic content size and does not have a configurable content compression resistance. Calling the [setContentCompressionResistancePriority(\_:for:)](../nsview/setcontentcompressionresistancepriority%28__for_%29.md) method on a stack view has no effect.

## See Also

### Related Documentation

- [huggingPriority(for:)](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

### Configuring Dynamic Behavior for a Stack View

- [detachesHiddenViews](detacheshiddenviews.md): A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.
- [setClippingResistancePriority(\_:for:)](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

# setHuggingPriority:forOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

## Declaration

```objectivec
- (void) setHuggingPriority:(NSLayoutPriority) huggingPriority forOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `huggingPriority`: The Auto Layout priority for the stack view to minimize its size. The default value is [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). Other valid values are those in the [NSLayoutPriority](../nslayoutconstraint/priority-swift.struct.md) enumeration.
- `orientation`: The horizontal or vertical user interface axis for which you’re setting the stack view’s hugging priority; one of the constants from the [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md) enumeration.

  - To specify horizontal-axis hugging for any stack view (whether it uses vertical or horizontal layout), use the [NSUserInterfaceLayoutOrientationHorizontal](../nsuserinterfacelayoutorientation/horizontal.md) constant.
  - To specify vertical-axis hugging for any stack view  (whether it uses vertical or horizontal layout), use the [NSUserInterfaceLayoutOrientationVertical](../nsuserinterfacelayoutorientation/vertical.md) constant.

<a id="Discussion"></a>

## Discussion

This method lets you specify a different hugging priority for each user interface axis. The default value for hugging priority, on both user interface axes, is [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). If you have not added constraints between the stack view and its enclosing view, the stack view stays as small as possible to fully contain its views—independent of the size of the view that contains it.

To configure a stack view to grow and shrink according to the size of its enclosing view, add constraints between the stack view and its enclosing view by using Auto Layout priorities higher than the hugging priority.

To configure a stack view to prevent its enclosing view from growing, use priorities for the constraints between the stack view and its enclosing view that are lower than the hugging priority.

The value of the hugging priority also affects spacing between views and between gravity areas, as described in the discussion for the [spacing](spacing.md) property.

> **Note**

>  The hugging priority for a stack view behaves differently than the content hugging priority for a generic view as configured with the [NSView](../nsview.md) method [setContentHuggingPriority:forOrientation:](../nsview/setcontenthuggingpriority%28__for_%29.md). A stack view has no intrinsic content size and does not have a configurable content compression resistance. Calling the [setContentCompressionResistancePriority:forOrientation:](../nsview/setcontentcompressionresistancepriority%28__for_%29.md) method on a stack view has no effect.

## See Also

### Related Documentation

- [huggingPriorityForOrientation:](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

### Configuring Dynamic Behavior for a Stack View

- [detachesHiddenViews](detacheshiddenviews.md): A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.
- [setClippingResistancePriority:forOrientation:](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
