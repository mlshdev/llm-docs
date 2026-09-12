> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/equalizehistogram(destination:)-2gbmf](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/equalizehistogram(destination:)-2gbmf)

# equalizeHistogram(destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Equalizes the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func equalizeHistogram(destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to transform an image so that its histogram is more uniformly distributed across the entire range of values.

For example, the following code equalizes the histogram of an image:

```swift
let srcImage =  imageLiteral(resourceName: " ... ").cgImage(
    forProposedRect: nil,
    context: nil,
    hints: nil)!

var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 4,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.noneSkipFirst.rawValue))!

let buffer = try vImage.PixelBuffer(
    cgImage: srcImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.Interleaved8x4.self)

buffer.equalizeHistogram(destination: buffer)

let outputImage = buffer.makeCGImage(cgImageFormat: cgImageFormat)
```

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](../../enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.

### Equalization

- [equalizeHistogram(destination:)](equalizehistogram%28destination_%29-7temg.md): Conforms when `Format` is `vImage.Planar8`. Equalizes the histogram of an 8-bit planar pixel buffer.
- [equalizeHistogram(binCount:destination:)](equalizehistogram%28bincount_destination_%29-5iv0q.md): Conforms when `Format` is `vImage.PlanarF`. Equalizes the histogram of a 32-bit planar pixel buffer.
- [equalizeHistogram(binCount:destination:)](equalizehistogram%28bincount_destination_%29-6on8w.md): Conforms when `Format` is `vImage.InterleavedFx4`. Equalizes the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [equalizeHistogram(destination:)](equalizehistogram%28destination_%29-939xn.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Equalizes the histogram of a multiple-plane 8-bit pixel buffer.
- [equalizeHistogram(binCount:destination:)](equalizehistogram%28bincount_destination_%29-59li2.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Equalizes the histogram of a multiple-plane 32-bit pixel buffer.
