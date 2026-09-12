> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/converting-pixel-buffers](https://developer.apple.com/documentation/accelerate/converting-pixel-buffers)

# Converting pixel buffers

**Framework:** Accelerate  
**Kind:** API Collection

Convert pixel buffer data between different bit-depths.

## Topics

### Conversion from YUV to RGB

- [convert(lumaSource:chromaSource:conversionInfo:)](vimage/pixelbuffer/convert%28lumasource_chromasource_conversioninfo_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Populates the pixel buffer with ARGB data from the given luminance and chrominance pixel buffers.

### Conversion from 8-bit to 16-bit

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-3wpdu.md): Conforms when `Format` is `vImage.Planar8`. Converts the contents of the 8-bit planar pixel buffer to floating-point 16-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-4v16.md): Conforms when `Format` is `vImage.Interleaved8x2`. Converts the contents of the 8-bit-per-channel, 2-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-9j6eu.md): Conforms when `Format` is `vImage.Interleaved8x4`. Converts the contents of the 8-bit-per-channel, 4-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-6ci2d.md): Conforms when `Format` is `vImage.Interleaved8x4`. Converts the contents of the 8-bit-per-channel, 4-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.

### Conversion from 8-bit to 32-bit

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-7src4.md): Conforms when `Format` is `vImage.Planar8`. Converts the contents of the 8-bit planar pixel buffer to 32-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-8hivu.md): Conforms when `Format` is `vImage.Interleaved8x3`. Converts the contents of the 8-bit-per-channel, 3-channel interleaved pixel buffer to 32-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-1e0nd.md): Conforms when `Format` is `vImage.Interleaved8x4`. Converts the contents of the 8-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.

### Conversion from 16-bit to 8-bit

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-449hx.md): Conforms when `Format` is `vImage.Planar16F`. Converts the contents of the floating-point 16-bit planar pixel buffer to 8-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-1h96t.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Converts the contents of the floating-point 16-bit-per-channel, 2-channel interleaved pixel buffer to 8-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-k50a.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Converts the contents of the unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer to 8-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-9xnxc.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Converts the contents of the floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer to 8-bit-per-channel format.

### Conversion between 16-bit formats

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-1zk6k.md): Conforms when `Format` is `vImage.Planar16U`. Converts the contents of the unsigned 16-bit planar pixel buffer to floating-point 16-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-ip9z.md): Conforms when `Format` is `vImage.Planar16F`. Converts the contents of the floating-point 16-bit planar pixel buffer to unsigned 16-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-7dx2c.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Converts the contents of the floating-point 16-bit-per-channel, 2-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-7tdb1.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Converts the contents of the unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-3lg9p.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Converts the contents of the floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-8u16v.md): Conforms when `Format` is `vImage.Interleaved16Ux2`. Converts the contents of the unsigned 16-bit-per-channel, 2-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.

### Conversion from 16-bit to 32-bit

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-4876v.md): Conforms when `Format` is `vImage.Planar16F`. Converts the contents of the floating-point 16-bit planar pixel buffer to 32-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-1xpk2.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Converts the contents of the floating-point 16-bit-per-channel, 2-channel interleaved pixel buffer to 32-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-674t9.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Converts the contents of the unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-8ljhz.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Converts the contents of the floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.

### Conversion from 32-bit to 8-bit

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-1ka0r.md): Conforms when `Format` is `vImage.PlanarF`. Converts the contents of the 32-bit planar pixel buffer to 8-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-69qa2.md): Conforms when `Format` is `vImage.InterleavedFx3`. Converts the contents of the 32-bit-per-channel, 3-channel interleaved pixel buffer to 8-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-24xu0.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the contents of the 32-bit-per-channel, 4-channel interleaved pixel buffer to 8-bit-per-channel format.

### Conversion from 32-bit to 16-bit

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-2bc8n.md): Conforms when `Format` is `vImage.PlanarF`. Converts the contents of the 32-bit planar pixel buffer to floating-point 16-bit planar format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-56zhe.md): Conforms when `Format` is `vImage.InterleavedFx2`. Converts the contents of the 32-bit-per-channel, 2-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-1132q.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the contents of the 32-bit-per-channel, 4-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-2dbbo.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the contents of the 32-bit-per-channel, 4-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.

### Conversion from four channels to three channels

- [convert(to:channelOrdering:)](vimage/pixelbuffer/convert%28to_channelordering_%29-1nll2.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the 32-bit-per-channel RGBA or ARGB pixel buffer to RGB.
- [convert(to:channelOrdering:)](vimage/pixelbuffer/convert%28to_channelordering_%29-9h53.md): Conforms when `Format` is `vImage.Interleaved8x4`. Converts the 8-bit-per-channel RGBA or ARGB pixel buffer to RGB.

## See Also

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Applying color transforms to pixel buffers](applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Blending and compositing pixel buffers](blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Convolving and applying morphology](convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Interleaving and deinterleaving pixel buffers](interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
