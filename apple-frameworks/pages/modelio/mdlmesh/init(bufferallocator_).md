> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/init(bufferallocator:)](https://developer.apple.com/documentation/modelio/mdlmesh/init(bufferallocator:))

# init(bufferAllocator:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
init(bufferAllocator: (any MDLMeshBufferAllocator)?)
```

## See Also

### Creating a Custom Mesh

- [init(vertexBuffer:vertexCount:descriptor:submeshes:)](init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [init(vertexBuffers:vertexCount:descriptor:submeshes:)](init%28vertexbuffers_vertexcount_descriptor_submeshes_%29.md): Creates a mesh by unifying vertex data from multiple sources with the specified parameters.
- [newSubdividedMesh(\_:submeshIndex:subdivisionLevels:)](newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md): Creates a new mesh by subdividing the specified mesh.
- [init(meshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:)](init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)

# initWithBufferAllocator: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithBufferAllocator:(id<MDLMeshBufferAllocator>) bufferAllocator;
```

## See Also

### Creating a Custom Mesh

- [initWithVertexBuffer:vertexCount:descriptor:submeshes:](init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [initWithVertexBuffers:vertexCount:descriptor:submeshes:](init%28vertexbuffers_vertexcount_descriptor_submeshes_%29.md): Creates a mesh by unifying vertex data from multiple sources with the specified parameters.
- [newSubdividedMesh:submeshIndex:subdivisionLevels:](newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md): Creates a new mesh by subdividing the specified mesh.
- [initMeshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:](init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)
