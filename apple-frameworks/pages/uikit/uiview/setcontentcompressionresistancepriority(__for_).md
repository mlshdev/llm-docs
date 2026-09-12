> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setcontentcompressionresistancepriority(_:for:)](https://developer.apple.com/documentation/uikit/uiview/setcontentcompressionresistancepriority(_:for:))

# setContentCompressionResistancePriority(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the priority with which a view resists being made smaller than its intrinsic size.

## Declaration

```swift
func setContentCompressionResistancePriority(_ priority: UILayoutPriority, for axis: NSLayoutConstraint.Axis)
```

## Parameters

- `priority`: The new priority.
- `axis`: The axis for which the compression resistance priority should be set.

<a id="Discussion"></a>

## Discussion

Custom views should set default values for both orientations on creation, based on their content, typically to `UILayoutPriorityDefaultLow` or `UILayoutPriorityDefaultHigh`. When creating user interfaces, the layout designer can modify these priorities for specific views when the overall layout design requires different tradeoffs than the natural priorities of the views being used in the interface.

Subclasses should not override this method.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFitting(\_:)](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [systemLayoutSizeFitting(\_:withHorizontalFittingPriority:verticalFittingPriority:)](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.

# setContentCompressionResistancePriority:forAxis: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the priority with which a view resists being made smaller than its intrinsic size.

## Declaration

```objectivec
- (void) setContentCompressionResistancePriority:(UILayoutPriority) priority forAxis:(UILayoutConstraintAxis) axis;
```

## Parameters

- `priority`: The new priority.
- `axis`: The axis for which the compression resistance priority should be set.

<a id="Discussion"></a>

## Discussion

Custom views should set default values for both orientations on creation, based on their content, typically to `UILayoutPriorityDefaultLow` or `UILayoutPriorityDefaultHigh`. When creating user interfaces, the layout designer can modify these priorities for specific views when the overall layout design requires different tradeoffs than the natural priorities of the views being used in the interface.

Subclasses should not override this method.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFittingSize:](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForAxis:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForAxis:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forAxis:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
