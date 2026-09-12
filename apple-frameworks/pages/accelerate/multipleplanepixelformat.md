> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/multipleplanepixelformat](https://developer.apple.com/documentation/accelerate/multipleplanepixelformat)

# MultiplePlanePixelFormat

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A pixel format that contains multiple homogeneous planes represented by multiple underlying vImage buffers.

## Declaration

```swift
protocol MultiplePlanePixelFormat : PixelFormat
```

<a id="overview"></a>

## Overview

Use multiple-plane pixel buffers to store image data as discrete planar buffers that represent individual channels.

For example, the following code deinterleaves an interleaved buffer and applies different gamma adjustments to different color channels. The code calls `PixelBuffer.convert(to:)` to reinterleave the image data and generates a [CGImage](../coregraphics/cgimage.md) instance of the final output.

```swift
let srcImage =  imageLiteral(resourceName: "...").cgImage(
    forProposedRect: nil,
    context: nil,
    hints: nil)!

var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 3,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue))!

let interleaved = try vImage.PixelBuffer(
    cgImage: srcImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.Interleaved8x3.self)

let multiplane = vImage.PixelBuffer<vImage.Planar8x3>(interleavedBuffer: interleaved)

multiplane.withUnsafePixelBuffers { pixelBuffers in

    // Apply gamma to red channel.
    pixelBuffers[0].applyGamma(.nineOverElevenHalfPrecision,
                               destination: pixelBuffers[0])

    // Apply gamma to green channel.
    pixelBuffers[1].applyGamma(.fiveOverElevenHalfPrecision,
                               destination: pixelBuffers[1])
}

multiplane.convert(to: interleaved)
let outputImage = interleaved
```

## Topics

### Associated Types

- [PlanarPixelFormat](multipleplanepixelformat/planarpixelformat.md)

### Type Properties

- [bitCountPerPlanarPixel](multipleplanepixelformat/bitcountperplanarpixel.md)
- [planeCount](multipleplanepixelformat/planecount.md)

## Relationships

### Inherits From

- [PixelFormat](pixelformat.md)

### Conforming Types

- [vImage.Planar8x2](vimage/planar8x2.md)
- [vImage.Planar8x3](vimage/planar8x3.md)
- [vImage.Planar8x4](vimage/planar8x4.md)
- [vImage.PlanarFx2](vimage/planarfx2.md)
- [vImage.PlanarFx3](vimage/planarfx3.md)
- [vImage.PlanarFx4](vimage/planarfx4.md)

## See Also

### Protocols

- [InitializableFromCGImage](initializablefromcgimage.md): A pixel format that supports initialization from a Core Graphics image.
- [PixelFormat](pixelformat.md): A pixel buffer pixel format.
- [SinglePlanePixelFormat](singleplanepixelformat.md): A pixel format that contains a single underlying vImage buffer.
- [StaticPixelFormat](staticpixelformat.md): A pixel format that’s known at compile time.
