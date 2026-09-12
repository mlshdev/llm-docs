> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserview/setcontentoffset(_:animated:)](https://developer.apple.com/documentation/messages/msstickerbrowserview/setcontentoffset(_:animated:))

# setContentOffset(\_:animated:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Sets the offset distance between the content and the browser’s origin.

## Declaration

```swift
func setContentOffset(_ contentOffset: CGPoint, animated: Bool)
```

## Parameters

- `contentOffset`: The distance that the content is offset from the browser’s origin.
- `animated`: A Boolean value that determines whether the change is animated. If [true](https://developer.apple.com/documentation/swift/true), the change is animated at a constant velocity. If [false](https://developer.apple.com/documentation/swift/false), the change takes place immediately.

<a id="Discussion"></a>

## Discussion

Increasing the offset’s `x` value shifts the content to the left. Increasing the offset’s `y` value shifts the content upward.

## See Also

### Managing the Browser’s Appearance

- [contentInset](contentinset.md): The distance that the content is inset from the edge of the browser view.
- [contentOffset](contentoffset.md): The distance that the content is offset from the browser’s origin.
- [stickerSize](stickersize.md): The size of the stickers in the browser.

# setContentOffset:animated: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Sets the offset distance between the content and the browser’s origin.

## Declaration

```objectivec
- (void) setContentOffset:(CGPoint) contentOffset animated:(BOOL) animated;
```

## Parameters

- `contentOffset`: The distance that the content is offset from the browser’s origin.
- `animated`: A Boolean value that determines whether the change is animated. If [true](https://developer.apple.com/documentation/swift/true), the change is animated at a constant velocity. If [false](https://developer.apple.com/documentation/swift/false), the change takes place immediately.

<a id="Discussion"></a>

## Discussion

Increasing the offset’s `x` value shifts the content to the left. Increasing the offset’s `y` value shifts the content upward.

## See Also

### Managing the Browser’s Appearance

- [contentInset](contentinset.md): The distance that the content is inset from the edge of the browser view.
- [contentOffset](contentoffset.md): The distance that the content is offset from the browser’s origin.
- [stickerSize](stickersize.md): The size of the stickers in the browser.
