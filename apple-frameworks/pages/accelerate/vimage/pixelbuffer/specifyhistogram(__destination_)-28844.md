> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/specifyhistogram(_:destination:)-28844](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/specifyhistogram(_:destination:)-28844)

# specifyHistogram(\_:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Performs a histogram specification operation on a 32-bit-per-channel, 3-channel multiple-plane pixel buffer.

## Declaration

```swift
func specifyHistogram(_ histogram: vImage.PixelBuffer<Format>.HistogramFFF, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `histogram`: The histogram.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

*Histogram specification* is a technique that allows you to calculate the histogram of a reference image and apply it to an input image.

The example below shows a source image (bottom left) and a histogram reference image (top left), with the histogram specification output on the right:

![Photos showing original image, histogram source image, and histogram specified result.](https://developer.apple.com/images/com.apple.accelerate/media-3958176@2x.png)

The code below initializes the source and reference buffers from the [CGImage](../../../coregraphics/cgimage.md) instances `sourceImage` and `referenceImage` respectively:

```swift
var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 32,
    bitsPerPixel: 32 * 3,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue: CGBitmapInfo.byteOrder32Little.rawValue |
                             CGBitmapInfo.floatComponents.rawValue |
                             CGImageAlphaInfo.none.rawValue))!

let interleavedSource = try vImage.PixelBuffer(
    cgImage: sourceImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.InterleavedFx3.self)
let multiplePlaneSource = vImage.PixelBuffer<vImage.PlanarFx3>(
    planarBuffers: interleavedSource.planarBuffers())

let interleavedReference = try vImage.PixelBuffer(
    cgImage: referenceImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.InterleavedFx3.self)
let multiplePlaneReference = vImage.PixelBuffer<vImage.PlanarFx3>(
    planarBuffers: interleavedReference.planarBuffers())
```

The following code calls [histogram()](histogram%28%29-14a38.md) to calculate the histogram of the reference image and passes the histogram to [specifyHistogram(\_:destination:)](specifyhistogram%28__destination_%29-7xiz4.md) to generate the specification result. This function works in place, that is, the input and output can share the same underlying memory.

```swift
let histogram = multiplePlaneReference.histogram(binCount: 1024)

multiplePlaneSource.specifyHistogram(histogram,
                                     destination: multiplePlaneSource)
```

## See Also

### Related Documentation

- [Specifying histograms with vImage](../../specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.

### Histogram specification

- [specifyHistogram(\_:destination:)](specifyhistogram%28__destination_%29-7xiz4.md): Conforms when `Format` is `vImage.Interleaved8x4`. Performs a histogram specification operation on an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [specifyHistogram(\_:destination:)](specifyhistogram%28__destination_%29-1x46n.md): Conforms when `Format` is `vImage.InterleavedFx4`. Performs a histogram specification operation on a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [specifyHistogram(\_:destination:)](specifyhistogram%28__destination_%29-qeqr.md): Conforms when `Format` is `vImage.Planar8x3`. Performs a histogram specification operation on an 8-bit-per-channel, 3-channel multiple-plane pixel buffer.
- [specifyHistogram(\_:destination:)](specifyhistogram%28__destination_%29-73dpr.md): Conforms when `Format` is `vImage.Planar8x4`. Performs a histogram specification operation on an 8-bit-per-channel, 4-channel multiple-plane pixel buffer.
- [specifyHistogram(\_:destination:)](specifyhistogram%28__destination_%29-7cvk1.md): Conforms when `Format` is `vImage.PlanarFx4`. Performs a histogram specification operation on a 32-bit-per-channel, 3-channel multiple-plane pixel buffer.
