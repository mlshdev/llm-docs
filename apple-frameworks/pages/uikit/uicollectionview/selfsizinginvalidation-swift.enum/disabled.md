> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/selfsizinginvalidation-swift.enum/disabled](https://developer.apple.com/documentation/uikit/uicollectionview/selfsizinginvalidation-swift.enum/disabled)

# UICollectionView.SelfSizingInvalidation.disabled (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A mode that disables self-sizing invalidation.

## Declaration

```swift
case disabled
```

<a id="Discussion"></a>

## Discussion

If you use this self-sizing invalidation mode, no sizing updates occur after calling [invalidateIntrinsicContentSize()](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uicollectionviewcell/contentview.md).

## See Also

### Constants

- [UICollectionView.SelfSizingInvalidation.enabled](enabled.md): A mode that enables manual self-sizing invalidation.
- [UICollectionView.SelfSizingInvalidation.enabledIncludingConstraints](enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.

# UICollectionViewSelfSizingInvalidationDisabled (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A mode that disables self-sizing invalidation.

## Declaration

```objectivec
UICollectionViewSelfSizingInvalidationDisabled
```

<a id="Discussion"></a>

## Discussion

If you use this self-sizing invalidation mode, no sizing updates occur after calling [invalidateIntrinsicContentSize](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uicollectionviewcell/contentview.md).

## See Also

### Constants

- [UICollectionViewSelfSizingInvalidationEnabled](enabled.md): A mode that enables manual self-sizing invalidation.
- [UICollectionViewSelfSizingInvalidationEnabledIncludingConstraints](enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.
