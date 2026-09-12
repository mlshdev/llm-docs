> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-affine-transformations-to-images](https://developer.apple.com/documentation/accelerate/applying-affine-transformations-to-images)

# Applying affine transformations to images (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Translate, rotate, and scale images.

## Topics

### Single-Precision Affine Transformation

- [vImageAffineWarp_Planar8(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_planar8%28____________%29.md): Applies a single-precision affine transformation to an 8-bit planar image.
- [vImageAffineWarp_PlanarF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_planarf%28____________%29.md): Applies a single-precision affine transformation to a 32-bit planar image.
- [vImageAffineWarp_ARGB16U(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argb16u%28____________%29.md): Applies a single-precision affine transformation to an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB16S(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argb16s%28____________%29.md): Applies a single-precision affine transformation to a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB8888(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argb8888%28____________%29.md): Applies a single-precision affine transformation to an 8-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argbffff%28____________%29.md): Applies a single-precision affine transformation to a 32-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argb16f%28____________%29.md)
- [vImageAffineWarp_CbCr16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_cbcr16f%28____________%29.md)
- [vImageAffineWarp_Planar16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_planar16f%28____________%29.md)

### Double-Precision Affine Transformation

- [vImageAffineWarpD_Planar8(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_planar8%28____________%29.md): Applies a double-precision affine transformation to an 8-bit planar image.
- [vImageAffineWarpD_PlanarF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_planarf%28____________%29.md): Applies a double-precision affine transformation to a 32-bit planar image.
- [vImageAffineWarpD_Planar16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_planar16f%28____________%29.md): Applies a double-precision affine transformation to a floating-point 16-bit planar image.
- [vImageAffineWarpD_CbCr16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_cbcr16f%28____________%29.md): Applies a double-precision affine transformation to a floating-point 16-bit-per-channel, 2-channel interleaved image.
- [vImageAffineWarpD_ARGB8888(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_argb8888%28____________%29.md): Applies a double-precision affine transformation to an 8-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGB16U(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_argb16u%28____________%29.md): Applies a double-precision affine transformation to an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGB16S(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_argb16s%28____________%29.md): Applies a double-precision affine transformation to a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGB16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_argb16f%28____________%29.md): Applies a double-precision affine transformation to a floating-point 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpd_argbffff%28____________%29.md): Applies a double-precision affine transformation to a 32-bit-per-channel, 4-channel interleaved image.

### Core Graphics Affine Transformation

- [vImageAffineWarpCG_Planar8(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpcg_planar8%28____________%29.md): Applies a Core Graphics affine transformation to a Planar8 source image.
- [vImageAffineWarpCG_PlanarF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpcg_planarf%28____________%29.md): Applies a Core Graphics affine transformation to a PlanarF source image.
- [vImageAffineWarpCG_ARGB16U(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpcg_argb16u%28____________%29.md): Applies a Core Graphics affine transformation to an ARGB16U source image.
- [vImageAffineWarpCG_ARGB16S(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpcg_argb16s%28____________%29.md): Applies a Core Graphics affine transformation to an ARGB16S source image.
- [vImageAffineWarpCG_ARGB8888(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpcg_argb8888%28____________%29.md): Applies a Core Graphics affine transformation to an ARGB8888 source image.
- [vImageAffineWarpCG_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarpcg_argbffff%28____________%29.md): Applies a Core Graphics affine transformation to an ARGBFFFF source image.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying projective transformations to images](applying-projective-transformations-to-images.md): Warp images in three dimensions.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image rotation](image-rotation.md): Rotate images by arbitrary angles or by multiples of 90 degrees.
- [Image scaling](image-scaling.md): Scale interlaced and planar images.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.

# Applying affine transformations to images (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Translate, rotate, and scale images.

## Topics

### Single-Precision Affine Transformation

- [vImageAffineWarp_Planar8](vimageaffinewarp_planar8%28____________%29.md): Applies a single-precision affine transformation to an 8-bit planar image.
- [vImageAffineWarp_PlanarF](vimageaffinewarp_planarf%28____________%29.md): Applies a single-precision affine transformation to a 32-bit planar image.
- [vImageAffineWarp_ARGB16U](vimageaffinewarp_argb16u%28____________%29.md): Applies a single-precision affine transformation to an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB16S](vimageaffinewarp_argb16s%28____________%29.md): Applies a single-precision affine transformation to a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB8888](vimageaffinewarp_argb8888%28____________%29.md): Applies a single-precision affine transformation to an 8-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGBFFFF](vimageaffinewarp_argbffff%28____________%29.md): Applies a single-precision affine transformation to a 32-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB16F](vimageaffinewarp_argb16f%28____________%29.md)
- [vImageAffineWarp_CbCr16F](vimageaffinewarp_cbcr16f%28____________%29.md)
- [vImageAffineWarp_Planar16F](vimageaffinewarp_planar16f%28____________%29.md)

