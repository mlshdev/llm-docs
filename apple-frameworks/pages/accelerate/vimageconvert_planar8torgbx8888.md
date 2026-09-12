> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_planar8torgbx8888](https://developer.apple.com/documentation/accelerate/vimageconvert_planar8torgbx8888)

# vImageConvert_Planar8ToRGBX8888

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.

## Declaration

```objectivec
#define vImageConvert_Planar8ToRGBX8888(_red, _green, _blue, _alpha, _dest, _flags)
```

## Parameters

- `_red`: The source vImage buffer that contains the red channel.
- `_green`: The source vImage buffer that contains the green channel.
- `_blue`: The source vImage buffer that contains the blue channel.
- `_alpha`: The constant destination alpha value.
- `_dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `_flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Interleaving three unsigned 8-bit planar buffers

- [vImageConvert_Planar8toRGB565](vimageconvert_planar8torgb565%28__________%29.md): Interleaves three 8-bit planar buffers into an RGB565 3-channel interleaved buffer.
- [vImageConvert_Planar8toRGB888](vimageconvert_planar8torgb888%28__________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_Planar8ToXRGB8888](vimageconvert_planar8toxrgb8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRX8888](vimageconvert_planar8tobgrx8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToXRGBFFFF](vimageconvert_planar8toxrgbffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRXFFFF](vimageconvert_planar8tobgrxffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToRGBXFFFF](vimageconvert_planar8torgbxffff.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
