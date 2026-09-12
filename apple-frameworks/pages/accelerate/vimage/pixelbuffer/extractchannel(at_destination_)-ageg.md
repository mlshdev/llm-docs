> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/extractchannel(at:destination:)-ageg](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/extractchannel(at:destination:)-ageg)

# extractChannel(at:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Extracts a single channel from an 8-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func extractChannel(at channelIndex: Int, destination: vImage.PixelBuffer<vImage.Planar8>)
```

## Parameters

- `channelIndex`: The index of the channel that the function extracts.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

For example, the following code extracts channel \`2\` from a four-channel pixel buffer.

```swift
let src = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [10, 11, 12, 13,
                  20, 21, 22, 23,
                  30, 31, 32, 33],
    size: vImage.Size(width: 1, height: 3))

let dest = vImage.PixelBuffer<vImage.Planar8>(
    size: src.size)

src.extractChannel(at: 2,
                   destination: dest)

// Prints "[12, 22, 32]"
print(dest.array)
```

## See Also

### Extracting Channels

- [extractChannel(at:destination:)](extractchannel%28at_destination_%29-i1zm.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Extracts a single channel from an unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [extractChannel(at:destination:)](extractchannel%28at_destination_%29-8xrq1.md): Conforms when `Format` is `vImage.InterleavedFx4`. Extracts a single channel from an 32-bit-per-channel, 4-channel interleaved pixel buffer.
