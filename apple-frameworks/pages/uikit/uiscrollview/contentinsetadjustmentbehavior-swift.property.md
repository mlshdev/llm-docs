> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/contentinsetadjustmentbehavior-swift.property](https://developer.apple.com/documentation/uikit/uiscrollview/contentinsetadjustmentbehavior-swift.property)

# contentInsetAdjustmentBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The behavior for determining the adjusted content offsets.

## Declaration

```swift
var contentInsetAdjustmentBehavior: UIScrollView.ContentInsetAdjustmentBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

This property specifies how the safe area insets are used to modify the content area of the scroll view. The default value of this property is [UIScrollView.ContentInsetAdjustmentBehavior.automatic](contentinsetadjustmentbehavior-swift.enum/automatic.md).

## See Also

### Managing the content inset behavior

- [adjustedContentInset](adjustedcontentinset.md): The insets derived from the content insets and the safe area of the scroll view.
- [contentInset](contentinset.md): The custom distance that the content view is inset from the safe area or scroll view edges.
- [UIScrollView.ContentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.enum.md): Constants indicating how safe area insets are added to the adjusted content inset.
- [adjustedContentInsetDidChange()](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.

# contentInsetAdjustmentBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The behavior for determining the adjusted content offsets.

## Declaration

```objectivec
@property (nonatomic) UIScrollViewContentInsetAdjustmentBehavior contentInsetAdjustmentBehavior;
```

<a id="Discussion"></a>

## Discussion

This property specifies how the safe area insets are used to modify the content area of the scroll view. The default value of this property is [UIScrollViewContentInsetAdjustmentAutomatic](contentinsetadjustmentbehavior-swift.enum/automatic.md).

## See Also

### Managing the content inset behavior

- [adjustedContentInset](adjustedcontentinset.md): The insets derived from the content insets and the safe area of the scroll view.
- [contentInset](contentinset.md): The custom distance that the content view is inset from the safe area or scroll view edges.
- [UIScrollViewContentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.enum.md): Constants indicating how safe area insets are added to the adjusted content inset.
- [adjustedContentInsetDidChange](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.
