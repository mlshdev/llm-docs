> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserview/init(frame:)](https://developer.apple.com/documentation/messages/msstickerbrowserview/init(frame:))

# init(frame:) (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Creates a new sticker browser containing medium-sized stickers.

## Declaration

```swift
init(frame: CGRect)
```

## Parameters

- `frame`: A rectangular frame for the view, measured in points. The origin of the frame is relative to its superview. This method uses the provided rectangle to set the view’s [center](https://developer.apple.com/documentation/uikit/uiview/center) and [bounds](https://developer.apple.com/documentation/uikit/uiview/bounds) properties.

<a id="return-value"></a>

## Return Value

A newly initialized sticker browser view.

## See Also

### Creating Sticker Browser Views

- [init(frame:stickerSize:)](init%28frame_stickersize_%29.md): Creates a new sticker browser containing stickers of the specified size.

# initWithFrame: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Creates a new sticker browser containing medium-sized stickers.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame;
```

## Parameters

- `frame`: A rectangular frame for the view, measured in points. The origin of the frame is relative to its superview. This method uses the provided rectangle to set the view’s [center](https://developer.apple.com/documentation/uikit/uiview/center) and [bounds](https://developer.apple.com/documentation/uikit/uiview/bounds) properties.

<a id="return-value"></a>

## Return Value

A newly initialized sticker browser view.

## See Also

### Creating Sticker Browser Views

- [initWithFrame:stickerSize:](init%28frame_stickersize_%29.md): Creates a new sticker browser containing stickers of the specified size.