### Double-Precision Affine Transformation

- [vImageAffineWarpD_Planar8](vimageaffinewarpd_planar8%28____________%29.md): Applies a double-precision affine transformation to an 8-bit planar image.
- [vImageAffineWarpD_PlanarF](vimageaffinewarpd_planarf%28____________%29.md): Applies a double-precision affine transformation to a 32-bit planar image.
- [vImageAffineWarpD_Planar16F](vimageaffinewarpd_planar16f%28____________%29.md): Applies a double-precision affine transformation to a floating-point 16-bit planar image.
- [vImageAffineWarpD_CbCr16F](vimageaffinewarpd_cbcr16f%28____________%29.md): Applies a double-precision affine transformation to a floating-point 16-bit-per-channel, 2-channel interleaved image.
- [vImageAffineWarpD_ARGB8888](vimageaffinewarpd_argb8888%28____________%29.md): Applies a double-precision affine transformation to an 8-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGB16U](vimageaffinewarpd_argb16u%28____________%29.md): Applies a double-precision affine transformation to an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGB16S](vimageaffinewarpd_argb16s%28____________%29.md): Applies a double-precision affine transformation to a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGB16F](vimageaffinewarpd_argb16f%28____________%29.md): Applies a double-precision affine transformation to a floating-point 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarpD_ARGBFFFF](vimageaffinewarpd_argbffff%28____________%29.md): Applies a double-precision affine transformation to a 32-bit-per-channel, 4-channel interleaved image.

### Core Graphics Affine Transformation

- [vImageAffineWarpCG_Planar8](vimageaffinewarpcg_planar8%28____________%29.md): Applies a Core Graphics affine transformation to a Planar8 source image.
- [vImageAffineWarpCG_PlanarF](vimageaffinewarpcg_planarf%28____________%29.md): Applies a Core Graphics affine transformation to a PlanarF source image.
- [vImageAffineWarpCG_ARGB16U](vimageaffinewarpcg_argb16u%28____________%29.md): Applies a Core Graphics affine transformation to an ARGB16U source image.
- [vImageAffineWarpCG_ARGB16S](vimageaffinewarpcg_argb16s%28____________%29.md): Applies a Core Graphics affine transformation to an ARGB16S source image.
- [vImageAffineWarpCG_ARGB8888](vimageaffinewarpcg_argb8888%28____________%29.md): Applies a Core Graphics affine transformation to an ARGB8888 source image.
- [vImageAffineWarpCG_ARGBFFFF](vimageaffinewarpcg_argbffff%28____________%29.md): Applies a Core Graphics affine transformation to an ARGBFFFF source image.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying projective transformations to images](applying-projective-transformations-to-images.md): Warp images in three dimensions.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image rotation](image-rotation.md): Rotate images by arbitrary angles or by multiples of 90 degrees.
- [Image scaling](image-scaling.md): Scale interlaced and planar images.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.
