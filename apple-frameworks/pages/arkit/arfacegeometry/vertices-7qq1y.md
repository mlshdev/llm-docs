> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacegeometry/vertices-7qq1y](https://developer.apple.com/documentation/arkit/arfacegeometry/vertices-7qq1y)

# vertices

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An array of vertex positions for each point in the face mesh.

## Declaration

```swift
@nonobjc var vertices: [simd_float3] { get }
```

<a id="Discussion"></a>

## Discussion

Each `float3` value in this array represents the position of a vertex in the mesh, in face coordinates. (See [Tracking Face Position and Orientation](../arfaceanchor.md#Tracking-Face-Position-and-Orientation).)

## See Also

### Accessing Mesh Data

- [textureCoordinates](texturecoordinates-u42d.md): An array of texture coordinate values for each point in the face mesh.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-3tb1o.md) buffer.
- [triangleIndices](triangleindices-8isy8.md): An array of indices describing the triangle mesh formed by the face geometry’s vertex data.
