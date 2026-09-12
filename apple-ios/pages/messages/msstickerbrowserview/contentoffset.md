> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserview/contentoffset](https://developer.apple.com/documentation/messages/msstickerbrowserview/contentoffset)

# contentOffset (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The distance that the content is offset from the browser’s origin.

## Declaration

```swift
var contentOffset: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

Positive `x` values shift the content to the left. Positive `y` values shift the content upward. The default value is [CGPointZero](https://developer.apple.com/documentation/coregraphics/cgpointzero).

## See Also

### Managing the Browser’s Appearance

- [contentInset](contentinset.md): The distance that the content is inset from the edge of the browser view.
- [setContentOffset(\_:animated:)](setcontentoffset%28__animated_%29.md): Sets the offset distance between the content and the browser’s origin.
- [stickerSize](stickersize.md): The size of the stickers in the browser.

# contentOffset (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The distance that the content is offset from the browser’s origin.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CGPoint contentOffset;
```

<a id="Discussion"></a>

## Discussion

Positive `x` values shift the content to the left. Positive `y` values shift the content upward. The default value is [CGPointZero](https://developer.apple.com/documentation/coregraphics/cgpointzero).

## See Also

### Managing the Browser’s Appearance

- [contentInset](contentinset.md): The distance that the content is inset from the edge of the browser view.
- [setContentOffset:animated:](setcontentoffset%28__animated_%29.md): Sets the offset distance between the content and the browser’s origin.
- [stickerSize](stickersize.md): The size of the stickers in the browser.
