> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkimageprovider/twopieceimageforeground](https://developer.apple.com/documentation/clockkit/clkimageprovider/twopieceimageforeground)

# twoPieceImageForeground (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The foreground image in a two-piece image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var twoPieceImageForeground: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The image you specified is tinted white and composited on top of the background image. This image is used only in multicolor environments. You may specify `nil` for this image if you want to display only the background image, but in that case it’s better to use a one-piece image instead.

The image you specify for this property must be a template image—that is, an image where you convey the desired shape using only the alpha channel of the image. The color channels of the image are ignored. Fully and partially opaque areas of the template image are tinted using the appropriate tint color, which is determined by the clock face.

The image provider scales your image as needed to fit the target template. For information about the image sizes to use in different templates, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).

## See Also

### Related Documentation

- [init(onePieceImage:twoPieceImageBackground:twoPieceImageForeground:)](init%28onepieceimage_twopieceimagebackground_twopieceimageforeground_%29.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.

### Getting the Image Data

- [onePieceImage](onepieceimage.md): Deprecated. The template image to use as a one-piece image.
- [tintColor](tintcolor.md): Deprecated. The tint color to apply to the image in a multicolor clock face.
- [twoPieceImageBackground](twopieceimagebackground.md): Deprecated. The background image in a two-piece image.

# twoPieceImageForeground (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The foreground image in a two-piece image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) UIImage * twoPieceImageForeground;
```

<a id="Discussion"></a>

## Discussion

The image you specified is tinted white and composited on top of the background image. This image is used only in multicolor environments. You may specify `nil` for this image if you want to display only the background image, but in that case it’s better to use a one-piece image instead.

The image you specify for this property must be a template image—that is, an image where you convey the desired shape using only the alpha channel of the image. The color channels of the image are ignored. Fully and partially opaque areas of the template image are tinted using the appropriate tint color, which is determined by the clock face.

The image provider scales your image as needed to fit the target template. For information about the image sizes to use in different templates, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).

## See Also

### Related Documentation

- [imageProviderWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:](init%28onepieceimage_twopieceimagebackground_twopieceimageforeground_%29.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.

### Getting the Image Data

- [onePieceImage](onepieceimage.md): Deprecated. The template image to use as a one-piece image.
- [tintColor](tintcolor.md): Deprecated. The tint color to apply to the image in a multicolor clock face.
- [twoPieceImageBackground](twopieceimagebackground.md): Deprecated. The background image in a two-piece image.
