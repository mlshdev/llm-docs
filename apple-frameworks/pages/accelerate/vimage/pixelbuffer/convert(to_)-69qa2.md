> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convert(to:)-69qa2](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:)-69qa2)

# convert(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the contents of the 32-bit-per-channel, 3-channel interleaved pixel buffer to 8-bit-per-channel format.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.Interleaved8x3>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function converts the source values in the range `[0.0, 1.0]` to the destination range `[0, 255]`. The conversion clamps source values to the range `[0.0, 1.0]`.

## See Also

### Conversion from 32-bit to 8-bit

- [convert(to:)](convert%28to_%29-1ka0r.md): Conforms when `Format` is `vImage.PlanarF`. Converts the contents of the 32-bit planar pixel buffer to 8-bit planar format.
- [convert(to:)](convert%28to_%29-24xu0.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the contents of the 32-bit-per-channel, 4-channel interleaved pixel buffer to 8-bit-per-channel format.
