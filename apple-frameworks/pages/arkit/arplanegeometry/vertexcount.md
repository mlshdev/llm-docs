> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplanegeometry/vertexcount](https://developer.apple.com/documentation/arkit/arplanegeometry/vertexcount)

# vertexCount

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The number of elements in the [vertices](vertices-3kgkm.md) buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger vertexCount;
```

## See Also

### Accessing Mesh Data

- [vertices](vertices-3kgkm.md): A buffer of vertex positions for each point in the plane mesh.
- [textureCoordinates](texturecoordinates-91pbc.md): A buffer of texture coordinate values for each point in the plane mesh.
- [textureCoordinateCount](texturecoordinatecount.md): The number of elements in the [textureCoordinates](texturecoordinates-91pbc.md) buffer.
- [triangleIndices](triangleindices-1azi3.md): A buffer of indices describing the triangle mesh formed by the plane geometry’s vertex data.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-1azi3.md) buffer.
