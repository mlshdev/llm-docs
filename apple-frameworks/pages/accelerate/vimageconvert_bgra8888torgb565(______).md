> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_bgra8888torgb565(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_bgra8888torgb565(_:_:_:))

# vImageConvert_BGRA8888toRGB565(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.

## Declaration

```swift
func vImageConvert_BGRA8888toRGB565(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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

The function uses the following calculation to perform the conversion:

```objc
    uint32_t red   = (8bitRedChannel   * (31*2) + 255) / (255*2)
    uint32_t green = (8bitGreenChannel * 63 + 127) / 255
    uint32_t blue  = (8bitBlueChannel  * 31 + 127) / 255
    uint16_t RGB565pixel = (red << 11) | (green <<  5) | blue
```

## See Also

### Conversion from 8-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB8888toRGB888(\_:\_:\_:)](vimageconvert_argb8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_RGBA8888toRGB888(\_:\_:\_:)](vimageconvert_rgba8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_BGRA8888toRGB888(\_:\_:\_:)](vimageconvert_bgra8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_ARGB8888toRGB565(\_:\_:\_:)](vimageconvert_argb8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_argb8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_BGRA8888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_bgra8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_rgba8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565(\_:\_:\_:)](vimageconvert_rgba8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888ToRGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888torgb16u%28____________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.

# vImageConvert_BGRA8888toRGB565 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.

## Declaration

```objectivec
vImage_Error vImageConvert_BGRA8888toRGB565(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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

The function uses the following calculation to perform the conversion:

```objc
    uint32_t red   = (8bitRedChannel   * (31*2) + 255) / (255*2)
    uint32_t green = (8bitGreenChannel * 63 + 127) / 255
    uint32_t blue  = (8bitBlueChannel  * 31 + 127) / 255
    uint16_t RGB565pixel = (red << 11) | (green <<  5) | blue
```

## See Also

### Conversion from 8-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB8888toRGB888](vimageconvert_argb8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_RGBA8888toRGB888](vimageconvert_rgba8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_BGRA8888toRGB888](vimageconvert_bgra8888torgb888%28______%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer to produce an 8-bit-per-channel RGB result.
- [vImageConvert_BGRA8888toBGR888](vimageconvert_bgra8888tobgr888.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer to produce an 8-bit-per-channel BGR result.
- [vImageConvert_RGBA8888toBGR888](vimageconvert_rgba8888tobgr888.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an 8-bit-per-channel BGR result.
- [vImageConvert_ARGB8888toRGB565](vimageconvert_argb8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888toRGB565_dithered](vimageconvert_argb8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_BGRA8888toRGB565_dithered](vimageconvert_bgra8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel BGRA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565_dithered](vimageconvert_rgba8888torgb565_dithered%28__________%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer using the specified dithering algorithm to produce an RGB565 result.
- [vImageConvert_RGBA8888toRGB565](vimageconvert_rgba8888torgb565%28______%29.md): Removes the alpha channel from an 8-bit-per-channel RGBA buffer to produce an RGB565 result.
- [vImageConvert_ARGB8888ToRGB16U](vimageconvert_argb8888torgb16u%28____________%29.md): Removes the alpha channel from an 8-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.
