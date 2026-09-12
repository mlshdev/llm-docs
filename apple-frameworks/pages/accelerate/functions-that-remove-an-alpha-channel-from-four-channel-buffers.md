> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-remove-an-alpha-channel-from-four-channel-buffers](https://developer.apple.com/documentation/accelerate/functions-that-remove-an-alpha-channel-from-four-channel-buffers)

# Functions that remove an alpha channel from four-channel buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Remove the alpha channel from an RGBA or ARGB buffer.

## Topics

### Conversion from 8-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB8888toRGB888(\_:\_:\_:)](vimageconvert_argb8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_RGBA8888toRGB888(\_:\_:\_:)](vimageconvert_rgba8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_BGRA8888toRGB888(\_:\_:\_:)](vimageconvert_bgra8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_ARGB8888toRGB565(\_:\_:\_:)](vimageconvert_argb8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_argb8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_BGRA8888toRGB565(\_:\_:\_:)](vimageconvert_bgra8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.
- [vImageConvert_BGRA8888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_bgra8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_rgba8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565(\_:\_:\_:)](vimageconvert_rgba8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888ToRGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888torgb16u%28____________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.

### Conversion from unsigned 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB16UtoRGB16U(\_:\_:\_:)](vimageconvert_argb16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.
- [vImageConvert_BGRA16UtoRGB16U(\_:\_:\_:)](vimageconvert_bgra16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel BGRA buffer to produce an unsigned 16-bit-per-channel RGB result.
- [vImageConvert_RGBA16UtoRGB16U(\_:\_:\_:)](vimageconvert_rgba16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel RGBA buffer to produce an unsigned 16-bit-per-channel RGB result.

### Conversion from ARGB1555 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB1555toRGB565(\_:\_:\_:)](vimageconvert_argb1555torgb565%28______%29.md): Removes the alpha channel from an ARGB1555 buffer to produce an RGB565 result.
- [vImageConvert_RGBA5551toRGB565(\_:\_:\_:)](vimageconvert_rgba5551torgb565%28______%29.md): Removes the alpha channel from an RGBA5551 buffer to produce an RGB565 result.

### Conversion from 32-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGBFFFFtoRGBFFF(\_:\_:\_:)](vimageconvert_argbfffftorgbfff%28______%29.md): Removes the alpha channel from a floating-point 32-bit-per-channel ARGB buffer to produce a floating-point 32-bit-per-channel RGB result.
- [vImageConvert_BGRAFFFFtoRGBFFF(\_:\_:\_:)](vimageconvert_bgrafffftorgbfff%28______%29.md): Removes the alpha channel from a floating-point 32-bit-per-channel BGRA buffer to produce a floating-point 32-bit-per-channel RGB result.
- [vImageConvert_RGBAFFFFtoRGBFFF(\_:\_:\_:)](vimageconvert_rgbafffftorgbfff%28______%29.md): Removes the alpha channel from a floating-point 32-bit-per-channel RGBA buffer to produce a floating-point 32-bit-per-channel RGB result.

## See Also

### Adding and removing alpha channels

- [Functions that add an alpha channel to three-channel buffers](functions-that-add-an-alpha-channel-to-three-channel-buffers.md): Add a constant alpha value or planar alpha buffer to an RGB image.

# Functions that remove an alpha channel from four-channel buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Remove the alpha channel from an RGBA or ARGB buffer.

## Topics

### Conversion from 8-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB8888toRGB888](vimageconvert_argb8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_RGBA8888toRGB888](vimageconvert_rgba8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_BGRA8888toRGB888](vimageconvert_bgra8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_BGRA8888toBGR888](vimageconvert_bgra8888tobgr888.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer to produce an 8-bit-per-channel BGR result.
- [vImageConvert_RGBA8888toBGR888](vimageconvert_rgba8888tobgr888.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an 8-bit-per-channel BGR result.
- [vImageConvert_ARGB8888toRGB565](vimageconvert_argb8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888toRGB565_dithered](vimageconvert_argb8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_BGRA8888toRGB565](vimageconvert_bgra8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.
- [vImageConvert_BGRA8888toRGB565_dithered](vimageconvert_bgra8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565_dithered](vimageconvert_rgba8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565](vimageconvert_rgba8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888ToRGB16U](vimageconvert_argb8888torgb16u%28____________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.

### Conversion from unsigned 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB16UtoRGB16U](vimageconvert_argb16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.
- [vImageConvert_BGRA16UtoRGB16U](vimageconvert_bgra16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel BGRA buffer to produce an unsigned 16-bit-per-channel RGB result.
- [vImageConvert_RGBA16UtoRGB16U](vimageconvert_rgba16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel RGBA buffer to produce an unsigned 16-bit-per-channel RGB result.

### Conversion from ARGB1555 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB1555toRGB565](vimageconvert_argb1555torgb565%28______%29.md): Removes the alpha channel from an ARGB1555 buffer to produce an RGB565 result.
- [vImageConvert_RGBA5551toRGB565](vimageconvert_rgba5551torgb565%28______%29.md): Removes the alpha channel from an RGBA5551 buffer to produce an RGB565 result.

### Conversion from 32-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGBFFFFtoRGBFFF](vimageconvert_argbfffftorgbfff%28______%29.md): Removes the alpha channel from a floating-point 32-bit-per-channel ARGB buffer to produce a floating-point 32-bit-per-channel RGB result.
- [vImageConvert_BGRAFFFFtoRGBFFF](vimageconvert_bgrafffftorgbfff%28______%29.md): Removes the alpha channel from a floating-point 32-bit-per-channel BGRA buffer to produce a floating-point 32-bit-per-channel RGB result.
- [vImageConvert_RGBAFFFFtoRGBFFF](vimageconvert_rgbafffftorgbfff%28______%29.md): Removes the alpha channel from a floating-point 32-bit-per-channel RGBA buffer to produce a floating-point 32-bit-per-channel RGB result.

## See Also

### Adding and removing alpha channels

- [Functions that add an alpha channel to three-channel buffers](functions-that-add-an-alpha-channel-to-three-channel-buffers.md): Add a constant alpha value or planar alpha buffer to an RGB image.
