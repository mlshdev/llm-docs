> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagehistogramcalculation_argbffff(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagehistogramcalculation_argbffff(_:_:_:_:_:_:))

# vImageHistogramCalculation_ARGBFFFF(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Calculates the histogram of a 32-bit-per-channel, 4-channel interleaved buffer.

## Declaration

```swift
func vImageHistogramCalculation_ARGBFFFF(_ src: UnsafePointer<vImage_Buffer>, _ histogram: UnsafeMutablePointer<UnsafeMutablePointer<vImagePixelCount>?>, _ histogram_entries: UInt32, _ minVal: Pixel_F, _ maxVal: Pixel_F, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `histogram`: An array of four collections that contain `histogram_entries` elements that receive the histogram data.
- `histogram_entries`: The number of histogram entries.
- `minVal`: The minimum pixel value. The operation assigns pixel values less than `minVal` to the first histogram entry.
- `maxVal`: The maximum pixel value. The operation assigns pixel values greater than `maxVal` to the last histogram entry.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  To specify that the function doesn’t calculate the alpha channel histogram, set the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code populates the `histogramAlpha` , `histogramRed`, `histogramGreen`, and `histogramBlue` arrays with the histograms for each channel of the specified [vImage_Buffer](vimage_buffer.md) structure.

```swift
let entryCount = 64
var histogramAlpha = [vImagePixelCount](repeating: 0, count: entryCount)
var histogramRed = [vImagePixelCount](repeating: 0, count: entryCount)
var histogramGreen = [vImagePixelCount](repeating: 0, count: entryCount)
var histogramBlue = [vImagePixelCount](repeating: 0, count: entryCount)

histogramAlpha.withUnsafeMutableBufferPointer { zeroPtr in
    histogramRed.withUnsafeMutableBufferPointer { onePtr in
        histogramGreen.withUnsafeMutableBufferPointer { twoPtr in
            histogramBlue.withUnsafeMutableBufferPointer { threePtr in
                
                var histogramBins = [zeroPtr.baseAddress, onePtr.baseAddress,
                                     twoPtr.baseAddress, threePtr.baseAddress]
                
                histogramBins.withUnsafeMutableBufferPointer { histogramBinsPtr in
                    // `buffer` is a `vImage_Buffer` structure.
                    _ = vImageHistogramCalculation_ARGBFFFF(&buffer,
                                                            histogramBinsPtr.baseAddress!,
                                                            UInt32(entryCount),
                                                            0, 1,
                                                            vImage_Flags(kvImageNoFlags))
                }
            }
        }
    }
}
```

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Specifying histograms with vImage](specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Calculating a histogram

- [vImageHistogramCalculation_Planar8(\_:\_:\_:)](vimagehistogramcalculation_planar8%28______%29.md): Calculates the histogram of an 8-bit planar buffer.
- [vImageHistogramCalculation_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagehistogramcalculation_planarf%28____________%29.md): Calculates the histogram of a 32-bit planar buffer.
- [vImageHistogramCalculation_ARGB8888(\_:\_:\_:)](vimagehistogramcalculation_argb8888%28______%29.md): Calculates the histogram of an 8-bit-per-channel, 4-channel interleaved buffer.

# vImageHistogramCalculation_ARGBFFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Calculates the histogram of a 32-bit-per-channel, 4-channel interleaved buffer.

## Declaration

```objectivec
vImage_Error vImageHistogramCalculation_ARGBFFFF(const vImage_Buffer *src, vImagePixelCount * histogram[4], unsigned int histogram_entries, Pixel_F minVal, Pixel_F maxVal, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `histogram`: An array of four collections that contain `histogram_entries` elements that receive the histogram data.
- `histogram_entries`: The number of histogram entries.
- `minVal`: The minimum pixel value. The operation assigns pixel values less than `minVal` to the first histogram entry.
- `maxVal`: The maximum pixel value. The operation assigns pixel values greater than `maxVal` to the last histogram entry.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  To specify that the function doesn’t calculate the alpha channel histogram, set the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code populates the `histogramAlpha` , `histogramRed`, `histogramGreen`, and `histogramBlue` arrays with the histograms for each channel of the specified [vImage_Buffer](vimage_buffer.md) structure.

```swift
let entryCount = 64
var histogramAlpha = [vImagePixelCount](repeating: 0, count: entryCount)
var histogramRed = [vImagePixelCount](repeating: 0, count: entryCount)
var histogramGreen = [vImagePixelCount](repeating: 0, count: entryCount)
var histogramBlue = [vImagePixelCount](repeating: 0, count: entryCount)

histogramAlpha.withUnsafeMutableBufferPointer { zeroPtr in
    histogramRed.withUnsafeMutableBufferPointer { onePtr in
        histogramGreen.withUnsafeMutableBufferPointer { twoPtr in
            histogramBlue.withUnsafeMutableBufferPointer { threePtr in
                
                var histogramBins = [zeroPtr.baseAddress, onePtr.baseAddress,
                                     twoPtr.baseAddress, threePtr.baseAddress]
                
                histogramBins.withUnsafeMutableBufferPointer { histogramBinsPtr in
                    // `buffer` is a `vImage_Buffer` structure.
                    _ = vImageHistogramCalculation_ARGBFFFF(&buffer,
                                                            histogramBinsPtr.baseAddress!,
                                                            UInt32(entryCount),
                                                            0, 1,
                                                            vImage_Flags(kvImageNoFlags))
                }
            }
        }
    }
}
```

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Specifying histograms with vImage](specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Calculating a histogram

- [vImageHistogramCalculation_Planar8](vimagehistogramcalculation_planar8%28______%29.md): Calculates the histogram of an 8-bit planar buffer.
- [vImageHistogramCalculation_PlanarF](vimagehistogramcalculation_planarf%28____________%29.md): Calculates the histogram of a 32-bit planar buffer.
- [vImageHistogramCalculation_ARGB8888](vimagehistogramcalculation_argb8888%28______%29.md): Calculates the histogram of an 8-bit-per-channel, 4-channel interleaved buffer.
