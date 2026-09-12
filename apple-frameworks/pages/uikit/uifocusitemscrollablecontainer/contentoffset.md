> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitemscrollablecontainer/contentoffset](https://developer.apple.com/documentation/uikit/uifocusitemscrollablecontainer/contentoffset)

# contentOffset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The current content offset for the scrollable container.

## Declaration

```swift
var contentOffset: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

If the scrollable container contains `bounds`, then `bounds.origin` must be equal to the content offset. The system repeatedly sets this property to simulate animated scrolling.

## See Also

### Retrieving the content size

- [contentSize](contentsize.md): The total size of the content contained by this container.
- [visibleSize](visiblesize.md): The visible size of the scrollable container.

# contentOffset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The current content offset for the scrollable container.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGPoint contentOffset;
```

<a id="Discussion"></a>

## Discussion

If the scrollable container contains `bounds`, then `bounds.origin` must be equal to the content offset. The system repeatedly sets this property to simulate animated scrolling.

## See Also

### Retrieving the content size

- [contentSize](contentsize.md): The total size of the content contained by this container.
- [visibleSize](visiblesize.md): The visible size of the scrollable container.
