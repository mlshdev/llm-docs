> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_16uto12u(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_16uto12u(_:_:_:))

# vImageConvert_16UTo12U(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 16-bit planar buffer to an unsigned 12-bit planar buffer.

## Declaration

```swift
func vImageConvert_16UTo12U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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

```c
 uint16_t *srcRow = srcData;
 uint8_t *destRow = destData;
 
 // Two 16-bit in 4-bytes.
 t0 = srcRow[0];
 t1 = srcRow[1];
 srcRow += 2;
 
 t0 = (t0 * 4095 + 32767 + (t0 >> 4)) >> 16;
 t1 = (t1 * 4095 + 32767 + (t1 >> 4)) >> 16;
 
 t0 <<= 12;
 t0 |= t1;
 
 // Two 12-bit in 3-bytes.
 destRow[0] = t0 >> 16;
 destRow[1] = t0 >> 8;
 destRow[2] = t0;
 destRow += 3;
```

## See Also

### Converting from unsigned 16-bit-per-channel buffers

- [vImageConvert_16UToPlanar8(\_:\_:\_:)](vimageconvert_16utoplanar8%28______%29.md): Converts an unsigned 16-bit planar buffer to an 8-bit planar buffer.
- [vImageConvert_Planar16UtoPlanar8_dithered(\_:\_:\_:\_:)](vimageconvert_planar16utoplanar8_dithered%28________%29.md): Converts an unsigned 16-bit planar buffer to an 8-bit planar buffer using the specified dithering algorithm.

# vImageConvert_16UTo12U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 16-bit planar buffer to an unsigned 12-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_16UTo12U(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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

```c
 uint16_t *srcRow = srcData;
 uint8_t *destRow = destData;
 
 // Two 16-bit in 4-bytes.
 t0 = srcRow[0];
 t1 = srcRow[1];
 srcRow += 2;
 
 t0 = (t0 * 4095 + 32767 + (t0 >> 4)) >> 16;
 t1 = (t1 * 4095 + 32767 + (t1 >> 4)) >> 16;
 
 t0 <<= 12;
 t0 |= t1;
 
 // Two 12-bit in 3-bytes.
 destRow[0] = t0 >> 16;
 destRow[1] = t0 >> 8;
 destRow[2] = t0;
 destRow += 3;
```

## See Also

### Converting from unsigned 16-bit-per-channel buffers

- [vImageConvert_16UToPlanar8](vimageconvert_16utoplanar8%28______%29.md): Converts an unsigned 16-bit planar buffer to an 8-bit planar buffer.
- [vImageConvert_Planar16UtoPlanar8_dithered](vimageconvert_planar16utoplanar8_dithered%28________%29.md): Converts an unsigned 16-bit planar buffer to an 8-bit planar buffer using the specified dithering algorithm.
