> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerview/init(frame:sticker:)](https://developer.apple.com/documentation/messages/msstickerview/init(frame:sticker:))

# init(frame:sticker:) (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Initializes a new sticker view with the provided sticker and frame.

## Declaration

```swift
init(frame: CGRect, sticker: MSSticker?)
```

## Parameters

- `frame`: A rectangular frame for the view, measured in points. The origin of the frame is relative to its superview. This method uses the provided rectangle to set the view’s [center](https://developer.apple.com/documentation/uikit/uiview/center) and [bounds](https://developer.apple.com/documentation/uikit/uiview/bounds) properties.
- `sticker`: The sticker object to be displayed. Pass `nil` to create an empty sticker view.

<a id="return-value"></a>

## Return Value

A newly initialized sticker view.

<a id="Discussion"></a>

## Discussion

If the sticker image is larger than the view’s frame, the view scales down the sticker to fit. If the frame is larger than the sticker image, the view centers the image in the frame.

## See Also

### Working with Sticker Views

- [sticker](sticker.md): The displayed sticker object.

# initWithFrame:sticker: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Initializes a new sticker view with the provided sticker and frame.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame sticker:(MSSticker *) sticker;
```

## Parameters

- `frame`: A rectangular frame for the view, measured in points. The origin of the frame is relative to its superview. This method uses the provided rectangle to set the view’s [center](https://developer.apple.com/documentation/uikit/uiview/center) and [bounds](https://developer.apple.com/documentation/uikit/uiview/bounds) properties.
- `sticker`: The sticker object to be displayed. Pass `nil` to create an empty sticker view.

<a id="return-value"></a>

## Return Value

A newly initialized sticker view.

<a id="Discussion"></a>

## Discussion

If the sticker image is larger than the view’s frame, the view scales down the sticker to fit. If the frame is larger than the sticker image, the view centers the image in the frame.

## See Also

### Working with Sticker Views

- [sticker](sticker.md): The displayed sticker object.
