> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/preferredsymbolconfigurationforimage](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/preferredsymbolconfigurationforimage)

# preferredSymbolConfigurationForImage

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

A requested configuration object for the button symbol image.

## Declaration

```swift
var preferredSymbolConfigurationForImage: UIImage.SymbolConfiguration? { get set }
```

<a id="Discussion"></a>

## Discussion

A symbol configuration defines details such as the point size, scale, text style, weight, and font of symbol image. The button uses these details to determine which variant of the image to use and how to scale or style the image.

## See Also

### Configuring images

- [image](image.md): The foreground image the button displays.
- [imagePadding](imagepadding.md): The distance between the button’s image and text.
- [imagePlacement](imageplacement.md): The edge against which the button places the image.
- [imageReservation](imagereservation.md): A value that reserves space for the image in the same axis as the edge against which the button places the image.
- [imageColorTransformer](imagecolortransformer.md): A block that transforms the image color when the button state changes.
