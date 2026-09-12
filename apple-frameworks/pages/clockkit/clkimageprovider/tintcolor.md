> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkimageprovider/tintcolor](https://developer.apple.com/documentation/clockkit/clkimageprovider/tintcolor)

# tintColor (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The tint color to apply to the image in a multicolor clock face.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var tintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

For multicolor clock faces, the image provider applies the color in this property to the underlying image. For one-piece images, the color is applied directly to the image. For two-piece images, the color is applied only to the background image.

Specify `nil` to tint the image using the color of the complication template object. If the template doesn’t specify a color, the default color (white) is used.

## See Also

### Getting the Image Data

- [onePieceImage](onepieceimage.md): Deprecated. The template image to use as a one-piece image.
- [twoPieceImageBackground](twopieceimagebackground.md): Deprecated. The background image in a two-piece image.
- [twoPieceImageForeground](twopieceimageforeground.md): Deprecated. The foreground image in a two-piece image.

# tintColor (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The tint color to apply to the image in a multicolor clock face.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) UIColor * tintColor;
```

<a id="Discussion"></a>

## Discussion

For multicolor clock faces, the image provider applies the color in this property to the underlying image. For one-piece images, the color is applied directly to the image. For two-piece images, the color is applied only to the background image.

Specify `nil` to tint the image using the color of the complication template object. If the template doesn’t specify a color, the default color (white) is used.

## See Also

### Getting the Image Data

- [onePieceImage](onepieceimage.md): Deprecated. The template image to use as a one-piece image.
- [twoPieceImageBackground](twopieceimagebackground.md): Deprecated. The background image in a two-piece image.
- [twoPieceImageForeground](twopieceimageforeground.md): Deprecated. The foreground image in a two-piece image.
