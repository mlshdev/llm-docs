> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmesh/layout/bufferindex

# bufferIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The index of the buffer to use for this layout.

## Declaration

```swift
var bufferIndex: Int
```

<a id="discussion"></a>

## Discussion

Most usage scenarios only use one buffer. Use a buffer index that is less than [vertexBufferCount](../descriptor-swift.struct/vertexbuffercount.md).

## See Also

### Describing a low-level mesh layout

- [bufferOffset](bufferoffset.md): The byte offset into the buffer for the first byte of this layout.
- [bufferStride](bufferstride.md): The distance, in bytes, between consecutive vertices for attributes using this layout.
