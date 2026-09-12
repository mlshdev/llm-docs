> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbuffer(_:offset:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbuffer(_:offset:index:))

# setVertexBuffer(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a buffer to an entry in the vertex shader argument table.

## Declaration

```swift
func setVertexBuffer(_ buffer: (any MTLBuffer)?, offset: Int, index: Int)
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance the command assigns to an entry in the vertex shader argument table for buffers.
- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the vertex shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the vertex shader argument table for buffers that stores a record of `buffer` and `offset`.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setVertexBuffer(\_:offset:attributeStride:index:)](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers(\_:offsets:attributeStrides:range:)](setvertexbuffers%28__offsets_attributestrides_range_%29.md)
- [setVertexBytes(\_:length:index:)](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes(\_:length:attributeStride:index:)](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset(\_:index:)](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset(offset:attributeStride:index:)](setvertexbufferoffset%28offset_attributestride_index_%29.md)

# setVertexBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a buffer to an entry in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance the command assigns to an entry in the vertex shader argument table for buffers.
- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the vertex shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the vertex shader argument table for buffers that stores a record of `buffer` and `offset`.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setVertexBuffer:offset:attributeStride:atIndex:](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers:offsets:attributeStrides:withRange:](setvertexbuffers_offsets_attributestrides_withrange_.md)
- [setVertexBytes:length:atIndex:](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes:length:attributeStride:atIndex:](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset:atIndex:](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset:attributeStride:atIndex:](setvertexbufferoffset%28offset_attributestride_index_%29.md)
