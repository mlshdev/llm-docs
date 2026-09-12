> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplanegeometry/texturecoordinates-p801](https://developer.apple.com/documentation/arkit/arplanegeometry/texturecoordinates-p801)

# textureCoordinates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

An array of texture coordinate values for each point in the plane mesh.

## Declaration

```swift
@nonobjc var textureCoordinates: [vector_float2] { get }
```

<a id="Discussion"></a>

## Discussion

Each `float2` value in this array represents the UV texture coordinates for the vertex at the corresponding index in the [vertices](vertices-43kle.md) array.

## See Also

### Accessing Mesh Data

- [vertices](vertices-43kle.md): An array of vertex positions for each point in the plane mesh.
- [triangleCount](trianglecount.md): The number of triangles described by the [triangleIndices](triangleindices-1azi3.md) buffer.
- [triangleIndices](triangleindices-64epx.md): An array of indices describing the triangle mesh formed by the plane geometry’s vertex data.
