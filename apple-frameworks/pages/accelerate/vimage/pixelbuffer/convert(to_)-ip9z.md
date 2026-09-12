> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convert(to:)-ip9z](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:)-ip9z)

# convert(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the contents of the floating-point 16-bit planar pixel buffer to unsigned 16-bit planar format.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.Planar16U>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function converts the source values in the range `[0.0, 1.0]` to the destination range `[0, UInt16.max]`. The conversion clamps source values to the range `[0.0, 1.0]`.

## See Also

### Conversion between 16-bit formats

- [convert(to:)](convert%28to_%29-1zk6k.md): Conforms when `Format` is `vImage.Planar16U`. Converts the contents of the unsigned 16-bit planar pixel buffer to floating-point 16-bit planar format.
- [convert(to:)](convert%28to_%29-7dx2c.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Converts the contents of the floating-point 16-bit-per-channel, 2-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.
- [convert(to:)](convert%28to_%29-7tdb1.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Converts the contents of the unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](convert%28to_%29-3lg9p.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Converts the contents of the floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.
- [convert(to:)](convert%28to_%29-8u16v.md): Conforms when `Format` is `vImage.Interleaved16Ux2`. Converts the contents of the unsigned 16-bit-per-channel, 2-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
