> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-convert-from-noninteger-interleaved-buffers-to-integer-interleaved-buffers](https://developer.apple.com/documentation/accelerate/functions-that-convert-from-noninteger-interleaved-buffers-to-integer-interleaved-buffers)

# Functions that convert from noninteger interleaved buffers to integer interleaved buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Convert interleaved fixed- and floating-point image data to integer format.

## Topics

### Converting from floating-point 32-bit-per-channel buffers

- [vImageConvert_RGBFFFtoRGB888_dithered(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgbffftorgb888_dithered%28____________%29.md): Converts a floating-point 32-bit-per-channel, 3-channel buffer to an 8-bit-per-channel, 3-channel buffer using the specified dithering algorithm.
- [vImageConvert_ARGBFFFFtoARGB8888_dithered(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argbfffftoargb8888_dithered%28______________%29.md): Converts a floating-point 32-bit-per-channel, 4-channel buffer to an 8-bit-per-channel, 4-channel buffer using the specified dithering algorithm.

### Converting from XRGB2101010 32-bit buffers

- [vImageConvert_ARGB2101010ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb2101010toargb8888%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_xrgb2101010toargb8888%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_ARGB2101010ToARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb2101010toargb16u%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB16U(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_xrgb2101010toargb16u%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel interleaved buffer with permutation.

### Converting from RGBX1010102 32-bit buffers

- [vImageConvert_RGBA1010102ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgba1010102toargb8888%28____________%29.md): Converts an RGBA1010102 32-bit, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_RGBA1010102ToARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgba1010102toargb16u%28____________%29.md): Converts an RGBA1010102 32-bit, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel interleaved buffer with permutation.

## See Also

### Type conversion

- [Functions that convert between integer planar buffers](functions-that-convert-between-integer-planar-buffers.md): Convert the bit depths of planar integer image data.
- [Functions that convert between integer interleaved buffers](functions-that-convert-between-integer-interleaved-buffers.md): Convert the bit depths of interleaved integer image data.
- [Functions that convert from integer planar buffers to noninteger planar buffers](functions-that-convert-from-integer-planar-buffers-to-noninteger-planar-buffers.md): Convert planar integer image data to fixed- and floating-point format.
- [Functions that convert from integer interleaved buffers to noninteger interleaved buffers](functions-that-convert-from-integer-interleaved-buffers-to-noninteger-interleaved-buffers.md): Convert interleaved integer image data to fixed- and floating-point format.
- [Functions that convert between noninteger planar buffers](functions-that-convert-between-noninteger-planar-buffers.md): Convert the bit depths and formats of planar fixed- and floating-point image data.
- [Functions that convert between noninteger interleaved buffers](functions-that-convert-between-noninteger-interleaved-buffers.md): Convert the bit depths and formats of interleaved fixed- and floating-point image data.
- [Functions that convert from noninteger planar buffers to integer planar buffers](functions-that-convert-from-noninteger-planar-buffers-to-integer-planar-buffers.md): Convert planar fixed- and floating-point image data to integer format.

# Functions that convert from noninteger interleaved buffers to integer interleaved buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Convert interleaved fixed- and floating-point image data to integer format.

## Topics

### Converting from floating-point 32-bit-per-channel buffers

- [vImageConvert_RGBFFFtoRGB888_dithered](vimageconvert_rgbffftorgb888_dithered%28____________%29.md): Converts a floating-point 32-bit-per-channel, 3-channel buffer to an 8-bit-per-channel, 3-channel buffer using the specified dithering algorithm.
- [vImageConvert_ARGBFFFFtoARGB8888_dithered](vimageconvert_argbfffftoargb8888_dithered%28______________%29.md): Converts a floating-point 32-bit-per-channel, 4-channel buffer to an 8-bit-per-channel, 4-channel buffer using the specified dithering algorithm.

### Converting from XRGB2101010 32-bit buffers

- [vImageConvert_ARGB2101010ToARGB8888](vimageconvert_argb2101010toargb8888%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB8888](vimageconvert_xrgb2101010toargb8888%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_ARGB2101010ToARGB16U](vimageconvert_argb2101010toargb16u%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB16U](vimageconvert_xrgb2101010toargb16u%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel interleaved buffer with permutation.

### Converting from RGBX1010102 32-bit buffers

- [vImageConvert_RGBA1010102ToARGB8888](vimageconvert_rgba1010102toargb8888%28____________%29.md): Converts an RGBA1010102 32-bit, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_RGBA1010102ToARGB16U](vimageconvert_rgba1010102toargb16u%28____________%29.md): Converts an RGBA1010102 32-bit, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel interleaved buffer with permutation.

## See Also

### Type conversion

- [Functions that convert between integer planar buffers](functions-that-convert-between-integer-planar-buffers.md): Convert the bit depths of planar integer image data.
- [Functions that convert between integer interleaved buffers](functions-that-convert-between-integer-interleaved-buffers.md): Convert the bit depths of interleaved integer image data.
- [Functions that convert from integer planar buffers to noninteger planar buffers](functions-that-convert-from-integer-planar-buffers-to-noninteger-planar-buffers.md): Convert planar integer image data to fixed- and floating-point format.
- [Functions that convert from integer interleaved buffers to noninteger interleaved buffers](functions-that-convert-from-integer-interleaved-buffers-to-noninteger-interleaved-buffers.md): Convert interleaved integer image data to fixed- and floating-point format.
- [Functions that convert between noninteger planar buffers](functions-that-convert-between-noninteger-planar-buffers.md): Convert the bit depths and formats of planar fixed- and floating-point image data.
- [Functions that convert between noninteger interleaved buffers](functions-that-convert-between-noninteger-interleaved-buffers.md): Convert the bit depths and formats of interleaved fixed- and floating-point image data.
- [Functions that convert from noninteger planar buffers to integer planar buffers](functions-that-convert-from-noninteger-planar-buffers-to-integer-planar-buffers.md): Convert planar fixed- and floating-point image data to integer format.
