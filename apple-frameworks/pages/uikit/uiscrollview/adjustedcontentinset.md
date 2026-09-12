> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/adjustedcontentinset](https://developer.apple.com/documentation/uikit/uiscrollview/adjustedcontentinset)

# adjustedContentInset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The insets derived from the content insets and the safe area of the scroll view.

## Declaration

```swift
var adjustedContentInset: UIEdgeInsets { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to obtain the adjusted area in which to draw content. The [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md) property determines whether the safe area insets are included in the adjustment. The safe area insets are then added to the values in the [contentInset](contentinset.md) property to obtain the final value of this property.

## See Also

### Managing the content inset behavior

- [contentInset](contentinset.md): The custom distance that the content view is inset from the safe area or scroll view edges.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md): The behavior for determining the adjusted content offsets.
- [UIScrollView.ContentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.enum.md): Constants indicating how safe area insets are added to the adjusted content inset.
- [adjustedContentInsetDidChange()](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.

# adjustedContentInset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The insets derived from the content insets and the safe area of the scroll view.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEdgeInsets adjustedContentInset;
```

<a id="Discussion"></a>

## Discussion

Use this property to obtain the adjusted area in which to draw content. The [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md) property determines whether the safe area insets are included in the adjustment. The safe area insets are then added to the values in the [contentInset](contentinset.md) property to obtain the final value of this property.

## See Also

### Managing the content inset behavior

- [contentInset](contentinset.md): The custom distance that the content view is inset from the safe area or scroll view edges.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md): The behavior for determining the adjusted content offsets.
- [UIScrollViewContentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.enum.md): Constants indicating how safe area insets are added to the adjusted content inset.
- [adjustedContentInsetDidChange](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.
