> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserviewdatasource/numberofstickers(in:)](https://developer.apple.com/documentation/messages/msstickerbrowserviewdatasource/numberofstickers(in:))

# numberOfStickers(in:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Asks the data source for the number of stickers that the browser will display.

## Declaration

```swift
func numberOfStickers(in stickerBrowserView: MSStickerBrowserView) -> Int
```

## Parameters

- `stickerBrowserView`: The sticker browser view that displays these stickers.

<a id="return-value"></a>

## Return Value

The number of stickers. This must be a non-negative number.

## See Also

### Providing Stickers

- [stickerBrowserView(\_:stickerAt:)](stickerbrowserview%28__stickerat_%29.md): Asks the data source for the sticker object that the browser will display at the provided index.

# numberOfStickersInStickerBrowserView: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Asks the data source for the number of stickers that the browser will display.

## Declaration

```objectivec
- (NSInteger) numberOfStickersInStickerBrowserView:(MSStickerBrowserView *) stickerBrowserView;
```

## Parameters

- `stickerBrowserView`: The sticker browser view that displays these stickers.

<a id="return-value"></a>

## Return Value

The number of stickers. This must be a non-negative number.

## See Also

### Providing Stickers

- [stickerBrowserView:stickerAtIndex:](stickerbrowserview%28__stickerat_%29.md): Asks the data source for the sticker object that the browser will display at the provided index.
