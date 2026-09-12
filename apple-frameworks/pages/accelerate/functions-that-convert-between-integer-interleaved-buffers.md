> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-convert-between-integer-interleaved-buffers](https://developer.apple.com/documentation/accelerate/functions-that-convert-between-integer-interleaved-buffers)

# Functions that convert between integer interleaved buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Convert the bit depths of interleaved integer image data.

## Topics

### Converting from 8-bit buffers

- [vImageConvert_RGB888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_rgb888torgb565_dithered%28__________%29.md): Converts an 8-bit-per-channel, 3-channel interleaved buffer to an RGB565 3-channel interleaved buffer using the specified dithering algorithm.
- [vImageConvert_ARGB8888toARGB1555(\_:\_:\_:)](vimageconvert_argb8888toargb1555%28______%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer.
- [vImageConvert_ARGB8888toARGB1555_dithered(\_:\_:\_:\_:\_:)](vimageconvert_argb8888toargb1555_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_RGBA8888toRGBA5551(\_:\_:\_:)](vimageconvert_rgba8888torgba5551%28______%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer.
- [vImageConvert_RGBA8888toRGBA5551_dithered(\_:\_:\_:\_:\_:)](vimageconvert_rgba8888torgba5551_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_ARGB8888ToARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888toargb16u%28____________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel buffer with permutation.

### Converting from unsigned 16-bit-per-channel buffers

- [vImageConvert_RGB16UtoRGB888_dithered(\_:\_:\_:\_:)](vimageconvert_rgb16utorgb888_dithered%28________%29.md): Converts an unsigned 16-bit-per-channel, 3-channel interleaved buffer to an 8-bit-per-channel, 3-channel interleaved buffer using the specified dithering algorithm.
- [vImageConvert_ARGB16UToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb16utoargb8888%28____________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_ARGB16UtoARGB8888_dithered(\_:\_:\_:\_:\_:)](vimageconvert_argb16utoargb8888_dithered%28__________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer using the specified dithering algorithm.

### Converting from RGB565 16-bit-per-channel buffers

- [vImageConvert_RGB565toRGB888(\_:\_:\_:)](vimageconvert_rgb565torgb888%28______%29.md): Converts an RGB565 3-channel interleaved buffer to an 8-bit-per-channel, 3-channel interleaved buffer.

### Converting from ARGB1555 16-bit-per-channel buffers

- [vImageConvert_RGBA5551toRGBA8888(\_:\_:\_:)](vimageconvert_rgba5551torgba8888%28______%29.md): Converts an RGB5651 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_ARGB1555toARGB8888(\_:\_:\_:)](vimageconvert_argb1555toargb8888%28______%29.md): Converts an ARGB1555 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer.

## See Also

### Type conversion

- [Functions that convert between integer planar buffers](functions-that-convert-between-integer-planar-buffers.md): Convert the bit depths of planar integer image data.
- [Functions that convert from integer planar buffers to noninteger planar buffers](functions-that-convert-from-integer-planar-buffers-to-noninteger-planar-buffers.md): Convert planar integer image data to fixed- and floating-point format.
- [Functions that convert from integer interleaved buffers to noninteger interleaved buffers](functions-that-convert-from-integer-interleaved-buffers-to-noninteger-interleaved-buffers.md): Convert interleaved integer image data to fixed- and floating-point format.
- [Functions that convert between noninteger planar buffers](functions-that-convert-between-noninteger-planar-buffers.md): Convert the bit depths and formats of planar fixed- and floating-point image data.
- [Functions that convert between noninteger interleaved buffers](functions-that-convert-between-noninteger-interleaved-buffers.md): Convert the bit depths and formats of interleaved fixed- and floating-point image data.
- [Functions that convert from noninteger planar buffers to integer planar buffers](functions-that-convert-from-noninteger-planar-buffers-to-integer-planar-buffers.md): Convert planar fixed- and floating-point image data to integer format.
- [Functions that convert from noninteger interleaved buffers to integer interleaved buffers](functions-that-convert-from-noninteger-interleaved-buffers-to-integer-interleaved-buffers.md): Convert interleaved fixed- and floating-point image data to integer format.

# Functions that convert between integer interleaved buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Convert the bit depths of interleaved integer image data.

## Topics

### Converting from 8-bit buffers

- [vImageConvert_RGB888toRGB565_dithered](vimageconvert_rgb888torgb565_dithered%28__________%29.md): Converts an 8-bit-per-channel, 3-channel interleaved buffer to an RGB565 3-channel interleaved buffer using the specified dithering algorithm.
- [vImageConvert_ARGB8888toARGB1555](vimageconvert_argb8888toargb1555%28______%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer.
- [vImageConvert_ARGB8888toARGB1555_dithered](vimageconvert_argb8888toargb1555_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_RGBA8888toRGBA5551](vimageconvert_rgba8888torgba5551%28______%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer.
- [vImageConvert_RGBA8888toRGBA5551_dithered](vimageconvert_rgba8888torgba5551_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_ARGB8888ToARGB16U](vimageconvert_argb8888toargb16u%28____________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel buffer with permutation.

### Converting from unsigned 16-bit-per-channel buffers

- [vImageConvert_RGB16UtoRGB888_dithered](vimageconvert_rgb16utorgb888_dithered%28________%29.md): Converts an unsigned 16-bit-per-channel, 3-channel interleaved buffer to an 8-bit-per-channel, 3-channel interleaved buffer using the specified dithering algorithm.
- [vImageConvert_ARGB16UToARGB8888](vimageconvert_argb16utoargb8888%28____________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_ARGB16UtoARGB8888_dithered](vimageconvert_argb16utoargb8888_dithered%28__________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer using the specified dithering algorithm.

### Converting from RGB565 16-bit-per-channel buffers

- [vImageConvert_RGB565toRGB888](vimageconvert_rgb565torgb888%28______%29.md): Converts an RGB565 3-channel interleaved buffer to an 8-bit-per-channel, 3-channel interleaved buffer.

### Converting from ARGB1555 16-bit-per-channel buffers

- [vImageConvert_RGBA5551toRGBA8888](vimageconvert_rgba5551torgba8888%28______%29.md): Converts an RGB5651 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_ARGB1555toARGB8888](vimageconvert_argb1555toargb8888%28______%29.md): Converts an ARGB1555 4-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer.

## See Also

### Type conversion

- [Functions that convert between integer planar buffers](functions-that-convert-between-integer-planar-buffers.md): Convert the bit depths of planar integer image data.
- [Functions that convert from integer planar buffers to noninteger planar buffers](functions-that-convert-from-integer-planar-buffers-to-noninteger-planar-buffers.md): Convert planar integer image data to fixed- and floating-point format.
- [Functions that convert from integer interleaved buffers to noninteger interleaved buffers](functions-that-convert-from-integer-interleaved-buffers-to-noninteger-interleaved-buffers.md): Convert interleaved integer image data to fixed- and floating-point format.
- [Functions that convert between noninteger planar buffers](functions-that-convert-between-noninteger-planar-buffers.md): Convert the bit depths and formats of planar fixed- and floating-point image data.
- [Functions that convert between noninteger interleaved buffers](functions-that-convert-between-noninteger-interleaved-buffers.md): Convert the bit depths and formats of interleaved fixed- and floating-point image data.
- [Functions that convert from noninteger planar buffers to integer planar buffers](functions-that-convert-from-noninteger-planar-buffers-to-integer-planar-buffers.md): Convert planar fixed- and floating-point image data to integer format.
- [Functions that convert from noninteger interleaved buffers to integer interleaved buffers](functions-that-convert-from-noninteger-interleaved-buffers-to-integer-interleaved-buffers.md): Convert interleaved fixed- and floating-point image data to integer format.
