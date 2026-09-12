> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplanegeometry/triangleindices-64epx](https://developer.apple.com/documentation/arkit/arplanegeometry/triangleindices-64epx)

# triangleIndices

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

An array of indices describing the triangle mesh formed by the plane geometry’s vertex data.

## Declaration

```swift
@nonobjc var triangleIndices: [Int16] { get }
```

<a id="Discussion"></a>

## Discussion

Each 16-bit integer value in this array represents an index into the [vertices](vertices-43kle.md) and [textureCoordinates](texturecoordinates-p801.md) arrays. Each set of three indices identifies the vertices that form a single triangle in the mesh. You can use array as an index buffer for a triangle mesh in GPU-based rendering or to create 3D model asset files.

Each set of three indices forms a triangle, so the number of indices in the [triangleIndices](triangleindices-64epx.md) array is three times the [triangleCount](trianglecount.md) value.

## See Also

### Accessing Mesh Data

- [vertices](vertices-43kle.md): An array of vertex positions for each point in the plane mesh.
- [textureCoordinates](texturecoordinates-p801.md): An array of texture coordinate values for each point in the plane mesh.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-1azi3.md) buffer.
