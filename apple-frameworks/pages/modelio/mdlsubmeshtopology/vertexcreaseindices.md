> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmeshtopology/vertexcreaseindices](https://developer.apple.com/documentation/modelio/mdlsubmeshtopology/vertexcreaseindices)

# vertexCreaseIndices (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A buffer containing vertex indices to be treated as creases during surface subdivision.

## Declaration

```swift
var vertexCreaseIndices: (any MDLMeshBuffer)? { get set }
```

<a id="Discussion"></a>

## Discussion

Each of entry in this buffer identifies a vertex that is to be treated as a crease or point during surface subdivision. The buffer is sparse, containing only those vertex indices to be treated as creases. The corresponding entry in the [vertexCreases](vertexcreases.md) buffer provides a sharpness value for the crease.

Because the number of entries in this buffer is likely to be different than the number of entries in any other vertex buffer, it shouldn’t be interleaved with other data in the mesh.

## See Also

### Identifying Creases

- [edgeCreaseIndices](edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreases](edgecreases.md): A buffer containing sharpness values to be applied to edges during surface subdivision.
- [edgeCreaseCount](edgecreasecount.md): The number of entries in the edge creases buffers.
- [vertexCreases](vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](vertexcreasecount.md): The number of entries in the vertex creases buffers.

# vertexCreaseIndices (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A buffer containing vertex indices to be treated as creases during surface subdivision.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MDLMeshBuffer> vertexCreaseIndices;
```

<a id="Discussion"></a>

## Discussion

Each of entry in this buffer identifies a vertex that is to be treated as a crease or point during surface subdivision. The buffer is sparse, containing only those vertex indices to be treated as creases. The corresponding entry in the [vertexCreases](vertexcreases.md) buffer provides a sharpness value for the crease.

Because the number of entries in this buffer is likely to be different than the number of entries in any other vertex buffer, it shouldn’t be interleaved with other data in the mesh.

## See Also

### Identifying Creases

- [edgeCreaseIndices](edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreases](edgecreases.md): A buffer containing sharpness values to be applied to edges during surface subdivision.
- [edgeCreaseCount](edgecreasecount.md): The number of entries in the edge creases buffers.
- [vertexCreases](vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](vertexcreasecount.md): The number of entries in the vertex creases buffers.
