> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convert(to:)-8hivu](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:)-8hivu)

# convert(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the contents of the 8-bit-per-channel, 3-channel interleaved pixel buffer to 32-bit-per-channel format.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.InterleavedFx3>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

This function converts the source values in the range `[0, 255]` to the destination range `[0.0, 1.0]`.

## See Also

### Conversion from 8-bit to 32-bit

- [convert(to:)](convert%28to_%29-7src4.md): Conforms when `Format` is `vImage.Planar8`. Converts the contents of the 8-bit planar pixel buffer to 32-bit planar format.
- [convert(to:)](convert%28to_%29-1e0nd.md): Conforms when `Format` is `vImage.Interleaved8x4`. Converts the contents of the 8-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.
