> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-convert-between-noninteger-interleaved-buffers](https://developer.apple.com/documentation/accelerate/functions-that-convert-between-noninteger-interleaved-buffers)

# Functions that convert between noninteger interleaved buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Convert the bit depths and formats of interleaved fixed- and floating-point image data.

## Topics

### Converting from fixed-point 16-bit-per-channel buffers

- [vImageConvert_ARGB16Q12ToARGB2101010(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argb16q12toargb2101010%28________________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel interleaved buffer to an ARGB2101010 32-bit, 4-channel buffer with permutation.
- [vImageConvert_ARGB16Q12ToXRGB2101010(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argb16q12toxrgb2101010%28________________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel interleaved buffer to an XRGB2101010 32-bit, 4-channel buffer with permutation.
- [vImageConvert_ARGB16Q12ToRGBA1010102(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argb16q12torgba1010102%28________________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel interleaved buffer to an RGBA1010102 32-bit, 4-channel buffer with permutation.

### Converting from floating-point 32-bit-per-channel buffers

- [vImageConvert_ARGBFFFFToARGB2101010(\_:\_:\_:\_:\_:\_:)](vimageconvert_argbfffftoargb2101010%28____________%29.md): Converts a floating-point 32-bit-per-channel, 4-channel interleaved buffer to an ARGB2101010 32-bit, 4-channel buffer with permutation.
- [vImageConvert_ARGBFFFFToXRGB2101010(\_:\_:\_:\_:\_:\_:)](vimageconvert_argbfffftoxrgb2101010%28____________%29.md): Converts a floating-point 32-bit-per-channel, 4-channel interleaved buffer to an XRGB2101010 32-bit, 4-channel buffer with permutation.

### Converting from XRGB2101010 32-bit buffers

- [vImageConvert_ARGB2101010ToARGB16F(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb2101010toargb16f%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB16F(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_xrgb2101010toargb16f%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_ARGB2101010ToARGB16Q12(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb2101010toargb16q12%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to a fixed-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB16Q12(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_xrgb2101010toargb16q12%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to a fixed-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_ARGB2101010ToARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb2101010toargbffff%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 32-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGBFFFF(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_xrgb2101010toargbffff%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 32-bit-per-channel, 4-channel interleaved buffer with permutation.

### Converting from RGBX1010102 32-bit buffers

- [vImageConvert_RGBA1010102ToARGB16Q12(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgba1010102toargb16q12%28____________%29.md): Converts an RGBA1010102 32-bit, 4-channel interleaved buffer to a fixed-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.

## See Also

### Type conversion

- [Functions that convert between integer planar buffers](functions-that-convert-between-integer-planar-buffers.md): Convert the bit depths of planar integer image data.
- [Functions that convert between integer interleaved buffers](functions-that-convert-between-integer-interleaved-buffers.md): Convert the bit depths of interleaved integer image data.
- [Functions that convert from integer planar buffers to noninteger planar buffers](functions-that-convert-from-integer-planar-buffers-to-noninteger-planar-buffers.md): Convert planar integer image data to fixed- and floating-point format.
- [Functions that convert from integer interleaved buffers to noninteger interleaved buffers](functions-that-convert-from-integer-interleaved-buffers-to-noninteger-interleaved-buffers.md): Convert interleaved integer image data to fixed- and floating-point format.
- [Functions that convert between noninteger planar buffers](functions-that-convert-between-noninteger-planar-buffers.md): Convert the bit depths and formats of planar fixed- and floating-point image data.
- [Functions that convert from noninteger planar buffers to integer planar buffers](functions-that-convert-from-noninteger-planar-buffers-to-integer-planar-buffers.md): Convert planar fixed- and floating-point image data to integer format.
- [Functions that convert from noninteger interleaved buffers to integer interleaved buffers](functions-that-convert-from-noninteger-interleaved-buffers-to-integer-interleaved-buffers.md): Convert interleaved fixed- and floating-point image data to integer format.

# Functions that convert between noninteger interleaved buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Convert the bit depths and formats of interleaved fixed- and floating-point image data.

## Topics

### Converting from fixed-point 16-bit-per-channel buffers

- [vImageConvert_ARGB16Q12ToARGB2101010](vimageconvert_argb16q12toargb2101010%28________________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel interleaved buffer to an ARGB2101010 32-bit, 4-channel buffer with permutation.
- [vImageConvert_ARGB16Q12ToXRGB2101010](vimageconvert_argb16q12toxrgb2101010%28________________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel interleaved buffer to an XRGB2101010 32-bit, 4-channel buffer with permutation.
- [vImageConvert_ARGB16Q12ToRGBA1010102](vimageconvert_argb16q12torgba1010102%28________________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel interleaved buffer to an RGBA1010102 32-bit, 4-channel buffer with permutation.

### Converting from floating-point 32-bit-per-channel buffers

- [vImageConvert_ARGBFFFFToARGB2101010](vimageconvert_argbfffftoargb2101010%28____________%29.md): Converts a floating-point 32-bit-per-channel, 4-channel interleaved buffer to an ARGB2101010 32-bit, 4-channel buffer with permutation.
- [vImageConvert_ARGBFFFFToXRGB2101010](vimageconvert_argbfffftoxrgb2101010%28____________%29.md): Converts a floating-point 32-bit-per-channel, 4-channel interleaved buffer to an XRGB2101010 32-bit, 4-channel buffer with permutation.

### Converting from XRGB2101010 32-bit buffers

- [vImageConvert_ARGB2101010ToARGB16F](vimageconvert_argb2101010toargb16f%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB16F](vimageconvert_xrgb2101010toargb16f%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_ARGB2101010ToARGB16Q12](vimageconvert_argb2101010toargb16q12%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to a fixed-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGB16Q12](vimageconvert_xrgb2101010toargb16q12%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to a fixed-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_ARGB2101010ToARGBFFFF](vimageconvert_argb2101010toargbffff%28____________%29.md): Converts an ARGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 32-bit-per-channel, 4-channel interleaved buffer with permutation.
- [vImageConvert_XRGB2101010ToARGBFFFF](vimageconvert_xrgb2101010toargbffff%28______________%29.md): Converts an XRGB2101010 32-bit, 4-channel interleaved buffer to a floating-point 32-bit-per-channel, 4-channel interleaved buffer with permutation.

### Converting from RGBX1010102 32-bit buffers

- [vImageConvert_RGBA1010102ToARGB16Q12](vimageconvert_rgba1010102toargb16q12%28____________%29.md): Converts an RGBA1010102 32-bit, 4-channel interleaved buffer to a fixed-point 16-bit-per-channel, 4-channel interleaved buffer with permutation.

## See Also

### Type conversion

- [Functions that convert between integer planar buffers](functions-that-convert-between-integer-planar-buffers.md): Convert the bit depths of planar integer image data.
- [Functions that convert between integer interleaved buffers](functions-that-convert-between-integer-interleaved-buffers.md): Convert the bit depths of interleaved integer image data.
- [Functions that convert from integer planar buffers to noninteger planar buffers](functions-that-convert-from-integer-planar-buffers-to-noninteger-planar-buffers.md): Convert planar integer image data to fixed- and floating-point format.
- [Functions that convert from integer interleaved buffers to noninteger interleaved buffers](functions-that-convert-from-integer-interleaved-buffers-to-noninteger-interleaved-buffers.md): Convert interleaved integer image data to fixed- and floating-point format.
- [Functions that convert between noninteger planar buffers](functions-that-convert-between-noninteger-planar-buffers.md): Convert the bit depths and formats of planar fixed- and floating-point image data.
- [Functions that convert from noninteger planar buffers to integer planar buffers](functions-that-convert-from-noninteger-planar-buffers-to-integer-planar-buffers.md): Convert planar fixed- and floating-point image data to integer format.
- [Functions that convert from noninteger interleaved buffers to integer interleaved buffers](functions-that-convert-from-noninteger-interleaved-buffers-to-integer-interleaved-buffers.md): Convert interleaved fixed- and floating-point image data to integer format.
