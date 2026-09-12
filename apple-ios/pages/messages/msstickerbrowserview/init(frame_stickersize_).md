> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserview/init(frame:stickersize:)](https://developer.apple.com/documentation/messages/msstickerbrowserview/init(frame:stickersize:))

# init(frame:stickerSize:) (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Creates a new sticker browser containing stickers of the specified size.

## Declaration

```swift
init(frame: CGRect, stickerSize: MSStickerSize)
```

## Parameters

- `frame`: A rectangular frame for the view, measured in points. The origin of the frame is relative to its superview. This method uses the provided rectangle to set the view’s [center](https://developer.apple.com/documentation/uikit/uiview/center) and [bounds](https://developer.apple.com/documentation/uikit/uiview/bounds) properties.
- `stickerSize`: The size of the stickers. For a list of possible values, see [MSStickerSize](../msstickersize.md).

<a id="return-value"></a>

## Return Value

A newly initialized sticker browser view.

## See Also

### Creating Sticker Browser Views

- [init(frame:)](init%28frame_%29.md): Creates a new sticker browser containing medium-sized stickers.

# initWithFrame:stickerSize: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Creates a new sticker browser containing stickers of the specified size.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame stickerSize:(MSStickerSize) stickerSize;
```

## Parameters

- `frame`: A rectangular frame for the view, measured in points. The origin of the frame is relative to its superview. This method uses the provided rectangle to set the view’s [center](https://developer.apple.com/documentation/uikit/uiview/center) and [bounds](https://developer.apple.com/documentation/uikit/uiview/bounds) properties.
- `stickerSize`: The size of the stickers. For a list of possible values, see [MSStickerSize](../msstickersize.md).

<a id="return-value"></a>

## Return Value

A newly initialized sticker browser view.

## See Also

### Creating Sticker Browser Views

- [initWithFrame:](init%28frame_%29.md): Creates a new sticker browser containing medium-sized stickers.
