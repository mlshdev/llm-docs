> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_12uto16u(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_12uto16u(_:_:_:))

# vImageConvert_12UTo16U(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 12-bit planar buffer to an unsigned 16-bit planar buffer.

## Declaration

```swift
func vImageConvert_12UTo16U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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
 uint8_t *srcRow = srcData;
 uint16_t *destRow = destData;
 
 // Load two 12-bit values.
 t0 = (srcRow[0] << 16) | (srcRow[1] << 8) | srcRow [2];
 srcRow += 3;
 
 // Separate each of 12-bit.
 t1 = t0 & 0xfff;
 t0 >>= 12;
 
 //Convert and store.
 destRow[0] = (t0 * 65535U + (t0 << 4) + 2055U) >> 12;
 destRow[1] = (t1 * 65535U + (t1 << 4) + 2055U) >> 12;
 destRow += 2;
```

# vImageConvert_12UTo16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an unsigned 12-bit planar buffer to an unsigned 16-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_12UTo16U(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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
 uint8_t *srcRow = srcData;
 uint16_t *destRow = destData;
 
 // Load two 12-bit values.
 t0 = (srcRow[0] << 16) | (srcRow[1] << 8) | srcRow [2];
 srcRow += 3;
 
 // Separate each of 12-bit.
 t1 = t0 & 0xfff;
 t0 >>= 12;
 
 //Convert and store.
 destRow[0] = (t0 * 65535U + (t0 << 4) + 2055U) >> 12;
 destRow[1] = (t1 * 65535U + (t1 << 4) + 2055U) >> 12;
 destRow += 2;
```
