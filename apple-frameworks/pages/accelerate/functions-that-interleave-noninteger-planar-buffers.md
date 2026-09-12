> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-interleave-noninteger-planar-buffers](https://developer.apple.com/documentation/accelerate/functions-that-interleave-noninteger-planar-buffers)

# Functions that interleave noninteger planar buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.

## Topics

### Interleaving three fixed-point 16-bit planar buffers

- [vImageConvert_Planar16Q12toRGB888(\_:\_:\_:\_:\_:)](vimageconvert_planar16q12torgb888%28__________%29.md): Interleaves three fixed-point 16-bit planar buffers into an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_Planar16Q12toRGB16F(\_:\_:\_:\_:\_:)](vimageconvert_planar16q12torgb16f%28__________%29.md): Interleaves three fixed-point 16-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.

### Interleaving four fixed-point 16-bit planar buffers

- [vImageConvert_Planar16Q12toARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar16q12toargb8888%28____________%29.md): Interleaves four fixed-point 16-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_Planar16Q12toARGB16F(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar16q12toargb16f%28____________%29.md): Interleaves four fixed-point 16-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved buffer.

### Interleaving floating-point 32-bit planar buffers

- [vImageConvert_PlanarToChunkyF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planartochunkyf%28________________%29.md): Interleaves the specifed number of floating-point 32-bit planar buffers into a floating-point 32 -bit-per-channel interleaved buffer.

### Interleaving three floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToBGRX8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftobgrx8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGB8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoxrgb8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_PlanarFtoRGBFFF(\_:\_:\_:\_:\_:)](vimageconvert_planarftorgbfff%28__________%29.md): Interleaves three floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_PlanarFToXRGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoxrgbffff%28____________%29.md): Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.

### Interleaving four floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoargb8888%28________________%29.md): Interleaves four 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_PlanarFtoARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoargbffff%28____________%29.md): Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel ARGB interleaved buffer.
- [vImageConvert_PlanarFToBGRXFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftobgrxffff%28____________%29.md): Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel BGRXARGB interleaved buffer.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave integer planar buffers](functions-that-interleave-integer-planar-buffers.md): Combine discrete integer planar buffers into an interleaved buffer.
- [Functions that deinterleave integer interleaved buffers](functions-that-deinterleave-integer-interleaved-buffers.md): Separate integer interleaved buffers into discrete planar buffers.
- [Functions that deinterleave noninteger interleaved buffers](functions-that-deinterleave-noninteger-interleaved-buffers.md): Separate fixed- and floating-point interleaved buffers into discrete planar buffers.

# Functions that interleave noninteger planar buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Combine discrete fixed- and floating-point planar buffers into an interleaved buffer.

## Topics

### Interleaving three fixed-point 16-bit planar buffers

- [vImageConvert_Planar16Q12toRGB888](vimageconvert_planar16q12torgb888%28__________%29.md): Interleaves three fixed-point 16-bit planar buffers into an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_Planar16Q12toRGB16F](vimageconvert_planar16q12torgb16f%28__________%29.md): Interleaves three fixed-point 16-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.

### Interleaving four fixed-point 16-bit planar buffers

- [vImageConvert_Planar16Q12toARGB8888](vimageconvert_planar16q12toargb8888%28____________%29.md): Interleaves four fixed-point 16-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_Planar16Q12toARGB16F](vimageconvert_planar16q12toargb16f%28____________%29.md): Interleaves four fixed-point 16-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved buffer.

### Interleaving floating-point 32-bit planar buffers

- [vImageConvert_PlanarToChunkyF](vimageconvert_planartochunkyf%28________________%29.md): Interleaves the specifed number of floating-point 32-bit planar buffers into a floating-point 32 -bit-per-channel interleaved buffer.

### Interleaving three floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToBGRX8888](vimageconvert_planarftobgrx8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToRGBX8888](vimageconvert_planarftorgbx8888.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGB8888](vimageconvert_planarftoxrgb8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_PlanarFtoRGBFFF](vimageconvert_planarftorgbfff%28__________%29.md): Interleaves three floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_PlanarFToRGBXFFFF](vimageconvert_planarftorgbxffff.md): Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGBFFFF](vimageconvert_planarftoxrgbffff%28____________%29.md): Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.

### Interleaving four floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToARGB8888](vimageconvert_planarftoargb8888%28________________%29.md): Interleaves four 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_PlanarFtoARGBFFFF](vimageconvert_planarftoargbffff%28____________%29.md): Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel ARGB interleaved buffer.
- [vImageConvert_PlanarFToBGRXFFFF](vimageconvert_planarftobgrxffff%28____________%29.md): Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel BGRXARGB interleaved buffer.

## See Also

### Converting between interleaved and planar formats

- [Functions that interleave integer planar buffers](functions-that-interleave-integer-planar-buffers.md): Combine discrete integer planar buffers into an interleaved buffer.
- [Functions that deinterleave integer interleaved buffers](functions-that-deinterleave-integer-interleaved-buffers.md): Separate integer interleaved buffers into discrete planar buffers.
- [Functions that deinterleave noninteger interleaved buffers](functions-that-deinterleave-noninteger-interleaved-buffers.md): Separate fixed- and floating-point interleaved buffers into discrete planar buffers.
