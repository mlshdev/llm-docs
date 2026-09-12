> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplanegeometry/trianglecount](https://developer.apple.com/documentation/arkit/arplanegeometry/trianglecount)

# triangleCount (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The number of triangles described by the [triangleIndices](triangleindices-1azi3.md) buffer.

## Declaration

```swift
var triangleCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each set of three indices forms a triangle, so the number of indices in the [triangleIndices](triangleindices-1azi3.md) buffer is three times the [triangleCount](trianglecount.md) value.

## See Also

### Accessing Mesh Data

- [vertices](vertices-43kle.md): An array of vertex positions for each point in the plane mesh.
- [textureCoordinates](texturecoordinates-p801.md): An array of texture coordinate values for each point in the plane mesh.
- [triangleIndices](triangleindices-64epx.md): An array of indices describing the triangle mesh formed by the plane geometry’s vertex data.

# triangleCount (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The number of triangles described by the [triangleIndices](triangleindices-1azi3.md) buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger triangleCount;
```

<a id="Discussion"></a>

## Discussion

Each set of three indices forms a triangle, so the number of indices in the [triangleIndices](triangleindices-1azi3.md) buffer is three times the [triangleCount](trianglecount.md) value.

## See Also

### Accessing Mesh Data

- [vertices](vertices-3kgkm.md): A buffer of vertex positions for each point in the plane mesh.
- [vertexCount](vertexcount.md): The number of elements in the [vertices](vertices-3kgkm.md) buffer.
- [textureCoordinates](texturecoordinates-91pbc.md): A buffer of texture coordinate values for each point in the plane mesh.
- [textureCoordinateCount](texturecoordinatecount.md): The number of elements in the [textureCoordinates](texturecoordinates-91pbc.md) buffer.
- [triangleIndices](triangleindices-1azi3.md): A buffer of indices describing the triangle mesh formed by the plane geometry’s vertex data.
