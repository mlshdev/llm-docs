> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageequalization_planar8(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageequalization_planar8(_:_:_:))

# vImageEqualization_Planar8(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs histogram equalization on an 8-bit planar buffer.

## Declaration

```swift
func vImageEqualization_Planar8(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
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

Histogram equalization transforms an image so that its histogram is more uniformly distributed across the entire range of values. The operation stretches dense parts of the histogram, where contrast is low, and condenses sparse parts of the histogram, where contrast is high. A truly uniform histogram is one in which each histogram bin contains the same value, that is, its cumulative histogram is a diagonal line. The vImage histogram equalization functions approximate that truly uniform histogram.

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Specifying histograms with vImage](specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Equalizing a histogram

- [vImageEqualization_PlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimageequalization_planarf%28______________%29.md): Performs histogram equalization on a 32-bit planar buffer.
- [vImageEqualization_ARGB8888(\_:\_:\_:)](vimageequalization_argb8888%28______%29.md): Performs histogram equalization on an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageEqualization_ARGBFFFF(\_:\_:\_:\_:\_:\_:\_:)](vimageequalization_argbffff%28______________%29.md): Performs histogram equalization on a 32-bit-per-channel, 4-channel interleaved buffer.

# vImageEqualization_Planar8 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs histogram equalization on an 8-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageEqualization_Planar8(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
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

Histogram equalization transforms an image so that its histogram is more uniformly distributed across the entire range of values. The operation stretches dense parts of the histogram, where contrast is low, and condenses sparse parts of the histogram, where contrast is high. A truly uniform histogram is one in which each histogram bin contains the same value, that is, its cumulative histogram is a diagonal line. The vImage histogram equalization functions approximate that truly uniform histogram.

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Specifying histograms with vImage](specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Equalizing a histogram

- [vImageEqualization_PlanarF](vimageequalization_planarf%28______________%29.md): Performs histogram equalization on a 32-bit planar buffer.
- [vImageEqualization_ARGB8888](vimageequalization_argb8888%28______%29.md): Performs histogram equalization on an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageEqualization_ARGBFFFF](vimageequalization_argbffff%28______________%29.md): Performs histogram equalization on a 32-bit-per-channel, 4-channel interleaved buffer.
