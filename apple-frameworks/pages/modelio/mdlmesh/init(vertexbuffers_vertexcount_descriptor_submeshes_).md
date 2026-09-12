> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/init(vertexbuffers:vertexcount:descriptor:submeshes:)](https://developer.apple.com/documentation/modelio/mdlmesh/init(vertexbuffers:vertexcount:descriptor:submeshes:))

# init(vertexBuffers:vertexCount:descriptor:submeshes:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a mesh by unifying vertex data from multiple sources with the specified parameters.

## Declaration

```swift
init(vertexBuffers: [any MDLMeshBuffer], vertexCount: Int, descriptor: MDLVertexDescriptor, submeshes: [MDLSubmesh])
```

## Parameters

- `vertexBuffers`: An array of objects, each of which provides a separate source of vertex information for the mesh.
- `vertexCount`: The number of vertices in the mesh.
- `descriptor`: An object describing the type and layout of vertex attribute data in the vertex buffers.
- `submeshes`: An array of submesh objects, each of which provides index buffer and material information describing how some or all of the mesh’s vertex data is to be rendered.

<a id="return-value"></a>

## Return Value

A new mesh object.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a mesh from vertex data that describes separate vertex attributes in separate arrays with matching indices (a structure of arrays).

## See Also

### Creating a Custom Mesh

- [init(vertexBuffer:vertexCount:descriptor:submeshes:)](init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [init(bufferAllocator:)](init%28bufferallocator_%29.md)
- [newSubdividedMesh(\_:submeshIndex:subdivisionLevels:)](newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md): Creates a new mesh by subdividing the specified mesh.
- [init(meshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:)](init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)

# initWithVertexBuffers:vertexCount:descriptor:submeshes: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a mesh by unifying vertex data from multiple sources with the specified parameters.

## Declaration

```objectivec
- (instancetype) initWithVertexBuffers:(NSArray<id<MDLMeshBuffer>> *) vertexBuffers vertexCount:(NSUInteger) vertexCount descriptor:(MDLVertexDescriptor *) descriptor submeshes:(NSArray<MDLSubmesh *> *) submeshes;
```

## Parameters

- `vertexBuffers`: An array of objects, each of which provides a separate source of vertex information for the mesh.
- `vertexCount`: The number of vertices in the mesh.
- `descriptor`: An object describing the type and layout of vertex attribute data in the vertex buffers.
- `submeshes`: An array of submesh objects, each of which provides index buffer and material information describing how some or all of the mesh’s vertex data is to be rendered.

<a id="return-value"></a>

## Return Value

A new mesh object.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a mesh from vertex data that describes separate vertex attributes in separate arrays with matching indices (a structure of arrays).

## See Also

### Creating a Custom Mesh

- [initWithVertexBuffer:vertexCount:descriptor:submeshes:](init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [initWithBufferAllocator:](init%28bufferallocator_%29.md)
- [newSubdividedMesh:submeshIndex:subdivisionLevels:](newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md): Creates a new mesh by subdividing the specified mesh.
- [initMeshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:](init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)
