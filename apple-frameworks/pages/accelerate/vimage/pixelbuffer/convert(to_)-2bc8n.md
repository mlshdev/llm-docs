> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convert(to:)-2bc8n](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:)-2bc8n)

# convert(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the contents of the 32-bit planar pixel buffer to floating-point 16-bit planar format.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.Planar16F>)
```

## Parameters

- `destination`: The destination pixel buffer.

## See Also

### Conversion from 32-bit to 16-bit

- [convert(to:)](convert%28to_%29-56zhe.md): Conforms when `Format` is `vImage.InterleavedFx2`. Converts the contents of the 32-bit-per-channel, 2-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](convert%28to_%29-1132q.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the contents of the 32-bit-per-channel, 4-channel interleaved pixel buffer to floating-point 16-bit-per-channel format.
- [convert(to:)](convert%28to_%29-2dbbo.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the contents of the 32-bit-per-channel, 4-channel interleaved pixel buffer to unsigned 16-bit-per-channel format.
