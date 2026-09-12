> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/imagepadding](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/imagepadding)

# imagePadding

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The distance between the button’s image and text.

## Declaration

```swift
var imagePadding: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the distance from the title and subtitle. This doesn’t affect the distance to the button’s edge.

## See Also

### Configuring images

- [image](image.md): The foreground image the button displays.
- [imagePlacement](imageplacement.md): The edge against which the button places the image.
- [imageReservation](imagereservation.md): A value that reserves space for the image in the same axis as the edge against which the button places the image.
- [imageColorTransformer](imagecolortransformer.md): A block that transforms the image color when the button state changes.
- [preferredSymbolConfigurationForImage](preferredsymbolconfigurationforimage.md): A requested configuration object for the button symbol image.
