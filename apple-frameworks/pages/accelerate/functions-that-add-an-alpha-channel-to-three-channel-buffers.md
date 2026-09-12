> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-add-an-alpha-channel-to-three-channel-buffers](https://developer.apple.com/documentation/accelerate/functions-that-add-an-alpha-channel-to-three-channel-buffers)

# Functions that add an alpha channel to three-channel buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Add a constant alpha value or planar alpha buffer to an RGB image.

## Topics

### Conversion from 8-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB888toARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb888toargb8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGB888toBGRA8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb888tobgra8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB888toRGBA8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb888torgba8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.

### Conversion from unsigned 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB16UToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb16utoargb8888%28____________%29.md): Converts an unsigned 16-bit-per-channel, 3-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer using permutation.
- [vImageConvert_RGB16UtoARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb16utoargb16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGB16UtoBGRA16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb16utobgra16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB16UtoRGBA16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb16utorgba16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an RGBA result.

### Conversion from RGB565 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB565toARGB8888(\_:\_:\_:\_:)](vimageconvert_rgb565toargb8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_RGB565toBGRA8888(\_:\_:\_:\_:)](vimageconvert_rgb565tobgra8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel BGRA buffer.
- [vImageConvert_RGB565toRGBA8888(\_:\_:\_:\_:)](vimageconvert_rgb565torgba8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel RGBA buffer.
- [vImageConvert_RGB565toARGB1555(\_:\_:\_:\_:)](vimageconvert_rgb565toargb1555%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel ARGB1555 buffer.
- [vImageConvert_RGB565toRGBA5551(\_:\_:\_:\_:)](vimageconvert_rgb565torgba5551%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel RGBA5551 buffer.

### Conversion from 32-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGBFFFtoARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgbffftoargbffff%28____________%29.md): Combines a floating-point 32-bit-per-channel, 3-channel RGB buffer and either an 32-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGBFFFtoBGRAFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgbffftobgraffff%28____________%29.md): Combines a floating-point 32-bit-per-channel, 3-channel RGB buffer and either an 32-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGBFFFtoRGBAFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgbffftorgbaffff%28____________%29.md): Combines a floating-point 32-bit-per-channel, 3-channel RGB buffer and either an 32-bit alpha buffer or constant alpha value to produce an RGBA result.

## See Also

### Adding and removing alpha channels

- [Functions that remove an alpha channel from four-channel buffers](functions-that-remove-an-alpha-channel-from-four-channel-buffers.md): Remove the alpha channel from an RGBA or ARGB buffer.

# Functions that add an alpha channel to three-channel buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Add a constant alpha value or planar alpha buffer to an RGB image.

## Topics

### Conversion from 8-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB888toARGB8888](vimageconvert_rgb888toargb8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_BGR888toBGRA8888](vimageconvert_bgr888tobgra8888.md): Combines an 8-bit-per-channel, 3-channel BGR buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB888toBGRA8888](vimageconvert_rgb888tobgra8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_BGR888toRGBA8888](vimageconvert_bgr888torgba8888.md): Combines an 8-bit-per-channel, 3-channel BGR buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.
- [vImageConvert_RGB888toRGBA8888](vimageconvert_rgb888torgba8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.

### Conversion from unsigned 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB16UToARGB8888](vimageconvert_rgb16utoargb8888%28____________%29.md): Converts an unsigned 16-bit-per-channel, 3-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer using permutation.
- [vImageConvert_RGB16UtoARGB16U](vimageconvert_rgb16utoargb16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGB16UtoBGRA16U](vimageconvert_rgb16utobgra16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB16UtoRGBA16U](vimageconvert_rgb16utorgba16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an RGBA result.

### Conversion from RGB565 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB565toARGB8888](vimageconvert_rgb565toargb8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_RGB565toBGRA8888](vimageconvert_rgb565tobgra8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel BGRA buffer.
- [vImageConvert_RGB565toRGBA8888](vimageconvert_rgb565torgba8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel RGBA buffer.
- [vImageConvert_RGB565toARGB1555](vimageconvert_rgb565toargb1555%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel ARGB1555 buffer.
- [vImageConvert_RGB565toRGBA5551](vimageconvert_rgb565torgba5551%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel RGBA5551 buffer.

### Conversion from 32-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGBFFFtoARGBFFFF](vimageconvert_rgbffftoargbffff%28____________%29.md): Combines a floating-point 32-bit-per-channel, 3-channel RGB buffer and either an 32-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGBFFFtoBGRAFFFF](vimageconvert_rgbffftobgraffff%28____________%29.md): Combines a floating-point 32-bit-per-channel, 3-channel RGB buffer and either an 32-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGBFFFtoRGBAFFFF](vimageconvert_rgbffftorgbaffff%28____________%29.md): Combines a floating-point 32-bit-per-channel, 3-channel RGB buffer and either an 32-bit alpha buffer or constant alpha value to produce an RGBA result.

## See Also

### Adding and removing alpha channels

- [Functions that remove an alpha channel from four-channel buffers](functions-that-remove-an-alpha-channel-from-four-channel-buffers.md): Remove the alpha channel from an RGBA or ARGB buffer.
