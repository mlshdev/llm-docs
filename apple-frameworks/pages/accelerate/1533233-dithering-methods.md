> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/1533233-dithering-methods](https://developer.apple.com/documentation/accelerate/1533233-dithering-methods)

# Dithering Methods

**Interface languages:** Swift, Objective-C

**Framework:** Accelerate  
**Kind:** API Collection

Specify the dithering method some vImage conversion functions use.

## Topics

### Constants

- [kvImageConvert_DitherNone](kvimageconvert_dithernone.md): A constant that indicates the conversion will not apply dithering.
- [kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md): A constant that indicates the conversion will add randomized, pre-computed blue noise to the image.
- [kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md): A constant that indicates the conversion will add reproducible, pre-computed blue noise to the image.
- [kvImageConvert_DitherFloydSteinberg](kvimageconvert_ditherfloydsteinberg.md): A constant that indicates the conversion will add Floyd-Steinberg dithering to the image.
- [kvImageConvert_DitherAtkinson](kvimageconvert_ditheratkinson.md): A constant that indicates the conversion will add Atkinson dithering to the image.
- [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md): A constant that indicates the conversion will distribute the noise according to a Gaussian distribution.
- [kvImageConvert_OrderedUniformBlue](kvimageconvert_ordereduniformblue.md): A constant that indicates the conversion will distribute the noise uniformly.
- [kvImageConvert_OrderedNoiseShapeMask](kvimageconvert_orderednoiseshapemask.md)

## See Also

### Constants

- [Error codes](1578972-error-codes.md): Error codes that vImage functions return when an operation fails.
- [Core Video Image Format Errors](1498271-core-video-image-format-errors.md)
- [Processing Flags](1578976-processing-flags.md): Set flags on vImage operations to specify processing options.
- [Availability Flags](availability-flags.md): Obtain the availability of particular vImage features.
- [Decode Arrays](decode-arrays.md): Specify the decode array constant to use with 16Q12-formatted data.
- [Buffer Types](buffer-types.md): Look up buffer type codes vImage conversions provide.
- [vImageMatrixType](vimagematrixtype.md): An enumeration of RGB -\> Y’CbCr conversion matrix types.
- [vImage_WarpInterpolation](vimage_warpinterpolation.md): Constants for selecting the interpolation mode
