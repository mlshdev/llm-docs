> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/vertexindex(at:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/vertexindex(at:))

# vertexIndex(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Returns the vertex index at the given position in the mesh’s flattened primitive index array.

## Declaration

```swift
final func vertexIndex(at index: UInt32) -> UInt32
```

<a id="return-value"></a>

## Return Value

The vertex index at the specified position.

<a id="discussion"></a>

## Discussion

The mesh is formed by triangles with three vertices each. Different triangles can share the same vertex (for example, two adjacent triangles share the two vertices joined by their common edge).

For example, if you want to retrieve the index of the second vertex in the eleventh triangle, you would use `myMesh.vertexIndex(at: 3 * 10 + 1)`. This is because each triangle is formed by three vertices, and indices start at zero, so the eleventh triangle starts at index 3 ⨉ 10. You then add one to get the second vertex within that triangle.

You can use the returned vertex index to inspect vertex properties. You can retrieve the position, for example, by using [position(at:)](position%28at_%29.md):

```swift
let vertexIndex = myMesh.vertexIndex(at: 3 * 10 + 1)
let vertexPosition = myMesh.position(at: vertexIndex)
print("The second vertex of the eleventh triangle is at X=\(vertexPosition.x)")
```

- index: Index of the vertex to be retrieved within the list of vertex indices for all the mesh primitives.

## See Also

### Accessing vertex data

- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [position(at:)](position%28at_%29.md): Returns the position of the vertex at the given index.
- [withPositions(\_:)](withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [vertexIndex(primitive:vertex:)](vertexindex%28primitive_vertex_%29.md): Returns the vertex index of the specified vertex within the specified primitive.
- [vertices(in:center:orientation:)](vertices%28in_center_orientation_%29.md): Returns the indices of the vertices that lie inside the given volume shape.
