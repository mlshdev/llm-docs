> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/deinterleave(destination:)-7hep3](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/deinterleave(destination:)-7hep3)

# deinterleave(destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Deinterleaves the 32-bit-per-channel, four-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.

## Declaration

```swift
func deinterleave(destination: vImage.PixelBuffer<vImage.PlanarFx4>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to deinterleave a buffer and overwrite a multiple-plane pixel buffer with copies of each source channel.

## See Also

### Deinterleaving pixel buffers

- [deinterleave(destination:)](deinterleave%28destination_%29-hrhz.md): Conforms when `Format` is `vImage.Interleaved8x3`. Deinterleaves the 8-bit-per-channel, three-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.
- [deinterleave(destination:)](deinterleave%28destination_%29-4bj4f.md): Conforms when `Format` is `vImage.Interleaved8x4`. Deinterleaves the 8-bit-per-channel, four-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.
- [deinterleave(destination:)](deinterleave%28destination_%29-9gkke.md): Conforms when `Format` is `vImage.InterleavedFx3`. Deinterleaves the 32-bit-per-channel, three-channel interleaved buffer and writes the result to a multiple-plane pixel buffer.
- [deinterleave(planarDestinationBuffers:)](deinterleave%28planardestinationbuffers_%29-72108.md): Conforms when `Format` is `vImage.Interleaved8x3`. Deinterleaves the 8-bit-per-channel, three-channel interleaved buffer and writes the result to an array that contains three planar buffers.
- [deinterleave(planarDestinationBuffers:)](deinterleave%28planardestinationbuffers_%29-3u4kn.md): Conforms when `Format` is `vImage.Interleaved8x4`. Deinterleaves the 8-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.
- [deinterleave(planarDestinationBuffers:)](deinterleave%28planardestinationbuffers_%29-75uki.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Deinterleaves the 16-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.
- [deinterleave(planarDestinationBuffers:)](deinterleave%28planardestinationbuffers_%29-3irjf.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Deinterleaves the unsigned 16-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.
- [deinterleave(planarDestinationBuffers:)](deinterleave%28planardestinationbuffers_%29-2gt2g.md): Conforms when `Format` is `vImage.InterleavedFx3`. Deinterleaves the 32-bit-per-channel, three-channel interleaved buffer and writes the result to an array that contains three planar buffers.
- [deinterleave(planarDestinationBuffers:)](deinterleave%28planardestinationbuffers_%29-iag8.md): Conforms when `Format` is `vImage.InterleavedFx4`. Deinterleaves the 32-bit-per-channel, four-channel interleaved buffer and writes the result to an array that contains four planar buffers.
