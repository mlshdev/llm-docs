> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtksubmesh/indexbuffer](https://developer.apple.com/documentation/metalkit/mtksubmesh/indexbuffer)

# indexBuffer (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index buffer used to render the submesh object.

## Declaration

```swift
var indexBuffer: MTKMeshBuffer { get }
```

<a id="Discussion"></a>

## Discussion

Use this object for the `indexBuffer` parameter in a call to [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:)](../../metal/mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md).

## See Also

### Properties used to Draw Indexed Primitives

- [indexCount](indexcount.md): The number of indices in the index buffer.
- [indexType](indextype.md): The type of index data in the index buffer.
- [primitiveType](primitivetype.md): The primitive type with which to draw the submesh object.

# indexBuffer (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index buffer used to render the submesh object.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) MTKMeshBuffer * indexBuffer;
```

<a id="Discussion"></a>

## Discussion

Use this object for the `indexBuffer` parameter in a call to [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:](../../metal/mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md).

## See Also

### Properties used to Draw Indexed Primitives

- [indexCount](indexcount.md): The number of indices in the index buffer.
- [indexType](indextype.md): The type of index data in the index buffer.
- [primitiveType](primitivetype.md): The primitive type with which to draw the submesh object.
