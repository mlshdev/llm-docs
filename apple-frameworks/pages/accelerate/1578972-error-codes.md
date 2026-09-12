> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/1578972-error-codes](https://developer.apple.com/documentation/accelerate/1578972-error-codes)

# Error codes (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Error codes that vImage functions return when an operation fails.

## Topics

### Constants

- [vImage.Error](vimage/error.md): An error that occurs during a vImage operation.
- [kvImageNoError](kvimagenoerror.md): The vImage function completed without error.
- [kvImageRoiLargerThanInputBuffer](kvimageroilargerthaninputbuffer.md): The region of interest, as specified by the `srcOffsetToROI_X` and `srcOffsetToROI_Y` parameters and the height and width of the destination buffer, extends beyond the bottom edge or right edge of the source buffer.
- [kvImageInvalidKernelSize](kvimageinvalidkernelsize.md): Either the kernel height, the kernel width, or both, are even.
- [kvImageInvalidEdgeStyle](kvimageinvalidedgestyle.md): The edge style specified is invalid.
- [kvImageInvalidOffset_X](kvimageinvalidoffset_x.md): The `srcOffsetToROI_X` parameter that specifies the left edge of the region of interest is greater than the width of the source image.
- [kvImageInvalidOffset_Y](kvimageinvalidoffset_y.md): The `srcOffsetToROI_Y` parameter that specifies the top edge of the region of interest is greater than the height of the source image.
- [kvImageMemoryAllocationError](kvimagememoryallocationerror.md): An attempt to allocate memory failed.
- [kvImageNullPointerArgument](kvimagenullpointerargument.md): A pointer parameter is `NULL` and it must not be.
- [kvImageInvalidParameter](kvimageinvalidparameter.md): Invalid parameter.
- [kvImageBufferSizeMismatch](kvimagebuffersizemismatch.md): The function requires the source and destination buffers to have the same height and the same width, but they do not.
- [kvImageUnknownFlagsBit](kvimageunknownflagsbit.md): The flag is not recognized.
- [kvImageColorSyncIsAbsent](kvimagecolorsyncisabsent.md)
- [kvImageCoreVideoIsAbsent](kvimagecorevideoisabsent.md)
- [kvImageInternalError](kvimageinternalerror.md): A serious error occured inside vImage, which prevented vImage from continuing.
- [kvImageInvalidCVImageFormat](kvimageinvalidcvimageformat.md)
- [kvImageInvalidImageFormat](kvimageinvalidimageformat.md)
- [kvImageInvalidImageObject](kvimageinvalidimageobject.md)
- [kvImageInvalidRowBytes](kvimageinvalidrowbytes.md)
- [kvImageOutOfPlaceOperationRequired](kvimageoutofplaceoperationrequired.md)
- [kvImageUnsupportedConversion](kvimageunsupportedconversion.md): Some lower level conversion APIs only support conversion among a sparse matrix of image formats.

### Core Video Image Format Errors

- [kvImageCVImageFormat_NoError](kvimagecvimageformat_noerror.md): An error code that indicates the conversion completed without error.
- [kvImageCVImageFormat_ColorSpace](kvimagecvimageformat_colorspace.md): An error code that indicates the image’s color space is missing.
- [kvImageCVImageFormat_ChromaSiting](kvimagecvimageformat_chromasiting.md): An error code that indicates the chroma siting information is absent.
- [kvImageCVImageFormat_AlphaIsOneHint](kvimagecvimageformat_alphaisonehint.md): A hint that indicates the alpha channel is opaque.
- [kvImageCVImageFormat_ConversionMatrix](kvimagecvimageformat_conversionmatrix.md): An error code that indicates the required conversion matrix is absent.
- [kvImageCVImageFormat_VideoChannelDescription](kvimagecvimageformat_videochanneldescription.md): An error code that indicates the range and clipping information is missing.

## See Also

### Constants

- [Core Video Image Format Errors](1498271-core-video-image-format-errors.md)
- [Processing Flags](1578976-processing-flags.md): Set flags on vImage operations to specify processing options.
- [Dithering Methods](1533233-dithering-methods.md): Specify the dithering method some vImage conversion functions use.
- [Availability Flags](availability-flags.md): Obtain the availability of particular vImage features.
- [Decode Arrays](decode-arrays.md): Specify the decode array constant to use with 16Q12-formatted data.
- [Buffer Types](buffer-types.md): Look up buffer type codes vImage conversions provide.
- [vImageMatrixType](vimagematrixtype.md): An enumeration of RGB -\> Y’CbCr conversion matrix types.
- [vImage_WarpInterpolation](vimage_warpinterpolation.md): Constants for selecting the interpolation mode

# Error codes (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Error codes that vImage functions return when an operation fails.

## Topics

### Constants

- [kvImageNoError](kvimagenoerror.md): The vImage function completed without error.
- [kvImageRoiLargerThanInputBuffer](kvimageroilargerthaninputbuffer.md): The region of interest, as specified by the `srcOffsetToROI_X` and `srcOffsetToROI_Y` parameters and the height and width of the destination buffer, extends beyond the bottom edge or right edge of the source buffer.
- [kvImageInvalidKernelSize](kvimageinvalidkernelsize.md): Either the kernel height, the kernel width, or both, are even.
- [kvImageInvalidEdgeStyle](kvimageinvalidedgestyle.md): The edge style specified is invalid.
- [kvImageInvalidOffset_X](kvimageinvalidoffset_x.md): The `srcOffsetToROI_X` parameter that specifies the left edge of the region of interest is greater than the width of the source image.
- [kvImageInvalidOffset_Y](kvimageinvalidoffset_y.md): The `srcOffsetToROI_Y` parameter that specifies the top edge of the region of interest is greater than the height of the source image.
- [kvImageMemoryAllocationError](kvimagememoryallocationerror.md): An attempt to allocate memory failed.
- [kvImageNullPointerArgument](kvimagenullpointerargument.md): A pointer parameter is `NULL` and it must not be.
- [kvImageInvalidParameter](kvimageinvalidparameter.md): Invalid parameter.
- [kvImageBufferSizeMismatch](kvimagebuffersizemismatch.md): The function requires the source and destination buffers to have the same height and the same width, but they do not.
- [kvImageUnknownFlagsBit](kvimageunknownflagsbit.md): The flag is not recognized.
- [kvImageColorSyncIsAbsent](kvimagecolorsyncisabsent.md)
- [kvImageCoreVideoIsAbsent](kvimagecorevideoisabsent.md)
- [kvImageInternalError](kvimageinternalerror.md): A serious error occured inside vImage, which prevented vImage from continuing.
- [kvImageInvalidCVImageFormat](kvimageinvalidcvimageformat.md)
- [kvImageInvalidImageFormat](kvimageinvalidimageformat.md)
- [kvImageInvalidImageObject](kvimageinvalidimageobject.md)
- [kvImageInvalidRowBytes](kvimageinvalidrowbytes.md)
- [kvImageOutOfPlaceOperationRequired](kvimageoutofplaceoperationrequired.md)
- [kvImageUnsupportedConversion](kvimageunsupportedconversion.md): Some lower level conversion APIs only support conversion among a sparse matrix of image formats.

### Core Video Image Format Errors

- [kvImageCVImageFormat_NoError](kvimagecvimageformat_noerror.md): An error code that indicates the conversion completed without error.
- [kvImageCVImageFormat_ColorSpace](kvimagecvimageformat_colorspace.md): An error code that indicates the image’s color space is missing.
- [kvImageCVImageFormat_ChromaSiting](kvimagecvimageformat_chromasiting.md): An error code that indicates the chroma siting information is absent.
- [kvImageCVImageFormat_AlphaIsOneHint](kvimagecvimageformat_alphaisonehint.md): A hint that indicates the alpha channel is opaque.
- [kvImageCVImageFormat_ConversionMatrix](kvimagecvimageformat_conversionmatrix.md): An error code that indicates the required conversion matrix is absent.
- [kvImageCVImageFormat_VideoChannelDescription](kvimagecvimageformat_videochanneldescription.md): An error code that indicates the range and clipping information is missing.

## See Also

### Constants

- [Core Video Image Format Errors](1498271-core-video-image-format-errors.md)
- [Processing Flags](1578976-processing-flags.md): Set flags on vImage operations to specify processing options.
- [Dithering Methods](1533233-dithering-methods.md): Specify the dithering method some vImage conversion functions use.
- [Availability Flags](availability-flags.md): Obtain the availability of particular vImage features.
- [Decode Arrays](decode-arrays.md): Specify the decode array constant to use with 16Q12-formatted data.
- [Buffer Types](buffer-types.md): Look up buffer type codes vImage conversions provide.
- [vImageMatrixType](vimagematrixtype.md): An enumeration of RGB -\> Y’CbCr conversion matrix types.
- [vImage_WarpInterpolation](vimage_warpinterpolation.md): Constants for selecting the interpolation mode
