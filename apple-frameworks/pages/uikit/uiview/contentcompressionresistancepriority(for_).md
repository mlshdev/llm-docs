> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/contentcompressionresistancepriority(for:)](https://developer.apple.com/documentation/uikit/uiview/contentcompressionresistancepriority(for:))

# contentCompressionResistancePriority(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the priority with which a view resists being made smaller than its intrinsic size.

## Declaration

```swift
func contentCompressionResistancePriority(for axis: NSLayoutConstraint.Axis) -> UILayoutPriority
```

## Parameters

- `axis`: The axis of the view that might be reduced.

<a id="return-value"></a>

## Return Value

The priority with which the view should resist being compressed from its intrinsic size on the specified axis.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses these priorities when determining the best layout for views that are encountering constraints that would require them to be smaller than their intrinsic size.

Subclasses should not override this method. Instead, custom views should set default values for their content on creation, typically to `UILayoutPriorityDefaultLow` or `UILayoutPriorityDefaultHigh`.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFitting(\_:)](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [systemLayoutSizeFitting(\_:withHorizontalFittingPriority:verticalFittingPriority:)](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.

# contentCompressionResistancePriorityForAxis: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the priority with which a view resists being made smaller than its intrinsic size.

## Declaration

```objectivec
- (UILayoutPriority) contentCompressionResistancePriorityForAxis:(UILayoutConstraintAxis) axis;
```

## Parameters

- `axis`: The axis of the view that might be reduced.

<a id="return-value"></a>

## Return Value

The priority with which the view should resist being compressed from its intrinsic size on the specified axis.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses these priorities when determining the best layout for views that are encountering constraints that would require them to be smaller than their intrinsic size.

Subclasses should not override this method. Instead, custom views should set default values for their content on creation, typically to `UILayoutPriorityDefaultLow` or `UILayoutPriorityDefaultHigh`.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFittingSize:](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [setContentCompressionResistancePriority:forAxis:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForAxis:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forAxis:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
