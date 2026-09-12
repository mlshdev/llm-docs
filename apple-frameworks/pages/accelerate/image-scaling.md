> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/image-scaling](https://developer.apple.com/documentation/accelerate/image-scaling)

# Image scaling (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Scale interlaced and planar images.

## Topics

### Planar Image Scaling

- [vImageScale_Planar8(\_:\_:\_:\_:)](vimagescale_planar8%28________%29.md): Scales an 8-bit planar image to fit a destination buffer.
- [vImageScale_Planar16U(\_:\_:\_:\_:)](vimagescale_planar16u%28________%29.md): Scales an unsigned 16-bit planar image to fit a destination buffer.
- [vImageScale_Planar16S(\_:\_:\_:\_:)](vimagescale_planar16s%28________%29.md): Scales a signed 16-bit planar image to fit a destination buffer.
- [vImageScale_Planar16F(\_:\_:\_:\_:)](vimagescale_planar16f%28________%29.md): Scales a floating-point 16-bit planar image to fit a destination buffer.
- [vImageScale_PlanarF(\_:\_:\_:\_:)](vimagescale_planarf%28________%29.md): Scales a 32-bit planar image to fit a destination buffer.

### Interleaved Image Scaling

- [vImageScale_CbCr8(\_:\_:\_:\_:)](vimagescale_cbcr8%28________%29.md): Scales an 8-bit-per-channel, 2-channel interleaved image to fit a destination buffer.
- [vImageScale_CbCr16U(\_:\_:\_:\_:)](vimagescale_cbcr16u%28________%29.md): Scales an unsigned 16-bit-per-channel, 2-channel interleaved image to fit a destination buffer.
- [vImageScale_CbCr16F(\_:\_:\_:\_:)](vimagescale_cbcr16f%28________%29.md): Scales a floating-point 16-bit-per-channel, 2-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB8888(\_:\_:\_:\_:)](vimagescale_argb8888%28________%29.md): Scales an 8-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB16U(\_:\_:\_:\_:)](vimagescale_argb16u%28________%29.md): Scales an unsigned 16-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB16S(\_:\_:\_:\_:)](vimagescale_argb16s%28________%29.md): Scales a signed 16-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB16F(\_:\_:\_:\_:)](vimagescale_argb16f%28________%29.md): Scales a floating-point 16-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGBFFFF(\_:\_:\_:\_:)](vimagescale_argbffff%28________%29.md): Scales a 32-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_XRGB2101010W(\_:\_:\_:\_:)](vimagescale_xrgb2101010w%28________%29.md): Scales a 2-bit alpha, 10-bit RGB interleaved image to fit a destination buffer.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying affine transformations to images](applying-affine-transformations-to-images.md): Translate, rotate, and scale images.
- [Applying projective transformations to images](applying-projective-transformations-to-images.md): Warp images in three dimensions.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image rotation](image-rotation.md): Rotate images by arbitrary angles or by multiples of 90 degrees.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.

# Image scaling (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Scale interlaced and planar images.

## Topics

### Planar Image Scaling

- [vImageScale_Planar8](vimagescale_planar8%28________%29.md): Scales an 8-bit planar image to fit a destination buffer.
- [vImageScale_Planar16U](vimagescale_planar16u%28________%29.md): Scales an unsigned 16-bit planar image to fit a destination buffer.
- [vImageScale_Planar16S](vimagescale_planar16s%28________%29.md): Scales a signed 16-bit planar image to fit a destination buffer.
- [vImageScale_Planar16F](vimagescale_planar16f%28________%29.md): Scales a floating-point 16-bit planar image to fit a destination buffer.
- [vImageScale_PlanarF](vimagescale_planarf%28________%29.md): Scales a 32-bit planar image to fit a destination buffer.

### Interleaved Image Scaling

- [vImageScale_CbCr8](vimagescale_cbcr8%28________%29.md): Scales an 8-bit-per-channel, 2-channel interleaved image to fit a destination buffer.
- [vImageScale_CbCr16U](vimagescale_cbcr16u%28________%29.md): Scales an unsigned 16-bit-per-channel, 2-channel interleaved image to fit a destination buffer.
- [vImageScale_CbCr16F](vimagescale_cbcr16f%28________%29.md): Scales a floating-point 16-bit-per-channel, 2-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB8888](vimagescale_argb8888%28________%29.md): Scales an 8-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB16U](vimagescale_argb16u%28________%29.md): Scales an unsigned 16-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB16S](vimagescale_argb16s%28________%29.md): Scales a signed 16-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGB16F](vimagescale_argb16f%28________%29.md): Scales a floating-point 16-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_ARGBFFFF](vimagescale_argbffff%28________%29.md): Scales a 32-bit-per-channel, 4-channel interleaved image to fit a destination buffer.
- [vImageScale_XRGB2101010W](vimagescale_xrgb2101010w%28________%29.md): Scales a 2-bit alpha, 10-bit RGB interleaved image to fit a destination buffer.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying affine transformations to images](applying-affine-transformations-to-images.md): Translate, rotate, and scale images.
- [Applying projective transformations to images](applying-projective-transformations-to-images.md): Warp images in three dimensions.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image rotation](image-rotation.md): Rotate images by arbitrary angles or by multiples of 90 degrees.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.
