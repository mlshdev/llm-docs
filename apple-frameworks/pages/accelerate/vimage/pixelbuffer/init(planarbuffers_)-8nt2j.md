> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(planarbuffers:)-8nt2j](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(planarbuffers:)-8nt2j)

# init(planarBuffers:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a 4-channel, 8-bit-per-channel interleaved buffer from four 32-bit planar buffers.

## Declaration

```swift
init(planarBuffers: [vImage.PixelBuffer<vImage.PlanarF>])
```

## Parameters

- `planarBuffers`: An array that contains four 32-bit planar buffers.

<a id="Discussion"></a>

## Discussion

This function treats floating point pixels represented by the range `0 ... 1` as the [UInt8](https://developer.apple.com/documentation/kernel/uint8) range `0 ... 255`.

Use this function to interleave four discrete planar buffers. For example, the following code creates a four-channel interleaved buffer from four planar buffers:

```swift
let planar0 = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [Float(1.0 / 17)],
    size: vImage.Size(width: 1, height: 1))

let planar1 = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [Float(1.0 / 15)],
    size: vImage.Size(width: 1, height: 1))

let planar2 = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [Float(1.0 / 5)],
    size: vImage.Size(width: 1, height: 1))

let planar3 = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [Float(1.0 / 3)],
    size: vImage.Size(width: 1, height: 1))

let interleaved = vImage.PixelBuffer<vImage.Interleaved8x4>(
    planarBuffers: [planar0, planar1, planar2, planar3])

// Prints "[15, 17, 51, 85]"
// = [255 / 17, 255 / 15, 255 / 5, 255 / 3]
print(interleaved.array)
```

## See Also

### Creating an interleaved buffer from another buffer

- [init(planarBuffers:)](init%28planarbuffers_%29-727d.md): Conforms when `Format` is `vImage.Interleaved8x2`. Creates a 2-channel, 8-bit-per-channel interleaved buffer from two 8-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-6r9p0.md): Conforms when `Format` is `vImage.Interleaved8x3`. Creates a 3-channel, 8-bit-per-channel interleaved buffer from three 8-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-6hkso.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from four 8-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-n2mq.md): Conforms when `Format` is `vImage.InterleavedFx2`. Creates a 2-channel, 32-bit-per-channel interleaved buffer from two 32-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-7wt24.md): Conforms when `Format` is `vImage.InterleavedFx3`. Creates a 3-channel, 32-bit-per-channel interleaved buffer from three 32-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-59s4n.md): Conforms when `Format` is `vImage.InterleavedFx4`. Creates a 4-channel, 32-bit-per-channel interleaved buffer from four 32-bit planar buffers.
- [init(planarBuffers:)](init%28planarbuffers_%29-2575t.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Creates a 4-channel, 16-bit-per-channel interleaved buffer from four 16-bit planar buffers.
- [init(lumaSource:chromaSource:conversionInfo:)](init%28lumasource_chromasource_conversioninfo_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from a planar Yp buffer and a two-channel interleaved CbCr buffer.
- [init(interleavedBuffer:)](init%28interleavedbuffer_%29-35or3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Creates a 4-channel, 32-bit-per-channel interleaved buffer from a 4-channel, 8-bit-per-channel interleaved buffer.
