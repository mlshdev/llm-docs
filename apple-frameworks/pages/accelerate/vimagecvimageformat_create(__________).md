> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_create(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_create(_:_:_:_:_:))

# vImageCVImageFormat_Create(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

## Declaration

```swift
func vImageCVImageFormat_Create(_ imageFormatType: UInt32, _ matrix: UnsafePointer<vImage_ARGBToYpCbCrMatrix>!, _ cvImageBufferChromaLocation: CFString!, _ baseColorspace: CGColorSpace!, _ alphaIsOneHint: Int32) -> Unmanaged<vImageCVImageFormat>!
```

## Parameters

- `imageFormatType`: The format type of the image. See [Pixel Format Identifiers](../corevideo/pixel-format-identifiers.md).
- `matrix`: A [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md) that describes the conversion from RGB to the YpCbCr format.
- `cvImageBufferChromaLocation`: The chrominance location.
- `baseColorspace`: The color space of RGB and monochrome images. For YpCbCr images, this is the color space of the RGB image before conversion to YpCbCr using the ARGB-to-YpCbCr conversion matrix. The YpCbCr format RGB primaries and transfer function define the color space.
- `alphaIsOneHint`: A hint that indicates that the function interprets an image with an alpha channel as opaque.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormat](vimagecvimageformat.md) instance encoded with the function’s parameters.

<a id="Discussion"></a>

## Discussion

This function derives values that parameters from the image format type don’t specify, such as the number of channels, channel names, and channel descriptions.

## See Also

### Related Documentation

- [make(format:matrix:chromaSiting:colorSpace:alphaIsOpaqueHint:)](vimagecvimageformat/make%28format_matrix_chromasiting_colorspace_alphaisopaquehint_%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

### Creating Core Video image formats

- [vImageCVImageFormat](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageConstCVImageFormat](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.

# vImageCVImageFormat_Create (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

## Declaration

```objectivec
vImageCVImageFormatRefvImageCVImageFormat_Create(uint32_t imageFormatType, const vImage_ARGBToYpCbCrMatrix *matrix, CFStringRef cvImageBufferChromaLocation, CGColorSpaceRef baseColorspace, int alphaIsOneHint);
```

## Parameters

- `imageFormatType`: The format type of the image. See [Pixel Format Identifiers](../corevideo/pixel-format-identifiers.md).
- `matrix`: A [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md) that describes the conversion from RGB to the YpCbCr format.
- `cvImageBufferChromaLocation`: The chrominance location.
- `baseColorspace`: The color space of RGB and monochrome images. For YpCbCr images, this is the color space of the RGB image before conversion to YpCbCr using the ARGB-to-YpCbCr conversion matrix. The YpCbCr format RGB primaries and transfer function define the color space.
- `alphaIsOneHint`: A hint that indicates that the function interprets an image with an alpha channel as opaque.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormatRef](vimagecvimageformat.md) instance encoded with the function’s parameters.

<a id="Discussion"></a>

## Discussion

This function derives values that parameters from the image format type don’t specify, such as the number of channels, channel names, and channel descriptions.

## See Also

### Creating Core Video image formats

- [vImageCVImageFormatRef](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageConstCVImageFormatRef](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
