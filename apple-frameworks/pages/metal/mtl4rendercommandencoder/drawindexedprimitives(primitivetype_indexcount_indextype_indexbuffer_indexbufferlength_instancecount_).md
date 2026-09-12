> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/drawindexedprimitives(primitivetype:indexcount:indextype:indexbuffer:indexbufferlength:instancecount:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/drawindexedprimitives(primitivetype:indexcount:indextype:indexbuffer:indexbufferlength:instancecount:))

# drawIndexedPrimitives(primitiveType:indexCount:indexType:indexBuffer:indexBufferLength:instanceCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices.

## Declaration

```swift
func drawIndexedPrimitives(primitiveType: MTLPrimitiveType, indexCount: Int, indexType: MTLIndexType, indexBuffer: MTLGPUAddress, indexBufferLength: Int, instanceCount: Int)
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) representing how the command interprets vertex argument data.
- `indexCount`: An integer that represents the number of vertices the command reads from `indexBuffer`.
- `indexType`: A [MTLIndexType](../mtlindextype.md) instance that represents the index format.
- `indexBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance that contains `indexCount` indices of `indexType` format. You are responsible for ensuring this address is aligned to 2 bytes if the `indexType` format is [MTLIndexType.uint16](../mtlindextype/uint16.md), and aligned to 4 bytes if the format is [MTLIndexType.uint32](../mtlindextype/uint32.md).
- `indexBufferLength`: An integer that represents the length of `indexBuffer`, in bytes. You are responsible for ensuring this this size is a multiple of 2 if the `indexType` format is [MTLIndexType.uint16](../mtlindextype/uint16.md), and a multiple of 4 if the format is [MTLIndexType.uint32](../mtlindextype/uint32.md). Metal disregards this value and assigns `0` to the `vertex_id` attribute for all primitives that require loading indices at a byte offset of `indexBufferLength` or greater.
- `instanceCount`: An integer that represents the number of times the command draws `primitiveType` with `indexCount` vertices.

<a id="discussion"></a>

## Discussion

Use this method to perform instanced indexed drawing, where an index buffer determines how Metal assembles primitives.

The command assigns each drawing instance a unique `instance_id` value that increases from `0` through `(instanceCount - 1)`. Your shader can use this value to identify which instance the vertex belongs to.

Metal imposes some restrictions on the index buffer’s address, which needs to be 2- or 4-byte aligned, and its length in bytes, which needs to be a multiple of 2 or 4, depending on whether the format of the index is [MTLIndexType.uint16](../mtlindextype/uint16.md) or [MTLIndexType.uint32](../mtlindextype/uint32.md).

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the index buffer the `indexBuffer` parameter references.

## See Also

### Drawing with indexed vertices

- [drawIndexedPrimitives(primitiveType:indexCount:indexType:indexBuffer:indexBufferLength:)](drawindexedprimitives%28primitivetype_indexcount_indextype_indexbuffer_indexbufferlength_%29.md): Encodes a draw command that renders an instance of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives(primitiveType:indexCount:indexType:indexBuffer:indexBufferLength:instanceCount:baseVertex:baseInstance:)](drawindexedprimitives%28primitivetype_indexcount_indextype_indexbuffer_indexbufferlength_instancecount_basevertex_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices, starting with a custom vertex and instance.
- [drawIndexedPrimitives(primitiveType:indexType:indexBuffer:indexBufferLength:indirectBuffer:)](drawindexedprimitives%28primitivetype_indextype_indexbuffer_indexbufferlength_indirectbuffer_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices and indirect arguments.

# drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferLength:instanceCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices.

## Declaration

```objectivec
- (void) drawIndexedPrimitives:(MTLPrimitiveType) primitiveType indexCount:(NSUInteger) indexCount indexType:(MTLIndexType) indexType indexBuffer:(MTLGPUAddress) indexBuffer indexBufferLength:(NSUInteger) indexBufferLength instanceCount:(NSUInteger) instanceCount;
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) representing how the command interprets vertex argument data.
- `indexCount`: An integer that represents the number of vertices the command reads from `indexBuffer`.
- `indexType`: A [MTLIndexType](../mtlindextype.md) instance that represents the index format.
- `indexBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance that contains `indexCount` indices of `indexType` format. You are responsible for ensuring this address is aligned to 2 bytes if the `indexType` format is [MTLIndexTypeUInt16](../mtlindextype/uint16.md), and aligned to 4 bytes if the format is [MTLIndexTypeUInt32](../mtlindextype/uint32.md).
- `indexBufferLength`: An integer that represents the length of `indexBuffer`, in bytes. You are responsible for ensuring this this size is a multiple of 2 if the `indexType` format is [MTLIndexTypeUInt16](../mtlindextype/uint16.md), and a multiple of 4 if the format is [MTLIndexTypeUInt32](../mtlindextype/uint32.md). Metal disregards this value and assigns `0` to the `vertex_id` attribute for all primitives that require loading indices at a byte offset of `indexBufferLength` or greater.
- `instanceCount`: An integer that represents the number of times the command draws `primitiveType` with `indexCount` vertices.

<a id="discussion"></a>

## Discussion

Use this method to perform instanced indexed drawing, where an index buffer determines how Metal assembles primitives.

The command assigns each drawing instance a unique `instance_id` value that increases from `0` through `(instanceCount - 1)`. Your shader can use this value to identify which instance the vertex belongs to.

Metal imposes some restrictions on the index buffer’s address, which needs to be 2- or 4-byte aligned, and its length in bytes, which needs to be a multiple of 2 or 4, depending on whether the format of the index is [MTLIndexTypeUInt16](../mtlindextype/uint16.md) or [MTLIndexTypeUInt32](../mtlindextype/uint32.md).

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the index buffer the `indexBuffer` parameter references.

## See Also

### Drawing with indexed vertices

- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferLength:](drawindexedprimitives%28primitivetype_indexcount_indextype_indexbuffer_indexbufferlength_%29.md): Encodes a draw command that renders an instance of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferLength:instanceCount:baseVertex:baseInstance:](drawindexedprimitives%28primitivetype_indexcount_indextype_indexbuffer_indexbufferlength_instancecount_basevertex_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices, starting with a custom vertex and instance.
- [drawIndexedPrimitives:indexType:indexBuffer:indexBufferLength:indirectBuffer:](drawindexedprimitives%28primitivetype_indextype_indexbuffer_indexbufferlength_indirectbuffer_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices and indirect arguments.
