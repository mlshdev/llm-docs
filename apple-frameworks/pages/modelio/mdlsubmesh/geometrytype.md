> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/geometrytype](https://developer.apple.com/documentation/modelio/mdlsubmesh/geometrytype)

# geometryType (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of geometric primitives described by the submesh’s index buffer.

## Declaration

```swift
var geometryType: MDLGeometryType { get }
```

<a id="Discussion"></a>

## Discussion

This property determines how the sequence of indices in the submesh’s index buffer should be interpreted for rendering. For example, if the geometry type is [MDLGeometryType.triangles](../mdlgeometrytype/triangles.md), each triangle to be rendered comes from an independent set of three indices, but if the geometry type is [MDLGeometryType.triangleStrips](../mdlgeometrytype/trianglestrips.md), triangles to be rendered can come from overlapping sets of indices in the sequence. If the geometry type is [MDLGeometryType.variableTopology](../mdlgeometrytype/variabletopology.md), the [topology](topology.md) property describes the non-uniform layout of the index buffer.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBuffer(asIndexType:)](indexbuffer%28asindextype_%29.md)

# geometryType (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of geometric primitives described by the submesh’s index buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLGeometryType geometryType;
```

<a id="Discussion"></a>

## Discussion

This property determines how the sequence of indices in the submesh’s index buffer should be interpreted for rendering. For example, if the geometry type is [MDLGeometryTypeTriangles](../mdlgeometrytype/triangles.md), each triangle to be rendered comes from an independent set of three indices, but if the geometry type is [MDLGeometryTypeTriangleStrips](../mdlgeometrytype/trianglestrips.md), triangles to be rendered can come from overlapping sets of indices in the sequence. If the geometry type is [MDLGeometryTypeVariableTopology](../mdlgeometrytype/variabletopology.md), the [topology](topology.md) property describes the non-uniform layout of the index buffer.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBufferAsIndexType:](indexbuffer%28asindextype_%29.md)
