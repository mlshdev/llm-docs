> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbytes(_:length:attributestride:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbytes(_:length:attributestride:index:))

# setVertexBytes(\_:length:attributeStride:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
func setVertexBytes(_ bytes: UnsafeRawPointer, length: Int, attributeStride stride: Int, index: Int)
```

## See Also

### Assigning buffers

- [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer(\_:offset:attributeStride:index:)](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers(\_:offsets:attributeStrides:range:)](setvertexbuffers%28__offsets_attributestrides_range_%29.md)
- [setVertexBytes(\_:length:index:)](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBufferOffset(\_:index:)](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset(offset:attributeStride:index:)](setvertexbufferoffset%28offset_attributestride_index_%29.md)

# setVertexBytes:length:attributeStride:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) setVertexBytes:(const void *) bytes length:(NSUInteger) length attributeStride:(NSUInteger) stride atIndex:(NSUInteger) index;
```

## See Also

### Assigning buffers

- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer:offset:attributeStride:atIndex:](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers:offsets:attributeStrides:withRange:](setvertexbuffers_offsets_attributestrides_withrange_.md)
- [setVertexBytes:length:atIndex:](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBufferOffset:atIndex:](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset:attributeStride:atIndex:](setvertexbufferoffset%28offset_attributestride_index_%29.md)
