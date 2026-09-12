> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbufferoffset(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbufferoffset(_:index:))

# setVertexBufferOffset(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.

## Declaration

```swift
func setVertexBufferOffset(_ offset: Int, index: Int)
```

## Parameters

- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the vertex shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the vertex shader argument table for buffers that already stores a record of an [MTLBuffer](../mtlbuffer.md).

<a id="discussion"></a>

## Discussion

The command this method encodes changes the offset for a fragment buffer that already has a previous assignment from one of your earlier commands.

For more information, see:

- [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md) (Swift)
- [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md) (Objective-C)

The command can also adjust the offset for an entry that you previously set with the [setVertexBytes(\_:length:index:)](setvertexbytes%28__length_index_%29.md) method.

> **Tip**

>  If you’re only updating an offset, this method is typically more efficient than rebinding a buffer or byte block with the methods above.

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer(\_:offset:attributeStride:index:)](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers(\_:offsets:attributeStrides:range:)](setvertexbuffers%28__offsets_attributestrides_range_%29.md)
- [setVertexBytes(\_:length:index:)](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes(\_:length:attributeStride:index:)](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset(offset:attributeStride:index:)](setvertexbufferoffset%28offset_attributestride_index_%29.md)

# setVertexBufferOffset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.

## Declaration

```objectivec
- (void) setVertexBufferOffset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the vertex shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the vertex shader argument table for buffers that already stores a record of an [MTLBuffer](../mtlbuffer.md).

<a id="discussion"></a>

## Discussion

The command this method encodes changes the offset for a fragment buffer that already has a previous assignment from one of your earlier commands.

For more information, see:

- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md) (Swift)
- [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md) (Objective-C)

The command can also adjust the offset for an entry that you previously set with the [setVertexBytes:length:atIndex:](setvertexbytes%28__length_index_%29.md) method.

> **Tip**

>  If you’re only updating an offset, this method is typically more efficient than rebinding a buffer or byte block with the methods above.

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer:offset:attributeStride:atIndex:](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers:offsets:attributeStrides:withRange:](setvertexbuffers_offsets_attributestrides_withrange_.md)
- [setVertexBytes:length:atIndex:](setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes:length:attributeStride:atIndex:](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset:attributeStride:atIndex:](setvertexbufferoffset%28offset_attributestride_index_%29.md)
