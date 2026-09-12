> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_8to16q12(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_8to16q12(_:_:_:))

# vImageConvert_8to16Q12(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an 8-bit planar buffer to a fixed-point 16-bit planar buffer.

## Declaration

```swift
func vImageConvert_8to16Q12(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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
uint16_t dest = ((src << 12) + 127)/255;
```

The conversion maps source pixels with a value of `0` to `0`, and maps source pixels with a value of `255` to `4096`.

## See Also

### Converting from 8-bit buffers

- [vImageConvert_Planar8toPlanar16F(\_:\_:\_:)](vimageconvert_planar8toplanar16f%28______%29.md): Converts an 8-bit planar buffer to a floating-point 16-bit planar buffer.
- [vImageConvert_Planar8toPlanarF(\_:\_:\_:\_:\_:)](vimageconvert_planar8toplanarf%28__________%29.md): Converts an 8-bit planar buffer to a floating-point 32-bit planar buffer.

# vImageConvert_8to16Q12 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an 8-bit planar buffer to a fixed-point 16-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_8to16Q12(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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
uint16_t dest = ((src << 12) + 127)/255;
```

The conversion maps source pixels with a value of `0` to `0`, and maps source pixels with a value of `255` to `4096`.

## See Also

### Converting from 8-bit buffers

- [vImageConvert_Planar8toPlanar16F](vimageconvert_planar8toplanar16f%28______%29.md): Converts an 8-bit planar buffer to a floating-point 16-bit planar buffer.
- [vImageConvert_Planar8toPlanarF](vimageconvert_planar8toplanarf%28__________%29.md): Converts an 8-bit planar buffer to a floating-point 32-bit planar buffer.
