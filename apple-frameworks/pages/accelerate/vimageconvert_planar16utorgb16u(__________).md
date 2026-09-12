> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_planar16utorgb16u(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_planar16utorgb16u(_:_:_:_:_:))

# vImageConvert_Planar16UtoRGB16U(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three unsigned 16-bit planar buffers into an unsigned 16-bit-per-channel, 3-channel interleaved buffer.

## Declaration

```swift
func vImageConvert_Planar16UtoRGB16U(_ rSrc: UnsafePointer<vImage_Buffer>, _ gSrc: UnsafePointer<vImage_Buffer>, _ bSrc: UnsafePointer<vImage_Buffer>, _ rgbDest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `rSrc`: The source vImage buffer that contains the red channel.
- `gSrc`: The source vImage buffer that contains the green channel.
- `bSrc`: The source vImage buffer that contains the blue channel.
- `rgbDest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

# vImageConvert_Planar16UtoRGB16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three unsigned 16-bit planar buffers into an unsigned 16-bit-per-channel, 3-channel interleaved buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_Planar16UtoRGB16U(const vImage_Buffer *rSrc, const vImage_Buffer *gSrc, const vImage_Buffer *bSrc, const vImage_Buffer *rgbDest, vImage_Flags flags);
```

## Parameters

- `rSrc`: The source vImage buffer that contains the red channel.
- `gSrc`: The source vImage buffer that contains the green channel.
- `bSrc`: The source vImage buffer that contains the blue channel.
- `rgbDest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.
