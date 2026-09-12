> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/planarbuffers()-1rj01](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/planarbuffers()-1rj01)

# planarBuffers()

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns two 32-bit planar pixel buffers that contain the deinterleaved channels of the buffer.

## Declaration

```swift
func planarBuffers() -> [vImage.PixelBuffer<vImage.PlanarF>]
```

<a id="return-value"></a>

## Return Value

An array of planar pixel buffers.

<a id="Discussion"></a>

## Discussion

Use this function to deinterleave a buffer and create two new planar buffers that contain copies of each source channel. For example, the following code generates two 1 x 1 planar buffers from an [vImage.InterleavedFx2](../interleavedfx2.md) pixel buffer:

```swift
let src = vImage.PixelBuffer<vImage.InterleavedFx2>(
    pixelValues: [0.125, 0.25, 0.5, 1] as [Float],
    size: vImage.Size(width: 2, height: 1))

let planarBuffers = src.planarBuffers()

// Prints "[0.125, 0.5] [0.25, 1.0]"
for planarBuffer in planarBuffers {
    print(planarBuffer.array)
}
```

## See Also

### Generating planar buffers from interleaved buffers

- [planarBuffers()](planarbuffers%28%29-462ja.md): Conforms when `Format` is `vImage.Interleaved8x2`. Returns two 8-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](planarbuffers%28%29-5r3ds.md): Conforms when `Format` is `vImage.Interleaved8x3`. Returns three 8-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](planarbuffers%28%29-5rx2w.md): Conforms when `Format` is `vImage.Interleaved8x4`. Returns four 8-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](planarbuffers%28%29-4qws5.md): Conforms when `Format` is `vImage.Interleaved8x4`. Returns four 32-bit planar pixel buffers that contain the deinterleaved channels of the 8-bit buffer.
- [planarBuffers()](planarbuffers%28%29-49gf9.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Returns four unsigned 16-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](planarbuffers%28%29-82ook.md): Conforms when `Format` is `vImage.InterleavedFx3`. Returns three 32-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
- [planarBuffers()](planarbuffers%28%29-l33r.md): Conforms when `Format` is `vImage.InterleavedFx4`. Returns four 8-bit planar pixel buffers that contain the deinterleaved channels of the 32-bit buffer.
- [planarBuffers()](planarbuffers%28%29-35dnv.md): Conforms when `Format` is `vImage.InterleavedFx4`. Returns four 32-bit planar pixel buffers that contain the deinterleaved channels of the buffer.
