> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacegeometry/triangleindices-3tb1o](https://developer.apple.com/documentation/arkit/arfacegeometry/triangleindices-3tb1o)

# triangleIndices

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A buffer of indices describing the triangle mesh formed by the face geometry’s vertex data.

## Declaration

```objectivec
@property (nonatomic, readonly) const int16_t * triangleIndices;
```

<a id="Discussion"></a>

## Discussion

Each 16-bit integer value in this buffer represents an index into the [vertices](vertices-fhdb.md) and [textureCoordinates](texturecoordinates-8ahq1.md) buffers. Each set of three indices identifies the vertices that form a single triangle in the mesh. (That is, this buffer is appropriate for use as an index buffer for a triangle mesh in GPU-based rendering or creating 3D model asset files.)

Each set of three indices forms a triangle, so the number of indices in the [triangleIndices](triangleindices-3tb1o.md) buffer is three times the [triangleCount](trianglecount.md) value.

Face mesh topology is constant across [ARFaceGeometry](../arfacegeometry.md) instances, so this buffer always describes the same arrangement of vertices. Only the [vertices](vertices-fhdb.md) buffer changes between face meshes provided by an AR session, indicating the change in vertex positions as ARKit adapts the mesh to the shape and expression of the user’s face.

## See Also

### Accessing Mesh Data

- [vertexCount](vertexcount.md): The number of elements in the [vertices](vertices-fhdb.md) buffer.
- [vertices](vertices-fhdb.md): A buffer of vertex positions for each point in the face mesh.
- [textureCoordinateCount](texturecoordinatecount.md): The number of elements in the [textureCoordinates](texturecoordinates-8ahq1.md) buffer.
- [textureCoordinates](texturecoordinates-8ahq1.md): A buffer of texture coordinate values for each point in the face mesh.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-3tb1o.md) buffer.
