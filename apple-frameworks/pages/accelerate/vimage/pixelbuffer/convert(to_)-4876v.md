> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convert(to:)-4876v](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:)-4876v)

# convert(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the contents of the floating-point 16-bit planar pixel buffer to 32-bit planar format.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.PlanarF>)
```

## Parameters

- `destination`: The destination pixel buffer.

## See Also

### Conversion from 16-bit to 32-bit

- [convert(to:)](convert%28to_%29-1xpk2.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Converts the contents of the floating-point 16-bit-per-channel, 2-channel interleaved pixel buffer to 32-bit-per-channel format.
- [convert(to:)](convert%28to_%29-674t9.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Converts the contents of the unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.
- [convert(to:)](convert%28to_%29-8ljhz.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Converts the contents of the floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.
