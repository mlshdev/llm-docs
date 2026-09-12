> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/contentinset](https://developer.apple.com/documentation/uikit/uiscrollview/contentinset)

# contentInset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom distance that the content view is inset from the safe area or scroll view edges.

## Declaration

```swift
var contentInset: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to extend the space between your content and the edges of the content view. The unit of size is points. The default value is [zero](../uiedgeinsets/zero.md).

By default, UIKit automatically adjusts the content inset to account for overlapping bars. You use this property to extend that distance even further, perhaps to accommodate your own custom content. Get the total adjustment — the safe area plus your custom insets — using the [adjustedContentInset](adjustedcontentinset.md) property. To change how the safe area is applied, modify the [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md) property.

## See Also

### Managing the content inset behavior

- [adjustedContentInset](adjustedcontentinset.md): The insets derived from the content insets and the safe area of the scroll view.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md): The behavior for determining the adjusted content offsets.
- [UIScrollView.ContentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.enum.md): Constants indicating how safe area insets are added to the adjusted content inset.
- [adjustedContentInsetDidChange()](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.

# contentInset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom distance that the content view is inset from the safe area or scroll view edges.

## Declaration

```objectivec
@property (nonatomic) UIEdgeInsets contentInset;
```

<a id="Discussion"></a>

## Discussion

Use this property to extend the space between your content and the edges of the content view. The unit of size is points. The default value is [UIEdgeInsetsZero](../uiedgeinsets/zero.md).

By default, UIKit automatically adjusts the content inset to account for overlapping bars. You use this property to extend that distance even further, perhaps to accommodate your own custom content. Get the total adjustment — the safe area plus your custom insets — using the [adjustedContentInset](adjustedcontentinset.md) property. To change how the safe area is applied, modify the [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md) property.

## See Also

### Managing the content inset behavior

- [adjustedContentInset](adjustedcontentinset.md): The insets derived from the content insets and the safe area of the scroll view.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md): The behavior for determining the adjusted content offsets.
- [UIScrollViewContentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.enum.md): Constants indicating how safe area insets are added to the adjusted content inset.
- [adjustedContentInsetDidChange](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.
