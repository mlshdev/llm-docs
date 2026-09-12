> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/drawindexedprimitives(type:indexcount:indextype:indexbuffer:indexbufferoffset:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/drawindexedprimitives(type:indexcount:indextype:indexbuffer:indexbufferoffset:))

# drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a draw command that renders an instance of a geometric primitive with indexed vertices.

## Declaration

```swift
func drawIndexedPrimitives(type primitiveType: MTLPrimitiveType, indexCount: Int, indexType: MTLIndexType, indexBuffer: any MTLBuffer, indexBufferOffset: Int)
```

## Parameters

- `primitiveType`: An [MTLPrimitiveType](../mtlprimitivetype.md) instance that represents how the command interprets vertex argument data.

  See the [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md) method and its siblings for more information about setting an entry in the vertex shader argument table for buffers.
- `indexCount`: An integer that represents the number of vertices the command reads from `indexBuffer`.
- `indexType`: An [MTLIndexType](../mtlindextype.md) instance that represents the index’s format, including [MTLIndexType.uint16](../mtlindextype/uint16.md) and [MTLIndexType.uint32](../mtlindextype/uint32.md).
- `indexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the `indexCount` vertex indices of the `indexType` format.
- `indexBufferOffset`: An integer that represents the location that’s a multiple of the index size from the start of `indexBuffer` where the vertex indices begin.

<a id="discussion"></a>

## Discussion

You can complete a primitive and start a new one by passing a sentinel index value that’s the largest unsigned integer possible for `indexType`. For example, the largest unsigned integer for [MTLIndexType.uint16](../mtlindextype/uint16.md) and [MTLIndexType.uint32](../mtlindextype/uint32.md) is `0xFFFF` and `0xFFFFFFFF`, respectively. The command finishes the current primitive and begins drawing a new one each time the command reads a sentinel index value.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with indexed vertices

- [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:)](drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:)](drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices, starting with a custom vertex and instance.
- [drawIndexedPrimitives(type:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:)](drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices and indirect arguments.

# drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a draw command that renders an instance of a geometric primitive with indexed vertices.

## Declaration

```objectivec
- (void) drawIndexedPrimitives:(MTLPrimitiveType) primitiveType indexCount:(NSUInteger) indexCount indexType:(MTLIndexType) indexType indexBuffer:(id<MTLBuffer>) indexBuffer indexBufferOffset:(NSUInteger) indexBufferOffset;
```

## Parameters

- `primitiveType`: An [MTLPrimitiveType](../mtlprimitivetype.md) instance that represents how the command interprets vertex argument data.

  See the [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md) method and its siblings for more information about setting an entry in the vertex shader argument table for buffers.
- `indexCount`: An integer that represents the number of vertices the command reads from `indexBuffer`.
- `indexType`: An [MTLIndexType](../mtlindextype.md) instance that represents the index’s format, including [MTLIndexTypeUInt16](../mtlindextype/uint16.md) and [MTLIndexTypeUInt32](../mtlindextype/uint32.md).
- `indexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the `indexCount` vertex indices of the `indexType` format.
- `indexBufferOffset`: An integer that represents the location that’s a multiple of the index size from the start of `indexBuffer` where the vertex indices begin.

<a id="discussion"></a>

## Discussion

You can complete a primitive and start a new one by passing a sentinel index value that’s the largest unsigned integer possible for `indexType`. For example, the largest unsigned integer for [MTLIndexTypeUInt16](../mtlindextype/uint16.md) and [MTLIndexTypeUInt32](../mtlindextype/uint32.md) is `0xFFFF` and `0xFFFFFFFF`, respectively. The command finishes the current primitive and begins drawing a new one each time the command reads a sentinel index value.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with indexed vertices

- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:](drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:](drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices, starting with a custom vertex and instance.
- [drawIndexedPrimitives:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:](drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices and indirect arguments.
