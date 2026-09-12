> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/reflect(over:destination:)-fg4a](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/reflect(over:destination:)-fg4a)

# reflect(over:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Reflects an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.

## Declaration

```swift
func reflect(over axis: vImage.ReflectionAxis, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `axis`: The reflection axis.
- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Applying geometric transforms to images](../../applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.

### Reflecting images

- [reflect(over:destination:)](reflect%28over_destination_%29-9ezqm.md): Conforms when `Format` is `vImage.Planar8`. Reflects an 8-bit planar pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](reflect%28over_destination_%29-529j0.md): Conforms when `Format` is `vImage.Planar16F`. Reflects a floating-point 16-bit planar pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](reflect%28over_destination_%29-4i4vi.md): Conforms when `Format` is `vImage.PlanarF`. Reflects a 32-bit planar pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](reflect%28over_destination_%29-6syq1.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Reflects a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](reflect%28over_destination_%29-7o9tt.md): Conforms when `Format` is `vImage.Interleaved8x4`. Reflects an 8-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](reflect%28over_destination_%29-97wi9.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Reflects a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.
- [reflect(over:destination:)](reflect%28over_destination_%29-7b1md.md): Conforms when `Format` is `vImage.InterleavedFx4`. Reflects a 32-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.
- [vImage.ReflectionAxis](../reflectionaxis.md): The axis to reflect an image.
