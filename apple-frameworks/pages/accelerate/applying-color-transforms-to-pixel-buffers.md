> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-color-transforms-to-pixel-buffers](https://developer.apple.com/documentation/accelerate/applying-color-transforms-to-pixel-buffers)

# Applying color transforms to pixel buffers

**Framework:** Accelerate  
**Kind:** API Collection

Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.

## Topics

### Applying gamma

- [applyGamma(\_:intermediateBuffer:destination:)](vimage/pixelbuffer/applygamma%28__intermediatebuffer_destination_%29-1fif9.md): Conforms when `Format` is `vImage.Planar8`. Applies a gamma function to an 8-bit planar pixel buffer.
- [applyGamma(\_:intermediateBuffer:destination:)](vimage/pixelbuffer/applygamma%28__intermediatebuffer_destination_%29-390k5.md): Conforms when `Format` is `vImage.Interleaved8x2`. Applies a gamma function to an 8-bit-per-channel, 2-channel interleaved pixel buffer.
- [applyGamma(\_:intermediateBuffer:destination:)](vimage/pixelbuffer/applygamma%28__intermediatebuffer_destination_%29-3yu0w.md): Conforms when `Format` is `vImage.Interleaved8x3`. Applies a gamma function to an 8-bit-per-channel, 3-channel interleaved pixel buffer.
- [applyGamma(\_:intermediateBuffer:destination:)](vimage/pixelbuffer/applygamma%28__intermediatebuffer_destination_%29-wsww.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a gamma function to an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [applyGamma(\_:destination:)](vimage/pixelbuffer/applygamma%28__destination_%29.md): Conforms when `Format` conforms to `StaticPixelFormat` and `Format.ComponentType` is `Float`. Applies a gamma function to a 32-bit pixel buffer.
- [vImage.Gamma](vimage/gamma.md): Describes either a used-defined or constant gamma.

### Applying piecewise gamma

- [applyGamma(linearParameters:exponentialParameters:boundary:destination:)](vimage/pixelbuffer/applygamma%28linearparameters_exponentialparameters_boundary_destination_%29-249w5.md): Conforms when `Format` conforms to `StaticPixelFormat` and `Format.ComponentType` is `UInt8`. Applies a piecewise gamma calculation to an 8-bit pixel buffer.
- [applyGamma(linearParameters:exponentialParameters:boundary:destination:)](vimage/pixelbuffer/applygamma%28linearparameters_exponentialparameters_boundary_destination_%29-8r0ro.md): Conforms when `Format` conforms to `StaticPixelFormat` and `Format.ComponentType` is `Float`. Applies a piecewise gamma calculation to a 32-bit pixel buffer.

### Appying polynomial (32-bit source, 8-bit destination)

- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-3b0d0.md): Conforms when `Format` is `vImage.PlanarF`. Applies a set of piecewise polynomials to a 32-bit planar buffer and writes the result to an 8-bit planar buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-6uls3.md): Conforms when `Format` is `vImage.InterleavedFx2`. Applies a set of piecewise polynomials to a 2-channel, 32-bit interleaved buffer and writes the result to a 2-channel, 8-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-4r6nf.md): Conforms when `Format` is `vImage.InterleavedFx3`. Applies a set of piecewise polynomials to a 3-channel, 32-bit interleaved buffer and writes the result to a 3-channel, 8-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-1b2nu.md): Conforms when `Format` is `vImage.InterleavedFx4`. Applies a set of piecewise polynomials to a 4-channel, 32-bit interleaved buffer and writes the result to a 4-channel, 8-bit interleaved buffer.

### Appying polynomial (8-bit source, 32-bit destination)

- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-7sy2t.md): Conforms when `Format` is `vImage.Planar8`. Applies a set of piecewise polynomials to an 8-bit planar buffer and writes the result to a 32-bit planar buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-3sxxv.md): Conforms when `Format` is `vImage.Interleaved8x2`. Applies a set of piecewise polynomials to a 2-channel, 8-bit interleaved buffer and writes the result to a 2-channel, 32-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-4o5ju.md): Conforms when `Format` is `vImage.Interleaved8x3`. Applies a set of piecewise polynomials to a 3-channel, 8-bit interleaved buffer and writes the result to a 3-channel, 32-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-6ohrj.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a set of piecewise polynomials to a 4-channel, 8-bit interleaved buffer and writes the result to a 4-channel, 32-bit interleaved buffer.

### Appying polynomial (32-bit)

- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-3c46t.md): Conforms when `Format` is `vImage.PlanarF`. Applies a set of piecewise polynomials to a 32-bit planar buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-8f5i9.md): Conforms when `Format` is `vImage.InterleavedFx2`. Applies a set of piecewise polynomials to a 2-channel, 32-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-26zom.md): Conforms when `Format` is `vImage.InterleavedFx3`. Applies a set of piecewise polynomials to a 3-channel, 32-bit interleaved buffer.
- [applyPolynomial(coefficientSegments:boundaries:destination:)](vimage/pixelbuffer/applypolynomial%28coefficientsegments_boundaries_destination_%29-8uesn.md): Conforms when `Format` is `vImage.InterleavedFx4`. Applies a set of piecewise polynomials to a 4-channel, 32-bit interleaved buffer.

### Transforming with a lookup table

- [applyLookup(\_:destination:)](vimage/pixelbuffer/applylookup%28__destination_%29-5r7bq.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image.
- [applyLookup(\_:destination:)](vimage/pixelbuffer/applylookup%28__destination_%29-14pjo.md): Conforms when `Format` is `vImage.PlanarF`. Applies a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [applyLookup(\_:destination:)](vimage/pixelbuffer/applylookup%28__destination_%29-5oi4o.md): Conforms when `Format` is `vImage.Planar16U`. Applies a lookup table to transform an 8-bit planar image to a 16-bit planar image.
- [applyLookup(\_:destination:)](vimage/pixelbuffer/applylookup%28__destination_%29-3ruls.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image to an 8-bit-per-channel, three-channel interleaved image.
- [applyLookup(\_:destination:)](vimage/pixelbuffer/applylookup%28__destination_%29-1tsb5.md): Conforms when `Format` is `vImage.Planar8`. Applies a lookup table to transform an 8-bit planar image to a 32-bit-per-channel, three-channel interleaved image.
- [applyLookup(alphaTable:redTable:greenTable:blueTable:destination:)](vimage/pixelbuffer/applylookup%28alphatable_redtable_greentable_bluetable_destination_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a set of four lookup tables to transform an interleaved, four-channel 8-bit image.

### Transforming with a multidimensional lookup table

- [vImage.MultidimensionalLookupTable](vimage/multidimensionallookuptable.md): A multidimensional lookup table.

### Applying a flood fill to an image

- [floodFill(from:newColor:connectivity:)](vimage/pixelbuffer/floodfill%28from_newcolor_connectivity_%29-44z7t.md): Conforms when `Format` is `vImage.Planar8`. Applies an in-place flood-fill operation to the 8-bit planar image.
- [floodFill(from:newColor:connectivity:)](vimage/pixelbuffer/floodfill%28from_newcolor_connectivity_%29-56w4b.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies an in-place flood-fill operation to the interleaved 4-channel, 8-bit-per-pixel image.
- [floodFill(from:newColor:connectivity:)](vimage/pixelbuffer/floodfill%28from_newcolor_connectivity_%29-219lg.md): Conforms when `Format` is `vImage.Planar16U`. Applies an in-place flood-fill operation to the unsigned 16-bit planar image.
- [floodFill(from:newColor:connectivity:)](vimage/pixelbuffer/floodfill%28from_newcolor_connectivity_%29-6hsrg.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Applies an in-place flood-fill operation to the interleaved 4-channel, unsigned16-bit-per-pixel image.

## See Also

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Blending and compositing pixel buffers](blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Convolving and applying morphology](convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Converting pixel buffers](converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Interleaving and deinterleaving pixel buffers](interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
