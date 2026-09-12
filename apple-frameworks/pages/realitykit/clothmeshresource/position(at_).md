> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/position(at:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/position(at:))

# position(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Returns the position of the vertex at the given index.

## Declaration

```swift
final func position(at vertexIndex: UInt32) -> SIMD3<Float>
```

## Parameters

- `vertexIndex`: Index of the vertex to get the position for.

<a id="return-value"></a>

## Return Value

The position of the specified vertex.

<a id="discussion"></a>

## Discussion

If you want to obtain the position for a specific vertex within a specific primitive (for example the third vertex of the 20th triangle in a triangle mesh), you can use [vertexIndex(at:)](vertexindex%28at_%29.md) to obtain the right vertex index:

```swift
let vertexIndex = myMesh.vertexIndex(at: 3 * 19 + 2)
let vertexPosition = myMesh.position(at: vertexIndex)
print("The third vertex of the 20th triangle is at X=\(vertexPosition.x)")
```

> **Warning**

> This returned position corresponds to the mesh used to generate the bodies, rather than the bodies themselves. Therefore, this position does not change as the body deforms when this resource is used in [mesh](../clothbodycomponent/mesh.md).

## See Also

### Accessing vertex data

- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [withPositions(\_:)](withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [vertexIndex(at:)](vertexindex%28at_%29.md): Returns the vertex index at the given position in the mesh’s flattened primitive index array.
- [vertexIndex(primitive:vertex:)](vertexindex%28primitive_vertex_%29.md): Returns the vertex index of the specified vertex within the specified primitive.
- [vertices(in:center:orientation:)](vertices%28in_center_orientation_%29.md): Returns the indices of the vertices that lie inside the given volume shape.
