> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserviewdatasource/stickerbrowserview(_:stickerat:)](https://developer.apple.com/documentation/messages/msstickerbrowserviewdatasource/stickerbrowserview(_:stickerat:))

# stickerBrowserView(\_:stickerAt:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Asks the data source for the sticker object that the browser will display at the provided index.

## Declaration

```swift
func stickerBrowserView(_ stickerBrowserView: MSStickerBrowserView, stickerAt index: Int) -> MSSticker
```

## Parameters

- `stickerBrowserView`: The sticker browser view that displays these stickers.
- `index`: The index of the desired sticker.

<a id="return-value"></a>

## Return Value

A valid sticker object.

<a id="Discussion"></a>

## Discussion

Do not perform any time-intensive activities in this method. For example, creating a sticker from a local image file should be fine, but you can’t download an image for your sticker.

## See Also

### Providing Stickers

- [numberOfStickers(in:)](numberofstickers%28in_%29.md): Asks the data source for the number of stickers that the browser will display.

# stickerBrowserView:stickerAtIndex: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Asks the data source for the sticker object that the browser will display at the provided index.

## Declaration

```objectivec
- (MSSticker *) stickerBrowserView:(MSStickerBrowserView *) stickerBrowserView stickerAtIndex:(NSInteger) index;
```

## Parameters

- `stickerBrowserView`: The sticker browser view that displays these stickers.
- `index`: The index of the desired sticker.

<a id="return-value"></a>

## Return Value

A valid sticker object.

<a id="Discussion"></a>

## Discussion

Do not perform any time-intensive activities in this method. For example, creating a sticker from a local image file should be fine, but you can’t download an image for your sticker.

## See Also

### Providing Stickers

- [numberOfStickersInStickerBrowserView:](numberofstickers%28in_%29.md): Asks the data source for the number of stickers that the browser will display.
