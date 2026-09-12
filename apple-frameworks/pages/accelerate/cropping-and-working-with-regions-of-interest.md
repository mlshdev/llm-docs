> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cropping-and-working-with-regions-of-interest](https://developer.apple.com/documentation/accelerate/cropping-and-working-with-regions-of-interest)

# Cropping and working with regions of interest

**Framework:** Accelerate  
**Kind:** API Collection

Crop images and apply operations to regions of interest.

## Topics

### Cropping

- [crop(at:destination:)](vimage/pixelbuffer/crop%28at_destination_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Crops the pixel buffer to a rectangle that’s defined by an origin and the destination buffer’s dimensions.
- [cropped(to:)](vimage/pixelbuffer/cropped%28to_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a new pixel buffer that contains a copy of the data specified as a subregion of an existing pixel buffer.

### Region of Interest

- [withUnsafeRegionOfInterest(\_:\_:)](vimage/pixelbuffer/withunsaferegionofinterest%28____%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Calls the given closure with a pixel buffer that references the image data within the specified region of interest.

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
- [Applying channel operations](applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
