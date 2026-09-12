> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_bgr888tobgra8888](https://developer.apple.com/documentation/accelerate/vimageconvert_bgr888tobgra8888)

# vImageConvert_BGR888toBGRA8888

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Combines an 8-bit-per-channel, 3-channel BGR buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.

## Declaration

```objectivec
#define vImageConvert_BGR888toBGRA8888(_bgrSrc, _aSrc, _alpha, _bgraDest, _premultiply, _flags)
```

## Parameters

- `_bgrSrc`: The source vImage buffer that contains the blue, green, and red channels.
- `_aSrc`: The source vImage buffer that contains the alpha channel. Set this value to `nil` to specify that the function sets the destination alpha as the constant destination alpha value.
- `_alpha`: The constant destination alpha value. The function ignores this paramater if the `aSrc` parameter isn’t `nil`.
- `_bgraDest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `_premultiply`: A Boolean value that specifes whether the function premultiplies the color channels by the alpha channel.
- `_flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

If you specify `premultiply` as `true`, the function uses the following calculation to perform the conversion:

```objc
 b = (a * b + 127) / 255
 g = (a * g + 127) / 255
 r = (a * r + 127) / 255
```

## See Also

### Conversion from 8-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB888toARGB8888](vimageconvert_rgb888toargb8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an ARGB result.
- [vImageConvert_RGB888toBGRA8888](vimageconvert_rgb888tobgra8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce a BGRA result.
- [vImageConvert_BGR888toRGBA8888](vimageconvert_bgr888torgba8888.md): Combines an 8-bit-per-channel, 3-channel BGR buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.
- [vImageConvert_RGB888toRGBA8888](vimageconvert_rgb888torgba8888%28____________%29.md): Combines an 8-bit-per-channel, 3-channel RGB buffer and either an 8-bit alpha buffer or constant alpha value to produce an RGBA result.
