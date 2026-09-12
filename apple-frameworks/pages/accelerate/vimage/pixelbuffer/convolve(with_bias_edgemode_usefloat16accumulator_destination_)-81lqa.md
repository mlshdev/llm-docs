> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convolve(with:bias:edgemode:usefloat16accumulator:destination:)-81lqa](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convolve(with:bias:edgemode:usefloat16accumulator:destination:)-81lqa)

# convolve(with:bias:edgeMode:useFloat16Accumulator:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Convolves a floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func convolve(with kernel: vImage.ConvolutionKernel2D<Float>, bias: Float? = nil, edgeMode: vImage.EdgeMode<Pixel_ARGB_16F>, useFloat16Accumulator: Bool = false, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `kernel`: The convolution kernel.
- `bias`: An optional value that the operation adds to the sum of weighted pixels before it applies the divisor.
- `edgeMode`: The convolution edge mode.
- `useFloat16Accumulator`: A Boolean value that specifies that the function uses faster but lower-precision internal arithmetic. For more information, see [kvImageUseFP16Accumulator](../../kvimageusefp16accumulator.md).
- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Blurring an image](../../blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.

### General convolution

- [convolve(with:divisor:bias:edgeMode:destination:)](convolve%28with_divisor_bias_edgemode_destination_%29-4o5w6.md): Conforms when `Format` is `vImage.Planar8`. Convolves an 8-bit planar pixel buffer.
- [convolve(with:bias:edgeMode:useFloat16Accumulator:destination:)](convolve%28with_bias_edgemode_usefloat16accumulator_destination_%29-1xkvu.md): Conforms when `Format` is `vImage.Planar16F`. Convolves a floating-point 16-bit planar pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](convolve%28with_bias_edgemode_destination_%29-tn07.md): Conforms when `Format` is `vImage.PlanarF`. Convolves a 32-bit planar pixel buffer.
- [convolve(with:divisor:bias:edgeMode:destination:)](convolve%28with_divisor_bias_edgemode_destination_%29-1oul9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:divisors:biases:edgeMode:destination:)](convolve%28with_divisors_biases_edgemode_destination_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer with separate kernels for each channel.
- [convolve(with:bias:edgeMode:destination:)](convolve%28with_bias_edgemode_destination_%29-8syhw.md): Conforms when `Format` is `vImage.InterleavedFx4`. Convolves a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:divisor:bias:edgeMode:destination:)](convolve%28with_divisor_bias_edgemode_destination_%29-4jjbx.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Convolves an 8-bit multiple plane pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](convolve%28with_bias_edgemode_destination_%29-3219s.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Convolves a 32-bit multiple plane pixel buffer.
- [vImage.EdgeMode](../edgemode.md): Constants that specify edge modes for convolution operations.
- [vImage.ConvolutionKernel2D](../convolutionkernel2d.md): A 2D matrix that represents a convolution kernel.
