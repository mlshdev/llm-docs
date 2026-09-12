> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-perform-any-to-any-conversion](https://developer.apple.com/documentation/accelerate/functions-that-perform-any-to-any-conversion)

# Functions that perform any-to-any conversion (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Convert between Core Video or Core Graphics image data of arbitrary color spaces and bit depths.

## Topics

### Creating a converter

- [vImageConverter](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCGToCVImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.

### Performing a conversion

- [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md): Converts the pixels in a vImage buffer to another format, using the specified converter.
- [vImage Buffer Type Codes](1399056-vimage-buffer-type-codes.md): Constants that specify the contents of vImage buffers.

### Querying a converter’s properties

- [vImageConverter_MustOperateOutOfPlace(\_:\_:\_:\_:)](vimageconverter_mustoperateoutofplace%28________%29.md): Determines whether a converter is capable of operating in place.
- [vImageConverter_GetSourceBufferOrder(\_:)](vimageconverter_getsourcebufferorder%28__%29.md): Returns a list of vImage source buffer channel names, specifying the order of planes.
- [vImageConverter_GetDestinationBufferOrder(\_:)](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfSourceBuffers(\_:)](vimageconverter_getnumberofsourcebuffers%28__%29.md): Returns the number of source buffers consumed by the converter.
- [vImageConverter_GetNumberOfDestinationBuffers(\_:)](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.

## See Also

### Converting any-to-any

- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md): Learn the fundamentals of the convert-any-to-any function by converting a CMYK image to an RGB image.
- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md): Create vImage buffers with the correct dimensions to convert to and from images with subsampled chroma information.

# Functions that perform any-to-any conversion (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Convert between Core Video or Core Graphics image data of arbitrary color spaces and bit depths.

## Topics

### Creating a converter

- [vImageConverterRef](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGImageFormat](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCGToCVImageFormat](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.

### Performing a conversion

- [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md): Converts the pixels in a vImage buffer to another format, using the specified converter.
- [vImage Buffer Type Codes](1399056-vimage-buffer-type-codes.md): Constants that specify the contents of vImage buffers.

### Querying a converter’s properties

- [vImageConverter_MustOperateOutOfPlace](vimageconverter_mustoperateoutofplace%28________%29.md): Determines whether a converter is capable of operating in place.
- [vImageConverter_GetSourceBufferOrder](vimageconverter_getsourcebufferorder%28__%29.md): Returns a list of vImage source buffer channel names, specifying the order of planes.
- [vImageConverter_GetDestinationBufferOrder](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfSourceBuffers](vimageconverter_getnumberofsourcebuffers%28__%29.md): Returns the number of source buffers consumed by the converter.
- [vImageConverter_GetNumberOfDestinationBuffers](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.

### Memory management

- [vImageConverter_Retain](vimageconverter_retain.md): Retains a vImage converter.
- [vImageConverter_Release](vimageconverter_release.md): Releases a vImage converter.

## See Also

### Converting any-to-any

- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md): Learn the fundamentals of the convert-any-to-any function by converting a CMYK image to an RGB image.
- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md): Create vImage buffers with the correct dimensions to convert to and from images with subsampled chroma information.
