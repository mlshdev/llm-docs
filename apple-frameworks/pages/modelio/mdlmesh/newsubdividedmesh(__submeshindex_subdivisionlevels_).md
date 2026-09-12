> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/newsubdividedmesh(_:submeshindex:subdivisionlevels:)](https://developer.apple.com/documentation/modelio/mdlmesh/newsubdividedmesh(_:submeshindex:subdivisionlevels:))

# newSubdividedMesh(\_:submeshIndex:subdivisionLevels:) (Swift)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new mesh by subdividing the specified mesh.

## Declaration

```swift
class func newSubdividedMesh(_ mesh: MDLMesh, submeshIndex: Int, subdivisionLevels: Int) -> Self?
```

## Parameters

- `mesh`: The mesh from which to generate a new subdivided mesh.
- `submeshIndex`: The index of the submesh in the original mesh from which to generate the new mesh.
- `subdivisionLevels`: The number of times to iteratively perform the subdivision process.

<a id="return-value"></a>

## Return Value

A new mesh object, or `nil` if subdivision fails.

<a id="Discussion"></a>

## Discussion

Surface subdivision creates a smooth mesh from a coarse mesh by splitting each primitive (triangle or quad) in the original mesh into multiple smaller primitives and projecting the newly created vertices along surface normal vectors. The `subdivisionLevels` parameter controls the level of detail (and resulting performance cost) of the subdivision process. For example, in a triangle mesh, a subdivision level of 1 replaces each triangle with a set of four smaller triangles; a subdivision level of 2 replaces each of those four triangles with four even smaller triangles (for a total of 16 created from the triangle in the original mesh.

> **Note**

>  The computational cost of subdivision increases exponentially with subdivision level. Depending on the arrangement of the original mesh and the device on which a mesh is to be rendered, using a subdivision level greater than 4 may result in more detail than would be visible when rendering.

Meshes intended for use with surface subdivision contain topology information to ensure that the results of subdivision match the artist’s intent. To make use of this information, use the [init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:)](../mdlasset/init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md) initializer when creating an [MDLAsset](../mdlasset.md) object to load meshes from.

## See Also

### Creating a Custom Mesh

- [init(vertexBuffer:vertexCount:descriptor:submeshes:)](init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [init(vertexBuffers:vertexCount:descriptor:submeshes:)](init%28vertexbuffers_vertexcount_descriptor_submeshes_%29.md): Creates a mesh by unifying vertex data from multiple sources with the specified parameters.
- [init(bufferAllocator:)](init%28bufferallocator_%29.md)
- [init(meshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:)](init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)

# newSubdividedMesh:submeshIndex:subdivisionLevels: (Objective-C)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new mesh by subdividing the specified mesh.

## Declaration

```objectivec
+ (instancetype) newSubdividedMesh:(MDLMesh *) mesh submeshIndex:(NSUInteger) submeshIndex subdivisionLevels:(NSUInteger) subdivisionLevels;
```

## Parameters

- `mesh`: The mesh from which to generate a new subdivided mesh.
- `submeshIndex`: The index of the submesh in the original mesh from which to generate the new mesh.
- `subdivisionLevels`: The number of times to iteratively perform the subdivision process.

<a id="return-value"></a>

## Return Value

A new mesh object, or `nil` if subdivision fails.

<a id="Discussion"></a>

## Discussion

Surface subdivision creates a smooth mesh from a coarse mesh by splitting each primitive (triangle or quad) in the original mesh into multiple smaller primitives and projecting the newly created vertices along surface normal vectors. The `subdivisionLevels` parameter controls the level of detail (and resulting performance cost) of the subdivision process. For example, in a triangle mesh, a subdivision level of 1 replaces each triangle with a set of four smaller triangles; a subdivision level of 2 replaces each of those four triangles with four even smaller triangles (for a total of 16 created from the triangle in the original mesh.

> **Note**

>  The computational cost of subdivision increases exponentially with subdivision level. Depending on the arrangement of the original mesh and the device on which a mesh is to be rendered, using a subdivision level greater than 4 may result in more detail than would be visible when rendering.

Meshes intended for use with surface subdivision contain topology information to ensure that the results of subdivision match the artist’s intent. To make use of this information, use the [initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error:](../mdlasset/init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md) initializer when creating an [MDLAsset](../mdlasset.md) object to load meshes from.

## See Also

### Creating a Custom Mesh

- [initWithVertexBuffer:vertexCount:descriptor:submeshes:](init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [initWithVertexBuffers:vertexCount:descriptor:submeshes:](init%28vertexbuffers_vertexcount_descriptor_submeshes_%29.md): Creates a mesh by unifying vertex data from multiple sources with the specified parameters.
- [initWithBufferAllocator:](init%28bufferallocator_%29.md)
- [initMeshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:](init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)
