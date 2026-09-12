> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/imagereservation](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/imagereservation)

# imageReservation

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

A value that reserves space for the image in the same axis as the edge against which the button places the image.

## Declaration

```swift
var imageReservation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `0`. The value reserves space in the axis that corresponds to [imagePlacement](../../uibuttonconfiguration/imageplacement.md). If the image is larger than the reservation value in that axis, the system ignores the reservation value. Otherwise, the system centers the image in the space that the reservation value provides.

If the image is a symbol image, the system scales the reservation value with dynamic type, based on the image configuration.

## See Also

### Configuring images

- [image](image.md): The foreground image the button displays.
- [imagePadding](imagepadding.md): The distance between the button’s image and text.
- [imagePlacement](imageplacement.md): The edge against which the button places the image.
- [imageColorTransformer](imagecolortransformer.md): A block that transforms the image color when the button state changes.
- [preferredSymbolConfigurationForImage](preferredsymbolconfigurationforimage.md): A requested configuration object for the button symbol image.
