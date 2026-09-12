> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmeshtopology/edgecreasecount](https://developer.apple.com/documentation/modelio/mdlsubmeshtopology/edgecreasecount)

# edgeCreaseCount (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of entries in the edge creases buffers.

## Declaration

```swift
var edgeCreaseCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The [edgeCreases](edgecreases.md) buffer contains this number of crease values. Because each edge is composed of two vertices, the [edgeCreaseIndices](edgecreaseindices.md) buffer contains twice this number of vertex indices.

## See Also

### Identifying Creases

- [edgeCreaseIndices](edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreases](edgecreases.md): A buffer containing sharpness values to be applied to edges during surface subdivision.
- [vertexCreaseIndices](vertexcreaseindices.md): A buffer containing vertex indices to be treated as creases during surface subdivision.
- [vertexCreases](vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](vertexcreasecount.md): The number of entries in the vertex creases buffers.

# edgeCreaseCount (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of entries in the edge creases buffers.

## Declaration

```objectivec
@property (nonatomic) NSUInteger edgeCreaseCount;
```

<a id="Discussion"></a>

## Discussion

The [edgeCreases](edgecreases.md) buffer contains this number of crease values. Because each edge is composed of two vertices, the [edgeCreaseIndices](edgecreaseindices.md) buffer contains twice this number of vertex indices.

## See Also

### Identifying Creases

- [edgeCreaseIndices](edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreases](edgecreases.md): A buffer containing sharpness values to be applied to edges during surface subdivision.
- [vertexCreaseIndices](vertexcreaseindices.md): A buffer containing vertex indices to be treated as creases during surface subdivision.
- [vertexCreases](vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](vertexcreasecount.md): The number of entries in the vertex creases buffers.
