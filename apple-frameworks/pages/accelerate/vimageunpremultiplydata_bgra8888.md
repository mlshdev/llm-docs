> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageunpremultiplydata_bgra8888](https://developer.apple.com/documentation/accelerate/vimageunpremultiplydata_bgra8888)

# vImageUnpremultiplyData_BGRA8888

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Transforms an 8-bit-per-channel, 4-channel BGRA buffer from premultiplied alpha format to nonpremultiplied alpha format.

## Declaration

```objectivec
#define vImageUnpremultiplyData_BGRA8888(_src, _dest, _flags)
```

## Parameters

- `_src`: The source vImage buffer.
- `_dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `_flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function divides color channels by the alpha channel using the following code:

```swift
uint8_t destColor = ( MIN(src_color, alpha) * 255 + alpha/2) / alpha;
uint8_t destAlpha = alpha;
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Converting from premultiplied to unpremultiplied format

- [vImageUnpremultiplyData_Planar8](vimageunpremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_PlanarF](vimageunpremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB8888](vimageunpremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA8888](vimageunpremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16U](vimageunpremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16U](vimageunpremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16F](vimageunpremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16Q12](vimageunpremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16Q12](vimageunpremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGBFFFF](vimageunpremultiplydata_argbffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBAFFFF](vimageunpremultiplydata_rgbaffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_BGRAFFFF](vimageunpremultiplydata_bgraffff.md): Transforms a 32-bit-per-channel, 4-channel BGRA buffer from premultiplied alpha format to nonpremultiplied alpha format.
