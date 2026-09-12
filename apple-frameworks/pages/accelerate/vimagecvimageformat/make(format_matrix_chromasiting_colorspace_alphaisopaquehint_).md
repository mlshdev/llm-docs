> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat/make(format:matrix:chromasiting:colorspace:alphaisopaquehint:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat/make(format:matrix:chromasiting:colorspace:alphaisopaquehint:))

# make(format:matrix:chromaSiting:colorSpace:alphaIsOpaqueHint:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

## Declaration

```swift
static func make(format: vImageCVImageFormat.Format, matrix: vImage_ARGBToYpCbCrMatrix, chromaSiting: vImageCVImageFormat.ChromaSiting, colorSpace: CGColorSpace, alphaIsOpaqueHint: Bool) -> vImageCVImageFormat?
```

## Parameters

- `format`: The format type of the image.
- `matrix`: A [vImage_ARGBToYpCbCrMatrix](../vimage_argbtoypcbcrmatrix.md) that describes the conversion from RGB to the YpCbCr format.
- `chromaSiting`: The chrominance location.
- `colorSpace`: The color space of RGB and monochrome images. For YpCbCr images, this is the color space of the RGB image before conversion to YpCbCr using the ARGB-to-YpCbCr conversion matrix. The YpCbCr format RGB primaries and transfer function define the color space.
- `alphaIsOpaqueHint`: A hint that indicates that the function interprets an image with an alpha channel as opaque.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormat](../vimagecvimageformat.md) instance encoded with the function’s parameters.

<a id="Discussion"></a>

## Discussion

This function derives values that parameters from the image format type don’t specify, such as the number of channels, channel names, and channel descriptions.

## See Also

### Related Documentation

- [vImageCVImageFormat_Create(\_:\_:\_:\_:\_:)](../vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

### Creating a Core Video image format

- [make(buffer:)](make%28buffer_%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [make(format:colorSpace:alphaIsOpaqueHint:)](make%28format_colorspace_alphaisopaquehint_%29.md): Creates the description of an RGB image encoding in a Core Video pixel buffer from the specified properties.
