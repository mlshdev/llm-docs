> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blending-and-compositing-pixel-buffers](https://developer.apple.com/documentation/accelerate/blending-and-compositing-pixel-buffers)

# Blending and compositing pixel buffers

**Framework:** Accelerate  
**Kind:** API Collection

Composite two pixel buffers to create a single image.

## Topics

### Alpha compositing

- [alphaComposite(\_:topLayer:destination:)](vimage/pixelbuffer/alphacomposite%28__toplayer_destination_%29-fybo.md): Conforms when `Format` is `vImage.Interleaved8x4`. Performs alpha compositing of two 4-channel interleaved ARGB 8-bit pixel buffers using the specified composite mode.
- [alphaComposite(\_:topLayer:destination:)](vimage/pixelbuffer/alphacomposite%28__toplayer_destination_%29-w1zc.md): Conforms when `Format` is `vImage.InterleavedFx4`. Performs alpha compositing of two 4-channel interleaved ARGB 32-bit pixel buffers using the specified composite mode.
- [vImage.CompositeMode](vimage/compositemode.md): Constants that specify whether the format of layers is premultiplied or nonpremultiplied.

### Alpha blending

- [premultipliedAlphaBlend(\_:topLayer:destination:)](vimage/pixelbuffer/premultipliedalphablend%28__toplayer_destination_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Performs alpha compositing of two 4-channel interleaved RGBA 8-bit pixel buffers using the specified blend mode to produce a premultiplied result.
- [vImage.BlendMode](vimage/blendmode.md): Constants that specify an alpha blending mode.

### Premultiply

- [premultiply(alpha:)](vimage/pixelbuffer/premultiply%28alpha_%29-11gly.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(alpha:)](vimage/pixelbuffer/premultiply%28alpha_%29-76rr.md): Conforms when `Format` is `vImage.PlanarF`. Transforms a 32-bit planar pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](vimage/pixelbuffer/premultiply%28channelordering_%29-4xpq9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](vimage/pixelbuffer/premultiply%28channelordering_%29-302ci.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply()](vimage/pixelbuffer/premultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.
- [premultiply(channelOrdering:)](vimage/pixelbuffer/premultiply%28channelordering_%29-fzwd.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a floating-point 32-bit ARGB or RGBA pixel buffer in-place from nonpremultiplied alpha format to premultiplied alpha format.

### Unpremultiply

- [unpremultiply(alpha:)](vimage/pixelbuffer/unpremultiply%28alpha_%29-xnog.md): Conforms when `Format` is `vImage.Planar8`. Transforms an 8-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(alpha:)](vimage/pixelbuffer/unpremultiply%28alpha_%29-i0ri.md): Conforms when `Format` is `vImage.PlanarF`. Transforms a 32-bit planar pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](vimage/pixelbuffer/unpremultiply%28channelordering_%29-1pkat.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](vimage/pixelbuffer/unpremultiply%28channelordering_%29-19l0s.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Transforms an unsigned 16-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply()](vimage/pixelbuffer/unpremultiply%28%29.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Transforms a floating-point 16-bit RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.
- [unpremultiply(channelOrdering:)](vimage/pixelbuffer/unpremultiply%28channelordering_%29-82uq3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms a 32-bit ARGB or RGBA pixel buffer in-place from premultiplied alpha format to nonpremultiplied alpha format.

### Linear interpolation

- [linearInterpolate(bufferB:interpolationConstant:destination:)](vimage/pixelbuffer/linearinterpolate%28bufferb_interpolationconstant_destination_%29.md): Conforms when `Format` conforms to `StaticPixelFormat` and `Format.ComponentType` is `Float`.

## See Also

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Applying color transforms to pixel buffers](applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Convolving and applying morphology](convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Converting pixel buffers](converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Interleaving and deinterleaving pixel buffers](interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
