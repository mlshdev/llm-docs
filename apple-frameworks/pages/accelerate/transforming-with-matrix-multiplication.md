> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/transforming-with-matrix-multiplication](https://developer.apple.com/documentation/accelerate/transforming-with-matrix-multiplication)

# Transforming with matrix multiplication (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Use matrix multiplication to apply color transformations to images.

<a id="overview"></a>

## Overview

Matrix multiplication functions treat source pixels as `m`-element vectors, with the number of vector elements corresponding to the number of channels. The functions multiply each source value by an `n x m` matrix to produce an `n`-element destination pixel. You can use matrix multiplication functions for tasks like converting between color spaces. For example, you can multiply three-channel RGB pixels by a 4 x 3 matrix to generate four-channel CMYK pixels.

## Topics

### Multiplying multiple-plane pixels by a matrix

- [Adjusting saturation and applying tone mapping](adjusting-saturation-and-applying-tone-mapping.md): Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.
- [vImageMatrixMultiply_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_planar8%28__________________%29.md): Multiplies each pixel in a set of 8-bit source image planes by a matrix to produce a set of 8-bit destination image planes.
- [vImageMatrixMultiply_Planar16S(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_planar16s%28__________________%29.md): Multiplies each pixel in a set of 16-bit source image planes by a matrix to produce a set of 8-bit destination image planes.
- [vImageMatrixMultiply_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_planarf%28________________%29.md): Multiplies each pixel in a set of 32-bit source image planes by a matrix to produce a set of 32-bit destination image planes.

### Multiplying interleaved pixels by a matrix

- [vImageMatrixMultiply_ARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argb8888%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce an interleaved four-channel, 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argbffff%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce an interleaved four-channel, 32-bit destination image.
- [vImageMatrixMultiply_ARGB8888ToPlanar8(\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argb8888toplanar8%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce a planar 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFFToPlanarF(\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argbfffftoplanarf%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce a planar 32-bit destination image.

## See Also

### Applying color transforms to images

- [Transforming with lookup tables](transforming-with-lookup-tables.md): Use lookup tables to apply color transformations to images.
- [Transforming with polynomials](transforming-with-polynomials.md): Use polynomials to apply color transformations to images.
- [Transforming with a gamma function](transforming-with-a-gamma-function.md): Use gamma functions to apply color transformations to images.
- [Applying a flood fill to an image](applying-a-flood-fill-to-an-image.md): Fill connected components of an image with a new color.

# Transforming with matrix multiplication (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Use matrix multiplication to apply color transformations to images.

<a id="overview"></a>

## Overview

Matrix multiplication functions treat source pixels as `m`-element vectors, with the number of vector elements corresponding to the number of channels. The functions multiply each source value by an `n x m` matrix to produce an `n`-element destination pixel. You can use matrix multiplication functions for tasks like converting between color spaces. For example, you can multiply three-channel RGB pixels by a 4 x 3 matrix to generate four-channel CMYK pixels.

## Topics

### Multiplying multiple-plane pixels by a matrix

- [vImageMatrixMultiply_Planar8](vimagematrixmultiply_planar8%28__________________%29.md): Multiplies each pixel in a set of 8-bit source image planes by a matrix to produce a set of 8-bit destination image planes.
- [vImageMatrixMultiply_Planar16S](vimagematrixmultiply_planar16s%28__________________%29.md): Multiplies each pixel in a set of 16-bit source image planes by a matrix to produce a set of 8-bit destination image planes.
- [vImageMatrixMultiply_PlanarF](vimagematrixmultiply_planarf%28________________%29.md): Multiplies each pixel in a set of 32-bit source image planes by a matrix to produce a set of 32-bit destination image planes.

### Multiplying interleaved pixels by a matrix

- [vImageMatrixMultiply_ARGB8888](vimagematrixmultiply_argb8888%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce an interleaved four-channel, 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFF](vimagematrixmultiply_argbffff%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce an interleaved four-channel, 32-bit destination image.
- [vImageMatrixMultiply_ARGB8888ToPlanar8](vimagematrixmultiply_argb8888toplanar8%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce a planar 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFFToPlanarF](vimagematrixmultiply_argbfffftoplanarf%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce a planar 32-bit destination image.

## See Also

### Applying color transforms to images

- [Transforming with lookup tables](transforming-with-lookup-tables.md): Use lookup tables to apply color transformations to images.
- [Transforming with polynomials](transforming-with-polynomials.md): Use polynomials to apply color transformations to images.
- [Transforming with a gamma function](transforming-with-a-gamma-function.md): Use gamma functions to apply color transformations to images.
- [Applying a flood fill to an image](applying-a-flood-fill-to-an-image.md): Fill connected components of an image with a new color.
