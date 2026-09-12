> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_rgb16utoargb8888(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_rgb16utoargb8888(_:_:_:_:_:_:))

# vImageConvert_RGB16UToARGB8888(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 16-bit-per-channel, 3-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer using permutation.

## Declaration

```swift
func vImageConvert_RGB16UToARGB8888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ permuteMap: UnsafePointer<UInt8>, _ copyMask: UInt8, _ backgroundColor: UnsafePointer<UInt8>, _ flags: vImage_Flags) -> vImage_Error
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

### Conversion from unsigned 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB16UtoARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb16utoargb16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGB16UtoBGRA16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb16utobgra16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB16UtoRGBA16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb16utorgba16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an RGBA result.

# vImageConvert_RGB16UToARGB8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 16-bit-per-channel, 3-channel interleaved buffer to an 8-bit-per-channel, 4-channel interleaved buffer using permutation.

## Declaration

```objectivec
vImage_Error vImageConvert_RGB16UToARGB8888(const vImage_Buffer *src, const vImage_Buffer *dest, const uint8_t permuteMap[4], uint8_t copyMask, const Pixel_8888 backgroundColor, vImage_Flags flags);
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

### Conversion from unsigned 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB16UtoARGB16U](vimageconvert_rgb16utoargb16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGB16UtoBGRA16U](vimageconvert_rgb16utobgra16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB16UtoRGBA16U](vimageconvert_rgb16utorgba16u%28____________%29.md): Combines an unsigned 16-bit-per-channel, 3-channel RGB buffer and either an unsigned 16-bit alpha buffer or constant alpha value to produce an RGBA result.
