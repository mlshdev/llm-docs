> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerview/sticker](https://developer.apple.com/documentation/messages/msstickerview/sticker)

# sticker (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The displayed sticker object.

## Declaration

```swift
var sticker: MSSticker? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to `nil` to remove the current sticker.

If you are using Auto Layout, setting the [sticker](sticker.md) property changes the view’s intrinsic content size. A view with a `nil`-valued [sticker](sticker.md) property does not have an intrinsic content size (the intrinsic content size is set to `{UIViewNoIntrinsicMetric, UIViewNoIntrinsicMetric}`). Otherwise, the view’s intrinsic content size is set equal to the size of the sticker’s image file (in points).

If you are not using Auto Layout, setting the sticker property does not change the view’s size. Call [sizeToFit()](https://developer.apple.com/documentation/uikit/uiview/sizetofit%28%29) to adjust the size of the view to match the sticker.

## See Also

### Working with Sticker Views

- [init(frame:sticker:)](init%28frame_sticker_%29.md): Initializes a new sticker view with the provided sticker and frame.

# sticker (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The displayed sticker object.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) MSSticker * sticker;
```

<a id="Discussion"></a>

## Discussion

Set this property to `nil` to remove the current sticker.

If you are using Auto Layout, setting the [sticker](sticker.md) property changes the view’s intrinsic content size. A view with a `nil`-valued [sticker](sticker.md) property does not have an intrinsic content size (the intrinsic content size is set to `{UIViewNoIntrinsicMetric, UIViewNoIntrinsicMetric}`). Otherwise, the view’s intrinsic content size is set equal to the size of the sticker’s image file (in points).

If you are not using Auto Layout, setting the sticker property does not change the view’s size. Call [sizeToFit](https://developer.apple.com/documentation/uikit/uiview/sizetofit%28%29) to adjust the size of the view to match the sticker.

## See Also

### Working with Sticker Views

- [initWithFrame:sticker:](init%28frame_sticker_%29.md): Initializes a new sticker view with the provided sticker and frame.
