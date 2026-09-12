> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/transforming-with-a-gamma-function](https://developer.apple.com/documentation/accelerate/transforming-with-a-gamma-function)

# Transforming with a gamma function (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Use gamma functions to apply color transformations to images.

<a id="overview"></a>

## Overview

Gamma correction functions correct the brightness profile of an image by applying an exponent to each pixel in an image. The piecewise gamma correction functions allow you to add a linear transformation to pixels below a certain boundary. You can use gamma correction functions to prepare an image to display or print on a particular device.

## Topics

### Applying a gamma function

- [vImageCreateGammaFunction(\_:\_:\_:)](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF(\_:\_:\_:\_:)](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF(\_:\_:\_:\_:)](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
- [vImageDestroyGammaFunction(\_:)](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.
- [Adjusting saturation and applying tone mapping](adjusting-saturation-and-applying-tone-mapping.md): Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.

### Applying a piecewise gamma function

- [Adjusting the brightness and contrast of an image](adjusting-the-brightness-and-contrast-of-an-image.md): Use a gamma function to apply a linear or exponential curve.
- [vImagePiecewiseGamma_Planar8(\_:\_:\_:\_:\_:\_:\_:)](vimagepiecewisegamma_planar8%28______________%29.md): Applies a piecewise gamma function to transform an 8-bit planar image.
- [vImagePiecewiseGamma_Planar8toPlanar16Q12(\_:\_:\_:\_:\_:\_:\_:)](vimagepiecewisegamma_planar8toplanar16q12%28______________%29.md): Applies a piecewise gamma function to transform an 8-bit planar image to a 16Q12 planar image.
- [vImagePiecewiseGamma_Planar8toPlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimagepiecewisegamma_planar8toplanarf%28______________%29.md): Applies a piecewise gamma function to transform an 8-bit planar image to a 32-bit planar image.
- [vImagePiecewiseGamma_Planar16Q12(\_:\_:\_:\_:\_:\_:\_:)](vimagepiecewisegamma_planar16q12%28______________%29.md): Applies a piecewise gamma function to transform a 16Q12 planar image.
- [vImagePiecewiseGamma_Planar16Q12toPlanar8(\_:\_:\_:\_:\_:\_:\_:)](vimagepiecewisegamma_planar16q12toplanar8%28______________%29.md): Applies a piecewise gamma function to transform a 16Q12 planar image to an 8-bit planar image.
- [vImagePiecewiseGamma_PlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimagepiecewisegamma_planarf%28______________%29.md): Applies a piecewise gamma function to transform a 32-bit planar image.
- [vImagePiecewiseGamma_PlanarFtoPlanar8(\_:\_:\_:\_:\_:\_:\_:)](vimagepiecewisegamma_planarftoplanar8%28______________%29.md): Applies a piecewise gamma function to transform a 32-bit planar image to an 8-bit planar image.

### Applying a symmetric piecewise gamma function

- [vImageSymmetricPiecewiseGamma_Planar16Q12(\_:\_:\_:\_:\_:\_:\_:)](vimagesymmetricpiecewisegamma_planar16q12%28______________%29.md): Applies a symmetric piecewise gamma function to transform a 16Q12 planar image to an 8-bit planar image.
- [vImageSymmetricPiecewiseGamma_PlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimagesymmetricpiecewisegamma_planarf%28______________%29.md): Applies a symmetric piecewise gamma function to transform a 32-bit planar image.

## See Also

### Applying color transforms to images

- [Transforming with lookup tables](transforming-with-lookup-tables.md): Use lookup tables to apply color transformations to images.
- [Transforming with polynomials](transforming-with-polynomials.md): Use polynomials to apply color transformations to images.
- [Transforming with matrix multiplication](transforming-with-matrix-multiplication.md): Use matrix multiplication to apply color transformations to images.
- [Applying a flood fill to an image](applying-a-flood-fill-to-an-image.md): Fill connected components of an image with a new color.

# Transforming with a gamma function (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Use gamma functions to apply color transformations to images.

<a id="overview"></a>

## Overview

Gamma correction functions correct the brightness profile of an image by applying an exponent to each pixel in an image. The piecewise gamma correction functions allow you to add a linear transformation to pixels below a certain boundary. You can use gamma correction functions to prepare an image to display or print on a particular device.

## Topics

### Applying a gamma function

- [vImageCreateGammaFunction](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
- [vImageDestroyGammaFunction](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.

### Applying a piecewise gamma function

- [Adjusting the brightness and contrast of an image](adjusting-the-brightness-and-contrast-of-an-image.md): Use a gamma function to apply a linear or exponential curve.
- [vImagePiecewiseGamma_Planar8](vimagepiecewisegamma_planar8%28______________%29.md): Applies a piecewise gamma function to transform an 8-bit planar image.
- [vImagePiecewiseGamma_Planar8toPlanar16Q12](vimagepiecewisegamma_planar8toplanar16q12%28______________%29.md): Applies a piecewise gamma function to transform an 8-bit planar image to a 16Q12 planar image.
- [vImagePiecewiseGamma_Planar8toPlanarF](vimagepiecewisegamma_planar8toplanarf%28______________%29.md): Applies a piecewise gamma function to transform an 8-bit planar image to a 32-bit planar image.
- [vImagePiecewiseGamma_Planar16Q12](vimagepiecewisegamma_planar16q12%28______________%29.md): Applies a piecewise gamma function to transform a 16Q12 planar image.
- [vImagePiecewiseGamma_Planar16Q12toPlanar8](vimagepiecewisegamma_planar16q12toplanar8%28______________%29.md): Applies a piecewise gamma function to transform a 16Q12 planar image to an 8-bit planar image.
- [vImagePiecewiseGamma_PlanarF](vimagepiecewisegamma_planarf%28______________%29.md): Applies a piecewise gamma function to transform a 32-bit planar image.
- [vImagePiecewiseGamma_PlanarFtoPlanar8](vimagepiecewisegamma_planarftoplanar8%28______________%29.md): Applies a piecewise gamma function to transform a 32-bit planar image to an 8-bit planar image.

### Applying a symmetric piecewise gamma function

- [vImageSymmetricPiecewiseGamma_Planar16Q12](vimagesymmetricpiecewisegamma_planar16q12%28______________%29.md): Applies a symmetric piecewise gamma function to transform a 16Q12 planar image to an 8-bit planar image.
- [vImageSymmetricPiecewiseGamma_PlanarF](vimagesymmetricpiecewisegamma_planarf%28______________%29.md): Applies a symmetric piecewise gamma function to transform a 32-bit planar image.

## See Also

### Applying color transforms to images

- [Transforming with lookup tables](transforming-with-lookup-tables.md): Use lookup tables to apply color transformations to images.
- [Transforming with polynomials](transforming-with-polynomials.md): Use polynomials to apply color transformations to images.
- [Transforming with matrix multiplication](transforming-with-matrix-multiplication.md): Use matrix multiplication to apply color transformations to images.
- [Applying a flood fill to an image](applying-a-flood-fill-to-an-image.md): Fill connected components of an image with a new color.
