> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/vertexcount](https://developer.apple.com/documentation/realitykit/clothmeshresource/vertexcount)

# vertexCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The number of vertices in the mesh.

## Declaration

```swift
final var vertexCount: Int { get }
```

## See Also

### Accessing vertex data

- [position(at:)](position%28at_%29.md): Returns the position of the vertex at the given index.
- [withPositions(\_:)](withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [vertexIndex(at:)](vertexindex%28at_%29.md): Returns the vertex index at the given position in the mesh’s flattened primitive index array.
- [vertexIndex(primitive:vertex:)](vertexindex%28primitive_vertex_%29.md): Returns the vertex index of the specified vertex within the specified primitive.
- [vertices(in:center:orientation:)](vertices%28in_center_orientation_%29.md): Returns the indices of the vertices that lie inside the given volume shape.
