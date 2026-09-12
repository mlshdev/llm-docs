> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepremultipliedalphablendwithpermute_rgba8888(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagepremultipliedalphablendwithpermute_rgba8888(_:_:_:_:_:_:))

# vImagePremultipliedAlphaBlendWithPermute_RGBA8888(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.

## Declaration

```swift
func vImagePremultipliedAlphaBlendWithPermute_RGBA8888(_ srcTop: UnsafePointer<vImage_Buffer>, _ srcBottom: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ permuteMap: UnsafePointer<UInt8>, _ makeDestAlphaOpaque: Bool, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function uses as the destination channel at the corresponding index.
- `makeDestAlphaOpaque`: A Boolean value that specifies whether the function generates a destination image with opaque an alpha channel.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The `permuteMap` parameter changes the order of the `srcTop` channels:

- `permuteMap[0]` specifies which channel in the source top image the function treats as the alpha channel.
- `permuteMap[1]` specifies which channel in the source top image the function treats as the red channel.
- `permuteMap[2]` specifies which channel in the source top image the function treats as the green channel.
- `permuteMap[3]` specifies which channel in the source top image the function treats as the blue channel.

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing with a permute

- [vImagePremultipliedAlphaBlendWithPermute_ARGB8888(\_:\_:\_:\_:\_:\_:)](vimagepremultipliedalphablendwithpermute_argb8888%28____________%29.md): Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.

# vImagePremultipliedAlphaBlendWithPermute_RGBA8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.

## Declaration

```objectivec
vImage_Error vImagePremultipliedAlphaBlendWithPermute_RGBA8888(const vImage_Buffer *srcTop, const vImage_Buffer *srcBottom, const vImage_Buffer *dest, const uint8_t permuteMap[4], bool makeDestAlphaOpaque, vImage_Flags flags);
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function uses as the destination channel at the corresponding index.
- `makeDestAlphaOpaque`: A Boolean value that specifies whether the function generates a destination image with opaque an alpha channel.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The `permuteMap` parameter changes the order of the `srcTop` channels:

- `permuteMap[0]` specifies which channel in the source top image the function treats as the alpha channel.
- `permuteMap[1]` specifies which channel in the source top image the function treats as the red channel.
- `permuteMap[2]` specifies which channel in the source top image the function treats as the green channel.
- `permuteMap[3]` specifies which channel in the source top image the function treats as the blue channel.

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing with a permute

- [vImagePremultipliedAlphaBlendWithPermute_ARGB8888](vimagepremultipliedalphablendwithpermute_argb8888%28____________%29.md): Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.
