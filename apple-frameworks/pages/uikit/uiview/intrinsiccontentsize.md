> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/intrinsiccontentsize](https://developer.apple.com/documentation/uikit/uiview/intrinsiccontentsize)

# intrinsicContentSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The natural size for the receiving view, considering only properties of the view itself.

## Declaration

```swift
var intrinsicContentSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

Custom views typically have content that they display of which the layout system is unaware. Setting this property allows a custom view to communicate to the layout system what size it would like to be based on its content. This intrinsic size must be independent of the content frame, because there’s no way to dynamically communicate a changed width to the layout system based on a changed height, for example.

If a custom view has no intrinsic size for a given dimension, it can use [noIntrinsicMetric](nointrinsicmetric.md) for that dimension.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFitting(\_:)](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [systemLayoutSizeFitting(\_:withHorizontalFittingPriority:verticalFittingPriority:)](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.

# intrinsicContentSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The natural size for the receiving view, considering only properties of the view itself.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize intrinsicContentSize;
```

<a id="Discussion"></a>

## Discussion

Custom views typically have content that they display of which the layout system is unaware. Setting this property allows a custom view to communicate to the layout system what size it would like to be based on its content. This intrinsic size must be independent of the content frame, because there’s no way to dynamically communicate a changed width to the layout system based on a changed height, for example.

If a custom view has no intrinsic size for a given dimension, it can use [UIViewNoIntrinsicMetric](nointrinsicmetric.md) for that dimension.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFittingSize:](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForAxis:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forAxis:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForAxis:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forAxis:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
