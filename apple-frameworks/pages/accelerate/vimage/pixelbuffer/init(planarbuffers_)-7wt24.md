> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(planarbuffers:)-7wt24](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(planarbuffers:)-7wt24)

# init(planarBuffers:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a 3-channel, 32-bit-per-channel interleaved buffer from three 32-bit planar buffers.

## Declaration

```swift
init(planarBuffers: [vImage.PixelBuffer<vImage.PlanarF>])
```

## Parameters

- `planarBuffers`: An array that contains three 32-bit planar buffers.

<a id="Discussion"></a>

## Discussion

Use this function to interleave three discrete planar buffers. For example, the following code creates a three-channel interleaved buffer from three planar buffers:

```swift
let planar0 = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [Float(0.1), Float(0.2)],
    size: vImage.Size(width: 2, height: 1))

let planar1 = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [Float(0.3), Float(0.4)],
    size: vImage.Size(width: 2, height: 1))

let planar2 = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [Float(0.5), Float(0.6)],
    size: vImage.Size(width: 2, height: 1))

let interleaved = vImage.PixelBuffer<vImage.InterleavedFx3>(
    planarBuffers: [planar0, planar1, planar2])

// Prints "[0.1, 0.3, 0.5, 0.2, 0.4, 0.6]"
print(interleaved.array)
```

## See Also

### Creating an interleaved buffer from another buffer

- [init(planarBuffers:)](init%28planarbuffers_%29-727d.md): Conforms when `Format` is `vImage.Interleaved8x2`. Creates a 2-channel, 8-bit-per-channel interleaved buffer from two 8-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-6r9p0.md): Conforms when `Format` is `vImage.Interleaved8x3`. Creates a 3-channel, 8-bit-per-channel interleaved buffer from three 8-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-6hkso.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from four 8-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-8nt2j.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from four 32-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-n2mq.md): Conforms when `Format` is `vImage.InterleavedFx2`. Creates a 2-channel, 32-bit-per-channel interleaved buffer from two 32-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-59s4n.md): Conforms when `Format` is `vImage.InterleavedFx4`. Creates a 4-channel, 32-bit-per-channel interleaved buffer from four 32-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-2575t.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Creates a 4-channel, 16-bit-per-channel interleaved buffer from four 16-bit planar buffers.
- [init(lumaSource:chromaSource:conversionInfo:)](init%28lumasource_chromasource_conversioninfo_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from a planar Yp buffer and a two-channel interleaved CbCr buffer.
- [init(interleavedBuffer:)](init%28interleavedbuffer_%29-35or3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Creates a 4-channel, 32-bit-per-channel interleaved buffer from a 4-channel, 8-bit-per-channel interleaved buffer.
