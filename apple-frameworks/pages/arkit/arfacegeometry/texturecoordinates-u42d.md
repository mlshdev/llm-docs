> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacegeometry/texturecoordinates-u42d](https://developer.apple.com/documentation/arkit/arfacegeometry/texturecoordinates-u42d)

# textureCoordinates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An array of texture coordinate values for each point in the face mesh.

## Declaration

```swift
@nonobjc var textureCoordinates: [vector_float2] { get }
```

<a id="Discussion"></a>

## Discussion

Each `float2` value in this array represents the UV texture coordinates for the vertex at the corresponding index in the [vertices](vertices-fhdb.md) buffer.Face mesh topology is constant across [ARFaceGeometry](../arfacegeometry.md) instances, so the values in this array always maps the same vertex indices to the same texture coordinates.

## See Also

### Accessing Mesh Data

- [vertices](vertices-7qq1y.md): An array of vertex positions for each point in the face mesh.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-3tb1o.md) buffer.
- [triangleIndices](triangleindices-8isy8.md): An array of indices describing the triangle mesh formed by the face geometry’s vertex data.
