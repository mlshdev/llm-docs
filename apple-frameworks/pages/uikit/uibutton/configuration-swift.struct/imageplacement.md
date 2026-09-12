> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/imageplacement](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/imageplacement)

# imagePlacement

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The edge against which the button places the image.

## Declaration

```swift
var imagePlacement: NSDirectionalRectEdge { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to place the image along the top, leading, trailing, or bottom edge of the button.

## See Also

### Configuring images

- [image](image.md): The foreground image the button displays.
- [imagePadding](imagepadding.md): The distance between the button’s image and text.
- [imageReservation](imagereservation.md): A value that reserves space for the image in the same axis as the edge against which the button places the image.
- [imageColorTransformer](imagecolortransformer.md): A block that transforms the image color when the button state changes.
- [preferredSymbolConfigurationForImage](preferredsymbolconfigurationforimage.md): A requested configuration object for the button symbol image.
