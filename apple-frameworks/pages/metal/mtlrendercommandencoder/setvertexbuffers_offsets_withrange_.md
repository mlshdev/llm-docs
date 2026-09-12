> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbuffers:offsets:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbuffers:offsets:withrange:)

# setVertexBuffers:offsets:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns multiple buffers to a range of entries in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexBuffers:(id<MTLBuffer> const[]) buffers offsets:(const NSUInteger[]) offsets withRange:(NSRange) range;
```

## Parameters

- `buffers`: A pointer to a C array of [MTLBuffer](../mtlbuffer.md) instances the command assigns to entries in the vertex shader argument table for buffers.
- `offsets`: A pointer to a C array of unsigned integers. Each element represents the location, in bytes, from the start of the corresponding [MTLBuffer](../mtlbuffer.md) element in `buffers` where the vertex shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `range`: A span of integers that represent the entries in the vertex shader argument table for buffers. Each entry stores a record of the corresponding element in `buffers` and `offsets`.

<a id="discussion"></a>

## Discussion

By default, the buffer at each index is `nil`.

> **Note**

>  The Swift version of this method is [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md).

## See Also

### Assigning buffers

- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer:offset:attributeStride:atIndex:](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers:offsets:attributeStrides:withRange:](setvertexbuffers_offsets_attributestrides_withrange_.md)
- [setVertexBytes:length:atIndex:](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes:length:attributeStride:atIndex:](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset:atIndex:](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset:attributeStride:atIndex:](setvertexbufferoffset%28offset_attributestride_index_%29.md)
