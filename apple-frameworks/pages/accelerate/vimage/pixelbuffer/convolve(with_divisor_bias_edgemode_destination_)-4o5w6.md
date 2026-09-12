> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convolve(with:divisor:bias:edgemode:destination:)-4o5w6](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convolve(with:divisor:bias:edgemode:destination:)-4o5w6)

# convolve(with:divisor:bias:edgeMode:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Convolves an 8-bit planar pixel buffer.

## Declaration

```swift
func convolve(with kernel: vImage.ConvolutionKernel2D<Int16>, divisor: Int32?, bias: Int32? = nil, edgeMode: vImage.EdgeMode<Pixel_8>, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `kernel`: The convolution kernel.
- `divisor`: A value that the operation divides the results of the convolution by. Pass `nil` to specify that the function calculates the divisor as the sum of the kernel values.
- `bias`: An optional value that the operation adds to the sum of weighted pixels before it applies the divisor.
- `edgeMode`: The convolution edge mode.
- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Blurring an image](../../blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.

### General convolution

- [convolve(with:bias:edgeMode:useFloat16Accumulator:destination:)](convolve%28with_bias_edgemode_usefloat16accumulator_destination_%29-1xkvu.md): Conforms when `Format` is `vImage.Planar16F`. Convolves a floating-point 16-bit planar pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](convolve%28with_bias_edgemode_destination_%29-tn07.md): Conforms when `Format` is `vImage.PlanarF`. Convolves a 32-bit planar pixel buffer.
- [convolve(with:divisor:bias:edgeMode:destination:)](convolve%28with_divisor_bias_edgemode_destination_%29-1oul9.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:divisors:biases:edgeMode:destination:)](convolve%28with_divisors_biases_edgemode_destination_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Convolves an 8-bit-per-channel, 4-channel interleaved pixel buffer with separate kernels for each channel.
- [convolve(with:bias:edgeMode:useFloat16Accumulator:destination:)](convolve%28with_bias_edgemode_usefloat16accumulator_destination_%29-81lqa.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Convolves a floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](convolve%28with_bias_edgemode_destination_%29-8syhw.md): Conforms when `Format` is `vImage.InterleavedFx4`. Convolves a 32-bit-per-channel, 4-channel interleaved pixel buffer.
- [convolve(with:divisor:bias:edgeMode:destination:)](convolve%28with_divisor_bias_edgemode_destination_%29-4jjbx.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `UInt8`. Convolves an 8-bit multiple plane pixel buffer.
- [convolve(with:bias:edgeMode:destination:)](convolve%28with_bias_edgemode_destination_%29-3219s.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat` and `Format.ComponentType` is `Float`. Convolves a 32-bit multiple plane pixel buffer.
- [vImage.EdgeMode](../edgemode.md): Constants that specify edge modes for convolution operations.
- [vImage.ConvolutionKernel2D](../convolutionkernel2d.md): A 2D matrix that represents a convolution kernel.
