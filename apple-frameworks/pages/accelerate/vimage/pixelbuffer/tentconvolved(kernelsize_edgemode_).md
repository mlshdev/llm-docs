> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/tentconvolved(kernelsize:edgemode:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/tentconvolved(kernelsize:edgemode:))

# tentConvolved(kernelSize:edgeMode:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a tent-filter convolved 8-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func tentConvolved(kernelSize: vImage.Size, edgeMode: vImage.EdgeMode<Pixel_8888>) -> vImage.PixelBuffer<Format>
```

## Parameters

- `kernelSize`: The convolution kernel size. The operation interprets even dimensions as the next odd number.
- `edgeMode`: The convolution edge mode.

<a id="return-value"></a>

## Return Value

A pixel buffer that contains a blurred version of the source pixel buffer.

## See Also

### Related Documentation

- [Blurring an image](../../blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.

### Tent convolution

- [tentConvolve(kernelSize:edgeMode:destination:)](tentconvolve%28kernelsize_edgemode_destination_%29-1fpap.md): Conforms when `Format` is `vImage.Planar8`. Convolves an 8-bit planar pixel buffer with a tent filter.
- [tentConvolve(kernelSize:edgeMode:destination:)](tentconvolve%28kernelsize_edgemode_destination_%29-150xp.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer with a tent filter.
- [tentConvolve(kernelSize:edgeMode:destination:)](tentconvolve%28kernelsize_edgemode_destination_%29-2dp48.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Convolves a multiple-plane 8-bit-per-channel pixel buffer with a tent filter.
