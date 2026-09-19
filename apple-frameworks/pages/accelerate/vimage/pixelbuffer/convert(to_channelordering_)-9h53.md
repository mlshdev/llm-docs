> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:channelordering:)-9h53

# convert(to:channelOrdering:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts the 8-bit-per-channel RGBA or ARGB pixel buffer to RGB.

## Declaration

```swift
func convert(to destination: vImage.PixelBuffer<vImage.Interleaved8x3>, channelOrdering: vImage.ChannelOrdering)
```

## Parameters

- `destination`: The destination pixel buffer.
- `channelOrdering`: An enumeration that specifies whether the source is either ARGB or RGBA.

## See Also

### Conversion from four channels to three channels

- [convert(to:channelOrdering:)](convert%28to_channelordering_%29-1nll2.md): Conforms when `Format` is `vImage.InterleavedFx4`. Converts the 32-bit-per-channel RGBA or ARGB pixel buffer to RGB.
