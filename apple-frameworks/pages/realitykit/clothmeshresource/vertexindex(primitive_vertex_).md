> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/vertexindex(primitive:vertex:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/vertexindex(primitive:vertex:))

# vertexIndex(primitive:vertex:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Returns the vertex index of the specified vertex within the specified primitive.

## Declaration

```swift
final func vertexIndex(primitive: UInt32, vertex: UInt32) -> UInt32
```

## Parameters

- `primitive`: The zero-based index of the primitive.
- `vertex`: The zero-based index of the vertex within the primitive.

<a id="return-value"></a>

## Return Value

The vertex index of the specified vertex within the specified primitive.

## See Also

### Accessing vertex data

- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [position(at:)](position%28at_%29.md): Returns the position of the vertex at the given index.
- [withPositions(\_:)](withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [vertexIndex(at:)](vertexindex%28at_%29.md): Returns the vertex index at the given position in the mesh’s flattened primitive index array.
- [vertices(in:center:orientation:)](vertices%28in_center_orientation_%29.md): Returns the indices of the vertices that lie inside the given volume shape.
