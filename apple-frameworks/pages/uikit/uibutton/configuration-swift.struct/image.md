> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/image](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/image)

# image

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The foreground image the button displays.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

A configuration contains one image. To change the image based on button state, use [configurationUpdateHandler](../configurationupdatehandler-swift.property.md) or [updateConfiguration()](../updateconfiguration%28%29.md).

## See Also

### Configuring images

- [imagePadding](imagepadding.md): The distance between the button’s image and text.
- [imagePlacement](imageplacement.md): The edge against which the button places the image.
- [imageReservation](imagereservation.md): A value that reserves space for the image in the same axis as the edge against which the button places the image.
- [imageColorTransformer](imagecolortransformer.md): A block that transforms the image color when the button state changes.
- [preferredSymbolConfigurationForImage](preferredsymbolconfigurationforimage.md): A requested configuration object for the button symbol image.
