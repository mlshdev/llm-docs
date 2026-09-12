> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbuffers(_:offsets:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbuffers(_:offsets:range:))

# setVertexBuffers(\_:offsets:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Assigns multiple buffers to a range of entries in the vertex shader argument table.

## Declaration

```swift
func setVertexBuffers(_ buffers: [(any MTLBuffer)?], offsets: [Int], range: Range<Int>)
```

## Parameters

- `buffers`: An array of [MTLBuffer](../mtlbuffer.md) instances the command assigns to entries in the vertex shader argument table for buffers.
- `offsets`: An array of integers. Each element represents the location, in bytes, from the start of the corresponding [MTLBuffer](../mtlbuffer.md) element in `buffers` where the vertex shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `range`: A span of integers that represent the entries in the vertex shader argument table for buffers. Each entry stores a record of the corresponding element in `buffers` and `offsets`.

<a id="discussion"></a>

## Discussion

By default, the buffer at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md).

## See Also

### Assigning buffers

- [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer(\_:offset:attributeStride:index:)](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers(\_:offsets:attributeStrides:range:)](setvertexbuffers%28__offsets_attributestrides_range_%29.md)
- [setVertexBytes(\_:length:index:)](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes(\_:length:attributeStride:index:)](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset(\_:index:)](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset(offset:attributeStride:index:)](setvertexbufferoffset%28offset_attributestride_index_%29.md)
