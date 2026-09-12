> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-projective-transformations-to-images](https://developer.apple.com/documentation/accelerate/applying-projective-transformations-to-images)

# Applying projective transformations to images (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Warp images in three dimensions.

## Topics

### Computing a projective transformation from source and destination quadrilaterals

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md): Create and use a projective transformation to apply a perspective warp to an image.
- [vImageGetPerspectiveWarp(\_:\_:\_:\_:)](vimagegetperspectivewarp%28________%29.md): Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.
- [vImage_PerpsectiveTransform](vimage_perpsectivetransform.md): A projective-transformation matrix.

### Warping planar buffers

- [vImagePerspectiveWarp_Planar8(\_:\_:\_:\_:\_:\_:\_:)](vimageperspectivewarp_planar8%28______________%29.md): Applies a perspective warp to an 8-bit planar image.
- [vImagePerspectiveWarp_Planar16F(\_:\_:\_:\_:\_:\_:\_:)](vimageperspectivewarp_planar16f%28______________%29.md): Applies a perspective warp to a floating-point 16-bit planar image.
- [vImagePerspectiveWarp_Planar16U(\_:\_:\_:\_:\_:\_:\_:)](vimageperspectivewarp_planar16u%28______________%29.md): Applies a perspective warp to a unsigned 16-bit planar image.

### Warping interleaved buffers

- [vImagePerspectiveWarp_ARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimageperspectivewarp_argb8888%28______________%29.md): Applies a perspective warp to an 8-bit-per-channel, four-channel interleaved image.
- [vImagePerspectiveWarp_ARGB16F(\_:\_:\_:\_:\_:\_:\_:)](vimageperspectivewarp_argb16f%28______________%29.md): Applies a perspective warp to a floating-point 16-bit , four-channel interleaved image.
- [vImagePerspectiveWarp_ARGB16U(\_:\_:\_:\_:\_:\_:\_:)](vimageperspectivewarp_argb16u%28______________%29.md): Applies a perspective warp to an unsigned 16-bit , four-channel interleaved image.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying affine transformations to images](applying-affine-transformations-to-images.md): Translate, rotate, and scale images.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image rotation](image-rotation.md): Rotate images by arbitrary angles or by multiples of 90 degrees.
- [Image scaling](image-scaling.md): Scale interlaced and planar images.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.

# Applying projective transformations to images (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Warp images in three dimensions.

## Topics

### Computing a projective transformation from source and destination quadrilaterals

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md): Create and use a projective transformation to apply a perspective warp to an image.
- [vImageGetPerspectiveWarp](vimagegetperspectivewarp%28________%29.md): Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.
- [vImage_PerpsectiveTransform](vimage_perpsectivetransform.md): A projective-transformation matrix.

### Warping planar buffers

- [vImagePerspectiveWarp_Planar8](vimageperspectivewarp_planar8%28______________%29.md): Applies a perspective warp to an 8-bit planar image.
- [vImagePerspectiveWarp_Planar16F](vimageperspectivewarp_planar16f%28______________%29.md): Applies a perspective warp to a floating-point 16-bit planar image.
- [vImagePerspectiveWarp_Planar16U](vimageperspectivewarp_planar16u%28______________%29.md): Applies a perspective warp to a unsigned 16-bit planar image.

### Warping interleaved buffers

- [vImagePerspectiveWarp_ARGB8888](vimageperspectivewarp_argb8888%28______________%29.md): Applies a perspective warp to an 8-bit-per-channel, four-channel interleaved image.
- [vImagePerspectiveWarp_ARGB16F](vimageperspectivewarp_argb16f%28______________%29.md): Applies a perspective warp to a floating-point 16-bit , four-channel interleaved image.
- [vImagePerspectiveWarp_ARGB16U](vimageperspectivewarp_argb16u%28______________%29.md): Applies a perspective warp to an unsigned 16-bit , four-channel interleaved image.

## See Also

### Applying geometric transforms to image buffers

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Applying affine transformations to images](applying-affine-transformations-to-images.md): Translate, rotate, and scale images.
- [Image reflection](image-reflection.md): Reflect images horizontally and vertically.
- [Image shearing](image-shearing.md): Shear images horizontally and vertically.
- [Image rotation](image-rotation.md): Rotate images by arbitrary angles or by multiples of 90 degrees.
- [Image scaling](image-scaling.md): Scale interlaced and planar images.
- [Getting the Buffer Size](getting-the-buffer-size.md): Calculate the size of the temporary buffer needed by a high-level geometry functions.
