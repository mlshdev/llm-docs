> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageflatten_rgba8888(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageflatten_rgba8888(_:_:_:_:_:))

# vImageFlatten_RGBA8888(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Performs an alpha composite of an 8-bit-per-channel, 4-channel RGBA buffer over a solid background color.

## Declaration

```swift
func vImageFlatten_RGBA8888(_ rgbaSrc: UnsafePointer<vImage_Buffer>, _ rgbaDst: UnsafePointer<vImage_Buffer>, _ rgbaBackgroundColorPtr: UnsafePointer<UInt8>, _ isImagePremultiplied: Bool, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `rgbaSrc`: The source vImage buffer.
- `rgbaDst`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `rgbaBackgroundColorPtr`: A pixel value that defines the solid background color.
- `isImagePremultiplied`: A Boolean value that specifes whether the source image has premultiplied alpha.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to flatten the source image:

```c
 resultAlpha = (pixelAlpha * 255 + (255 - pixelAlpha) * backgroundAlpha + 127) / 255

 if(isImagePremultiplied)
     resultColor = (pixelColor * 255 + (255 - pixelAlpha) * backgroundColor + 127) / 255
 else
     resultColor = (pixelColor * pixelAlpha + (255 - pixelAlpha) * backgroundColor + 127) / 255

```

## See Also

### Flattening 4-channel, 8-bit images

- [vImageFlatten_ARGB8888(\_:\_:\_:\_:\_:)](vimageflatten_argb8888%28__________%29.md): Performs an alpha composite of an 8-bit-per-channel, 4-channel ARGB buffer over a solid background color.

# vImageFlatten_RGBA8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Performs an alpha composite of an 8-bit-per-channel, 4-channel RGBA buffer over a solid background color.

## Declaration

```objectivec
vImage_Error vImageFlatten_RGBA8888(const vImage_Buffer *rgbaSrc, const vImage_Buffer *rgbaDst, const Pixel_8888 rgbaBackgroundColorPtr, bool isImagePremultiplied, vImage_Flags flags);
```

## Parameters

- `rgbaSrc`: The source vImage buffer.
- `rgbaDst`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `rgbaBackgroundColorPtr`: A pixel value that defines the solid background color.
- `isImagePremultiplied`: A Boolean value that specifes whether the source image has premultiplied alpha.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to flatten the source image:

```c
 resultAlpha = (pixelAlpha * 255 + (255 - pixelAlpha) * backgroundAlpha + 127) / 255

 if(isImagePremultiplied)
     resultColor = (pixelColor * 255 + (255 - pixelAlpha) * backgroundColor + 127) / 255
 else
     resultColor = (pixelColor * pixelAlpha + (255 - pixelAlpha) * backgroundColor + 127) / 255

```

## See Also

### Flattening 4-channel, 8-bit images

- [vImageFlatten_ARGB8888](vimageflatten_argb8888%28__________%29.md): Performs an alpha composite of an 8-bit-per-channel, 4-channel ARGB buffer over a solid background color.
