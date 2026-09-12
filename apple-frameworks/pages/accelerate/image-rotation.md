> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/image-rotation](https://developer.apple.com/documentation/accelerate/image-rotation)

# Image rotation (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Rotate images by arbitrary angles or by multiples of 90 degrees.

## Topics

### Rotating 8-bit-per-channel buffers by any angle

- [vImageRotate_Planar8(\_:\_:\_:\_:\_:\_:)](vimagerotate_planar8%28____________%29.md): Rotates an 8-bit planar image by any angle, which you specify in radians.
- [vImageRotate_ARGB8888(\_:\_:\_:\_:\_:\_:)](vimagerotate_argb8888%28____________%29.md): Rotates an 8-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.

### Rotating 16-bit-per-channel buffers by any angle

- [vImageRotate_Planar16F(\_:\_:\_:\_:\_:\_:)](vimagerotate_planar16f%28____________%29.md): Rotates a floating-point 16-bit planar image by any angle, which you specify in radians.
- [vImageRotate_CbCr16F(\_:\_:\_:\_:\_:\_:)](vimagerotate_cbcr16f%28____________%29.md): Rotates a floating-point 16-bit-per-channel, 2-channel interleaved image by any angle, which you specify in radians.
- [vImageRotate_ARGB16U(\_:\_:\_:\_:\_:\_:)](vimagerotate_argb16u%28____________%29.md): Rotates an unsigned 16-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.
- [vImageRotate_ARGB16S(\_:\_:\_:\_:\_:\_:)](vimagerotate_argb16s%28____________%29.md): Rotates a signed 16-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.
- [vImageRotate_ARGB16F(\_:\_:\_:\_:\_:\_:)](vimagerotate_argb16f%28____________%29.md): Rotates a floating-point 16-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.

### Rotating 32-bit-per-channel buffers by any angle

- [vImageRotate_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagerotate_planarf%28____________%29.md): Rotates a 32-bit planar image by any angle, which you specify in radians.
- [vImageRotate_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimagerotate_argbffff%28____________%29.md): Rotates a 32-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.

### Rotating 8-bit-per-channel buffers by multiples of 90°

- [vImageRotate90_Planar8(\_:\_:\_:\_:\_:)](vimagerotate90_planar8%28__________%29.md): Rotates an 8-bit planar image by a multiple of 90°.
- [vImageRotate90_ARGB8888(\_:\_:\_:\_:\_:)](vimagerotate90_argb8888%28__________%29.md): Rotates an 8-bit-per-channel, 4-channel interleaved image by a multiple of 90°.

### Rotating 16-bit-per-channel buffers by multiples of 90°

- [vImageRotate90_Planar16U(\_:\_:\_:\_:\_:)](vimagerotate90_planar16u%28__________%29.md): Rotates an unsigned 16-bit planar image by a multiple of 90°.
- [vImageRotate90_Planar16F(\_:\_:\_:\_:\_:)](vimagerotate90_planar16f%28__________%29.md): Rotates a floating-point 16-bit planar image by a multiple of 90°.
- [vImageRotate90_CbCr16F(\_:\_:\_:\_:\_:)](vimagerotate90_cbcr16f%28__________%29.md): Rotates a floating-point 16-bit-per-channel, 2-channel interleaved image by a multiple of 90°.
- [vImageRotate90_ARGB16U(\_:\_:\_:\_:\_:)](vimagerotate90_argb16u%28__________%29.md): Rotates an unsigned 16-bit-per-channel, 4-channel interleaved image by a multiple of 90°.
- [vImageRotate90_ARGB16S(\_:\_:\_:\_:\_:)](vimagerotate90_argb16s%28__________%29.md): Rotates a signed 16-bit-per-channel, 4-channel interleaved image by a multiple of 90°.
- [vImageRotate90_ARGB16F(\_:\_:\_:\_:\_:)](vimagerotate90_argb16f%28__________%29.md): Rotates a floating-point 16-bit-per-channel, 4-channel interleaved image by a multiple of 90°.

### Rotating 32-bit-per-channel buffers by multiples of 90°

- [vImageRotate90_PlanarF(\_:\_:\_:\_:\_:)](vimagerotate90_planarf%28__________%29.md): Rotates a 32-bit planar image by a multiple of 90°.
- [vImageRotate90_ARGBFFFF(\_:\_:\_:\_:\_:)](vimagerotate90_argbffff%28__________%29.md): Rotates a 32-bit-per-channel, 4-channel interleaved image by a multiple of 90°.

### Specifying the angle of a multiple of 90° rotation

- [Rotation constants](1509228-rotation-constants.md): The number of degrees to rotate an image.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying affine transformations to images](applying-affine-transformations-to-images.md): Translate, rotate, and scale images.
- [Applying projective transformations to images](applying-projective-transformations-to-images.md): Warp images in three dimensions.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image scaling](image-scaling.md): Scale interlaced and planar images.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.

