> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_rgba5551torgb565(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_rgba5551torgb565(_:_:_:))

# vImageConvert_RGBA5551toRGB565(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an RGBA5551 buffer to produce an RGB565 result.

## Declaration

```swift
func vImageConvert_RGBA5551toRGB565(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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

This function copies the red, green, and blue source channels to the destination buffer.

## See Also

### Conversion from ARGB1555 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB1555toRGB565(\_:\_:\_:)](vimageconvert_argb1555torgb565%28______%29.md): Removes the alpha channel from an ARGB1555 buffer to produce an RGB565 result.

# vImageConvert_RGBA5551toRGB565 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the alpha channel from an RGBA5551 buffer to produce an RGB565 result.

## Declaration

```objectivec
vImage_Error vImageConvert_RGBA5551toRGB565(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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

This function copies the red, green, and blue source channels to the destination buffer.

## See Also

### Conversion from ARGB1555 16-bit-per-channel, 4-channel interleaved buffers

- [vImageConvert_ARGB1555toRGB565](vimageconvert_argb1555torgb565%28______%29.md): Removes the alpha channel from an ARGB1555 buffer to produce an RGB565 result.
