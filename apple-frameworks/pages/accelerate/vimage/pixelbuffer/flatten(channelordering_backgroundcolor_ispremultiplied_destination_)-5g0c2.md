> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/flatten(channelordering:backgroundcolor:ispremultiplied:destination:)-5g0c2](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/flatten(channelordering:backgroundcolor:ispremultiplied:destination:)-5g0c2)

# flatten(channelOrdering:backgroundColor:isPremultiplied:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Transforms an 32-bit-per-channel RGBA or ARGB buffer to an RGB buffer against an opaque background color.

## Declaration

```swift
func flatten(channelOrdering: vImage.ChannelOrdering, backgroundColor: Pixel_FFFF, isPremultiplied: Bool, destination: vImage.PixelBuffer<vImage.InterleavedFx3>)
```

## Parameters

- `channelOrdering`: The channel ordering of the source buffer.
- `backgroundColor`: The background color that the function composites against.
- `isPremultiplied`: A Boolean values that specifies whether the source image is premultiplied.
- `destination`: The destination pixel buffer.

## See Also

### Flattening Channels

- [flatten(channelOrdering:backgroundColor:isPremultiplied:destination:)](flatten%28channelordering_backgroundcolor_ispremultiplied_destination_%29-97nx.md): Conforms when `Format` is `vImage.Interleaved8x4`. Transforms an 8-bit-per-channel RGBA or ARGB buffer to an RGB buffer against an opaque background color.
- [vImage.ChannelOrdering](../channelordering.md): Constants that specify the channel ordering of a pixel buffer.
