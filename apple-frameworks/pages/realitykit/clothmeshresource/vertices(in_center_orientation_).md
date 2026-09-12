> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/vertices(in:center:orientation:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/vertices(in:center:orientation:))

# vertices(in:center:orientation:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Returns the indices of the vertices that lie inside the given volume shape.

## Declaration

```swift
final func vertices(in shape: ClothVolumeShape, center: SIMD3<Float> = SIMD3<Float>(repeating: 0), orientation: simd_quatf = simd_quatf(ix: 0, iy: 0, iz: 0, r: 1)) -> [UInt32]
```

## Parameters

- `shape`: The volume shape to test vertices against.
- `center`: The center position of the shape.
- `orientation`: The orientation of the shape.

<a id="return-value"></a>

## Return Value

The indices of the vertices that lie inside the shape.

## See Also

### Accessing vertex data

- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [position(at:)](position%28at_%29.md): Returns the position of the vertex at the given index.
- [withPositions(\_:)](withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [vertexIndex(at:)](vertexindex%28at_%29.md): Returns the vertex index at the given position in the mesh’s flattened primitive index array.
- [vertexIndex(primitive:vertex:)](vertexindex%28primitive_vertex_%29.md): Returns the vertex index of the specified vertex within the specified primitive.
