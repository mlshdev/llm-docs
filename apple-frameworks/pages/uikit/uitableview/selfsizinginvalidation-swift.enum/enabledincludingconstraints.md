> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/selfsizinginvalidation-swift.enum/enabledincludingconstraints](https://developer.apple.com/documentation/uikit/uitableview/selfsizinginvalidation-swift.enum/enabledincludingconstraints)

# UITableView.SelfSizingInvalidation.enabledIncludingConstraints (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A mode that enables automatic self-sizing invalidation after Auto Layout changes.

## Declaration

```swift
case enabledIncludingConstraints
```

<a id="Discussion"></a>

## Discussion

If you use this self-sizing invalidation mode, calling [invalidateIntrinsicContentSize()](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uitableviewcell/contentview.md) causes the cell to resize if necessary. Additionally, any Auto Layout change within the [contentView](../../uitableviewcell/contentview.md) of a self-sizing cell automatically calls [invalidateIntrinsicContentSize()](../../uiview/invalidateintrinsiccontentsize%28%29.md).

## See Also

### Constants

- [UITableView.SelfSizingInvalidation.disabled](disabled.md): A mode that disables self-sizing invalidation.
- [UITableView.SelfSizingInvalidation.enabled](enabled.md): A mode that enables manual self-sizing invalidation.

# UITableViewSelfSizingInvalidationEnabledIncludingConstraints (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A mode that enables automatic self-sizing invalidation after Auto Layout changes.

## Declaration

```objectivec
UITableViewSelfSizingInvalidationEnabledIncludingConstraints
```

<a id="Discussion"></a>

## Discussion

If you use this self-sizing invalidation mode, calling [invalidateIntrinsicContentSize](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uitableviewcell/contentview.md) causes the cell to resize if necessary. Additionally, any Auto Layout change within the [contentView](../../uitableviewcell/contentview.md) of a self-sizing cell automatically calls [invalidateIntrinsicContentSize](../../uiview/invalidateintrinsiccontentsize%28%29.md).

## See Also

### Constants

- [UITableViewSelfSizingInvalidationDisabled](disabled.md): A mode that disables self-sizing invalidation.
- [UITableViewSelfSizingInvalidationEnabled](enabled.md): A mode that enables manual self-sizing invalidation.
