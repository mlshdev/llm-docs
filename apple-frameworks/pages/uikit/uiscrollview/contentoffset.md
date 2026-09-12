> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/contentoffset](https://developer.apple.com/documentation/uikit/uiscrollview/contentoffset)

# contentOffset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The point at which the origin of the content view is offset from the origin of the scroll view.

## Declaration

```swift
var contentOffset: CGPoint { get set }
```

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

The default value is [CGPointZero](../../coregraphics/cgpointzero.md).

## See Also

### Managing the content size and offset

- [contentSize](contentsize.md): The size of the content view.
- [setContentOffset(\_:animated:)](setcontentoffset%28__animated_%29.md): Sets the point at which the origin of the content view is offset from the origin of the scroll view.

# contentOffset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The point at which the origin of the content view is offset from the origin of the scroll view.

## Declaration

```objectivec
@property (nonatomic) CGPoint contentOffset;
```

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

The default value is [CGPointZero](../../coregraphics/cgpointzero.md).

## See Also

### Managing the content size and offset

- [contentSize](contentsize.md): The size of the content view.
- [setContentOffset:animated:](setcontentoffset%28__animated_%29.md): Sets the point at which the origin of the content view is offset from the origin of the scroll view.
