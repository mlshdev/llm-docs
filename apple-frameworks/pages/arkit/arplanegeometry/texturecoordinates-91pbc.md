> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplanegeometry/texturecoordinates-91pbc](https://developer.apple.com/documentation/arkit/arplanegeometry/texturecoordinates-91pbc)

# textureCoordinates

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A buffer of texture coordinate values for each point in the plane mesh.

## Declaration

```objectivec
@property (nonatomic, readonly) const simd_float2 * textureCoordinates;
```

<a id="Discussion"></a>

## Discussion

Each `float2` value in this buffer represents the UV texture coordinates for the vertex at the corresponding index in the [vertices](vertices-3kgkm.md) buffer.

## See Also

### Accessing Mesh Data

- [vertices](vertices-3kgkm.md): A buffer of vertex positions for each point in the plane mesh.
- [vertexCount](vertexcount.md): The number of elements in the [vertices](vertices-3kgkm.md) buffer.
- [textureCoordinateCount](texturecoordinatecount.md): The number of elements in the [textureCoordinates](texturecoordinates-91pbc.md) buffer.
- [triangleIndices](triangleindices-1azi3.md): A buffer of indices describing the triangle mesh formed by the plane geometry’s vertex data.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-1azi3.md) buffer.
