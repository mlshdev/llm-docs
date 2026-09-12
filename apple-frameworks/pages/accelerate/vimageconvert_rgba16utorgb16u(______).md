> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_rgba16utorgb16u(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_rgba16utorgb16u(_:_:_:))

# vImageConvert_RGBA16UtoRGB16U(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an unsigned 16-bit-per-channel RGBA buffer to produce an unsigned 16-bit-per-channel RGB result.

## Declaration

```swift
func vImageConvert_RGBA16UtoRGB16U(_ rgbaSrc: UnsafePointer<vImage_Buffer>, _ rgbDest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `rgbaSrc`: The source vImage buffer.
- `rgbDest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

This function copies the red, green, and blue source channels to the destination buffer.

## See Also

### Conversion from unsigned 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB16UtoRGB16U(\_:\_:\_:)](vimageconvert_argb16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.
- [vImageConvert_BGRA16UtoRGB16U(\_:\_:\_:)](vimageconvert_bgra16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel BGRA buffer to produce an unsigned 16-bit-per-channel RGB result.

# vImageConvert_RGBA16UtoRGB16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an unsigned 16-bit-per-channel RGBA buffer to produce an unsigned 16-bit-per-channel RGB result.

## Declaration

```objectivec
vImage_Error vImageConvert_RGBA16UtoRGB16U(const vImage_Buffer *rgbaSrc, const vImage_Buffer *rgbDest, vImage_Flags flags);
```

## Parameters

- `rgbaSrc`: The source vImage buffer.
- `rgbDest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

This function copies the red, green, and blue source channels to the destination buffer.

## See Also

### Conversion from unsigned 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB16UtoRGB16U](vimageconvert_argb16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel ARGB buffer to produce an unsigned 16-bit-per-channel RGB result.
- [vImageConvert_BGRA16UtoRGB16U](vimageconvert_bgra16utorgb16u%28______%29.md): Removes the alpha channel from an unsigned 16-bit-per-channel BGRA buffer to produce an unsigned 16-bit-per-channel RGB result.
