> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/scale(destination:)-9si6m](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/scale(destination:)-9si6m)

# scale(destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Scales an unsigned 16-bit planar pixel buffer to fit the destination buffer.

## Declaration

```swift
func scale(destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Applying geometric transforms to images](../../applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.

### Scaling images

- [scale(destination:)](scale%28destination_%29-5euvc.md): Conforms when `Format` is `vImage.Planar8`. Scales an 8-bit planar pixel buffer to fit the destination buffer.
- [scale(useFloat16Accumulator:destination:)](scale%28usefloat16accumulator_destination_%29-5lt9n.md): Conforms when `Format` is `vImage.Planar16F`. Scales a floating-point 16-bit planar pixel buffer to fit the destination buffer.
- [scale(destination:)](scale%28destination_%29-6xwro.md): Conforms when `Format` is `vImage.PlanarF`. Scales a 32-bit planar pixel buffer to fit the destination buffer.
- [scale(destination:)](scale%28destination_%29-6gy9p.md): Conforms when `Format` is `vImage.Interleaved8x2`. Scales an 8-bit-per-channel, two-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](scale%28destination_%29-4p5r6.md): Conforms when `Format` is `vImage.Interleaved16Ux2`. Scales an unsigned 16-bit-per-channel, two-channel interleaved pixel buffer to fit the destination buffer.
- [scale(useFloat16Accumulator:destination:)](scale%28usefloat16accumulator_destination_%29-thg7.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Scales a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](scale%28destination_%29-y1zi.md): Conforms when `Format` is `vImage.Interleaved8x4`. Scales an 8-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](scale%28destination_%29-5tpok.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Scales an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.
- [scale(useFloat16Accumulator:destination:)](scale%28usefloat16accumulator_destination_%29-st2u.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Scales a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.
- [scale(destination:)](scale%28destination_%29-2hqm3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Scales a 32-bit-per-channel, four-channel interleaved pixel buffer to fit the destination buffer.