# Image rotation (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Rotate images by arbitrary angles or by multiples of 90 degrees.

## Topics

### Rotating 8-bit-per-channel buffers by any angle

- [vImageRotate_Planar8](vimagerotate_planar8%28____________%29.md): Rotates an 8-bit planar image by any angle, which you specify in radians.
- [vImageRotate_ARGB8888](vimagerotate_argb8888%28____________%29.md): Rotates an 8-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.

### Rotating 16-bit-per-channel buffers by any angle

- [vImageRotate_Planar16F](vimagerotate_planar16f%28____________%29.md): Rotates a floating-point 16-bit planar image by any angle, which you specify in radians.
- [vImageRotate_CbCr16F](vimagerotate_cbcr16f%28____________%29.md): Rotates a floating-point 16-bit-per-channel, 2-channel interleaved image by any angle, which you specify in radians.
- [vImageRotate_ARGB16U](vimagerotate_argb16u%28____________%29.md): Rotates an unsigned 16-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.
- [vImageRotate_ARGB16S](vimagerotate_argb16s%28____________%29.md): Rotates a signed 16-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.
- [vImageRotate_ARGB16F](vimagerotate_argb16f%28____________%29.md): Rotates a floating-point 16-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.

### Rotating 32-bit-per-channel buffers by any angle

- [vImageRotate_PlanarF](vimagerotate_planarf%28____________%29.md): Rotates a 32-bit planar image by any angle, which you specify in radians.
- [vImageRotate_ARGBFFFF](vimagerotate_argbffff%28____________%29.md): Rotates a 32-bit-per-channel, 4-channel interleaved image by any angle, which you specify in radians.

### Rotating 8-bit-per-channel buffers by multiples of 90°

- [vImageRotate90_Planar8](vimagerotate90_planar8%28__________%29.md): Rotates an 8-bit planar image by a multiple of 90°.
- [vImageRotate90_ARGB8888](vimagerotate90_argb8888%28__________%29.md): Rotates an 8-bit-per-channel, 4-channel interleaved image by a multiple of 90°.

### Rotating 16-bit-per-channel buffers by multiples of 90°

- [vImageRotate90_Planar16U](vimagerotate90_planar16u%28__________%29.md): Rotates an unsigned 16-bit planar image by a multiple of 90°.
- [vImageRotate90_Planar16F](vimagerotate90_planar16f%28__________%29.md): Rotates a floating-point 16-bit planar image by a multiple of 90°.
- [vImageRotate90_CbCr16F](vimagerotate90_cbcr16f%28__________%29.md): Rotates a floating-point 16-bit-per-channel, 2-channel interleaved image by a multiple of 90°.
- [vImageRotate90_ARGB16U](vimagerotate90_argb16u%28__________%29.md): Rotates an unsigned 16-bit-per-channel, 4-channel interleaved image by a multiple of 90°.
- [vImageRotate90_ARGB16S](vimagerotate90_argb16s%28__________%29.md): Rotates a signed 16-bit-per-channel, 4-channel interleaved image by a multiple of 90°.
- [vImageRotate90_ARGB16F](vimagerotate90_argb16f%28__________%29.md): Rotates a floating-point 16-bit-per-channel, 4-channel interleaved image by a multiple of 90°.

### Rotating 32-bit-per-channel buffers by multiples of 90°

- [vImageRotate90_PlanarF](vimagerotate90_planarf%28__________%29.md): Rotates a 32-bit planar image by a multiple of 90°.
- [vImageRotate90_ARGBFFFF](vimagerotate90_argbffff%28__________%29.md): Rotates a 32-bit-per-channel, 4-channel interleaved image by a multiple of 90°.

### Specifying the angle of a multiple of 90° rotation

- [Rotation constants](1509228-rotation-constants.md): The number of degrees to rotate an image.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying affine transformations to images](applying-affine-transformations-to-images.md): Translate, rotate, and scale images.
- [Applying projective transformations to images](applying-projective-transformations-to-images.md): Warp images in three dimensions.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image scaling](image-scaling.md): Scale interlaced and planar images.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.
