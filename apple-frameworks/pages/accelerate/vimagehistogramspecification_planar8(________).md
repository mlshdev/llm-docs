> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagehistogramspecification_planar8(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagehistogramspecification_planar8(_:_:_:_:))

# vImageHistogramSpecification_Planar8(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Specifies the histogram of an 8-bit planar buffer.

## Declaration

```swift
func vImageHistogramSpecification_Planar8(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ desired_histogram: UnsafePointer<vImagePixelCount>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `desired_histogram`: The histogram that the operation applies to the source buffer.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

Use this function to apply a histogram — that you’ve generated using [vImageHistogramCalculation_Planar8(\_:\_:\_:)](vimagehistogramcalculation_planar8%28______%29.md) — to another image.

The following code applies a histogram to a planar vImage buffer:

```swift
// `histogram` is a 256-element array.
histogram.withUnsafeBufferPointer {
    // `buffer` is a `vImage_Buffer` structure.
    _ = vImageHistogramSpecification_Planar8(&buffer, &buffer,
                                             $0.baseAddress!,
                                             vImage_Flags(kvImageNoFlags))
}
```

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Specifying histograms with vImage](specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Specifying a histogram

- [vImageHistogramSpecification_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimagehistogramspecification_planarf%28________________%29.md): Specifies the histogram of a 32-bit planar buffer.
- [vImageHistogramSpecification_ARGB8888(\_:\_:\_:\_:)](vimagehistogramspecification_argb8888%28________%29.md): Specifies the histogram of an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageHistogramSpecification_ARGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimagehistogramspecification_argbffff%28________________%29.md): Specifes the histogram of a 32-bit-per-channel, 4-channel interleaved buffer.

# vImageHistogramSpecification_Planar8 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Specifies the histogram of an 8-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageHistogramSpecification_Planar8(const vImage_Buffer *src, const vImage_Buffer *dest, const vImagePixelCount *desired_histogram, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `desired_histogram`: The histogram that the operation applies to the source buffer.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

Use this function to apply a histogram — that you’ve generated using [vImageHistogramCalculation_Planar8](vimagehistogramcalculation_planar8%28______%29.md) — to another image.

The following code applies a histogram to a planar vImage buffer:

```swift
// `histogram` is a 256-element array.
histogram.withUnsafeBufferPointer {
    // `buffer` is a `vImage_Buffer` structure.
    _ = vImageHistogramSpecification_Planar8(&buffer, &buffer,
                                             $0.baseAddress!,
                                             vImage_Flags(kvImageNoFlags))
}
```

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Specifying histograms with vImage](specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Specifying a histogram

- [vImageHistogramSpecification_PlanarF](vimagehistogramspecification_planarf%28________________%29.md): Specifies the histogram of a 32-bit planar buffer.
- [vImageHistogramSpecification_ARGB8888](vimagehistogramspecification_argb8888%28________%29.md): Specifies the histogram of an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageHistogramSpecification_ARGBFFFF](vimagehistogramspecification_argbffff%28________________%29.md): Specifes the histogram of a 32-bit-per-channel, 4-channel interleaved buffer.
