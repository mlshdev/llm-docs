> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_16utof(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_16utof(_:_:_:_:_:))

# vImageConvert_16UToF(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 16-bit planar buffer to a floating-point 32-bit planar buffer.

## Declaration

```swift
func vImageConvert_16UToF(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ offset: Float, _ scale: Float, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `offset`: The offset value that the conversion adds to each pixel.
- `scale`: The scale value that the conversion multiplies each pixel by.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to perform the conversion:

```objc
float result = (float) srcPixel * scale + offset
```

## See Also

### Converting from unsigned 16-bit-per-channel buffers

- [vImageConvert_16Uto16F(\_:\_:\_:)](vimageconvert_16uto16f%28______%29.md): Converts an unsigned 16-bit planar buffer to a floating-point 16-bit planar buffer.
- [vImageConvert_16Uto16Q12(\_:\_:\_:)](vimageconvert_16uto16q12%28______%29.md): Converts an unsigned 16-bit planar buffer to a fixed-point 16-bit planar buffer.

# vImageConvert_16UToF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 16-bit planar buffer to a floating-point 32-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_16UToF(const vImage_Buffer *src, const vImage_Buffer *dest, float offset, float scale, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `offset`: The offset value that the conversion adds to each pixel.
- `scale`: The scale value that the conversion multiplies each pixel by.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to perform the conversion:

```objc
float result = (float) srcPixel * scale + offset
```

## See Also

### Converting from unsigned 16-bit-per-channel buffers

- [vImageConvert_16Uto16F](vimageconvert_16uto16f%28______%29.md): Converts an unsigned 16-bit planar buffer to a floating-point 16-bit planar buffer.
- [vImageConvert_16Uto16Q12](vimageconvert_16uto16q12%28______%29.md): Converts an unsigned 16-bit planar buffer to a fixed-point 16-bit planar buffer.
