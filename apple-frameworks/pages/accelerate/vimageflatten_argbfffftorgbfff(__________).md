> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageflatten_argbfffftorgbfff(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageflatten_argbfffftorgbfff(_:_:_:_:_:))

# vImageFlatten_ARGBFFFFToRGBFFF(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Flattens a 32-bit-per-channel ARGB buffer against a solid background to produce a 32-bit-per-channel RGB result.

## Declaration

```swift
func vImageFlatten_ARGBFFFFToRGBFFF(_: UnsafePointer<vImage_Buffer>, _: UnsafePointer<vImage_Buffer>, _: UnsafePointer<Float>, _: Bool, _: vImage_Flags) -> vImage_Error
```

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters

- **argbFFFFSrc**: The source vImage buffer.
- **rgbFFFdest**: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- **backgroundColor**: A pixel value that defines the solid background color.
- **isImagePremultiplied**: A Boolean value that specifes whether the source image has premultiplied alpha.
- **flags**: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

The function uses the following calculation to flatten the source image:

```c
 if( isImagePremultiplied )
     color = color + (1.0f - alpha) * backgroundColor
 else
     color = color * alpha + (1.0f - alpha) * backgroundColor
```

## See Also

### Flattening 4-channel, 32-bit images to three channels

- [vImageFlatten_BGRAFFFFToRGBFFF(\_:\_:\_:\_:\_:)](vimageflatten_bgrafffftorgbfff%28__________%29.md): Flattens a 32-bit-per-channel BGRA buffer against a solid background to produce a 32-bit-per-channel RGB result.
- [vImageFlatten_RGBAFFFFToRGBFFF(\_:\_:\_:\_:\_:)](vimageflatten_rgbafffftorgbfff%28__________%29.md): Flattens a 32-bit-per-channel RGBA buffer against a solid background to produce a 32-bit-per-channel RGB result.

# vImageFlatten_ARGBFFFFToRGBFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Flattens a 32-bit-per-channel ARGB buffer against a solid background to produce a 32-bit-per-channel RGB result.

## Declaration

```objectivec
vImage_Error vImageFlatten_ARGBFFFFToRGBFFF(const vImage_Buffer *, const vImage_Buffer *, const Pixel_FFFF , bool , vImage_Flags );
```

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters

- **argbFFFFSrc**: The source vImage buffer.
- **rgbFFFdest**: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- **backgroundColor**: A pixel value that defines the solid background color.
- **isImagePremultiplied**: A Boolean value that specifes whether the source image has premultiplied alpha.
- **flags**: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

The function uses the following calculation to flatten the source image:

```c
 if( isImagePremultiplied )
     color = color + (1.0f - alpha) * backgroundColor
 else
     color = color * alpha + (1.0f - alpha) * backgroundColor
```

## See Also

### Flattening 4-channel, 32-bit images to three channels

- [vImageFlatten_BGRAFFFFToRGBFFF](vimageflatten_bgrafffftorgbfff%28__________%29.md): Flattens a 32-bit-per-channel BGRA buffer against a solid background to produce a 32-bit-per-channel RGB result.
- [vImageFlatten_RGBAFFFFToRGBFFF](vimageflatten_rgbafffftorgbfff%28__________%29.md): Flattens a 32-bit-per-channel RGBA buffer against a solid background to produce a 32-bit-per-channel RGB result.
