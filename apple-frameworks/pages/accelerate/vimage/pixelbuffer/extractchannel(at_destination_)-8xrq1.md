> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/extractchannel(at:destination:)-8xrq1](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/extractchannel(at:destination:)-8xrq1)

# extractChannel(at:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Extracts a single channel from an 32-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func extractChannel(at channelIndex: Int, destination: vImage.PixelBuffer<vImage.PlanarF>)
```

## Parameters

- `channelIndex`: The index of the channel that the function extracts.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

For example, the following code extracts channel \`2\` from a four-channel pixel buffer.

```swift
let src = vImage.PixelBuffer<vImage.InterleavedFx4>(
    pixelValues: [0.10, 0.11, 0.12, 0.13,
                  0.20, 0.21, 0.22, 0.23,
                  0.30, 0.31, 0.32, 0.33],
    size: vImage.Size(width: 1, height: 3))

let dest = vImage.PixelBuffer<vImage.PlanarF>(
    size: src.size)

src.extractChannel(at: 2,
                   destination: dest)

// Prints "[0.12, 0.22, 0.32]"
print(dest.array)
```

## See Also

### Extracting Channels

- [extractChannel(at:destination:)](extractchannel%28at_destination_%29-ageg.md): Conforms when `Format` is `vImage.Interleaved8x4`. Extracts a single channel from an 8-bit-per-channel, 4-channel interleaved pixel buffer.
- [extractChannel(at:destination:)](extractchannel%28at_destination_%29-i1zm.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Extracts a single channel from an unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer.
