> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/init(name:indexbuffer:indexcount:indextype:geometrytype:material:topology:)](https://developer.apple.com/documentation/modelio/mdlsubmesh/init(name:indexbuffer:indexcount:indextype:geometrytype:material:topology:))

# init(name:indexBuffer:indexCount:indexType:geometryType:material:topology:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a named submesh with a specific topology.

## Declaration

```swift
init(name: String, indexBuffer: any MDLMeshBuffer, indexCount: Int, indexType: MDLIndexBitDepth, geometryType: MDLGeometryType, material: MDLMaterial?, topology: MDLSubmeshTopology?)
```

## Parameters

- `name`: A descriptive name for the submesh. This property is not used in rendering, but can be useful in debugging.
- `indexBuffer`: An object that provides index data for the submesh.
- `indexCount`: The number of indices in the index buffer.
- `indexType`: The data type of each index in the index buffer.
- `geometryType`: The type of geometric primitives described by the index buffer.
- `material`: A description of the intended surface appearance for rendering the submesh.
- `topology`: An object describing the arrangement of geometric primitives in the index buffer.

<a id="return-value"></a>

## Return Value

A new submesh object.

<a id="Discussion"></a>

## Discussion

Typically, a submesh is imported from an asset file as a member of a [MDLMesh](../mdlmesh.md) object, but you can also use this method to create a submesh programmatically.

Use this method when the index buffer from which you’re creating a submesh does not contain a uniform array of geometric primitives. Pass  [MDLGeometryType.variableTopology](../mdlgeometrytype/variabletopology.md) for the `geometryType` parameter, and provide an `MDLSubmeshTopology` object for the `topology` parameter to describe how the points in the index buffer combine to produce the submesh’s shape. Otherwise, this method is equivalent to the [init(name:indexBuffer:indexCount:indexType:geometryType:material:)](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md) method.

## See Also

### Creating a Submesh

- [init(indexBuffer:indexCount:indexType:geometryType:material:)](init%28indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a submesh with an index buffer and the specified properties.
- [init(name:indexBuffer:indexCount:indexType:geometryType:material:)](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [init(mdlSubmesh:indexType:geometryType:)](init%28mdlsubmesh_indextype_geometrytype_%29-4czyc.md): Initializes a submesh by copying or converting another submesh.

# initWithName:indexBuffer:indexCount:indexType:geometryType:material:topology: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a named submesh with a specific topology.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name indexBuffer:(id<MDLMeshBuffer>) indexBuffer indexCount:(NSUInteger) indexCount indexType:(MDLIndexBitDepth) indexType geometryType:(MDLGeometryType) geometryType material:(MDLMaterial *) material topology:(MDLSubmeshTopology *) topology;
```

## Parameters

- `name`: A descriptive name for the submesh. This property is not used in rendering, but can be useful in debugging.
- `indexBuffer`: An object that provides index data for the submesh.
- `indexCount`: The number of indices in the index buffer.
- `indexType`: The data type of each index in the index buffer.
- `geometryType`: The type of geometric primitives described by the index buffer.
- `material`: A description of the intended surface appearance for rendering the submesh.
- `topology`: An object describing the arrangement of geometric primitives in the index buffer.

<a id="return-value"></a>

## Return Value

A new submesh object.

<a id="Discussion"></a>

## Discussion

Typically, a submesh is imported from an asset file as a member of a [MDLMesh](../mdlmesh.md) object, but you can also use this method to create a submesh programmatically.

Use this method when the index buffer from which you’re creating a submesh does not contain a uniform array of geometric primitives. Pass  [MDLGeometryTypeVariableTopology](../mdlgeometrytype/variabletopology.md) for the `geometryType` parameter, and provide an `MDLSubmeshTopology` object for the `topology` parameter to describe how the points in the index buffer combine to produce the submesh’s shape. Otherwise, this method is equivalent to the [initWithName:indexBuffer:indexCount:indexType:geometryType:material:](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md) method.

## See Also

### Creating a Submesh

- [initWithIndexBuffer:indexCount:indexType:geometryType:material:](init%28indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a submesh with an index buffer and the specified properties.
- [initWithName:indexBuffer:indexCount:indexType:geometryType:material:](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [initWithMDLSubmesh:indexType:geometryType:](init%28mdlsubmesh_indextype_geometrytype_%29-4czyc.md): Initializes a submesh by copying or converting another submesh.
