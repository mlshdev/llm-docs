> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/contraststretch(destination:)-2nsx9](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/contraststretch(destination:)-2nsx9)

# contrastStretch(destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Stretches the histogram of a multiple-plane 8-bit pixel buffer.

## Declaration

```swift
func contrastStretch(destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to evenly distributes a histogram’s pixel values across the full range of available pixel values.

For example, the following code stretches the contrast of an image:

```swift
let srcImage =  imageLiteral(resourceName: "Landscape_28_lowContrast.jpg").cgImage(
    forProposedRect: nil,
    context: nil,
    hints: nil)!

var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 3,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue))!

let interleavedBuffer = try vImage.PixelBuffer(
    cgImage: srcImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.Interleaved8x3.self)

let multiplaneBuffer = vImage.PixelBuffer<vImage.Planar8x3>(
    interleavedBuffer: interleavedBuffer)

multiplaneBuffer.contrastStretch(destination: multiplaneBuffer)

multiplaneBuffer.convert(to: interleavedBuffer)

let outputImage = interleavedBuffer.makeCGImage(cgImageFormat: cgImageFormat)
```

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](../../enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.

### Contrast stretching

- [contrastStretch(destination:)](contraststretch%28destination_%29-6usbh.md): Conforms when `Format` is `vImage.Planar8`. Stretches the histogram of an 8-bit planar pixel buffer.
- [contrastStretch(binCount:destination:)](contraststretch%28bincount_destination_%29-3bo13.md): Conforms when `Format` is `vImage.PlanarF`. Stretches the histogram of a 32-bit planar pixel buffer.
- [contrastStretch(destination:)](contraststretch%28destination_%29-7zo9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Stretches the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [contrastStretch(binCount:destination:)](contraststretch%28bincount_destination_%29-704t6.md): Conforms when `Format` is `vImage.InterleavedFx4`. Stretches the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [contrastStretch(binCount:destination:)](contraststretch%28bincount_destination_%29-81vq2.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Stretches the histogram of a multiple-plane 32-bit pixel buffer.
