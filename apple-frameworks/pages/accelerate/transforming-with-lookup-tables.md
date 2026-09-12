> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/transforming-with-lookup-tables](https://developer.apple.com/documentation/accelerate/transforming-with-lookup-tables)

# Transforming with lookup tables (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Use lookup tables to apply color transformations to images.

<a id="overview"></a>

## Overview

Lookup table functions use the value of a source pixel as an index into a lookup table of colors that defines the corresponding destination pixel. You can use lookup table functions to perform tasks, such as color grading, converting between color spaces, or generating false-color images.

## Topics

### Transforming planar-to-planar with a lookup table

- [vImageTableLookUp_Planar8(\_:\_:\_:\_:)](vimagetablelookup_planar8%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an 8-bit planar image.
- [vImageLookupTable_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagelookuptable_planarftoplanar8%28________%29.md): Uses a lookup table to transform a 32-bit planar image to an 8-bit planar image.
- [vImageLookupTable_Planar8toPlanar16(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanar16%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an unsigned 16-bit planar image.
- [vImageLookupTable_Planar8toPlanarF(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanarf%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [vImageLookupTable_8to64U(\_:\_:\_:\_:)](vimagelookuptable_8to64u%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 64-bit planar image.
- [vImageLookupTable_Planar16(\_:\_:\_:\_:)](vimagelookuptable_planar16%28________%29.md): Uses a lookup table to transform a 16-bit planar image.
- [vImageInterpolatedLookupTable_PlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimageinterpolatedlookuptable_planarf%28______________%29.md): Uses an interpolated lookup table to transform a 32-bit planar image.

### Transforming planar-to-interleaved with a lookup table

- [vImageLookupTable_Planar8toPlanar24(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanar24%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an 8-bit-per-channel, three-channel interleaved image.
- [vImageLookupTable_Planar8toPlanar48(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanar48%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 16-bit-per-channel, three-channel interleaved image.
- [vImageLookupTable_Planar8toPlanar96(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanar96%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, three-channel interleaved image.
- [vImageLookupTable_Planar8toPlanar128(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanar128%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, four-channel interleaved image.

### Transforming interleaved-to-interleaved with a lookup table

- [vImageTableLookUp_ARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimagetablelookup_argb8888%28______________%29.md): Uses a lookup table to transform an interleaved, four-channel 8-bit planar image to an interleaved, four-channel 8-bit planar image.

### Transforming with a multidimensional lookup table

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [Cropping to the subject in a chroma-keyed image](cropping-to-the-subject-in-a-chroma-keyed-image.md): Convert a chroma-key color to alpha values and trim transparent pixels using Accelerate.
- [Applying transformations to selected colors in an image](applying-transformations-to-selected-colors-in-an-image.md): Desaturate a range of colors in an image with a multidimensional lookup table.
- [vImageMultidimensionalTable_Create(\_:\_:\_:\_:\_:\_:\_:)](vimagemultidimensionaltable_create%28______________%29.md): Creates a multidimensional lookup table.
- [vImageMultiDimensionalInterpolatedLookupTable_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagemultidimensionalinterpolatedlookuptable_planarf%28____________%29.md): Uses a multidimensional lookup table to transform a 32-bit planar image.
- [vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(\_:\_:\_:\_:\_:\_:)](vimagemultidimensionalinterpolatedlookuptable_planar16q12%28____________%29.md): Uses a multidimensional lookup table to transform a 16Q12 planar image.
- [vImageMultidimensionalTable_Retain(\_:)](vimagemultidimensionaltable_retain%28__%29.md): Retains a multidimensional table.
- [vImageMultidimensionalTable_Release(\_:)](vimagemultidimensionaltable_release%28__%29.md): Releases a multidimensional table.
- [vImage_MultidimensionalTable](vimage_multidimensionaltable.md): An opaque pointer that represents a multidimensional lookup table.
- [vImageMDTableUsageHint](vimagemdtableusagehint.md): Constants that indicate the use for a multidimensional lookup table.
- [vImage_InterpolationMethod](vimage_interpolationmethod.md): Constants that represent different interpolation methods.

## See Also

### Applying color transforms to images

- [Transforming with polynomials](transforming-with-polynomials.md): Use polynomials to apply color transformations to images.
- [Transforming with matrix multiplication](transforming-with-matrix-multiplication.md): Use matrix multiplication to apply color transformations to images.
- [Transforming with a gamma function](transforming-with-a-gamma-function.md): Use gamma functions to apply color transformations to images.
- [Applying a flood fill to an image](applying-a-flood-fill-to-an-image.md): Fill connected components of an image with a new color.

# Transforming with lookup tables (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Use lookup tables to apply color transformations to images.

<a id="overview"></a>

## Overview

Lookup table functions use the value of a source pixel as an index into a lookup table of colors that defines the corresponding destination pixel. You can use lookup table functions to perform tasks, such as color grading, converting between color spaces, or generating false-color images.

## Topics

### Transforming planar-to-planar with a lookup table

- [vImageTableLookUp_Planar8](vimagetablelookup_planar8%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an 8-bit planar image.
- [vImageLookupTable_PlanarFtoPlanar8](vimagelookuptable_planarftoplanar8%28________%29.md): Uses a lookup table to transform a 32-bit planar image to an 8-bit planar image.
- [vImageLookupTable_Planar8toPlanar16](vimagelookuptable_planar8toplanar16%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an unsigned 16-bit planar image.
- [vImageLookupTable_Planar8toPlanarF](vimagelookuptable_planar8toplanarf%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [vImageLookupTable_8to64U](vimagelookuptable_8to64u%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 64-bit planar image.
- [vImageLookupTable_Planar16](vimagelookuptable_planar16%28________%29.md): Uses a lookup table to transform a 16-bit planar image.
- [vImageInterpolatedLookupTable_PlanarF](vimageinterpolatedlookuptable_planarf%28______________%29.md): Uses an interpolated lookup table to transform a 32-bit planar image.

### Transforming planar-to-interleaved with a lookup table

- [vImageLookupTable_Planar8toPlanar24](vimagelookuptable_planar8toplanar24%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an 8-bit-per-channel, three-channel interleaved image.
- [vImageLookupTable_Planar8toPlanar48](vimagelookuptable_planar8toplanar48%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 16-bit-per-channel, three-channel interleaved image.
- [vImageLookupTable_Planar8toPlanar96](vimagelookuptable_planar8toplanar96%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, three-channel interleaved image.
- [vImageLookupTable_Planar8toPlanar128](vimagelookuptable_planar8toplanar128%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, four-channel interleaved image.

### Transforming interleaved-to-interleaved with a lookup table

- [vImageTableLookUp_ARGB8888](vimagetablelookup_argb8888%28______________%29.md): Uses a lookup table to transform an interleaved, four-channel 8-bit planar image to an interleaved, four-channel 8-bit planar image.

### Transforming with a multidimensional lookup table

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [vImageMultidimensionalTable_Create](vimagemultidimensionaltable_create%28______________%29.md): Creates a multidimensional lookup table.
- [vImageMultiDimensionalInterpolatedLookupTable_PlanarF](vimagemultidimensionalinterpolatedlookuptable_planarf%28____________%29.md): Uses a multidimensional lookup table to transform a 32-bit planar image.
- [vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12](vimagemultidimensionalinterpolatedlookuptable_planar16q12%28____________%29.md): Uses a multidimensional lookup table to transform a 16Q12 planar image.
- [vImageMultidimensionalTable_Retain](vimagemultidimensionaltable_retain%28__%29.md): Retains a multidimensional table.
- [vImageMultidimensionalTable_Release](vimagemultidimensionaltable_release%28__%29.md): Releases a multidimensional table.
- [vImage_MultidimensionalTable](vimage_multidimensionaltable.md): An opaque pointer that represents a multidimensional lookup table.
- [vImageMDTableUsageHint](vimagemdtableusagehint.md): Constants that indicate the use for a multidimensional lookup table.
- [vImage_InterpolationMethod](vimage_interpolationmethod.md): Constants that represent different interpolation methods.

## See Also

### Applying color transforms to images

- [Transforming with polynomials](transforming-with-polynomials.md): Use polynomials to apply color transformations to images.
- [Transforming with matrix multiplication](transforming-with-matrix-multiplication.md): Use matrix multiplication to apply color transformations to images.
- [Transforming with a gamma function](transforming-with-a-gamma-function.md): Use gamma functions to apply color transformations to images.
- [Applying a flood fill to an image](applying-a-flood-fill-to-an-image.md): Fill connected components of an image with a new color.
