> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageunpremultiplydata_argb16u(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageunpremultiplydata_argb16u(_:_:_:))

# vImageUnpremultiplyData_ARGB16U(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 6.0+ · visionOS 1.0+ · watchOS 1.0+

Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.

## Declaration

```swift
func vImageUnpremultiplyData_ARGB16U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function divides color channels by the alpha channel using the following code:

```swift
uint16_t destColor = ( MIN(src_color, alpha) * 65535 + alpha/2) / alpha;
uint16_t destAlpha = alpha;
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Converting from premultiplied to unpremultiplied format

- [vImageUnpremultiplyData_Planar8(\_:\_:\_:\_:)](vimageunpremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_PlanarF(\_:\_:\_:\_:)](vimageunpremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB8888(\_:\_:\_:)](vimageunpremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA8888(\_:\_:\_:)](vimageunpremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16U(\_:\_:\_:)](vimageunpremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16F(\_:\_:\_:)](vimageunpremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16Q12(\_:\_:\_:)](vimageunpremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16Q12(\_:\_:\_:)](vimageunpremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGBFFFF(\_:\_:\_:)](vimageunpremultiplydata_argbffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBAFFFF(\_:\_:\_:)](vimageunpremultiplydata_rgbaffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.

# vImageUnpremultiplyData_ARGB16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 6.0+ · visionOS 1.0+ · watchOS 1.0+

Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.

## Declaration

```objectivec
vImage_Error vImageUnpremultiplyData_ARGB16U(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function divides color channels by the alpha channel using the following code:

```swift
uint16_t destColor = ( MIN(src_color, alpha) * 65535 + alpha/2) / alpha;
uint16_t destAlpha = alpha;
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Converting from premultiplied to unpremultiplied format

- [vImageUnpremultiplyData_Planar8](vimageunpremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_PlanarF](vimageunpremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB8888](vimageunpremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA8888](vimageunpremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_BGRA8888](vimageunpremultiplydata_bgra8888.md): Transforms an 8-bit-per-channel, 4-channel BGRA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16U](vimageunpremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16F](vimageunpremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16Q12](vimageunpremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16Q12](vimageunpremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGBFFFF](vimageunpremultiplydata_argbffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBAFFFF](vimageunpremultiplydata_rgbaffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_BGRAFFFF](vimageunpremultiplydata_bgraffff.md): Transforms a 32-bit-per-channel, 4-channel BGRA buffer from premultiplied alpha format to nonpremultiplied alpha format.
