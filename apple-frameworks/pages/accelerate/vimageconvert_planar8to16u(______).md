> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_planar8to16u(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_planar8to16u(_:_:_:))

# vImageConvert_Planar8To16U(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an 8-bit planar buffer to an unsigned 16-bit planar buffer.

## Declaration

```swift
func vImageConvert_Planar8To16U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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
uint16_t result = (srcPixel * 65535 + 127 ) / 255
```

## See Also

### Converting from 8-bit buffers

- [vImageConvert_Planar8toPlanar1(\_:\_:\_:\_:\_:)](vimageconvert_planar8toplanar1%28__________%29.md): Converts an 8-bit planar buffer to a 1-bit planar buffer.
- [vImageConvert_Planar8toPlanar2(\_:\_:\_:\_:\_:)](vimageconvert_planar8toplanar2%28__________%29.md): Converts an 8-bit planar buffer to a 2-bit planar buffer.
- [vImageConvert_Planar8toPlanar4(\_:\_:\_:\_:\_:)](vimageconvert_planar8toplanar4%28__________%29.md): Converts an 8-bit planar buffer to a 4-bit planar buffer.
- [vImageConvert_Planar8toIndexed1(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toindexed1%28____________%29.md): Converts an 8-bit planar buffer to an indexed 1-bit planar buffer.
- [vImageConvert_Planar8toIndexed2(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toindexed2%28____________%29.md): Converts an 8-bit planar buffer to an indexed 2-bit planar buffer.
- [vImageConvert_Planar8toIndexed4(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toindexed4%28____________%29.md): Converts an 8-bit planar buffer to an indexed 4-bit planar buffer.

# vImageConvert_Planar8To16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an 8-bit planar buffer to an unsigned 16-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_Planar8To16U(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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
uint16_t result = (srcPixel * 65535 + 127 ) / 255
```

## See Also

### Converting from 8-bit buffers

- [vImageConvert_Planar8toPlanar1](vimageconvert_planar8toplanar1%28__________%29.md): Converts an 8-bit planar buffer to a 1-bit planar buffer.
- [vImageConvert_Planar8toPlanar2](vimageconvert_planar8toplanar2%28__________%29.md): Converts an 8-bit planar buffer to a 2-bit planar buffer.
- [vImageConvert_Planar8toPlanar4](vimageconvert_planar8toplanar4%28__________%29.md): Converts an 8-bit planar buffer to a 4-bit planar buffer.
- [vImageConvert_Planar8toIndexed1](vimageconvert_planar8toindexed1%28____________%29.md): Converts an 8-bit planar buffer to an indexed 1-bit planar buffer.
- [vImageConvert_Planar8toIndexed2](vimageconvert_planar8toindexed2%28____________%29.md): Converts an 8-bit planar buffer to an indexed 2-bit planar buffer.
- [vImageConvert_Planar8toIndexed4](vimageconvert_planar8toindexed4%28____________%29.md): Converts an 8-bit planar buffer to an indexed 4-bit planar buffer.
