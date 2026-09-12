> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/interleave(destination:)-6r7se](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/interleave(destination:)-6r7se)

# interleave(destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Interleaves the 8-bit-per-channel, four-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.

## Declaration

```swift
func interleave(destination: vImage.PixelBuffer<vImage.Interleaved8x4>)
```

## Parameters

- `destination`: The destination pixel buffer.

<a id="Discussion"></a>

## Discussion

Use this function to interleave a buffer and overwrite an interleaved buffer with a copy of the source channels.

## See Also

### Interleaving pixel buffers

- [interleave(destination:)](interleave%28destination_%29-46cgi.md): Conforms when `Format` is `vImage.Planar8x3`. Interleaves the 8-bit-per-channel, three-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.
- [interleave(destination:)](interleave%28destination_%29-5ewup.md): Conforms when `Format` is `vImage.PlanarFx3`. Interleaves the 32-bit-per-channel, three-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.
- [interleave(destination:)](interleave%28destination_%29-6ib0t.md): Conforms when `Format` is `vImage.PlanarFx4`. Interleaves the 32-bit-per-channel, four-channel multiple-plane buffer and writes the result to an interleaved pixel buffer.
- [interleave(planarSourceBuffers:)](interleave%28planarsourcebuffers_%29-10yj5.md): Conforms when `Format` is `vImage.Interleaved8x3`. Interleaves the specified planar source buffers and writes the result to the 8-bit-per-channel, three-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](interleave%28planarsourcebuffers_%29-67l5.md): Conforms when `Format` is `vImage.Interleaved8x4`. Interleaves the specified planar source buffers and writes the result to the 8-bit-per-channel, four-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](interleave%28planarsourcebuffers_%29-7qcri.md): Conforms when `Format` is `vImage.Interleaved16Fx4`. Interleaves the specified planar source buffers and writes the result to the 16-bit-per-channel, four-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](interleave%28planarsourcebuffers_%29-1i8we.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Interleaves the specified planar source buffers and writes the result to the unsigned 16-bit-per-channel, four-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](interleave%28planarsourcebuffers_%29-4qotd.md): Conforms when `Format` is `vImage.InterleavedFx3`. Interleaves the specified planar source buffers and writes the result to the 32-bit-per-channel, three-channel interleaved buffer.
- [interleave(planarSourceBuffers:)](interleave%28planarsourcebuffers_%29-7e6cy.md): Conforms when `Format` is `vImage.InterleavedFx4`. Interleaves the specified planar source buffers and writes the result to the 32-bit-per-channel, four-channel interleaved buffer.
