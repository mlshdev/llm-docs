> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/1578976-processing-flags](https://developer.apple.com/documentation/accelerate/1578976-processing-flags)

# Processing Flags (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Set flags on vImage operations to specify processing options.

<a id="overview"></a>

## Overview

You can pass multiple flags to a function by adding the flag values together. For example, to leave alpha unchanged and turn off tiling, you can pass:

```objc
kvImageLeaveAlphaUnchanged + kvImageDoNotTile
```

Three of the flags are mutually exclusive: `kvImageCopyInPlace`, `kvImageBackgroundColorFill`, and `kvImageEdgeExtend`. Never pass more than one of these flag values in the same flag parameter.

When passing flags to a function, do not set values for flags that are not used by the function. If the function requires you to set certain flag values, do so. For example, for the convolution function, you must set exactly one of `kvImageCopyInPlace`, `kvImageBackgroundColorFill`, and `kvImageEdgeExtend`.  Otherwise the function may return an error. If you don’t want to set flag values, pass `kvImageNoFlags`.

## Topics

### Constants

- [vImage.Options](vimage/options.md): Set flags on vImage operations to specify processing options.
- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.

### Edging Modes

- [kvImageCopyInPlace](kvimagecopyinplace.md): A flag that copies the value of the edge pixel in the source to the destination.
- [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md): A flag that uses the background color for missing pixels.
- [kvImageEdgeExtend](kvimageedgeextend.md): A flag that extends the edges of the image infinitely.
- [kvImageTruncateKernel](kvimagetruncatekernel.md): A flag that uses only the part of the kernel that overlaps the image.

## See Also

### Constants

- [Error codes](1578972-error-codes.md): Error codes that vImage functions return when an operation fails.
- [Core Video Image Format Errors](1498271-core-video-image-format-errors.md)
- [Dithering Methods](1533233-dithering-methods.md): Specify the dithering method some vImage conversion functions use.
- [Availability Flags](availability-flags.md): Obtain the availability of particular vImage features.
- [Decode Arrays](decode-arrays.md): Specify the decode array constant to use with 16Q12-formatted data.
- [Buffer Types](buffer-types.md): Look up buffer type codes vImage conversions provide.
- [vImageMatrixType](vimagematrixtype.md): An enumeration of RGB -\> Y’CbCr conversion matrix types.
- [vImage_WarpInterpolation](vimage_warpinterpolation.md): Constants for selecting the interpolation mode

# Processing Flags (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Set flags on vImage operations to specify processing options.

<a id="overview"></a>

## Overview

You can pass multiple flags to a function by adding the flag values together. For example, to leave alpha unchanged and turn off tiling, you can pass:

```objc
kvImageLeaveAlphaUnchanged + kvImageDoNotTile
```

Three of the flags are mutually exclusive: `kvImageCopyInPlace`, `kvImageBackgroundColorFill`, and `kvImageEdgeExtend`. Never pass more than one of these flag values in the same flag parameter.

When passing flags to a function, do not set values for flags that are not used by the function. If the function requires you to set certain flag values, do so. For example, for the convolution function, you must set exactly one of `kvImageCopyInPlace`, `kvImageBackgroundColorFill`, and `kvImageEdgeExtend`.  Otherwise the function may return an error. If you don’t want to set flag values, pass `kvImageNoFlags`.

## Topics

### Constants

- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.

### Edging Modes

- [kvImageCopyInPlace](kvimagecopyinplace.md): A flag that copies the value of the edge pixel in the source to the destination.
- [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md): A flag that uses the background color for missing pixels.
- [kvImageEdgeExtend](kvimageedgeextend.md): A flag that extends the edges of the image infinitely.
- [kvImageTruncateKernel](kvimagetruncatekernel.md): A flag that uses only the part of the kernel that overlaps the image.

## See Also

### Constants

- [Error codes](1578972-error-codes.md): Error codes that vImage functions return when an operation fails.
- [Core Video Image Format Errors](1498271-core-video-image-format-errors.md)
- [Dithering Methods](1533233-dithering-methods.md): Specify the dithering method some vImage conversion functions use.
- [Availability Flags](availability-flags.md): Obtain the availability of particular vImage features.
- [Decode Arrays](decode-arrays.md): Specify the decode array constant to use with 16Q12-formatted data.
- [Buffer Types](buffer-types.md): Look up buffer type codes vImage conversions provide.
- [vImageMatrixType](vimagematrixtype.md): An enumeration of RGB -\> Y’CbCr conversion matrix types.
- [vImage_WarpInterpolation](vimage_warpinterpolation.md): Constants for selecting the interpolation mode
