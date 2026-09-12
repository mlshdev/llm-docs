> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_rgb888toargb8888(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_rgb888toargb8888(_:_:_:_:_:_:))

# vImageConvert_RGB888toARGB8888(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an ARGB result.

## Declaration

```swift
func vImageConvert_RGB888toARGB8888(_: UnsafePointer<vImage_Buffer>, _: UnsafePointer<vImage_Buffer>!, _: Pixel_8, _: UnsafePointer<vImage_Buffer>, _: Bool, _: vImage_Flags) -> vImage_Error
```

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters

- **rgbSrc**: The source vImage buffer that contains the red, green, and blue channels.
- **aSrc**: The source vImage buffer that contains the alpha channel. Set this value to `nil` to specify that the function sets the destination alpha as the constant destination alpha value.
- **alpha**: The constant destination alpha value. The function ignores this paramater if the `aSrc` parameter isn’t `nil`.
- **argbDest**: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- **premultiply**: A Boolean value that specifes whether the function premultiplies the color channels by the alpha channel.
- **flags**: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

If you specify `premultiply` as `true`, the function uses the following calculation to perform the conversion:

```objc
 r = (a * r + 127) / 255
 g = (a * g + 127) / 255
 b = (a * b + 127) / 255
```

## See Also

### Conversion from 8-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB888toBGRA8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb888tobgra8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB888toRGBA8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_rgb888torgba8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.

# vImageConvert_RGB888toARGB8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an ARGB result.

## Declaration

```objectivec
vImage_Error vImageConvert_RGB888toARGB8888(const vImage_Buffer *, const vImage_Buffer *, Pixel_8 , const vImage_Buffer *, bool , vImage_Flags );
```

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters

- **rgbSrc**: The source vImage buffer that contains the red, green, and blue channels.
- **aSrc**: The source vImage buffer that contains the alpha channel. Set this value to `nil` to specify that the function sets the destination alpha as the constant destination alpha value.
- **alpha**: The constant destination alpha value. The function ignores this paramater if the `aSrc` parameter isn’t `nil`.
- **argbDest**: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- **premultiply**: A Boolean value that specifes whether the function premultiplies the color channels by the alpha channel.
- **flags**: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

If you specify `premultiply` as `true`, the function uses the following calculation to perform the conversion:

```objc
 r = (a * r + 127) / 255
 g = (a * g + 127) / 255
 b = (a * b + 127) / 255
```

## See Also

### Conversion from 8-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_BGR888toBGRA8888](vimageconvert_bgr888tobgra8888.md): Combines an 8-bit-per-channel, 3-channel BGR buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_RGB888toBGRA8888](vimageconvert_rgb888tobgra8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_BGR888toRGBA8888](vimageconvert_bgr888torgba8888.md): Combines an 8-bit-per-channel, 3-channel BGR buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.
- [vImageConvert_RGB888toRGBA8888](vimageconvert_rgb888torgba8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.
