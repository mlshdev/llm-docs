> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat](https://developer.apple.com/documentation/accelerate/vimagecvimageformat)

# vImageCVImageFormat (Swift)

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mutable description of image encoding in a Core Video pixel buffer.

## Declaration

```swift
class vImageCVImageFormat
```

## Mentioned In

- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)

<a id="overview"></a>

## Overview

The vImage library uses the information in an image format to construct [vImageConverter](vimageconverter.md) instances that convert to and from images encoded with the format. The format stores a description of the pixels in the image, such as color representation, bit depth, and number of channels.

A [vImageCVImageFormat](vimagecvimageformat.md) instance is capable of holding an incomplete encoding representation. In this case, the [vImageConverter_CreateForCGToCVImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcgtocvimageformat%28__________%29.md) and [vImageConverter_CreateForCVToCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcvtocgimageformat%28__________%29.md) functions return an error code that indicates what information is missing.

- **[kvImageCVImageFormat_ConversionMatrix](kvimagecvimageformat_conversionmatrix.md)**: Use [vImageCVImageFormat_CopyConversionMatrix(\_:\_:\_:)](vimagecvimageformat_copyconversionmatrix%28______%29.md) to add the missing conversion matrix.
- **[kvImageCVImageFormat_ChromaSiting](kvimagecvimageformat_chromasiting.md)**: Use [vImageCVImageFormat_SetChromaSiting(\_:\_:)](vimagecvimageformat_setchromasiting%28____%29.md) to add the missing chrominance siting information.
- **[kvImageCVImageFormat_ColorSpace](kvimagecvimageformat_colorspace.md)**: Use [vImageCVImageFormat_SetColorSpace(\_:\_:)](vimagecvimageformat_setcolorspace%28____%29.md) to add the missing color space that contains primaries and transfer function.

Reuse a [vImageCVImageFormat](vimagecvimageformat.md) instance with other Core Video pixel buffers of the same format, such as other frames from the same movie.

## Topics

### Creating a Core Video image format

- [make(buffer:)](vimagecvimageformat/make%28buffer_%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [make(format:matrix:chromaSiting:colorSpace:alphaIsOpaqueHint:)](vimagecvimageformat/make%28format_matrix_chromasiting_colorspace_alphaisopaquehint_%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.
- [make(format:colorSpace:alphaIsOpaqueHint:)](vimagecvimageformat/make%28format_colorspace_alphaisopaquehint_%29.md): Creates the description of an RGB image encoding in a Core Video pixel buffer from the specified properties.

### Inspecting a Core Video image format’s properties

- [channelCount](vimagecvimageformat/channelcount.md): The number of channels, including alpha, for the Core Video image format.
- [channels](vimagecvimageformat/channels.md): The channels of the Core Video image format.
- [channelDescription(bufferType:)](vimagecvimageformat/channeldescription%28buffertype_%29.md): Returns the range and clamp limits for a specified channel in a Core Video image format.
- [formatCode](vimagecvimageformat/formatcode.md): The four-character code that encodes the pixel format of the Core Video image format.
- [chromaSiting](vimagecvimageformat/chromasiting-swift.property.md): The chrominance siting of the Core Video image format.
- [colorSpace](vimagecvimageformat/colorspace.md): The color space of the Core Video image format.
- [alphaIsOpaqueHint](vimagecvimageformat/alphaisopaquehint.md): The alpha hint of the Core Video image format.

### Supporting types

- [vImageCVImageFormat.ChromaSiting](vimagecvimageformat/chromasiting-swift.enum.md): Constants that specify the chrominance siting of a Core Video image format.
- [vImageCVImageFormat.Format](vimagecvimageformat/format.md): Constants that specify the format of a Core Video image format.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating Core Video image formats

- [vImageConstCVImageFormat](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [vImageCVImageFormat_Create(\_:\_:\_:\_:\_:)](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

# vImageCVImageFormatRef (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mutable description of image encoding in a Core Video pixel buffer.

## Declaration

```objectivec
typedef struct vImageCVImageFormat * vImageCVImageFormatRef;
```

## Mentioned In

- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)

<a id="overview"></a>

## Overview

The vImage library uses the information in an image format to construct [vImageConverterRef](vimageconverter.md) instances that convert to and from images encoded with the format. The format stores a description of the pixels in the image, such as color representation, bit depth, and number of channels.

A [vImageCVImageFormatRef](vimagecvimageformat.md) instance is capable of holding an incomplete encoding representation. In this case, the [vImageConverter_CreateForCGToCVImageFormat](vimageconverter_createforcgtocvimageformat%28__________%29.md) and [vImageConverter_CreateForCVToCGImageFormat](vimageconverter_createforcvtocgimageformat%28__________%29.md) functions return an error code that indicates what information is missing.

- **[kvImageCVImageFormat_ConversionMatrix](kvimagecvimageformat_conversionmatrix.md)**: Use [vImageCVImageFormat_CopyConversionMatrix](vimagecvimageformat_copyconversionmatrix%28______%29.md) to add the missing conversion matrix.
- **[kvImageCVImageFormat_ChromaSiting](kvimagecvimageformat_chromasiting.md)**: Use [vImageCVImageFormat_SetChromaSiting](vimagecvimageformat_setchromasiting%28____%29.md) to add the missing chrominance siting information.
- **[kvImageCVImageFormat_ColorSpace](kvimagecvimageformat_colorspace.md)**: Use [vImageCVImageFormat_SetColorSpace](vimagecvimageformat_setcolorspace%28____%29.md) to add the missing color space that contains primaries and transfer function.

Reuse a [vImageCVImageFormatRef](vimagecvimageformat.md) instance with other Core Video pixel buffers of the same format, such as other frames from the same movie.

## See Also

### Creating Core Video image formats

- [vImageConstCVImageFormatRef](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [vImageCVImageFormat_Create](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.
