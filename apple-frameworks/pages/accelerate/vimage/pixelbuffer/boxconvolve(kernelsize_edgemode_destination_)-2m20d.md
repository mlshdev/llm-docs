> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/boxconvolve(kernelsize:edgemode:destination:)-2m20d](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/boxconvolve(kernelsize:edgemode:destination:)-2m20d)

# boxConvolve(kernelSize:edgeMode:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer with a box filter.

## Declaration

```swift
func boxConvolve(kernelSize: vImage.Size, edgeMode: vImage.EdgeMode<Pixel_8888>, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `kernelSize`: The convolution kernel size. The operation interprets even dimensions as the next odd number.
- `edgeMode`: The convolution edge mode.
- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Blurring an image](../../blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.

### Box convolution

- [boxConvolve(kernelSize:edgeMode:destination:)](boxconvolve%28kernelsize_edgemode_destination_%29-2h7fy.md): Conforms when `Format` is `vImage.Planar8`. Convolves an 8-bit planar pixel buffer with a box filter.
- [boxConvolved(kernelSize:edgeMode:)](boxconvolved%28kernelsize_edgemode_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Returns a box-filter convolved 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [boxConvolve(kernelSize:edgeMode:destination:)](boxconvolve%28kernelsize_edgemode_destination_%29-3kabm.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Convolves a multiple-plane 8-bit-per-channel pixel buffer with a box filter.
