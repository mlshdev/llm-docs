> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-channel-operations](https://developer.apple.com/documentation/accelerate/applying-channel-operations)

# Applying channel operations

**Framework:** Accelerate  
**Kind:** API Collection

Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.

## Topics

### Extracting Channels

- [extractChannel(at:destination:)](vimage/pixelbuffer/extractchannel%28at_destination_%29-ageg.md): Conforms when `Format` is `vImage.Interleaved8x4`. Extracts a single channel from an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [extractChannel(at:destination:)](vimage/pixelbuffer/extractchannel%28at_destination_%29-i1zm.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Extracts a single channel from an unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [extractChannel(at:destination:)](vimage/pixelbuffer/extractchannel%28at_destination_%29-8xrq1.md): Conforms when `Format` is `vImage.InterleavedFx4`. Extracts a single channel from an 32-bit-per-channel, 4-channel interleaved pixel buffer.

### Flattening Channels

- [flatten(channelOrdering:backgroundColor:isPremultiplied:destination:)](vimage/pixelbuffer/flatten%28channelordering_backgroundcolor_ispremultiplied_destination_%29-97nx.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit-per-channel RGBA or ARGB buffer to an RGB buffer against an opaque background color.
- [flatten(channelOrdering:backgroundColor:isPremultiplied:destination:)](vimage/pixelbuffer/flatten%28channelordering_backgroundcolor_ispremultiplied_destination_%29-5g0c2.md): Conforms when `Format` is `vImage.InterleavedFx4`. Transforms an 32-bit-per-channel RGBA or ARGB buffer to an RGB buffer against an opaque background color.
- [vImage.ChannelOrdering](vimage/channelordering.md): Constants that specify the channel ordering of a pixel buffer.

### Permuting Channels

- [permuteChannels(to:destination:)](vimage/pixelbuffer/permutechannels%28to_destination_%29-4y4rh.md): Conforms when `Format` is `vImage.Interleaved8x3`. Permutes the channels of an 8-bit-per-channel, 3-channel interleaved pixel buffer.
- [permuteChannels(to:destination:)](vimage/pixelbuffer/permutechannels%28to_destination_%29-tr2h.md): Conforms when `Format` is `vImage.Interleaved8x4`. Permutes the channels of an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [permuteChannels(to:destination:)](vimage/pixelbuffer/permutechannels%28to_destination_%29-8y213.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Permutes the channels of an unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [permuteChannels(to:destination:)](vimage/pixelbuffer/permutechannels%28to_destination_%29-74dmh.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Permutes the channels of a floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [permuteChannels(to:destination:)](vimage/pixelbuffer/permutechannels%28to_destination_%29-6n6yi.md): Conforms when `Format` is `vImage.InterleavedFx4`. Permutes the channels of an 32-bit-per-channel, 4-channel interleaved pixel buffer.

### Overwriting Channels

- [overwriteChannels(withScalar:)](vimage/pixelbuffer/overwritechannels%28withscalar_%29-3zb93.md): Conforms when `Format` is `vImage.Planar8`. Overwrites the pixels of the pixel buffer with the provided 8-bit scalar value.
- [overwriteChannels(withScalar:)](vimage/pixelbuffer/overwritechannels%28withscalar_%29-1hrrg.md): Conforms when `Format` is `vImage.Planar16F`. Overwrites the pixels of the pixel buffer with the provided floating-point 16-bit scalar value.
- [overwriteChannels(withScalar:)](vimage/pixelbuffer/overwritechannels%28withscalar_%29-1wm1o.md): Conforms when `Format` is `vImage.PlanarF`. Overwrites the pixels of the pixel buffer with the provided 32-bit scalar value.
- [overwriteChannels(\_:withScalar:destination:)](vimage/pixelbuffer/overwritechannels%28__withscalar_destination_%29-57ov2.md): Conforms when `Format` is `vImage.Interleaved8x4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit scalar value.
- [overwriteChannels(\_:withScalar:destination:)](vimage/pixelbuffer/overwritechannels%28__withscalar_destination_%29-ev8q.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit scalar value.
- [overwriteChannels(\_:withPixel:destination:)](vimage/pixelbuffer/overwritechannels%28__withpixel_destination_%29-6fab6.md): Conforms when `Format` is `vImage.Interleaved8x4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit, 4-channel pixel value.
- [overwriteChannels(\_:withPixel:destination:)](vimage/pixelbuffer/overwritechannels%28__withpixel_destination_%29-6zw3o.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided unsigned 16-bit, 4-channel pixel value.
- [overwriteChannels(\_:withPixel:destination:)](vimage/pixelbuffer/overwritechannels%28__withpixel_destination_%29-6pbz8.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit, 4-channel pixel value.
- [overwriteChannels(\_:withPlanarBuffer:destination:)](vimage/pixelbuffer/overwritechannels%28__withplanarbuffer_destination_%29-9jbky.md): Conforms when `Format` is `vImage.Interleaved8x4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit planar pixel buffer.
- [overwriteChannels(\_:withPlanarBuffer:destination:)](vimage/pixelbuffer/overwritechannels%28__withplanarbuffer_destination_%29-hiw0.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit planar pixel buffer.
- [overwriteChannels(\_:withInterleavedBuffer:destination:)](vimage/pixelbuffer/overwritechannels%28__withinterleavedbuffer_destination_%29-74hah.md): Conforms when `Format` is `vImage.Interleaved8x4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 8-bit interleaved pixel buffer.
- [overwriteChannels(\_:withInterleavedBuffer:destination:)](vimage/pixelbuffer/overwritechannels%28__withinterleavedbuffer_destination_%29-8xkd1.md): Conforms when `Format` is `vImage.InterleavedFx4`. Overwrites the pixels of one or more channels of the pixel buffer with the provided 32-bit interleaved pixel buffer.

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
- [Applying arithmetic operations](applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.
