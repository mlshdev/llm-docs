> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/setclippingresistancepriority(_:for:)](https://developer.apple.com/documentation/appkit/nsstackview/setclippingresistancepriority(_:for:))

# setClippingResistancePriority(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

## Declaration

```swift
func setClippingResistancePriority(_ clippingResistancePriority: NSLayoutConstraint.Priority, for orientation: NSLayoutConstraint.Orientation)
```

## Parameters

- `clippingResistancePriority`: The clipping resistance Auto Layout priority you want to apply to the stack view for a given user interface axis. The default value is [required](../nslayoutconstraint/priority-swift.struct/required.md), which disallows clipping. Other valid values are those in the [NSLayoutConstraint.Priority](../nslayoutconstraint/priority-swift.struct.md) enumeration.
- `orientation`: The horizontal or vertical user interface axis that the clipping resistance priority applies to; one of the constants from the [NSLayoutConstraint.Orientation](../nslayoutconstraint/orientation.md) enumeration.

<a id="Discussion"></a>

## Discussion

A clipped view is one that is partially hidden beyond the border of its enclosing stack view. When Auto Layout attempts to reduce the stack view’s size (such as when a user attempts to reduce the size of the enclosing window), causing a view to no longer fit, the stack view clips or detaches the view, or else prevents further reduction of the stack view’s size.

To allow view clipping, set a clipping resistance lower than the default value of NSLayoutPriorityRequired and set the visibility priority of all the stack view’s views to [mustHold](visibilitypriority/musthold.md).

To ensure that views detach rather than clip, lower the clipping resistance for the stack view to a value less than the default of [required](../nslayoutconstraint/priority-swift.struct/required.md) and set the visibility priority for at least one view to a value less than [mustHold](visibilitypriority/musthold.md).

If you disallow view clipping and disallow view detachment, which is the default behavior for a stack view, Auto Layout prevents the stack view from being reduced in size beyond the minimum needed to show all of its views.

Clipping begins from the right and bottom sides of a stack view.

## See Also

### Related Documentation

- [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [clippingResistancePriority(for:)](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Configuring Dynamic Behavior for a Stack View

- [detachesHiddenViews](detacheshiddenviews.md): A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.
- [setHuggingPriority(\_:for:)](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

# setClippingResistancePriority:forOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

## Declaration

```objectivec
- (void) setClippingResistancePriority:(NSLayoutPriority) clippingResistancePriority forOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `clippingResistancePriority`: The clipping resistance Auto Layout priority you want to apply to the stack view for a given user interface axis. The default value is [NSLayoutPriorityRequired](../nslayoutconstraint/priority-swift.struct/required.md), which disallows clipping. Other valid values are those in the [NSLayoutPriority](../nslayoutconstraint/priority-swift.struct.md) enumeration.
- `orientation`: The horizontal or vertical user interface axis that the clipping resistance priority applies to; one of the constants from the [NSLayoutConstraintOrientation](../nslayoutconstraint/orientation.md) enumeration.

<a id="Discussion"></a>

## Discussion

A clipped view is one that is partially hidden beyond the border of its enclosing stack view. When Auto Layout attempts to reduce the stack view’s size (such as when a user attempts to reduce the size of the enclosing window), causing a view to no longer fit, the stack view clips or detaches the view, or else prevents further reduction of the stack view’s size.

To allow view clipping, set a clipping resistance lower than the default value of NSLayoutPriorityRequired and set the visibility priority of all the stack view’s views to [NSStackViewVisibilityPriorityMustHold](visibilitypriority/musthold.md).

To ensure that views detach rather than clip, lower the clipping resistance for the stack view to a value less than the default of [NSLayoutPriorityRequired](../nslayoutconstraint/priority-swift.struct/required.md) and set the visibility priority for at least one view to a value less than [NSStackViewVisibilityPriorityMustHold](visibilitypriority/musthold.md).

If you disallow view clipping and disallow view detachment, which is the default behavior for a stack view, Auto Layout prevents the stack view from being reduced in size beyond the minimum needed to show all of its views.

Clipping begins from the right and bottom sides of a stack view.

## See Also

### Related Documentation

- [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [clippingResistancePriorityForOrientation:](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.

### Configuring Dynamic Behavior for a Stack View

- [detachesHiddenViews](detacheshiddenviews.md): A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.
- [setHuggingPriority:forOrientation:](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.
