> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitemscrollablecontainer/contentsize](https://developer.apple.com/documentation/uikit/uifocusitemscrollablecontainer/contentsize)

# contentSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The total size of the content contained by this container.

## Declaration

```swift
var contentSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is larger than [visibleSize](visiblesize.md) then the content is scrollable.

## See Also

### Retrieving the content size

- [contentOffset](contentoffset.md): The current content offset for the scrollable container.
- [visibleSize](visiblesize.md): The visible size of the scrollable container.

# contentSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The total size of the content contained by this container.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize contentSize;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is larger than [visibleSize](visiblesize.md) then the content is scrollable.

## See Also

### Retrieving the content size

- [contentOffset](contentoffset.md): The current content offset for the scrollable container.
- [visibleSize](visiblesize.md): The visible size of the scrollable container.
