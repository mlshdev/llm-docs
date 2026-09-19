> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arplanegeometry/vertexcount

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
