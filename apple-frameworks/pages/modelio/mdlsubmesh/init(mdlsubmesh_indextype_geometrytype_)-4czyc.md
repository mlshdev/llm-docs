> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/init(mdlsubmesh:indextype:geometrytype:)-4czyc](https://developer.apple.com/documentation/modelio/mdlsubmesh/init(mdlsubmesh:indextype:geometrytype:)-4czyc)

# init(mdlSubmesh:indexType:geometryType:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a submesh by copying or converting another submesh.

## Declaration

```swift
init?(mdlSubmesh submesh: MDLSubmesh, indexType: MDLIndexBitDepth, geometryType: MDLGeometryType)
```

## Parameters

- `submesh`: The submesh to copy or convert from.
- `indexType`: The data type of each index for the new submesh’s index buffer.
- `geometryType`: The type of geometric primitives for the new submesh’s index buffer.

<a id="return-value"></a>

## Return Value

A new submesh object.

<a id="Discussion"></a>

## Discussion

If the `indexType` or `geometryType` parameter does not match the corresponding property of the object in the `submesh` parameter, this method creates a new index buffer by converting the submesh’s index buffer to the described format while preserving shape and topology. For example, you can use this method to convert a quad mesh to a triangle mesh for rendering using GPUs that do not support quad primitives, or to convert a triangle mesh to triangle strips to create a smaller index buffer.

If the `indexType` and `geometryType` parameters match the corresponding properties of the input submesh, this method simply copies that submesh’s index buffer to create the new submesh.

## See Also

### Creating a Submesh

- [init(indexBuffer:indexCount:indexType:geometryType:material:)](init%28indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a submesh with an index buffer and the specified properties.
- [init(name:indexBuffer:indexCount:indexType:geometryType:material:)](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [init(name:indexBuffer:indexCount:indexType:geometryType:material:topology:)](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_topology_%29.md): Initializes a named submesh with a specific topology.

# initWithMDLSubmesh:indexType:geometryType: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a submesh by copying or converting another submesh.

## Declaration

```objectivec
- (instancetype) initWithMDLSubmesh:(MDLSubmesh *) submesh indexType:(MDLIndexBitDepth) indexType geometryType:(MDLGeometryType) geometryType;
```

## Parameters

- `submesh`: The submesh to copy or convert from.
- `indexType`: The data type of each index for the new submesh’s index buffer.
- `geometryType`: The type of geometric primitives for the new submesh’s index buffer.

<a id="return-value"></a>

## Return Value

A new submesh object.

<a id="Discussion"></a>

## Discussion

If the `indexType` or `geometryType` parameter does not match the corresponding property of the object in the `submesh` parameter, this method creates a new index buffer by converting the submesh’s index buffer to the described format while preserving shape and topology. For example, you can use this method to convert a quad mesh to a triangle mesh for rendering using GPUs that do not support quad primitives, or to convert a triangle mesh to triangle strips to create a smaller index buffer.

If the `indexType` and `geometryType` parameters match the corresponding properties of the input submesh, this method simply copies that submesh’s index buffer to create the new submesh.

## See Also

### Creating a Submesh

- [initWithIndexBuffer:indexCount:indexType:geometryType:material:](init%28indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a submesh with an index buffer and the specified properties.
- [initWithName:indexBuffer:indexCount:indexType:geometryType:material:](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [initWithName:indexBuffer:indexCount:indexType:geometryType:material:topology:](init%28name_indexbuffer_indexcount_indextype_geometrytype_material_topology_%29.md): Initializes a named submesh with a specific topology.
