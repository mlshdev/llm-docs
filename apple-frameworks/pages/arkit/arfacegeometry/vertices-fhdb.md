> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacegeometry/vertices-fhdb](https://developer.apple.com/documentation/arkit/arfacegeometry/vertices-fhdb)

# vertices

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A buffer of vertex positions for each point in the face mesh.

## Declaration

```objectivec
@property (nonatomic, readonly) const simd_float3 * vertices;
```

<a id="Discussion"></a>

## Discussion

Each `float3` value in this buffer represents the position of a vertex in the mesh, in face coordinates. (See [Tracking Face Position and Orientation](../arfaceanchor.md#Tracking-Face-Position-and-Orientation).)

The [vertexCount](vertexcount.md) property provides the number of elements in the buffer.

## See Also

### Accessing Mesh Data

- [vertexCount](vertexcount.md): The number of elements in the [vertices](vertices-fhdb.md) buffer.
- [textureCoordinateCount](texturecoordinatecount.md): The number of elements in the [textureCoordinates](texturecoordinates-8ahq1.md) buffer.
- [textureCoordinates](texturecoordinates-8ahq1.md): A buffer of texture coordinate values for each point in the face mesh.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-3tb1o.md) buffer.
- [triangleIndices](triangleindices-3tb1o.md): A buffer of indices describing the triangle mesh formed by the face geometry’s vertex data.
