> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/parts](https://developer.apple.com/documentation/realitykit/lowlevelmesh/parts)

# parts

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A mutable collection of parts.

## Declaration

```swift
@MainActor var parts: LowLevelMesh.PartsCollection { get set }
```

<a id="discussion"></a>

## Discussion

The parts of a [LowLevelMesh](../lowlevelmesh.md) object specify how to interpret the index buffer. You can also use `parts` to customize the material index and primitive type.

## See Also

### Describing a low-level mesh

- [descriptor](descriptor-swift.property.md): The definition of the structure of this low-level mesh.
- [indexCapacity](indexcapacity.md): The capacity of the index buffer, measured in indices.
- [vertexCapacity](vertexcapacity.md): The capacity of the vertex buffer, measured in vertices.
