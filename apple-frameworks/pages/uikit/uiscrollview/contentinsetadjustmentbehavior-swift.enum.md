> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/contentinsetadjustmentbehavior-swift.enum](https://developer.apple.com/documentation/uikit/uiscrollview/contentinsetadjustmentbehavior-swift.enum)

# UIScrollView.ContentInsetAdjustmentBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants indicating how safe area insets are added to the adjusted content inset.

## Declaration

```swift
enum ContentInsetAdjustmentBehavior
```

## Topics

### Enumeration Cases

- [UIScrollView.ContentInsetAdjustmentBehavior.always](contentinsetadjustmentbehavior-swift.enum/always.md): Always include the safe area insets in the content adjustment.
- [UIScrollView.ContentInsetAdjustmentBehavior.automatic](contentinsetadjustmentbehavior-swift.enum/automatic.md): Automatically adjust the scroll view insets.
- [UIScrollView.ContentInsetAdjustmentBehavior.never](contentinsetadjustmentbehavior-swift.enum/never.md): Do not adjust the scroll view insets.
- [UIScrollView.ContentInsetAdjustmentBehavior.scrollableAxes](contentinsetadjustmentbehavior-swift.enum/scrollableaxes.md): Adjust the insets only in the scrollable directions.

### Initializers

- [init(rawValue:)](contentinsetadjustmentbehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the content inset behavior

- [adjustedContentInset](adjustedcontentinset.md): The insets derived from the content insets and the safe area of the scroll view.
- [contentInset](contentinset.md): The custom distance that the content view is inset from the safe area or scroll view edges.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md): The behavior for determining the adjusted content offsets.
- [adjustedContentInsetDidChange()](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.

# UIScrollViewContentInsetAdjustmentBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants indicating how safe area insets are added to the adjusted content inset.

## Declaration

```objectivec
enum UIScrollViewContentInsetAdjustmentBehavior : NSInteger;
```

## Topics

### Enumeration Cases

- [UIScrollViewContentInsetAdjustmentAlways](contentinsetadjustmentbehavior-swift.enum/always.md): Always include the safe area insets in the content adjustment.
- [UIScrollViewContentInsetAdjustmentAutomatic](contentinsetadjustmentbehavior-swift.enum/automatic.md): Automatically adjust the scroll view insets.
- [UIScrollViewContentInsetAdjustmentNever](contentinsetadjustmentbehavior-swift.enum/never.md): Do not adjust the scroll view insets.
- [UIScrollViewContentInsetAdjustmentScrollableAxes](contentinsetadjustmentbehavior-swift.enum/scrollableaxes.md): Adjust the insets only in the scrollable directions.

## See Also

### Managing the content inset behavior

- [adjustedContentInset](adjustedcontentinset.md): The insets derived from the content insets and the safe area of the scroll view.
- [contentInset](contentinset.md): The custom distance that the content view is inset from the safe area or scroll view edges.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior-swift.property.md): The behavior for determining the adjusted content offsets.
- [adjustedContentInsetDidChange](adjustedcontentinsetdidchange%28%29.md): Notifies the scroll view when the adjusted content insets of the scroll view change.
