> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/contraststretch(bincount:destination:)-3bo13](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/contraststretch(bincount:destination:)-3bo13)

# contrastStretch(binCount:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Stretches the histogram of a 32-bit planar pixel buffer.

## Declaration

```swift
func contrastStretch(binCount: Int, destination: vImage.PixelBuffer<vImage.PlanarF>)
```

## Parameters

- `binCount`: The number of histogram entries for each channel.
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
    bitsPerComponent: 32,
    bitsPerPixel: 32 * 1,
    colorSpace: CGColorSpaceCreateDeviceGray(),
    bitmapInfo: CGBitmapInfo(rawValue: kCGBitmapByteOrder32Host.rawValue |
                             CGBitmapInfo.floatComponents.rawValue |
                             CGImageAlphaInfo.none.rawValue))!

let buffer = try vImage.PixelBuffer(
    cgImage: srcImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.PlanarF.self)

buffer.contrastStretch(binCount: 1024,
                       destination: buffer)

let outputImage = buffer.makeCGImage(cgImageFormat: cgImageFormat)
```

## See Also

### Related Documentation

- [Enhancing image contrast with histogram manipulation](../../enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.

### Contrast stretching

- [contrastStretch(destination:)](contraststretch%28destination_%29-6usbh.md): Conforms when `Format` is `vImage.Planar8`. Stretches the histogram of an 8-bit planar pixel buffer.
- [contrastStretch(destination:)](contraststretch%28destination_%29-7zo9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Stretches the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [contrastStretch(binCount:destination:)](contraststretch%28bincount_destination_%29-704t6.md): Conforms when `Format` is `vImage.InterleavedFx4`. Stretches the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [contrastStretch(destination:)](contraststretch%28destination_%29-2nsx9.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Stretches the histogram of a multiple-plane 8-bit pixel buffer.
- [contrastStretch(binCount:destination:)](contraststretch%28bincount_destination_%29-81vq2.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Stretches the histogram of a multiple-plane 32-bit pixel buffer.
