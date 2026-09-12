> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/permutechannels(to:destination:)-tr2h](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/permutechannels(to:destination:)-tr2h)

# permuteChannels(to:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Permutes the channels of an 8-bit-per-channel, 4-channel interleaved pixel buffer.

## Declaration

```swift
func permuteChannels(to permuteMap: (UInt8, UInt8, UInt8, UInt8), destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `permuteMap`: A tuple of four 8-bit integers with the values 0, 1, 2, and 3, in some order.
- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

For example, the following code reverses the channel ordering of a pixel buffer:

```swift
let buffer = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [10, 20, 30, 40],
    size: vImage.Size(width: 1,
                      height: 1))

buffer.permuteChannels(to: (3, 2, 1, 0),
                       destination: buffer)

// Prints "[40, 30, 20, 10]"
print(buffer.array)
```

## See Also

### Permuting Channels

- [permuteChannels(to:destination:)](permutechannels%28to_destination_%29-4y4rh.md): Conforms when `Format` is `vImage.Interleaved8x3`. Permutes the channels of an 8-bit-per-channel, 3-channel interleaved pixel buffer.
- [permuteChannels(to:destination:)](permutechannels%28to_destination_%29-8y213.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Permutes the channels of an unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [permuteChannels(to:destination:)](permutechannels%28to_destination_%29-74dmh.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Permutes the channels of a floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer.
- [permuteChannels(to:destination:)](permutechannels%28to_destination_%29-6n6yi.md): Conforms when `Format` is `vImage.InterleavedFx4`. Permutes the channels of an 32-bit-per-channel, 4-channel interleaved pixel buffer.
