> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageflatten_rgba8888tobgr888](https://developer.apple.com/documentation/accelerate/vimageflatten_rgba8888tobgr888)

# vImageFlatten_RGBA8888ToBGR888

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flattens an 8-bit-per-channel RGBA buffer against a solid background to produce an 8-bit-per-channel BGR result.

## Declaration

```objectivec
#define vImageFlatten_RGBA8888ToBGR888(_rgba8888Src, _bgr888Dest, _backgroundColor, _isImagePremultiplied, _flags)
```

## Parameters

- `_rgba8888Src`: The source vImage buffer.
- `_bgr888Dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `_backgroundColor`: A pixel value that defines the solid background color.
- `_isImagePremultiplied`: A Boolean value that specifes whether the source image has premultiplied alpha.
- `_flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to flatten the source image:

```c
 if( isImagePremultiplied )
     color = (color * 255 + (255 - alpha) * backgroundColor + 127) / 255
 else
     color = (color * alpha + (255 - alpha) * backgroundColor + 127) / 255
```

## See Also

### Flattening 4-channel, 8-bit images to three channels

- [vImageFlatten_ARGB8888ToRGB888](vimageflatten_argb8888torgb888%28__________%29.md): Flattens an 8-bit-per-channel ARGB buffer against a solid background to produce an 8-bit-per-channel RGB result.
- [vImageFlatten_BGRA8888ToRGB888](vimageflatten_bgra8888torgb888%28__________%29.md): Flattens an 8-bit-per-channel BGRA buffer against a solid background to produce an 8-bit-per-channel RGB result.
- [vImageFlatten_BGRA8888ToBGR888](vimageflatten_bgra8888tobgr888.md): Flattens an 8-bit-per-channel BGRA buffer against a solid background to produce an 8-bit-per-channel BGR result.
- [vImageFlatten_RGBA8888ToRGB888](vimageflatten_rgba8888torgb888%28__________%29.md): Flattens an 8-bit-per-channel RGBA buffer against a solid background to produce an 8-bit-per-channel RGB result.
