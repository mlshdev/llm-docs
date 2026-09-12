> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkfullcolorimageprovider/tintedimageprovider](https://developer.apple.com/documentation/clockkit/clkfullcolorimageprovider/tintedimageprovider)

# tintedImageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

An image provider that produces alternative images for tinted graphic complications.

## Declaration

```swift
var tintedImageProvider: CLKImageProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, when the system displays a graphic complication using the tinted mode, it desaturates the full-color image stored in the [image](image.md) property. To provide an alternative template image instead, create an image provider and assign it to the [tintedImageProvider](tintedimageprovider.md) property.

Tinted graphic complications interpret the tinted image provider as follows:

- The graphic complication ignores the [tintColor](../clkimageprovider/tintcolor.md) property.
- The [onePieceImage](../clkimageprovider/onepieceimage.md) property returns a single template image. The system sets the image’s color based on the watch-face color the user selected. This property is the only one required to provide tinted images.
- The [twoPieceImageForeground](../clkimageprovider/twopieceimageforeground.md) and [twoPieceImageBackground](../clkimageprovider/twopieceimagebackground.md) properties define a two-piece image. Both the foreground and background are template images. The complication layers the foreground image over the background image, and selects the color for both images based on the watch-face color. When applicable, the system displays two-piece images instead of the one-piece images.

## See Also

### Getting the Image Data

- [image](image.md): Deprecated. The full-color image to display.

# tintedImageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

An image provider that produces alternative images for tinted graphic complications.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CLKImageProvider * tintedImageProvider;
```

<a id="Discussion"></a>

## Discussion

By default, when the system displays a graphic complication using the tinted mode, it desaturates the full-color image stored in the [image](image.md) property. To provide an alternative template image instead, create an image provider and assign it to the [tintedImageProvider](tintedimageprovider.md) property.

Tinted graphic complications interpret the tinted image provider as follows:

- The graphic complication ignores the [tintColor](../clkimageprovider/tintcolor.md) property.
- The [onePieceImage](../clkimageprovider/onepieceimage.md) property returns a single template image. The system sets the image’s color based on the watch-face color the user selected. This property is the only one required to provide tinted images.
- The [twoPieceImageForeground](../clkimageprovider/twopieceimageforeground.md) and [twoPieceImageBackground](../clkimageprovider/twopieceimagebackground.md) properties define a two-piece image. Both the foreground and background are template images. The complication layers the foreground image over the background image, and selects the color for both images based on the watch-face color. When applicable, the system displays two-piece images instead of the one-piece images.

## See Also

### Getting the Image Data

- [image](image.md): Deprecated. The full-color image to display.
