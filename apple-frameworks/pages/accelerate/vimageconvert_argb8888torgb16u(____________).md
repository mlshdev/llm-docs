> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_argb8888torgb16u(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_argb8888torgb16u(_:_:_:_:_:_:))

# vImageConvert_ARGB8888ToRGB16U(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.

## Declaration

```swift
func vImageConvert_ARGB8888ToRGB16U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ permuteMap: UnsafePointer<UInt8>, _ copyMask: UInt8, _ backgroundColor: UnsafePointer<Pixel_16U>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `copyMask`: A bitmask that specifies the channel from the background color that the function copies to the destination channel at the corresponding index. The `1000` bit corresponds to the alpha channel, the `0100` bit corresponds to the red channel, the `0010` corresponds to the green channel, and the `0001` bit corresponds to the blue channel.
- `backgroundColor`: A 16-bit-per-channel, 4-channel pixel value that replaces the destination pixels based on the copy mask.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function doesn’t work in place.

## See Also

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

# vImageConvert_ARGB8888ToRGB16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.

## Declaration

```objectivec
vImage_Error vImageConvert_ARGB8888ToRGB16U(const vImage_Buffer *src, const vImage_Buffer *dest, const uint8_t permuteMap[3], uint8_t copyMask, const Pixel_16U backgroundColor[3], vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `copyMask`: A bitmask that specifies the channel from the background color that the function copies to the destination channel at the corresponding index. The `1000` bit corresponds to the alpha channel, the `0100` bit corresponds to the red channel, the `0010` corresponds to the green channel, and the `0001` bit corresponds to the blue channel.
- `backgroundColor`: A 16-bit-per-channel, 4-channel pixel value that replaces the destination pixels based on the copy mask.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function doesn’t work in place.

## See Also

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
