> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbuffers:offsets:attributestrides:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbuffers:offsets:attributestrides:withrange:)

# setVertexBuffers:offsets:attributeStrides:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) setVertexBuffers:(id<MTLBuffer> const[]) buffers offsets:(const NSUInteger[]) offsets attributeStrides:(const NSUInteger[]) strides withRange:(NSRange) range;
```

## See Also

### Assigning buffers

- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer:offset:attributeStride:atIndex:](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBytes:length:atIndex:](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes:length:attributeStride:atIndex:](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset:atIndex:](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset:attributeStride:atIndex:](setvertexbufferoffset%28offset_attributestride_index_%29.md)
