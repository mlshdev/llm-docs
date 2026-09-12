> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/topology](https://developer.apple.com/documentation/modelio/mdlsubmesh/topology)

# topology (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.

## Declaration

```swift
var topology: MDLSubmeshTopology? { get set }
```

<a id="Discussion"></a>

## Discussion

Submeshes with non-uniform topology can also contain edge and vertex crease information for use by the [newSubdividedMesh(\_:submeshIndex:subdivisionLevels:)](../mdlmesh/newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md) method.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [indexBuffer(asIndexType:)](indexbuffer%28asindextype_%29.md)

# topology (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MDLSubmeshTopology * topology;
```

<a id="Discussion"></a>

## Discussion

Submeshes with non-uniform topology can also contain edge and vertex crease information for use by the [newSubdividedMesh:submeshIndex:subdivisionLevels:](../mdlmesh/newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md) method.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [indexBufferAsIndexType:](indexbuffer%28asindextype_%29.md)
