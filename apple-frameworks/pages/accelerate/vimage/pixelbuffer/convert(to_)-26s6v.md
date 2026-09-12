> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/convert(to:)-26s6v](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:)-26s6v)

# convert(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the contents of a 32-bit, four-plane pixel buffer to a four-channel interleaved pixel buffer.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.InterleavedFx4>)
```

## Parameters

- `destination`: The destination pixel buffer.

## See Also

### Converting from 32-bit multiple plane to 32-bit interleaved

- [convert(to:)](convert%28to_%29-8bqjc.md): Conforms when `Format` is `vImage.PlanarFx3`. Converts the contents of a 32-bit, three-plane pixel buffer to a three-channel interleaved pixel buffer.
