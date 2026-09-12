> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/data-types-and-constants](https://developer.apple.com/documentation/accelerate/data-types-and-constants)

# Data Types and Constants

**Interface languages:** Swift, Objective-C

**Framework:** Accelerate  
**Kind:** API Collection

Look up type aliases, data types, and constants the vImage library uses.

<a id="overview"></a>

## Overview

The vImage library defines data types for planar and interleaved pixel types, a resampling callback filter, and an affine transform. vImage provides constants that specify errors and flags that you pass to a function to specify a variety of processing options.

## Topics

### Pixel Formats

- [Pixel_8](pixel_8.md): A type for a planar, 8-bits-per-channel, unsigned pixel.
- [Pixel_88](pixel_88.md): A type for a two-channel, 8-bits-per-channel, unsigned pixel.
- [Pixel_8888](pixel_8888.md): A type for a four-channel, 8-bits-per-channel, unsigned pixel.
- [Pixel_F](pixel_f.md): A type for a planar, 32-bits-per-channel, floating-point pixel.
- [Pixel_FFFF](pixel_ffff.md): A type for a four-channel, 32-bits-per-channel, floating-point pixel.
- [Pixel_32U](pixel_32u.md): A type you use for the XRGB2101010 format.
- [Pixel_16U](pixel_16u.md): A type for a planar, 16-bits-per-channel, unsigned pixel.
- [Pixel_ARGB_16U](pixel_argb_16u.md): A type for a four-channel, 16-bits-per-channel, unsigned pixel.
- [Pixel_16U16U](pixel_16u16u.md): A type for a two-channel, 16-bits-per-channel, unsigned pixel.
- [Pixel_16Q12](pixel_16q12.md): A type for a signed 16-bit, fixed-point number with 12 bits of fractional precision.
- [Pixel_16S](pixel_16s.md): A type for a planar, 16-bits-per-channel, signed pixel.
- [Pixel_ARGB_16S](pixel_argb_16s.md): A type for a four-channel, 16-bits-per-channel, signed pixel.
- [Pixel_16F](pixel_16f.md)
- [Pixel_16F16F](pixel_16f16f.md)
- [Pixel_16S16S](pixel_16s16s.md)
- [Pixel_ARGB_16F](pixel_argb_16f.md)
- [Pixel_FF](pixel_ff.md)

### Data Types

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_AffineTransform_Double](vimage_affinetransform_double.md): A structure for values that represent a double-precision affine transformation.
- [vImage_CGAffineTransform](vimage_cgaffinetransform.md): A structure for values that represent a Core Graphics–compatible affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
- [ResamplingFilter](resamplingfilter.md): A pointer to a resampling filter callback function.

### Constants

- [Error codes](1578972-error-codes.md): Error codes that vImage functions return when an operation fails.
- [Core Video Image Format Errors](1498271-core-video-image-format-errors.md)
- [Processing Flags](1578976-processing-flags.md): Set flags on vImage operations to specify processing options.
- [Dithering Methods](1533233-dithering-methods.md): Specify the dithering method some vImage conversion functions use.
- [Availability Flags](availability-flags.md): Obtain the availability of particular vImage features.
- [Decode Arrays](decode-arrays.md): Specify the decode array constant to use with 16Q12-formatted data.
- [Buffer Types](buffer-types.md): Look up buffer type codes vImage conversions provide.
- [vImageMatrixType](vimagematrixtype.md): An enumeration of RGB -\> Y’CbCr conversion matrix types.
- [vImage_WarpInterpolation](vimage_warpinterpolation.md): Constants for selecting the interpolation mode

## See Also

### Related Documentation

- [vImage Programming Guide](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/vImage/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001001)
