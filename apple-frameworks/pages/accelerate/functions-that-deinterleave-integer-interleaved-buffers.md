> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-deinterleave-integer-interleaved-buffers](https://developer.apple.com/documentation/accelerate/functions-that-deinterleave-integer-interleaved-buffers)

# Functions that deinterleave integer interleaved buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Separate integer interleaved buffers into discrete planar buffers.

## Topics

### Deinterleaving unsigned 8-bit interleaved buffers

- [vImageConvert_ChunkyToPlanar8(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_chunkytoplanar8%28________________%29.md): Deinterleaves an 8-bit-per-channel interleaved buffer with an arbitrary number of channels into the corresponding number of 8-bit planar buffers.

### Deinterleaving unsigned 8-bit, three-channel interleaved buffers

- [vImageConvert_RGB888toPlanar8(\_:\_:\_:\_:\_:)](vimageconvert_rgb888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 3-channel interleaved buffer into three 8-bit planar buffers.
- [vImageConvert_RGB888toPlanar16Q12(\_:\_:\_:\_:\_:)](vimageconvert_rgb888toplanar16q12%28__________%29.md): Deinterleaves an 8-bit-per-channel, 3-channel interleaved buffer into three fixed-point 16-bit planar buffers.

### Deinterleaving unsigned 8-bit, four-channel interleaved buffers

- [vImageConvert_BGRX8888ToPlanar8(\_:\_:\_:\_:\_:)](vimageconvert_bgrx8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the last channel.
- [vImageConvert_XRGB8888ToPlanar8(\_:\_:\_:\_:\_:)](vimageconvert_xrgb8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the first channel.
- [vImageConvert_ARGB8888toPlanar8(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888toplanar8%28____________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four 8-bit planar buffers.
- [vImageConvert_ARGB8888toPlanar16Q12(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888toplanar16q12%28____________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four fixed-point 16-bit planar buffers.
- [vImageConvert_ARGB8888toPlanarF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888toplanarf%28________________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four floating-point 32-bit planar buffers.

### Deinterleaving unsigned 16-bit three-channel interleaved buffers

- [vImageConvert_RGB16UtoPlanar16U(\_:\_:\_:\_:\_:)](vimageconvert_rgb16utoplanar16u%28__________%29.md): Deinterleaves an unsigned 16-bit-per-channel, 3-channel interleaved buffer into three unsigned 16-bit planar buffers.

### Deinterleaving unsigned 16-bit four-channel interleaved buffers

- [vImageConvert_ARGB16UtoPlanar16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb16utoplanar16u%28____________%29.md): Deinterleaves an unsigned 16-bit-per-channel, 4-channel interleaved buffer into four unsigned 16-bit planar buffers.

### Deinterleaving RGB565 16-bit three-channel interleaved buffers

- [vImageConvert_RGB565toPlanar8(\_:\_:\_:\_:\_:)](vimageconvert_rgb565toplanar8%28__________%29.md): Deinterleaves an RGB565 3-channel interleaved buffer into three 8-bit planar buffers.

### Deinterleaving ARGB1555 16-bit four-channel interleaved buffers

- [vImageConvert_ARGB1555toPlanar8(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb1555toplanar8%28____________%29.md): Deinterleaves an ARGB1555 4-channel interleaved buffer into four 8-bit planar buffers.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave integer planar buffers](functions-that-interleave-integer-planar-buffers.md): Combine discrete integer planar buffers into an interleaved buffer.
- [Functions that interleave noninteger planar buffers](functions-that-interleave-noninteger-planar-buffers.md): Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.
- [Functions that deinterleave noninteger interleaved buffers](functions-that-deinterleave-noninteger-interleaved-buffers.md): Separate fixed- and floating-point interleaved buffers into discrete planar buffers.

# Functions that deinterleave integer interleaved buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Separate integer interleaved buffers into discrete planar buffers.

## Topics

### Deinterleaving unsigned 8-bit interleaved buffers

- [vImageConvert_ChunkyToPlanar8](vimageconvert_chunkytoplanar8%28________________%29.md): Deinterleaves an 8-bit-per-channel interleaved buffer with an arbitrary number of channels into the corresponding number of 8-bit planar buffers.

### Deinterleaving unsigned 8-bit, three-channel interleaved buffers

- [vImageConvert_RGB888toPlanar8](vimageconvert_rgb888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 3-channel interleaved buffer into three 8-bit planar buffers.
- [vImageConvert_RGB888toPlanar16Q12](vimageconvert_rgb888toplanar16q12%28__________%29.md): Deinterleaves an 8-bit-per-channel, 3-channel interleaved buffer into three fixed-point 16-bit planar buffers.

### Deinterleaving unsigned 8-bit, four-channel interleaved buffers

- [vImageConvert_BGRX8888ToPlanar8](vimageconvert_bgrx8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the last channel.
- [vImageConvert_XRGB8888ToPlanar8](vimageconvert_xrgb8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the first channel.
- [vImageConvert_ARGB8888toPlanar8](vimageconvert_argb8888toplanar8%28____________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four 8-bit planar buffers.
- [vImageConvert_ARGB8888toPlanar16Q12](vimageconvert_argb8888toplanar16q12%28____________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four fixed-point 16-bit planar buffers.
- [vImageConvert_ARGB8888toPlanarF](vimageconvert_argb8888toplanarf%28________________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four floating-point 32-bit planar buffers.

### Deinterleaving unsigned 16-bit three-channel interleaved buffers

- [vImageConvert_RGB16UtoPlanar16U](vimageconvert_rgb16utoplanar16u%28__________%29.md): Deinterleaves an unsigned 16-bit-per-channel, 3-channel interleaved buffer into three unsigned 16-bit planar buffers.

### Deinterleaving unsigned 16-bit four-channel interleaved buffers

- [vImageConvert_ARGB16UtoPlanar16U](vimageconvert_argb16utoplanar16u%28____________%29.md): Deinterleaves an unsigned 16-bit-per-channel, 4-channel interleaved buffer into four unsigned 16-bit planar buffers.

### Deinterleaving RGB565 16-bit three-channel interleaved buffers

- [vImageConvert_RGB565toPlanar8](vimageconvert_rgb565toplanar8%28__________%29.md): Deinterleaves an RGB565 3-channel interleaved buffer into three 8-bit planar buffers.

### Deinterleaving ARGB1555 16-bit four-channel interleaved buffers

- [vImageConvert_ARGB1555toPlanar8](vimageconvert_argb1555toplanar8%28____________%29.md): Deinterleaves an ARGB1555 4-channel interleaved buffer into four 8-bit planar buffers.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave integer planar buffers](functions-that-interleave-integer-planar-buffers.md): Combine discrete integer planar buffers into an interleaved buffer.
- [Functions that interleave noninteger planar buffers](functions-that-interleave-noninteger-planar-buffers.md): Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.
- [Functions that deinterleave noninteger interleaved buffers](functions-that-deinterleave-noninteger-interleaved-buffers.md): Separate fixed- and floating-point interleaved buffers into discrete planar buffers.
