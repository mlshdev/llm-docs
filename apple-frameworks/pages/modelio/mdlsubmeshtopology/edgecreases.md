> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmeshtopology/edgecreases](https://developer.apple.com/documentation/modelio/mdlsubmeshtopology/edgecreases)

# edgeCreases (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A buffer containing sharpness values to be applied to edges during surface subdivision.

## Declaration

```swift
var edgeCreases: (any MDLMeshBuffer)? { get set }
```

<a id="Discussion"></a>

## Discussion

Each entry in this buffer corresponds to a pair of entries in the [edgeCreaseIndices](edgecreaseindices.md) buffer that identifies a crease. The value of each entry determines the amount of smoothing to apply to the crease during surface subdivision—a value of zero completely smooths out the edge, and a value of one leaves the edge completely sharp.

Because the number of entries in this buffer is likely to be different than the number of entries in any other vertex buffer, it shouldn’t be interleaved with other data in the mesh.

## See Also

### Identifying Creases

- [edgeCreaseIndices](edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreaseCount](edgecreasecount.md): The number of entries in the edge creases buffers.
- [vertexCreaseIndices](vertexcreaseindices.md): A buffer containing vertex indices to be treated as creases during surface subdivision.
- [vertexCreases](vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](vertexcreasecount.md): The number of entries in the vertex creases buffers.

# edgeCreases (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A buffer containing sharpness values to be applied to edges during surface subdivision.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MDLMeshBuffer> edgeCreases;
```

<a id="Discussion"></a>

## Discussion

Each entry in this buffer corresponds to a pair of entries in the [edgeCreaseIndices](edgecreaseindices.md) buffer that identifies a crease. The value of each entry determines the amount of smoothing to apply to the crease during surface subdivision—a value of zero completely smooths out the edge, and a value of one leaves the edge completely sharp.

Because the number of entries in this buffer is likely to be different than the number of entries in any other vertex buffer, it shouldn’t be interleaved with other data in the mesh.

## See Also

### Identifying Creases

- [edgeCreaseIndices](edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreaseCount](edgecreasecount.md): The number of entries in the edge creases buffers.
- [vertexCreaseIndices](vertexcreaseindices.md): A buffer containing vertex indices to be treated as creases during surface subdivision.
- [vertexCreases](vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](vertexcreasecount.md): The number of entries in the vertex creases buffers.
