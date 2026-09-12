> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-deinterleave-noninteger-interleaved-buffers](https://developer.apple.com/documentation/accelerate/functions-that-deinterleave-noninteger-interleaved-buffers)

# Functions that deinterleave noninteger interleaved buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Separate fixed- and floating-point interleaved buffers into discrete planar buffers.

## Topics

### Deinterleaving 32-bit interleaved buffers

- [vImageConvert_ChunkyToPlanarF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_chunkytoplanarf%28________________%29.md): Deinterleaves a floating-point 32-bit-per-channel interleaved buffer with an arbitrary number of channels into the corresponding number of 32-bit planar buffers.

### Deinterleaving 32-bit three-channel interleaved buffers

- [vImageConvert_RGBFFFtoPlanarF(\_:\_:\_:\_:\_:)](vimageconvert_rgbffftoplanarf%28__________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 3-channel interleaved buffer into three floating-point 32-bit planar buffers.

### Deinterleaving 32-bit four-channel interleaved buffers

- [vImageConvert_ARGBFFFFtoPlanar8(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argbfffftoplanar8%28________________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into four 8-bit planar buffers.
- [vImageConvert_BGRXFFFFToPlanarF(\_:\_:\_:\_:\_:)](vimageconvert_bgrxfffftoplanarf%28__________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into three floating-point 32-bit planar buffers and discards the last channel.
- [vImageConvert_XRGBFFFFToPlanarF(\_:\_:\_:\_:\_:)](vimageconvert_xrgbfffftoplanarf%28__________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into three floating-point 32-bit planar buffers and discards the first channel.
- [vImageConvert_ARGBFFFFtoPlanarF(\_:\_:\_:\_:\_:\_:)](vimageconvert_argbfffftoplanarf%28____________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into four floating-point 38-bit planar buffers.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave integer planar buffers](functions-that-interleave-integer-planar-buffers.md): Combine discrete integer planar buffers into an interleaved buffer.
- [Functions that interleave noninteger planar buffers](functions-that-interleave-noninteger-planar-buffers.md): Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.
- [Functions that deinterleave integer interleaved buffers](functions-that-deinterleave-integer-interleaved-buffers.md): Separate integer interleaved buffers into discrete planar buffers.

# Functions that deinterleave noninteger interleaved buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Separate fixed- and floating-point interleaved buffers into discrete planar buffers.

## Topics

### Deinterleaving 32-bit interleaved buffers

- [vImageConvert_ChunkyToPlanarF](vimageconvert_chunkytoplanarf%28________________%29.md): Deinterleaves a floating-point 32-bit-per-channel interleaved buffer with an arbitrary number of channels into the corresponding number of 32-bit planar buffers.

### Deinterleaving 32-bit three-channel interleaved buffers

- [vImageConvert_RGBFFFtoPlanarF](vimageconvert_rgbffftoplanarf%28__________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 3-channel interleaved buffer into three floating-point 32-bit planar buffers.

### Deinterleaving 32-bit four-channel interleaved buffers

- [vImageConvert_ARGBFFFFtoPlanar8](vimageconvert_argbfffftoplanar8%28________________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into four 8-bit planar buffers.
- [vImageConvert_BGRXFFFFToPlanarF](vimageconvert_bgrxfffftoplanarf%28__________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into three floating-point 32-bit planar buffers and discards the last channel.
- [vImageConvert_XRGBFFFFToPlanarF](vimageconvert_xrgbfffftoplanarf%28__________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into three floating-point 32-bit planar buffers and discards the first channel.
- [vImageConvert_ARGBFFFFtoPlanarF](vimageconvert_argbfffftoplanarf%28____________%29.md): Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into four floating-point 38-bit planar buffers.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave integer planar buffers](functions-that-interleave-integer-planar-buffers.md): Combine discrete integer planar buffers into an interleaved buffer.
- [Functions that interleave noninteger planar buffers](functions-that-interleave-noninteger-planar-buffers.md): Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.
- [Functions that deinterleave integer interleaved buffers](functions-that-deinterleave-integer-interleaved-buffers.md): Separate integer interleaved buffers into discrete planar buffers.
