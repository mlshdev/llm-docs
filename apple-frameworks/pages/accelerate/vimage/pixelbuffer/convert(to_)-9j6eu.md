> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convert(to:)-9j6eu](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:)-9j6eu)

# convert(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the contents of the 8-bit-per-channel, 4-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.Interleaved16Ux4>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function converts the source values in the range `[0, 255]` to the destination range `[0, UInt16.max]`.

## See Also

### Conversion from 8-bit to 16-bit

- [convert(to:)](convert%28to_%29-3wpdu.md): Conforms when `Format` is `vImage.Planar8`. Converts the contents of the 8-bit planar pixel buffer to floating-point 16-bit planar format.
- [convert(to:)](convert%28to_%29-4v16.md): Conforms when `Format` is `vImage.Interleaved8x2`. Converts the contents of the 8-bit-per-channel, 2-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](convert%28to_%29-6ci2d.md): Conforms when `Format` is `vImage.Interleaved8x4`. Converts the contents of the 8-bit-per-channel, 4-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
