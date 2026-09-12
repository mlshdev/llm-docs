> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter](https://developer.apple.com/documentation/accelerate/vimageconverter)

# vImageConverter (Swift)

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of a conversion from one image format to another.

## Declaration

```swift
class vImageConverter
```

## Mentioned In

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)
- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)
- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)

<a id="overview"></a>

## Overview

The [vImageConverter](vimageconverter.md) class is an opaque type that contains information needed to do a rapid conversion from one image type to another.

You use the converter creation functions, for example, [vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createwithcgimageformat%28__________%29.md), to create instances of converters. Sometimes, there can be an overhead when creating a converter, so create them in advance and reuse them. Converters are thread safe; that is, you can use the same object concurrently in multiple threads.

## Topics

### Instance Properties

- [destinationBufferCount](vimageconverter/destinationbuffercount.md): The number of destination buffers written to by the converter.
- [sourceBufferCount](vimageconverter/sourcebuffercount.md): The number of source buffers written to by the converter.

### Instance Methods

- [convert(source:destination:flags:)](vimageconverter/convert%28source_destination_flags_%29.md): Converts the pixels in a vImage buffer to another format.
- [mustOperateOutOfPlace(source:destination:flags:)](vimageconverter/mustoperateoutofplace%28source_destination_flags_%29.md): Determines whether a converter is capable of operating in place.
- [destinationBuffers(colorSpace:)](vimageconverter/destinationbuffers%28colorspace_%29.md): Returns a list of vImage destination buffer types, specifying the order of planes.
- [sourceBuffers(colorSpace:)](vimageconverter/sourcebuffers%28colorspace_%29.md): Returns a list of vImage source buffer types, specifying the order of planes.
- [convert(from:to:)](vimageconverter/convert%28from_to_%29-9s7p7.md)
- [convert(from:to:)](vimageconverter/convert%28from_to_%29-587gc.md)
- [makeCGToCVPixelBuffers(referencing:)](vimageconverter/makecgtocvpixelbuffers%28referencing_%29.md)
- [makeCVToCGPixelBuffers(referencing:)](vimageconverter/makecvtocgpixelbuffers%28referencing_%29.md)

### Type Methods

- [make(sourceFormat:destinationFormat:flags:)](vimageconverter/make%28sourceformat_destinationformat_flags_%29-8iupf.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [make(sourceFormat:destinationFormat:flags:)](vimageconverter/make%28sourceformat_destinationformat_flags_%29-8tbym.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [make(sourceFormat:destinationFormat:flags:)](vimageconverter/make%28sourceformat_destinationformat_flags_%29-fub5.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [make(sourceFormat:destinationFormat:colorConversionInfo:)](vimageconverter/make%28sourceformat_destinationformat_colorconversioninfo_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating a converter

- [vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCGToCVImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.

# vImageConverterRef (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of a conversion from one image format to another.

## Declaration

```objectivec
typedef struct vImageConverter * vImageConverterRef;
```

## Mentioned In

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)
- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)
- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)

<a id="overview"></a>

## Overview

The [vImageConverterRef](vimageconverter.md) class is an opaque type that contains information needed to do a rapid conversion from one image type to another.

You use the converter creation functions, for example, [vImageConverter_CreateWithCGImageFormat](vimageconverter_createwithcgimageformat%28__________%29.md), to create instances of converters. Sometimes, there can be an overhead when creating a converter, so create them in advance and reuse them. Converters are thread safe; that is, you can use the same object concurrently in multiple threads.

## See Also

### Creating a converter

- [vImageConverter_CreateWithCGImageFormat](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCGToCVImageFormat](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.
