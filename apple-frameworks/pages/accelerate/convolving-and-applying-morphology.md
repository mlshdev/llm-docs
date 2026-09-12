> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/convolving-and-applying-morphology](https://developer.apple.com/documentation/accelerate/convolving-and-applying-morphology)

# Convolving and applying morphology

**Framework:** Accelerate  
**Kind:** API Collection

Apply convolution, dilation, or erosion to a pixel buffer.

## Topics

### Morphology

- [applyMorphology(operation:destination:)](vimage/pixelbuffer/applymorphology%28operation_destination_%29-2bbx4.md): Conforms when `Format` is `vImage.Planar8`. Applies a morphology operation to an 8-bit planar pixel buffer.
- [applyMorphology(operation:destination:)](vimage/pixelbuffer/applymorphology%28operation_destination_%29-9f8lh.md): Conforms when `Format` is `vImage.PlanarF`. Applies a morphology operation to a 32-bit planar pixel buffer.
- [applyMorphology(operation:destination:)](vimage/pixelbuffer/applymorphology%28operation_destination_%29-1wacj.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a morphology operation to an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [applyMorphology(operation:destination:)](vimage/pixelbuffer/applymorphology%28operation_destination_%29-65xg3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Applies a morphology operation to a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [vImage.MorphologyOperation](vimage/morphologyoperation.md): Describes which morphology operation to perform.
- [vImage.StructuringElement](vimage/structuringelement.md): A 2D matrix that represents a morphology kernel.

### General convolution

- [convolve(with:divisor:bias:edgeMode:destination:)](vimage/pixelbuffer/convolve%28with_divisor_bias_edgemode_destination_%29-4o5w6.md): Conforms when `Format` is `vImage.Planar8`. Convolves an 8-bit planar pixel buffer.
- [convolve(with:bias:edgeMode:useFloat16Accumulator:destination:)](vimage/pixelbuffer/convolve%28with_bias_edgemode_usefloat16accumulator_destination_%29-1xkvu.md): Conforms when `Format` is `vImage.Planar16F`. Convolves a floating-point 16-bit planar pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](vimage/pixelbuffer/convolve%28with_bias_edgemode_destination_%29-tn07.md): Conforms when `Format` is `vImage.PlanarF`. Convolves a 32-bit planar pixel buffer.
- [convolve(with:divisor:bias:edgeMode:destination:)](vimage/pixelbuffer/convolve%28with_divisor_bias_edgemode_destination_%29-1oul9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:divisors:biases:edgeMode:destination:)](vimage/pixelbuffer/convolve%28with_divisors_biases_edgemode_destination_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer with separate kernels for each channel.
- [convolve(with:bias:edgeMode:useFloat16Accumulator:destination:)](vimage/pixelbuffer/convolve%28with_bias_edgemode_usefloat16accumulator_destination_%29-81lqa.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Convolves a floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](vimage/pixelbuffer/convolve%28with_bias_edgemode_destination_%29-8syhw.md): Conforms when `Format` is `vImage.InterleavedFx4`. Convolves a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:divisor:bias:edgeMode:destination:)](vimage/pixelbuffer/convolve%28with_divisor_bias_edgemode_destination_%29-4jjbx.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Convolves an 8-bit multiple plane pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](vimage/pixelbuffer/convolve%28with_bias_edgemode_destination_%29-3219s.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Convolves a 32-bit multiple plane pixel buffer.
- [vImage.EdgeMode](vimage/edgemode.md): Constants that specify edge modes for convolution operations.
- [vImage.ConvolutionKernel2D](vimage/convolutionkernel2d.md): A 2D matrix that represents a convolution kernel.

### Separable convolution

- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](vimage/pixelbuffer/separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-2iyq6.md): Conforms when `Format` is `vImage.Planar8`. Performs separable convolution on an 8-bit planar pixel buffer.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:useFloat16Accumulator:destination:)](vimage/pixelbuffer/separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_usefloat16accumulator_destination_%29.md): Conforms when `Format` is `vImage.Planar16F`. Performs separable convolution on a 16-bit planar pixel buffer.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](vimage/pixelbuffer/separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-2qofv.md): Conforms when `Format` is `vImage.PlanarF`. Performs separable convolution on a 32-bit planar pixel buffer.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](vimage/pixelbuffer/separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-6t9b3.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Performs separable convolution on a multiple plane 8-bit pixel buffer.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](vimage/pixelbuffer/separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-6q5ro.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Performs separable convolution on a multiple plane 32-bit pixel buffer.
- [vImage.ConvolutionKernel](vimage/convolutionkernel.md): Constants that describe 1D convolution kernels.

### Box convolution

- [boxConvolve(kernelSize:edgeMode:destination:)](vimage/pixelbuffer/boxconvolve%28kernelsize_edgemode_destination_%29-2h7fy.md): Conforms when `Format` is `vImage.Planar8`. Convolves an 8-bit planar pixel buffer with a box filter.
- [boxConvolve(kernelSize:edgeMode:destination:)](vimage/pixelbuffer/boxconvolve%28kernelsize_edgemode_destination_%29-2m20d.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer with a box filter.
- [boxConvolved(kernelSize:edgeMode:)](vimage/pixelbuffer/boxconvolved%28kernelsize_edgemode_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Returns a box-filter convolved 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [boxConvolve(kernelSize:edgeMode:destination:)](vimage/pixelbuffer/boxconvolve%28kernelsize_edgemode_destination_%29-3kabm.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Convolves a multiple-plane 8-bit-per-channel pixel buffer with a box filter.

### Tent convolution

- [tentConvolve(kernelSize:edgeMode:destination:)](vimage/pixelbuffer/tentconvolve%28kernelsize_edgemode_destination_%29-1fpap.md): Conforms when `Format` is `vImage.Planar8`. Convolves an 8-bit planar pixel buffer with a tent filter.
- [tentConvolve(kernelSize:edgeMode:destination:)](vimage/pixelbuffer/tentconvolve%28kernelsize_edgemode_destination_%29-150xp.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer with a tent filter.
- [tentConvolved(kernelSize:edgeMode:)](vimage/pixelbuffer/tentconvolved%28kernelsize_edgemode_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Returns a tent-filter convolved 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [tentConvolve(kernelSize:edgeMode:destination:)](vimage/pixelbuffer/tentconvolve%28kernelsize_edgemode_destination_%29-2dp48.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Convolves a multiple-plane 8-bit-per-channel pixel buffer with a tent filter.

## See Also

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Applying color transforms to pixel buffers](applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Blending and compositing pixel buffers](blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Converting pixel buffers](converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Interleaving and deinterleaving pixel buffers](interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
