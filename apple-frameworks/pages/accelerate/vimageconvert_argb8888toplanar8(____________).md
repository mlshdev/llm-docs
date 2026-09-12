> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_argb8888toplanar8(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_argb8888toplanar8(_:_:_:_:_:_:))

# vImageConvert_ARGB8888toPlanar8(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four 8-bit planar buffers.

## Declaration

```swift
func vImageConvert_ARGB8888toPlanar8(_ srcARGB: UnsafePointer<vImage_Buffer>, _ destA: UnsafePointer<vImage_Buffer>, _ destR: UnsafePointer<vImage_Buffer>, _ destG: UnsafePointer<vImage_Buffer>, _ destB: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcARGB`: The source vImage buffer.
- `destA`: A pointer to the alpha destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the alpha destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `destR`: A pointer to the red destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the red destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `destG`: A pointer to the green destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the green destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `destB`: A pointer to the blue destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the blue destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Deinterleaving unsigned 8-bit, four-channel interleaved buffers

- [vImageConvert_BGRX8888ToPlanar8(\_:\_:\_:\_:\_:)](vimageconvert_bgrx8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the last channel.
- [vImageConvert_XRGB8888ToPlanar8(\_:\_:\_:\_:\_:)](vimageconvert_xrgb8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the first channel.
- [vImageConvert_ARGB8888toPlanar16Q12(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888toplanar16q12%28____________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four fixed-point 16-bit planar buffers.
- [vImageConvert_ARGB8888toPlanarF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888toplanarf%28________________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four floating-point 32-bit planar buffers.

# vImageConvert_ARGB8888toPlanar8 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four 8-bit planar buffers.

## Declaration

```objectivec
vImage_Error vImageConvert_ARGB8888toPlanar8(const vImage_Buffer *srcARGB, const vImage_Buffer *destA, const vImage_Buffer *destR, const vImage_Buffer *destG, const vImage_Buffer *destB, vImage_Flags flags);
```

## Parameters

- `srcARGB`: The source vImage buffer.
- `destA`: A pointer to the alpha destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the alpha destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `destR`: A pointer to the red destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the red destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `destG`: A pointer to the green destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the green destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `destB`: A pointer to the blue destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the blue destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Deinterleaving unsigned 8-bit, four-channel interleaved buffers

- [vImageConvert_BGRX8888ToPlanar8](vimageconvert_bgrx8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the last channel.
- [vImageConvert_XRGB8888ToPlanar8](vimageconvert_xrgb8888toplanar8%28__________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into three 8-bit planar buffers and discards the first channel.
- [vImageConvert_ARGB8888toPlanar16Q12](vimageconvert_argb8888toplanar16q12%28____________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four fixed-point 16-bit planar buffers.
- [vImageConvert_ARGB8888toPlanarF](vimageconvert_argb8888toplanarf%28________________%29.md): Deinterleaves an 8-bit-per-channel, 4-channel interleaved buffer into four floating-point 32-bit planar buffers.
