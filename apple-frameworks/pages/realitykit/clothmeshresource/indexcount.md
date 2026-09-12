> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/indexcount](https://developer.apple.com/documentation/realitykit/clothmeshresource/indexcount)

# indexCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The number of indices in the mesh.

## Declaration

```swift
final var indexCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This count will be equal to the number of primitives in the mesh multiplied by the number of vertices per primitive. For example, a triangular mesh with nine triangles has an index count of 9 ⨉ 3 = 27 indices.
