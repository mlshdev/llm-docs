> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-interleave-integer-planar-buffers](https://developer.apple.com/documentation/accelerate/functions-that-interleave-integer-planar-buffers)

# Functions that interleave integer planar buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Combine discrete integer planar buffers into an interleaved buffer.

## Topics

### Interleaving unsigned 8-bit planar buffers

- [vImageConvert_PlanarToChunky8(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planartochunky8%28________________%29.md): Interleaves the specifed number of 8-bit planar buffers into an 8-bit-per-channel interleaved buffer.

### Interleaving three unsigned 8-bit planar buffers

- [vImageConvert_Planar8toRGB565(\_:\_:\_:\_:\_:)](vimageconvert_planar8torgb565%28__________%29.md): Interleaves three 8-bit planar buffers into an RGB565 3-channel interleaved buffer.
- [vImageConvert_Planar8toRGB888(\_:\_:\_:\_:\_:)](vimageconvert_planar8torgb888%28__________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_Planar8ToXRGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toxrgb8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRX8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8tobgrx8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToXRGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toxrgbffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRXFFFF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8tobgrxffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.

### Interleaving four unsigned 8-bit planar buffers

- [vImageConvert_Planar8toARGB1555(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toargb1555%28____________%29.md): Interleaves four 8-bit planar buffers into an ARGB1555 4-channel interleaved buffer.
- [vImageConvert_Planar8toARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toargb8888%28____________%29.md): Interleaves four 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_Planar8ToARGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toargbffff%28________________%29.md): Interleaves four 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved ARGB buffer.

### Interleaving three unsigned 16-bit planar buffers

- [vImageConvert_Planar16UtoRGB16U(\_:\_:\_:\_:\_:)](vimageconvert_planar16utorgb16u%28__________%29.md): Interleaves three unsigned 16-bit planar buffers into an unsigned 16-bit-per-channel, 3-channel interleaved buffer.

### Interleaving four unsigned 16-bit planar buffers

- [vImageConvert_Planar16UtoARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar16utoargb16u%28____________%29.md): Interleaves four unsigned 16-bit planar buffers into an unsigned 16-bit-per-channel, 4-channel interleaved ARGB buffer.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave noninteger planar buffers](functions-that-interleave-noninteger-planar-buffers.md): Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.
- [Functions that deinterleave integer interleaved buffers](functions-that-deinterleave-integer-interleaved-buffers.md): Separate integer interleaved buffers into discrete planar buffers.
- [Functions that deinterleave noninteger interleaved buffers](functions-that-deinterleave-noninteger-interleaved-buffers.md): Separate fixed- and floating-point interleaved buffers into discrete planar buffers.

# Functions that interleave integer planar buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Combine discrete integer planar buffers into an interleaved buffer.

## Topics

### Interleaving unsigned 8-bit planar buffers

- [vImageConvert_PlanarToChunky8](vimageconvert_planartochunky8%28________________%29.md): Interleaves the specifed number of 8-bit planar buffers into an 8-bit-per-channel interleaved buffer.

### Interleaving three unsigned 8-bit planar buffers

- [vImageConvert_Planar8toRGB565](vimageconvert_planar8torgb565%28__________%29.md): Interleaves three 8-bit planar buffers into an RGB565 3-channel interleaved buffer.
- [vImageConvert_Planar8toRGB888](vimageconvert_planar8torgb888%28__________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_Planar8ToXRGB8888](vimageconvert_planar8toxrgb8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToRGBX8888](vimageconvert_planar8torgbx8888.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRX8888](vimageconvert_planar8tobgrx8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToXRGBFFFF](vimageconvert_planar8toxrgbffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRXFFFF](vimageconvert_planar8tobgrxffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToRGBXFFFF](vimageconvert_planar8torgbxffff.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.

### Interleaving four unsigned 8-bit planar buffers

- [vImageConvert_Planar8toARGB1555](vimageconvert_planar8toargb1555%28____________%29.md): Interleaves four 8-bit planar buffers into an ARGB1555 4-channel interleaved buffer.
- [vImageConvert_Planar8toARGB8888](vimageconvert_planar8toargb8888%28____________%29.md): Interleaves four 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_Planar8ToARGBFFFF](vimageconvert_planar8toargbffff%28________________%29.md): Interleaves four 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved ARGB buffer.

### Interleaving three unsigned 16-bit planar buffers

- [vImageConvert_Planar16UtoRGB16U](vimageconvert_planar16utorgb16u%28__________%29.md): Interleaves three unsigned 16-bit planar buffers into an unsigned 16-bit-per-channel, 3-channel interleaved buffer.

### Interleaving four unsigned 16-bit planar buffers

- [vImageConvert_Planar16UtoARGB16U](vimageconvert_planar16utoargb16u%28____________%29.md): Interleaves four unsigned 16-bit planar buffers into an unsigned 16-bit-per-channel, 4-channel interleaved ARGB buffer.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave noninteger planar buffers](functions-that-interleave-noninteger-planar-buffers.md): Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.
- [Functions that deinterleave integer interleaved buffers](functions-that-deinterleave-integer-interleaved-buffers.md): Separate integer interleaved buffers into discrete planar buffers.
- [Functions that deinterleave noninteger interleaved buffers](functions-that-deinterleave-noninteger-interleaved-buffers.md): Separate fixed- and floating-point interleaved buffers into discrete planar buffers.
