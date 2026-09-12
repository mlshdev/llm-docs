> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/interleaving-and-deinterleaving-pixel-buffers](https://developer.apple.com/documentation/accelerate/interleaving-and-deinterleaving-pixel-buffers)

# Interleaving and deinterleaving pixel buffers

**Framework:** Accelerate  
**Kind:** API Collection

Convert pixel buffer data between interleaved and planar formats.

## Topics

### Deinterleaving pixel buffers

- [deinterleave(destination:)](vimage/pixelbuffer/deinterleave%28destination_%29-hrhz.md): Conforms when `Format` is `vImage.Interleaved8x3`. Deinterleaves the 8-bit-per-channel, three-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.
- [deinterleave(destination:)](vimage/pixelbuffer/deinterleave%28destination_%29-4bj4f.md): Conforms when `Format` is `vImage.Interleaved8x4`. Deinterleaves the 8-bit-per-channel, four-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.
- [deinterleave(destination:)](vimage/pixelbuffer/deinterleave%28destination_%29-9gkke.md): Conforms when `Format` is `vImage.InterleavedFx3`. Deinterleaves the 32-bit-per-channel, three-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.
- [deinterleave(destination:)](vimage/pixelbuffer/deinterleave%28destination_%29-7hep3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Deinterleaves the 32-bit-per-channel, four-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.
- [deinterleave(planarDestinationBuffers:)](vimage/pixelbuffer/deinterleave%28planardestinationbuffers_%29-72108.md): Conforms when `Format` is `vImage.Interleaved8x3`. Deinterleaves the 8-bit-per-channel, three-channel interleaved buffer and writes the result to an array that contains three planar buffers.
- [deinterleave(planarDestinationBuffers:)](vimage/pixelbuffer/deinterleave%28planardestinationbuffers_%29-3u4kn.md): Conforms when `Format` is `vImage.Interleaved8x4`. Deinterleaves the 8-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.
- [deinterleave(planarDestinationBuffers:)](vimage/pixelbuffer/deinterleave%28planardestinationbuffers_%29-75uki.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Deinterleaves the 16-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.
- [deinterleave(planarDestinationBuffers:)](vimage/pixelbuffer/deinterleave%28planardestinationbuffers_%29-3irjf.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Deinterleaves the unsigned 16-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.
- [deinterleave(planarDestinationBuffers:)](vimage/pixelbuffer/deinterleave%28planardestinationbuffers_%29-2gt2g.md): Conforms when `Format` is `vImage.InterleavedFx3`. Deinterleaves the 32-bit-per-channel, three-channel interleaved buffer and writes the result to an array that contains three planar buffers.
- [deinterleave(planarDestinationBuffers:)](vimage/pixelbuffer/deinterleave%28planardestinationbuffers_%29-iag8.md): Conforms when `Format` is `vImage.InterleavedFx4`. Deinterleaves the 32-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.

### Interleaving pixel buffers

- [interleave(destination:)](vimage/pixelbuffer/interleave%28destination_%29-46cgi.md): Conforms when `Format` is `vImage.Planar8x3`. Interleaves the 8-bit-per-channel, three-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.
- [interleave(destination:)](vimage/pixelbuffer/interleave%28destination_%29-6r7se.md): Conforms when `Format` is `vImage.Planar8x4`. Interleaves the 8-bit-per-channel, four-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.
- [interleave(destination:)](vimage/pixelbuffer/interleave%28destination_%29-5ewup.md): Conforms when `Format` is `vImage.PlanarFx3`. Interleaves the 32-bit-per-channel, three-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.
- [interleave(destination:)](vimage/pixelbuffer/interleave%28destination_%29-6ib0t.md): Conforms when `Format` is `vImage.PlanarFx4`. Interleaves the 32-bit-per-channel, four-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.
- [interleave(planarSourceBuffers:)](vimage/pixelbuffer/interleave%28planarsourcebuffers_%29-10yj5.md): Conforms when `Format` is `vImage.Interleaved8x3`. Interleaves the specified planar source buffers and writes the result to the 8-bit-per-channel, three-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](vimage/pixelbuffer/interleave%28planarsourcebuffers_%29-67l5.md): Conforms when `Format` is `vImage.Interleaved8x4`. Interleaves the specified planar source buffers and writes the result to the 8-bit-per-channel, four-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](vimage/pixelbuffer/interleave%28planarsourcebuffers_%29-7qcri.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Interleaves the specified planar source buffers and writes the result to the 16-bit-per-channel, four-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](vimage/pixelbuffer/interleave%28planarsourcebuffers_%29-1i8we.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Interleaves the specified planar source buffers and writes the result to the unsigned 16-bit-per-channel, four-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](vimage/pixelbuffer/interleave%28planarsourcebuffers_%29-4qotd.md): Conforms when `Format` is `vImage.InterleavedFx3`. Interleaves the specified planar source buffers and writes the result to the 32-bit-per-channel, three-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](vimage/pixelbuffer/interleave%28planarsourcebuffers_%29-7e6cy.md): Conforms when `Format` is `vImage.InterleavedFx4`. Interleaves the specified planar source buffers and writes the result to the 32-bit-per-channel, four-channel interleaved buffer.

### Generating planar buffers from interleaved buffers

- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-462ja.md): Conforms when `Format` is `vImage.Interleaved8x2`. Returns two 8-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-5r3ds.md): Conforms when `Format` is `vImage.Interleaved8x3`. Returns three 8-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-5rx2w.md): Conforms when `Format` is `vImage.Interleaved8x4`. Returns four 8-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-4qws5.md): Conforms when `Format` is `vImage.Interleaved8x4`. Returns four 32-bit planar pixel buffers that contain the deinterleaved channels of the 8-bit buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-49gf9.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Returns four unsigned 16-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-1rj01.md): Conforms when `Format` is `vImage.InterleavedFx2`. Returns two 32-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-82ook.md): Conforms when `Format` is `vImage.InterleavedFx3`. Returns three 32-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-l33r.md): Conforms when `Format` is `vImage.InterleavedFx4`. Returns four 8-bit planar pixel buffers that contain the deinterleaved channels of the 32-bit buffer.
- [planarBuffers()](vimage/pixelbuffer/planarbuffers%28%29-35dnv.md): Conforms when `Format` is `vImage.InterleavedFx4`. Returns four 32-bit planar pixel buffers that contain the deinterleaved channels of the buffer.

### Converting from 8-bit multiple plane to 8-bit interleaved

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-7xv7.md): Conforms when `Format` is `vImage.Planar8x3`. Converts the contents of an 8-bit, three-plane pixel buffer to a three-channel interleaved pixel buffer.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-1jtfh.md): Conforms when `Format` is `vImage.Planar8x4`. Converts the contents of an 8-bit, four-plane pixel buffer to a four-channel interleaved pixel buffer.

### Converting from 32-bit multiple plane to 32-bit interleaved

- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-8bqjc.md): Conforms when `Format` is `vImage.PlanarFx3`. Converts the contents of a 32-bit, three-plane pixel buffer to a three-channel interleaved pixel buffer.
- [convert(to:)](vimage/pixelbuffer/convert%28to_%29-26s6v.md): Conforms when `Format` is `vImage.PlanarFx4`. Converts the contents of a 32-bit, four-plane pixel buffer to a four-channel interleaved pixel buffer.

## See Also

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Applying color transforms to pixel buffers](applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Blending and compositing pixel buffers](blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Convolving and applying morphology](convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Converting pixel buffers](converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
