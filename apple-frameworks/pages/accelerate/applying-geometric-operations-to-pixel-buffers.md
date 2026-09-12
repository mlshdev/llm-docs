> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-geometric-operations-to-pixel-buffers](https://developer.apple.com/documentation/accelerate/applying-geometric-operations-to-pixel-buffers)

# Applying geometric operations to pixel buffers

**Framework:** Accelerate  
**Kind:** API Collection

Reflect, shear, rotate, scale, and apply affine transforms to image data.

## Topics

### Reflecting images

- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-9ezqm.md): Conforms when `Format` is `vImage.Planar8`. Reflects an 8-bit planar pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-529j0.md): Conforms when `Format` is `vImage.Planar16F`. Reflects a floating-point 16-bit planar pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-4i4vi.md): Conforms when `Format` is `vImage.PlanarF`. Reflects a 32-bit planar pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-6syq1.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Reflects a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-7o9tt.md): Conforms when `Format` is `vImage.Interleaved8x4`. Reflects an 8-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-fg4a.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Reflects an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-97wi9.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Reflects a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](vimage/pixelbuffer/reflect%28over_destination_%29-7b1md.md): Conforms when `Format` is `vImage.InterleavedFx4`. Reflects a 32-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.
- [vImage.ReflectionAxis](vimage/reflectionaxis.md): The axis to reflect an image.

### Rotating images

- [rotate(\_:backgroundColor:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_destination_%29-7patt.md): Conforms when `Format` is `vImage.Planar8`. Rotates an 8-bit planar pixel buffer.
- [rotate(\_:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_usefloat16accumulator_destination_%29-9harr.md): Conforms when `Format` is `vImage.Planar16F`. Rotates a floating-point 16-bit planar pixel buffer.
- [rotate(\_:backgroundColor:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_destination_%29-7tzsn.md): Conforms when `Format` is `vImage.PlanarF`. Rotates a 32-bit planar pixel buffer.
- [rotate(\_:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_usefloat16accumulator_destination_%29-61l7b.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Rotates a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer.
- [rotate(\_:backgroundColor:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_destination_%29-2li9v.md): Conforms when `Format` is `vImage.Interleaved8x4`. Rotates an 8-bit-per-channel, four-channel interleaved pixel buffer.
- [rotate(\_:backgroundColor:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_destination_%29-692ke.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Rotates an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer.
- [rotate(\_:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_usefloat16accumulator_destination_%29-8glur.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Rotates a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer.
- [rotate(\_:backgroundColor:destination:)](vimage/pixelbuffer/rotate%28__backgroundcolor_destination_%29-9bnb6.md): Conforms when `Format` is `vImage.InterleavedFx4`. Rotates a 32-bit-per-channel, four-channel interleaved pixel buffer.
- [vImage.Rotation](vimage/rotation.md): The angle to rotate an image.

### Scaling images

- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-5euvc.md): Conforms when `Format` is `vImage.Planar8`. Scales an 8-bit planar pixel buffer to fit the destination buffer.
- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-9si6m.md): Conforms when `Format` is `vImage.Planar16U`. Scales an unsigned 16-bit planar pixel buffer to fit the destination buffer.
- [scale(useFloat16Accumulator:destination:)](vimage/pixelbuffer/scale%28usefloat16accumulator_destination_%29-5lt9n.md): Conforms when `Format` is `vImage.Planar16F`. Scales a floating-point 16-bit planar pixel buffer to fit the destination buffer.
- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-6xwro.md): Conforms when `Format` is `vImage.PlanarF`. Scales a 32-bit planar pixel buffer to fit the destination buffer.
- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-6gy9p.md): Conforms when `Format` is `vImage.Interleaved8x2`. Scales an 8-bit-per-channel, two-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-4p5r6.md): Conforms when `Format` is `vImage.Interleaved16Ux2`. Scales an unsigned 16-bit-per-channel, two-channel interleaved pixel buffer to fit the destination buffer.
- [scale(useFloat16Accumulator:destination:)](vimage/pixelbuffer/scale%28usefloat16accumulator_destination_%29-thg7.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Scales a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-y1zi.md): Conforms when `Format` is `vImage.Interleaved8x4`. Scales an 8-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-5tpok.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Scales an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.
- [scale(useFloat16Accumulator:destination:)](vimage/pixelbuffer/scale%28usefloat16accumulator_destination_%29-st2u.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Scales a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](vimage/pixelbuffer/scale%28destination_%29-2hqm3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Scales a 32-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.

### Shearing images

- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-2gf4y.md): Conforms when `Format` is `vImage.Planar8`. Performs a horizontal or vertical shear operation on an 8-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-5busu.md): Conforms when `Format` is `vImage.Planar16U`. Performs a horizontal or vertical shear operation on an unsigned 16-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_usefloat16accumulator_destination_%29-26sh4.md): Conforms when `Format` is `vImage.Planar16F`. Performs a horizontal or vertical shear operation on a floating-point 16-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-85o1n.md): Conforms when `Format` is `vImage.PlanarF`. Performs a horizontal or vertical shear operation on a 32-bit planar pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-57dzf.md): Conforms when `Format` is `vImage.Interleaved16Ux2`. Performs a horizontal or vertical shear operation on an unsigned 16-bit-per-channel, two-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-7fou8.md): Conforms when `Format` is `vImage.Interleaved8x2`. Performs a horizontal or vertical shear operation on an 8-bit-per-channel, two-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_usefloat16accumulator_destination_%29-7nh4n.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Performs a horizontal or vertical shear operation on a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-95446.md): Conforms when `Format` is `vImage.Interleaved8x4`. Performs a horizontal or vertical shear operation on an 8-bit-per-channel, four-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-2ezuh.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Performs a horizontal or vertical shear operation on an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_usefloat16accumulator_destination_%29-7kddt.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Performs a horizontal or vertical shear operation on a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer.
- [shear(direction:translate:slope:resamplingFilter:backgroundColor:destination:)](vimage/pixelbuffer/shear%28direction_translate_slope_resamplingfilter_backgroundcolor_destination_%29-7r29q.md): Conforms when `Format` is `vImage.InterleavedFx4`. Performs a horizontal or vertical shear operation on a 32-bit-per-channel, four-channel interleaved pixel buffer.
- [vImage.ShearDirection](vimage/sheardirection.md): The shear direction.

