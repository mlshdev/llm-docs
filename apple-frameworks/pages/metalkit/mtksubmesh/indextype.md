> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtksubmesh/indextype](https://developer.apple.com/documentation/metalkit/mtksubmesh/indextype)

# indexType (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of index data in the index buffer.

## Declaration

```swift
var indexType: MTLIndexType { get }
```

<a id="Discussion"></a>

## Discussion

Use this value for the `indexType` parameter in a call to [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:)](../../metal/mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md).

## See Also

### Properties used to Draw Indexed Primitives

- [indexBuffer](indexbuffer.md): The index buffer used to render the submesh object.
- [indexCount](indexcount.md): The number of indices in the index buffer.
- [primitiveType](primitivetype.md): The primitive type with which to draw the submesh object.

# indexType (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of index data in the index buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) MTLIndexType indexType;
```

<a id="Discussion"></a>

## Discussion

Use this value for the `indexType` parameter in a call to [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:](../../metal/mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md).

## See Also

### Properties used to Draw Indexed Primitives

- [indexBuffer](indexbuffer.md): The index buffer used to render the submesh object.
- [indexCount](indexcount.md): The number of indices in the index buffer.
- [primitiveType](primitivetype.md): The primitive type with which to draw the submesh object.
