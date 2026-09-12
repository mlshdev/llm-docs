> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/systemlayoutsizefitting(_:withhorizontalfittingpriority:verticalfittingpriority:)](https://developer.apple.com/documentation/uikit/uiview/systemlayoutsizefitting(_:withhorizontalfittingpriority:verticalfittingpriority:))

# systemLayoutSizeFitting(\_:withHorizontalFittingPriority:verticalFittingPriority:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the optimal size of the view based on its constraints and the specified fitting priorities.

## Declaration

```swift
func systemLayoutSizeFitting(_ targetSize: CGSize, withHorizontalFittingPriority horizontalFittingPriority: UILayoutPriority, verticalFittingPriority: UILayoutPriority) -> CGSize
```

## Parameters

- `targetSize`: The size that you prefer for the view. To obtain a view that is as small as possible, specify the constant [layoutFittingCompressedSize](layoutfittingcompressedsize.md). To obtain a view that is as large as possible, specify the constant [layoutFittingExpandedSize](layoutfittingexpandedsize.md).
- `horizontalFittingPriority`: The priority for horizontal constraints. Specify [fittingSizeLevel](../uilayoutpriority/fittingsizelevel.md) to get a width that is as close as possible to the width value of `targetSize`.
- `verticalFittingPriority`: The priority for vertical constraints. Specify [fittingSizeLevel](../uilayoutpriority/fittingsizelevel.md) to get a height that is as close as possible to the height value of `targetSize`.

<a id="return-value"></a>

## Return Value

The optimal size for the view based on the provided constraint priorities.

<a id="Discussion"></a>

## Discussion

Use this method when you want to prioritize the view’s constraints when determining the best possible size of the view.  This method does not actually change the size of the view.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFitting(\_:)](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.

# systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the optimal size of the view based on its constraints and the specified fitting priorities.

## Declaration

```objectivec
- (CGSize) systemLayoutSizeFittingSize:(CGSize) targetSize withHorizontalFittingPriority:(UILayoutPriority) horizontalFittingPriority verticalFittingPriority:(UILayoutPriority) verticalFittingPriority;
```

## Parameters

- `targetSize`: The size that you prefer for the view. To obtain a view that is as small as possible, specify the constant [UILayoutFittingCompressedSize](layoutfittingcompressedsize.md). To obtain a view that is as large as possible, specify the constant [UILayoutFittingExpandedSize](layoutfittingexpandedsize.md).
- `horizontalFittingPriority`: The priority for horizontal constraints. Specify [UILayoutPriorityFittingSizeLevel](../uilayoutpriority/fittingsizelevel.md) to get a width that is as close as possible to the width value of `targetSize`.
- `verticalFittingPriority`: The priority for vertical constraints. Specify [UILayoutPriorityFittingSizeLevel](../uilayoutpriority/fittingsizelevel.md) to get a height that is as close as possible to the height value of `targetSize`.

<a id="return-value"></a>

## Return Value

The optimal size for the view based on the provided constraint priorities.

<a id="Discussion"></a>

## Discussion

Use this method when you want to prioritize the view’s constraints when determining the best possible size of the view.  This method does not actually change the size of the view.

## See Also

### Measuring in Auto Layout

- [systemLayoutSizeFittingSize:](systemlayoutsizefitting%28__%29.md): Returns the optimal size of the view based on its current constraints.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForAxis:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forAxis:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForAxis:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forAxis:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
