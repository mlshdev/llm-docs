> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbuffers(_:offsets:attributestrides:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbuffers(_:offsets:attributestrides:range:))

# setVertexBuffers(\_:offsets:attributeStrides:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
func setVertexBuffers(_ buffers: [(any MTLBuffer)?], offsets: [Int], attributeStrides: [Int], range: Range<Int>)
```

## See Also

### Assigning buffers

- [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer(\_:offset:attributeStride:index:)](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBytes(\_:length:index:)](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes(\_:length:attributeStride:index:)](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset(\_:index:)](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset(offset:attributeStride:index:)](setvertexbufferoffset%28offset_attributestride_index_%29.md)
