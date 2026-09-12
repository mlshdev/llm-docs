> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_422cbypcryp16toargb8888(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_422cbypcryp16toargb8888(_:_:_:_:_:_:))

# vImageConvert_422CbYpCrYp16ToARGB8888(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.

## Declaration

```swift
func vImageConvert_422CbYpCrYp16ToARGB8888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ info: UnsafePointer<vImage_YpCbCrToARGB>, _ permuteMap: UnsafePointer<UInt8>!, _ alpha: UInt8, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `info`: A [vImage_YpCbCrToARGB](vimage_ypcbcrtoargb.md) structure that describes the conversion matrix, the range of the input and output pixels from the matrix, and clamping information.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `alpha`: The constant destination alpha value.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## See Also

### Converting from 4:2:2

- [vImageConvert_422YpCbYpCr8ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422ypcbypcr8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 YpCbYpCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422cbypcryp8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8_AA8ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422cbypcryp8_aa8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer and an 8-bit alpha buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp16ToARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_422cbypcryp16toargb16u%28____________%29.md): Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an unsigned 16-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb8888%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB16Q12(\_:\_:\_:\_:\_:\_:)](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb16q12%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a fixed-point 16-bit-per-channel, 4-channel ARGB buffer.

# vImageConvert_422CbYpCrYp16ToARGB8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_422CbYpCrYp16ToARGB8888(const vImage_Buffer *src, const vImage_Buffer *dest, const vImage_YpCbCrToARGB *info, const uint8_t permuteMap[4], const uint8_t alpha, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `info`: A [vImage_YpCbCrToARGB](vimage_ypcbcrtoargb.md) structure that describes the conversion matrix, the range of the input and output pixels from the matrix, and clamping information.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `alpha`: The constant destination alpha value.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## See Also

### Converting from 4:2:2

- [vImageConvert_422YpCbYpCr8ToARGB8888](vimageconvert_422ypcbypcr8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 YpCbYpCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8ToARGB8888](vimageconvert_422cbypcryp8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8_AA8ToARGB8888](vimageconvert_422cbypcryp8_aa8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer and an 8-bit alpha buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp16ToARGB16U](vimageconvert_422cbypcryp16toargb16u%28____________%29.md): Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an unsigned 16-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB8888](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb8888%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB16Q12](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb16q12%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a fixed-point 16-bit-per-channel, 4-channel ARGB buffer.
