> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/calculating-and-transforming-histograms](https://developer.apple.com/documentation/accelerate/calculating-and-transforming-histograms)

# Calculating and transforming histograms

**Framework:** Accelerate  
**Kind:** API Collection

Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.

## Topics

### Contrast stretching

- [contrastStretch(destination:)](vimage/pixelbuffer/contraststretch%28destination_%29-6usbh.md): Conforms when `Format` is `vImage.Planar8`. Stretches the histogram of an 8-bit planar pixel buffer.
- [contrastStretch(binCount:destination:)](vimage/pixelbuffer/contraststretch%28bincount_destination_%29-3bo13.md): Conforms when `Format` is `vImage.PlanarF`. Stretches the histogram of a 32-bit planar pixel buffer.
- [contrastStretch(destination:)](vimage/pixelbuffer/contraststretch%28destination_%29-7zo9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Stretches the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [contrastStretch(binCount:destination:)](vimage/pixelbuffer/contraststretch%28bincount_destination_%29-704t6.md): Conforms when `Format` is `vImage.InterleavedFx4`. Stretches the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [contrastStretch(destination:)](vimage/pixelbuffer/contraststretch%28destination_%29-2nsx9.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Stretches the histogram of a multiple-plane 8-bit pixel buffer.
- [contrastStretch(binCount:destination:)](vimage/pixelbuffer/contraststretch%28bincount_destination_%29-81vq2.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Stretches the histogram of a multiple-plane 32-bit pixel buffer.

### Equalization

- [equalizeHistogram(destination:)](vimage/pixelbuffer/equalizehistogram%28destination_%29-7temg.md): Conforms when `Format` is `vImage.Planar8`. Equalizes the histogram of an 8-bit planar pixel buffer.
- [equalizeHistogram(binCount:destination:)](vimage/pixelbuffer/equalizehistogram%28bincount_destination_%29-5iv0q.md): Conforms when `Format` is `vImage.PlanarF`. Equalizes the histogram of a 32-bit planar pixel buffer.
- [equalizeHistogram(destination:)](vimage/pixelbuffer/equalizehistogram%28destination_%29-2gbmf.md): Conforms when `Format` is `vImage.Interleaved8x4`. Equalizes the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [equalizeHistogram(binCount:destination:)](vimage/pixelbuffer/equalizehistogram%28bincount_destination_%29-6on8w.md): Conforms when `Format` is `vImage.InterleavedFx4`. Equalizes the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [equalizeHistogram(destination:)](vimage/pixelbuffer/equalizehistogram%28destination_%29-939xn.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Equalizes the histogram of a multiple-plane 8-bit pixel buffer.
- [equalizeHistogram(binCount:destination:)](vimage/pixelbuffer/equalizehistogram%28bincount_destination_%29-59li2.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Equalizes the histogram of a multiple-plane 32-bit pixel buffer.

### Histogram calculation

- [histogram()](vimage/pixelbuffer/histogram%28%29-14a38.md): Conforms when `Format` is `vImage.Interleaved8x4`. Calculates the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [histogram(binCount:)](vimage/pixelbuffer/histogram%28bincount_%29-6pkfv.md): Conforms when `Format` is `vImage.InterleavedFx4`. Calculates the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [histogram()](vimage/pixelbuffer/histogram%28%29-30tsp.md): Conforms when `Format` is `vImage.Planar8x3`. Calculates the histogram of an 8-bit-per-channel, 3-channel multiple-plane pixel buffer.
- [histogram(binCount:)](vimage/pixelbuffer/histogram%28bincount_%29-8wymg.md): Conforms when `Format` is `vImage.PlanarFx3`. Calculates the histogram of a 32-bit-per-channel, 3-channel multiple-plane pixel buffer.
- [histogram()](vimage/pixelbuffer/histogram%28%29-6wxl5.md): Conforms when `Format` is `vImage.Planar8x4`. Calculates the histogram of an 8-bit-per-channel, 4-channel multiple-plane pixel buffer.
- [histogram(binCount:)](vimage/pixelbuffer/histogram%28bincount_%29-5bqka.md): Conforms when `Format` is `vImage.PlanarFx4`. Calculates the histogram of a 32-bit-per-channel, 4-channel multiple-plane pixel buffer.

### Histogram specification

- [specifyHistogram(\_:destination:)](vimage/pixelbuffer/specifyhistogram%28__destination_%29-7xiz4.md): Conforms when `Format` is `vImage.Interleaved8x4`. Performs a histogram specification operation on an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [specifyHistogram(\_:destination:)](vimage/pixelbuffer/specifyhistogram%28__destination_%29-1x46n.md): Conforms when `Format` is `vImage.InterleavedFx4`. Performs a histogram specification operation on a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [specifyHistogram(\_:destination:)](vimage/pixelbuffer/specifyhistogram%28__destination_%29-qeqr.md): Conforms when `Format` is `vImage.Planar8x3`. Performs a histogram specification operation on an 8-bit-per-channel, 3-channel multiple-plane pixel buffer.
- [specifyHistogram(\_:destination:)](vimage/pixelbuffer/specifyhistogram%28__destination_%29-28844.md): Conforms when `Format` is `vImage.PlanarFx3`. Performs a histogram specification operation on a 32-bit-per-channel, 3-channel multiple-plane pixel buffer.
- [specifyHistogram(\_:destination:)](vimage/pixelbuffer/specifyhistogram%28__destination_%29-73dpr.md): Conforms when `Format` is `vImage.Planar8x4`. Performs a histogram specification operation on an 8-bit-per-channel, 4-channel multiple-plane pixel buffer.
- [specifyHistogram(\_:destination:)](vimage/pixelbuffer/specifyhistogram%28__destination_%29-7cvk1.md): Conforms when `Format` is `vImage.PlanarFx4`. Performs a histogram specification operation on a 32-bit-per-channel, 3-channel multiple-plane pixel buffer.

### Type aliases

- [vImage.PixelBuffer.Histogram888](vimage/pixelbuffer/histogram888.md): Conforms when `Format` conforms to `PixelFormat` and `Format.ComponentType` is `UInt8`. The histogram for three channel 8-bit pixel buffers.
- [vImage.PixelBuffer.Histogram8888](vimage/pixelbuffer/histogram8888.md): Conforms when `Format` conforms to `PixelFormat` and `Format.ComponentType` is `UInt8`. The histogram for four channel 8-bit pixel buffers.
- [vImage.PixelBuffer.HistogramFFF](vimage/pixelbuffer/histogramfff.md): Conforms when `Format` conforms to `PixelFormat` and `Format.ComponentType` is `Float`. The histogram for three channel 32-bit pixel buffers.
- [vImage.PixelBuffer.HistogramFFFF](vimage/pixelbuffer/histogramffff.md): Conforms when `Format` conforms to `PixelFormat` and `Format.ComponentType` is `Float`. The histogram for four channel 32-bit pixel buffers.

## See Also

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Applying color transforms to pixel buffers](applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Blending and compositing pixel buffers](blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Convolving and applying morphology](convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Converting pixel buffers](converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Interleaving and deinterleaving pixel buffers](interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
