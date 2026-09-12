> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/withpositions(_:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/withpositions(_:))

# withPositions(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides access to the positions of all the vertices within a callback.

## Declaration

```swift
final func withPositions<Result>(_ callback: (Span<SIMD3<Float>>) -> Result) -> Result
```

## Parameters

- `callback`: A closure that receives a span over the vertex positions.

<a id="return-value"></a>

## Return Value

The value returned by `callback`.

<a id="discussion"></a>

## Discussion

The provided span is only valid for the lifetime of the callback.

> **Warning**

> These positions correspond to the mesh used to generate the bodies, rather than the bodies themselves. Therefore, these positions do not change as the body deforms when this resource is used in [mesh](../clothbodycomponent/mesh.md).

## See Also

### Accessing vertex data

- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [position(at:)](position%28at_%29.md): Returns the position of the vertex at the given index.
- [vertexIndex(at:)](vertexindex%28at_%29.md): Returns the vertex index at the given position in the mesh’s flattened primitive index array.
- [vertexIndex(primitive:vertex:)](vertexindex%28primitive_vertex_%29.md): Returns the vertex index of the specified vertex within the specified primitive.
- [vertices(in:center:orientation:)](vertices%28in_center_orientation_%29.md): Returns the indices of the vertices that lie inside the given volume shape.
