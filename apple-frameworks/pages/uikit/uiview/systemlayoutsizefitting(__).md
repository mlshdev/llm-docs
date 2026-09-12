> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/systemlayoutsizefitting(_:)](https://developer.apple.com/documentation/uikit/uiview/systemlayoutsizefitting(_:))

# systemLayoutSizeFitting(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the optimal size of the view based on its current constraints.

## Declaration

```swift
func systemLayoutSizeFitting(_ targetSize: CGSize) -> CGSize
```

## Parameters

- `targetSize`: The size that you prefer for the view. To obtain a view that is as small as possible, specify the constant [layoutFittingCompressedSize](layoutfittingcompressedsize.md). To obtain a view that is as large as possible, specify the constant [layoutFittingExpandedSize](layoutfittingexpandedsize.md).

<a id="return-value"></a>

## Return Value

The optimal size for the view.

<a id="Discussion"></a>

## Discussion

This method returns a size value for the view that optimally satisfies the view’s current constraints and is as close to the value in the `targetSize` parameter as possible. This method does not actually change the size of the view.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFitting(\_:withHorizontalFittingPriority:verticalFittingPriority:)](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.

# systemLayoutSizeFittingSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the optimal size of the view based on its current constraints.

## Declaration

```objectivec
- (CGSize) systemLayoutSizeFittingSize:(CGSize) targetSize;
```

## Parameters

- `targetSize`: The size that you prefer for the view. To obtain a view that is as small as possible, specify the constant [UILayoutFittingCompressedSize](layoutfittingcompressedsize.md). To obtain a view that is as large as possible, specify the constant [UILayoutFittingExpandedSize](layoutfittingexpandedsize.md).

<a id="return-value"></a>

## Return Value

The optimal size for the view.

<a id="Discussion"></a>

## Discussion

This method returns a size value for the view that optimally satisfies the view’s current constraints and is as close to the value in the `targetSize` parameter as possible. This method does not actually change the size of the view.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:](systemlayoutsizefitting%28__withhorizontalfittingpriority_verticalfittingpriority_%29.md): Returns the optimal size of the view based on its constraints and the specified fitting priorities.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForAxis:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forAxis:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForAxis:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forAxis:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
