> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/init(indexbuffer:indexcount:indextype:geometrytype:material:)](https://developer.apple.com/documentation/modelio/mdlsubmesh/init(indexbuffer:indexcount:indextype:geometrytype:material:))

# init(indexBuffer:indexCount:indexType:geometryType:material:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a submesh with an index buffer and the specified properties.

## Declaration

```swift
init(indexBuffer: any MDLMeshBuffer, indexCount: Int, indexType: MDLIndexBitDepth, geometryType: MDLGeometryType, material: MDLMaterial?)
```

## Parameters

- `indexBuffer`: An object that provides index data for the submesh.
- `indexCount`: The number of indices in the index buffer.
- `indexType`: The data type of each index in the index buffer.
- `geometryType`: The type of geometric primitives described by the index buffer.
- `material`: A description of the intended surface appearance for rendering the submesh.

<a id="return-value"></a>

## Return Value

A new submesh object.

<a id="Discussion"></a>

## Discussion

Typically, a submesh is imported from an asset file as a member of a [MDLMesh](../mdlmesh.md) object, but you can also use this method to create a submesh programmatically.

## See Also

### Creating a Submesh

- [init(name:indexBuffer:indexCount:indexType:geometryType:material:)](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [init(name:indexBuffer:indexCount:indexType:geometryType:material:topology:)](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_topology_%29.md): Initializes a named submesh with a specific topology.
- [init(mdlSubmesh:indexType:geometryType:)](init%28mdlsubmesh_indextype_geometrytype_%29-4czyc.md): Initializes a submesh by copying or converting another submesh.

# initWithIndexBuffer:indexCount:indexType:geometryType:material: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a submesh with an index buffer and the specified properties.

## Declaration

```objectivec
- (instancetype) initWithIndexBuffer:(id<MDLMeshBuffer>) indexBuffer indexCount:(NSUInteger) indexCount indexType:(MDLIndexBitDepth) indexType geometryType:(MDLGeometryType) geometryType material:(MDLMaterial *) material;
```

## Parameters

- `indexBuffer`: An object that provides index data for the submesh.
- `indexCount`: The number of indices in the index buffer.
- `indexType`: The data type of each index in the index buffer.
- `geometryType`: The type of geometric primitives described by the index buffer.
- `material`: A description of the intended surface appearance for rendering the submesh.

<a id="return-value"></a>

## Return Value

A new submesh object.

<a id="Discussion"></a>

## Discussion

Typically, a submesh is imported from an asset file as a member of a [MDLMesh](../mdlmesh.md) object, but you can also use this method to create a submesh programmatically.

## See Also

### Creating a Submesh

- [initWithName:indexBuffer:indexCount:indexType:geometryType:material:](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [initWithName:indexBuffer:indexCount:indexType:geometryType:material:topology:](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_topology_%29.md): Initializes a named submesh with a specific topology.
- [initWithMDLSubmesh:indexType:geometryType:](init%28mdlsubmesh_indextype_geometrytype_%29-4czyc.md): Initializes a submesh by copying or converting another submesh.