### Applying affine transformations to images

- [transform(\_:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_destination_%29-4wy4q.md): Conforms when `Format` is `vImage.Planar8`. Applies a Core Graphics affine transformation to an 8-bit planar pixel buffer.
- [transform(\_:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_usefloat16accumulator_destination_%29-1470p.md): Conforms when `Format` is `vImage.Planar16F`. Applies a Core Graphics affine transformation to a floating-point 16-bit planar pixel buffer.
- [transform(\_:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_destination_%29-1s38.md): Conforms when `Format` is `vImage.PlanarF`. Applies a Core Graphics affine transformation to a floating-point 32-bit planar pixel buffer.
- [transform(\_:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_usefloat16accumulator_destination_%29-4w4jr.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Applies a Core Graphics affine transformation to a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer.
- [transform(\_:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_destination_%29-5kxj6.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a Core Graphics affine transformation to an 8-bit-per-channel, four-channel interleaved pixel buffer.
- [transform(\_:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_destination_%29-nl6g.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Applies a Core Graphics affine transformation to an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer.
- [transform(\_:backgroundColor:useFloat16Accumulator:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_usefloat16accumulator_destination_%29-1lvaa.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Applies a Core Graphics affine transformation to a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer.
- [transform(\_:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__backgroundcolor_destination_%29-9ggt.md): Conforms when `Format` is `vImage.InterleavedFx4`. Applies a Core Graphics affine transformation to a floating-point 32-bit-per-channel, four-channel interleaved pixel buffer.

### Applying projective transformations to images

- [transform(\_:interpolation:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__interpolation_backgroundcolor_destination_%29-94t75.md): Conforms when `Format` is `vImage.Planar8`. Applies a perspective warp to an 8-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__interpolation_backgroundcolor_destination_%29-902c9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a perspective warp to an interleaved 4-channel, 8-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__interpolation_backgroundcolor_destination_%29-9pv8u.md): Conforms when `Format` is `vImage.Planar16U`. Applies a perspective warp to an unsigned-integer 16-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__interpolation_backgroundcolor_destination_%29-4wvdj.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Applies a perspective warp to an interleaved 4-channel, unsigned 16-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__interpolation_backgroundcolor_destination_%29-79mov.md): Conforms when `Format` is `vImage.Planar16F`. Applies a perspective warp to a floating-point 16-bit planar image.
- [transform(\_:interpolation:backgroundColor:destination:)](vimage/pixelbuffer/transform%28__interpolation_backgroundcolor_destination_%29-7qnl8.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Applies a perspective warp to an interleaved 4-channel, floating-point 16-bit planar image.

## See Also

### Pixel buffer operations

- [Applying color transforms to pixel buffers](applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Blending and compositing pixel buffers](blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Convolving and applying morphology](convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Converting pixel buffers](converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Interleaving and deinterleaving pixel buffers](interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
