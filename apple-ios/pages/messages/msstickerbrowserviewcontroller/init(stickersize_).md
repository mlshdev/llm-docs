> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/msstickerbrowserviewcontroller/init(stickersize:)

# init(stickerSize:) (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Creates a new sticker browser view controller with stickers of the provided size.

## Declaration

```swift
init(stickerSize: MSStickerSize)
```

## Parameters

- `stickerSize`: A constant that indicates the size of the stickers. For a list of possible values, see [MSStickerSize](../msstickersize.md).

<a id="return-value"></a>

## Return Value

A newly instantiated sticker browser controller.

## See Also

### Working with Stickers

- [stickerBrowserView](stickerbrowserview.md): The sticker browser view managed by this controller.
- [stickerSize](stickersize.md): A constant that indicates the size of the stickers.

# initWithStickerSize: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Creates a new sticker browser view controller with stickers of the provided size.

## Declaration

```objectivec
- (instancetype) initWithStickerSize:(MSStickerSize) stickerSize;
```

## Parameters

- `stickerSize`: A constant that indicates the size of the stickers. For a list of possible values, see [MSStickerSize](../msstickersize.md).

<a id="return-value"></a>

## Return Value

A newly instantiated sticker browser controller.

## See Also

### Working with Stickers

- [stickerBrowserView](stickerbrowserview.md): The sticker browser view managed by this controller.
- [stickerSize](stickersize.md): A constant that indicates the size of the stickers.
