> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/selfsizinginvalidation-swift.enum/disabled](https://developer.apple.com/documentation/uikit/uitableview/selfsizinginvalidation-swift.enum/disabled)

# UITableView.SelfSizingInvalidation.disabled (Swift)

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

If you use this self-sizing invalidation mode, no sizing updates occur after calling [invalidateIntrinsicContentSize()](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uitableviewcell/contentview.md).

## See Also

### Constants

- [UITableView.SelfSizingInvalidation.enabled](enabled.md): A mode that enables manual self-sizing invalidation.
- [UITableView.SelfSizingInvalidation.enabledIncludingConstraints](enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.

# UITableViewSelfSizingInvalidationDisabled (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A mode that disables self-sizing invalidation.

## Declaration

```objectivec
UITableViewSelfSizingInvalidationDisabled
```

<a id="Discussion"></a>

## Discussion

If you use this self-sizing invalidation mode, no sizing updates occur after calling [invalidateIntrinsicContentSize](../../uiview/invalidateintrinsiccontentsize%28%29.md) on a self-sizing cell or its [contentView](../../uitableviewcell/contentview.md).

## See Also

### Constants

- [UITableViewSelfSizingInvalidationEnabled](enabled.md): A mode that enables manual self-sizing invalidation.
- [UITableViewSelfSizingInvalidationEnabledIncludingConstraints](enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.
