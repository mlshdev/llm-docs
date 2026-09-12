> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_16fto16u(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_16fto16u(_:_:_:))

# vImageConvert_16Fto16U(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a floating-point 16-bit planar buffer to an unsigned 16-bit planar buffer.

## Declaration

```swift
func vImageConvert_16Fto16U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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

The conversion maps source pixels with a value of `0.0` to `0`, and `1.0` to [max](https://developer.apple.com/documentation/swift/uint16/max).

## See Also

### Converting from floating-point 16-bit-per-channel buffers

- [vImageConvert_Planar16FtoPlanar8(\_:\_:\_:)](vimageconvert_planar16ftoplanar8%28______%29.md): Converts a floaing-point 16-bit planar buffer to an 8-bit planar buffer.

# vImageConvert_16Fto16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a floating-point 16-bit planar buffer to an unsigned 16-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_16Fto16U(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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

The conversion maps source pixels with a value of `0.0` to `0`, and `1.0` to [max](https://developer.apple.com/documentation/swift/uint16/max).

## See Also

### Converting from floating-point 16-bit-per-channel buffers

- [vImageConvert_Planar16FtoPlanar8](vimageconvert_planar16ftoplanar8%28______%29.md): Converts a floaing-point 16-bit planar buffer to an 8-bit planar buffer.
