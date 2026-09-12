> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(interleavedbuffer:)-2hc6f](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(interleavedbuffer:)-2hc6f)

# init(interleavedBuffer:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a 4-channel, 32-bit-per-channel multiple-plane buffer from a 4-channel, 32-bit-per-channel interleaved buffer.

## Declaration

```swift
init(interleavedBuffer: vImage.PixelBuffer<vImage.InterleavedFx4>)
```

## Parameters

- `interleavedBuffer`: The source pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to deinterleave a pixel buffer and store the result as homogeneous planes that are represented by multiple underlying vImage buffers.

For example, the following code creates a new [vImage.PlanarFx4](../planarfx4.md) pixel buffer from a [vImage.InterleavedFx4](../interleavedfx4.md) pixel buffer:

```swift
let src = vImage.PixelBuffer<vImage.InterleavedFx4>(
    pixelValues: [0.2, 0.4, 0.6, 0.8] as [Float],
    size: vImage.Size(width: 1, height: 1))

let dest = vImage.PixelBuffer<vImage.PlanarFx4>(interleavedBuffer: src)

// Prints "[0.2] [0.4] [0.6] [0.8]"
dest.withUnsafePixelBuffers { pixelBuffers in
    for pixelBuffer in pixelBuffers {
        print(pixelBuffer.array)
    }
}
```

## See Also

### Creating a multiple-plane buffer from an interleaved buffer

- [init(interleavedBuffer:)](init%28interleavedbuffer_%29-9xct6.md): Conforms when `Format` is `vImage.Planar8x3`. Creates a 3-channel, 8-bit-per-channel multiple-plane buffer from a 3-channel, 8-bit-per-channel interleaved buffer.
- [init(interleavedBuffer:)](init%28interleavedbuffer_%29-8f6xn.md): Conforms when `Format` is `vImage.Planar8x4`. Creates a 4-channel, 8-bit-per-channel mutiple-plane buffer from a 4-channel, 8-bit-per-channel interleaved buffer.
- [init(interleavedBuffer:)](init%28interleavedbuffer_%29-77n3i.md): Conforms when `Format` is `vImage.PlanarFx3`. Creates a 3-channel, 32-bit-per-channel multiple-plane buffer from a 3-channel, 32-bit-per-channel interleaved buffer.
