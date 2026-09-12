> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserview/contentinset](https://developer.apple.com/documentation/messages/msstickerbrowserview/contentinset)

# contentInset (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The distance that the content is inset from the edge of the browser view.

## Declaration

```swift
var contentInset: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to add to the scrollable area around the content. The insets are measured in points. The default value is [zero](https://developer.apple.com/documentation/uikit/uiedgeinsets/zero).

## See Also

### Managing the Browser’s Appearance

- [contentOffset](contentoffset.md): The distance that the content is offset from the browser’s origin.
- [setContentOffset(\_:animated:)](setcontentoffset%28__animated_%29.md): Sets the offset distance between the content and the browser’s origin.
- [stickerSize](stickersize.md): The size of the stickers in the browser.

# contentInset (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The distance that the content is inset from the edge of the browser view.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIEdgeInsets contentInset;
```

<a id="Discussion"></a>

## Discussion

Use this property to add to the scrollable area around the content. The insets are measured in points. The default value is [UIEdgeInsetsZero](https://developer.apple.com/documentation/uikit/uiedgeinsets/zero).

## See Also

### Managing the Browser’s Appearance

- [contentOffset](contentoffset.md): The distance that the content is offset from the browser’s origin.
- [setContentOffset:animated:](setcontentoffset%28__animated_%29.md): Sets the offset distance between the content and the browser’s origin.
- [stickerSize](stickersize.md): The size of the stickers in the browser.
