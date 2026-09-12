> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepremultiplydata_bgra8888](https://developer.apple.com/documentation/accelerate/vimagepremultiplydata_bgra8888)

# vImagePremultiplyData_BGRA8888

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Transforms an 8-bit-per-channel, 4-channel BGRA buffer from nonpremultiplied alpha format to premultiplied alpha format.

## Declaration

```objectivec
#define vImagePremultiplyData_BGRA8888(_src, _dest, _flags)
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

This function multiplies color channels by the alpha channel using the following code:

```swift
uint8_t destColor = (src * alpha + 127) / 255;
uint8_t destAlpha = alpha;
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Converting from unpremultiplied to premultiplied format

- [vImagePremultiplyData_Planar8](vimagepremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_PlanarF](vimagepremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB8888](vimagepremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA8888](vimagepremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16U](vimagepremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16U](vimagepremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16F](vimagepremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16Q12](vimagepremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16Q12](vimagepremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGBFFFF](vimagepremultiplydata_argbffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBAFFFF](vimagepremultiplydata_rgbaffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_BGRAFFFF](vimagepremultiplydata_bgraffff.md): Transforms a floating-point 32-bit-per-channel, 4-channel BGRA buffer from nonpremultiplied alpha format to premultiplied alpha format.
