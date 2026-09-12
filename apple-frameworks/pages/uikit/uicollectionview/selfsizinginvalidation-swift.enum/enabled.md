> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/selfsizinginvalidation-swift.enum/enabled](https://developer.apple.com/documentation/uikit/uicollectionview/selfsizinginvalidation-swift.enum/enabled)

# UICollectionView.SelfSizingInvalidation.enabled (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A mode that enables manual self-sizing invalidation.

## Declaration

```swift
case enabled
```

<a id="Discussion"></a>

## Discussion

If you use this self-sizing invalidation mode, calling [invalidateIntrinsicContentSize()](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uicollectionviewcell/contentview.md) causes the cell to resize if necessary.

## See Also

### Constants

- [UICollectionView.SelfSizingInvalidation.disabled](disabled.md): A mode that disables self-sizing invalidation.
- [UICollectionView.SelfSizingInvalidation.enabledIncludingConstraints](enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.

# UICollectionViewSelfSizingInvalidationEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A mode that enables manual self-sizing invalidation.

## Declaration

```objectivec
UICollectionViewSelfSizingInvalidationEnabled
```

<a id="Discussion"></a>

## Discussion

If you use this self-sizing invalidation mode, calling [invalidateIntrinsicContentSize](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uicollectionviewcell/contentview.md) causes the cell to resize if necessary.

## See Also

### Constants

- [UICollectionViewSelfSizingInvalidationDisabled](disabled.md): A mode that disables self-sizing invalidation.
- [UICollectionViewSelfSizingInvalidationEnabledIncludingConstraints](enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.
