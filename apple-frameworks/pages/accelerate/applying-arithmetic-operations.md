> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-arithmetic-operations](https://developer.apple.com/documentation/accelerate/applying-arithmetic-operations)

# Applying arithmetic operations

**Framework:** Accelerate  
**Kind:** API Collection

Multiply the pixel values of a buffer by scalar values or matrices.

## Topics

### Scalar Multiplication

- [multiply(by:divisor:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_divisor_prebias_postbias_destination_%29-7jo6v.md): Conforms when `Format` is `vImage.Planar8`. Multiplies each pixel in an 8-bit planar pixel buffer by the specified factor.
- [multiply(by:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_prebias_postbias_destination_%29-3bh2a.md): Conforms when `Format` is `vImage.PlanarF`. Multiplies each pixel in a 32-bit planar pixel buffer by the specified factor.

### Matrix Multiplication

- [multiply(by:divisor:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_divisor_prebias_postbias_destination_%29-7ikb7.md): Conforms when `Format` is `vImage.Interleaved8x4`. Multiplies each four channel pixel in an 8-bit-per channel, 4-channel pixel buffer by a 4 x 4 matrix to produce a four channel result.
- [multiply(by:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_prebias_postbias_destination_%29-5tm47.md): Conforms when `Format` is `vImage.InterleavedFx4`. Multiplies each four channel pixel in a 32-bit-per channel, 4-channel pixel buffer by a 4 x 4 matrix to produce a four channel result.
- [multiply(by:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_prebias_postbias_destination_%29-5tq68.md): Conforms when `Format` is `vImage.InterleavedFx4`. Multiplies each four channel pixel in a 32-bit-per channel, 4-channel pixel buffer by a 4 x 4 simd matrix to produce a four channel result.
- [multiply(by:divisor:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_divisor_prebias_postbias_destination_%29-86hbw.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Multiplies each four channel pixel in an 8-bit multiple-plane pixel buffer by a 4 x 4 matrix to produce a four channel result.
- [multiply(by:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_prebias_postbias_destination_%29-3kltz.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Multiplies each four channel pixel in a 32-bit multiple-plane pixel buffer by a 4 x 4 matrix to produce a four channel result.

### Pixel Multiplication

- [multiply(by:divisor:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_divisor_prebias_postbias_destination_%29-4q614.md): Conforms when `Format` is `vImage.Interleaved8x4`. Multiplies each four channel pixel in an 8-bit-per channel, 4-channel pixel buffer by a four element matrix to produce a single channel result.
- [multiply(by:preBias:postBias:destination:)](vimage/pixelbuffer/multiply%28by_prebias_postbias_destination_%29-1sp5l.md): Conforms when `Format` is `vImage.InterleavedFx4`. Multiplies each four channel pixel in a 32-bit-per channel, 4-channel pixel buffer by a four element matrix to produce a single channel result.

## See Also

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Applying color transforms to pixel buffers](applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Blending and compositing pixel buffers](blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Convolving and applying morphology](convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Converting pixel buffers](converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Interleaving and deinterleaving pixel buffers](interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
