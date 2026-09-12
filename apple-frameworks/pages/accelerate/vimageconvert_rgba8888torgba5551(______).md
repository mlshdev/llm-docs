> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_rgba8888torgba5551(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_rgba8888torgba5551(_:_:_:))

# vImageConvert_RGBA8888toRGBA5551(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer.

## Declaration

```swift
func vImageConvert_RGBA8888toRGBA5551(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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

The RGBA5551 format has 16-bit pixels with 1 bit for alpha and 5 bits each for red, green, and blue. The function uses the following calculation to perform the conversion:

```objc
 uint32_t red   = (8bitRedChannel   * 31 + 127) / 255;
 uint32_t green = (8bitGreenChannel * 31 + 127) / 255;
 uint32_t blue  = (8bitBlueChannel  * 31 + 127) / 255;
 uint32_t alpha = (8bitAlphaChannel      + 127) / 255;
 dest->data[x] =  (red << 11) | (green << 6) | (blue << 1) | alpha;
```

## See Also

### Converting from 8-bit buffers

- [vImageConvert_RGB888toRGB565_dithered(\_:\_:\_:\_:\_:)](vimageconvert_rgb888torgb565_dithered%28__________%29.md): Converts an 8-bit-per-channel, 3-channel interleaved buffer to an RGB565 3-channel interleaved buffer using the specified dithering algorithm.
- [vImageConvert_ARGB8888toARGB1555(\_:\_:\_:)](vimageconvert_argb8888toargb1555%28______%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer.
- [vImageConvert_ARGB8888toARGB1555_dithered(\_:\_:\_:\_:\_:)](vimageconvert_argb8888toargb1555_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_RGBA8888toRGBA5551_dithered(\_:\_:\_:\_:\_:)](vimageconvert_rgba8888torgba5551_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_ARGB8888ToARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888toargb16u%28____________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel buffer with permutation.

# vImageConvert_RGBA8888toRGBA5551 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_RGBA8888toRGBA5551(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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

The RGBA5551 format has 16-bit pixels with 1 bit for alpha and 5 bits each for red, green, and blue. The function uses the following calculation to perform the conversion:

```objc
 uint32_t red   = (8bitRedChannel   * 31 + 127) / 255;
 uint32_t green = (8bitGreenChannel * 31 + 127) / 255;
 uint32_t blue  = (8bitBlueChannel  * 31 + 127) / 255;
 uint32_t alpha = (8bitAlphaChannel      + 127) / 255;
 dest->data[x] =  (red << 11) | (green << 6) | (blue << 1) | alpha;
```

## See Also

### Converting from 8-bit buffers

- [vImageConvert_RGB888toRGB565_dithered](vimageconvert_rgb888torgb565_dithered%28__________%29.md): Converts an 8-bit-per-channel, 3-channel interleaved buffer to an RGB565 3-channel interleaved buffer using the specified dithering algorithm.
- [vImageConvert_ARGB8888toARGB1555](vimageconvert_argb8888toargb1555%28______%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer.
- [vImageConvert_ARGB8888toARGB1555_dithered](vimageconvert_argb8888toargb1555_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an ARGB1555 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_RGBA8888toRGBA5551_dithered](vimageconvert_rgba8888torgba5551_dithered%28__________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an RGBA5551 4-channel interleaved buffer usng the specified dithering algorithm.
- [vImageConvert_ARGB8888ToARGB16U](vimageconvert_argb8888toargb16u%28____________%29.md): Converts an 8-bit-per-channel, 4-channel interleaved buffer to an unsigned 16-bit-per-channel, 4-channel buffer with permutation.
