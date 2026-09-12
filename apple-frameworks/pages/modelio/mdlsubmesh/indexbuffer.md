> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/indexbuffer](https://developer.apple.com/documentation/modelio/mdlsubmesh/indexbuffer)

# indexBuffer (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that provides index data for the submesh.

## Declaration

```swift
var indexBuffer: any MDLMeshBuffer { get }
```

<a id="Discussion"></a>

## Discussion

An index buffer contains indices, each of which identifies a vertex in the vertex buffers of the [MDLMesh](../mdlmesh.md) object containing the mesh. Together with the submesh’s [geometryType](geometrytype.md) property, the sequence of indices determines how to interpret the mesh’s vertex data to construct the geometric form for a portion of the mesh.

## See Also

### Working with a Submesh’s Index Buffer

- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBuffer(asIndexType:)](indexbuffer%28asindextype_%29.md)

# indexBuffer (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that provides index data for the submesh.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) id<MDLMeshBuffer> indexBuffer;
```

<a id="Discussion"></a>

## Discussion

An index buffer contains indices, each of which identifies a vertex in the vertex buffers of the [MDLMesh](../mdlmesh.md) object containing the mesh. Together with the submesh’s [geometryType](geometrytype.md) property, the sequence of indices determines how to interpret the mesh’s vertex data to construct the geometric form for a portion of the mesh.

## See Also

### Working with a Submesh’s Index Buffer

- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBufferAsIndexType:](indexbuffer%28asindextype_%29.md)
