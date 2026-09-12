> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacegeometry/trianglecount](https://developer.apple.com/documentation/arkit/arfacegeometry/trianglecount)

# triangleCount (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The number of triangles described by the [triangleIndices](triangleindices-3tb1o.md) buffer.

## Declaration

```swift
var triangleCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each set of three indices forms a triangle, so the number of indices in the [triangleIndices](triangleindices-3tb1o.md) buffer is three times the [triangleCount](trianglecount.md) value.

Face mesh topology is constant across [ARFaceGeometry](../arfacegeometry.md) instances, so the value of this property is the same for all instances.

## See Also

### Accessing Mesh Data

- [vertices](vertices-7qq1y.md): An array of vertex positions for each point in the face mesh.
- [textureCoordinates](texturecoordinates-u42d.md): An array of texture coordinate values for each point in the face mesh.
- [triangleIndices](triangleindices-8isy8.md): An array of indices describing the triangle mesh formed by the face geometry’s vertex data.

# triangleCount (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The number of triangles described by the [triangleIndices](triangleindices-3tb1o.md) buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger triangleCount;
```

<a id="Discussion"></a>

## Discussion

Each set of three indices forms a triangle, so the number of indices in the [triangleIndices](triangleindices-3tb1o.md) buffer is three times the [triangleCount](trianglecount.md) value.

Face mesh topology is constant across [ARFaceGeometry](../arfacegeometry.md) instances, so the value of this property is the same for all instances.

## See Also

### Accessing Mesh Data

- [vertexCount](vertexcount.md): The number of elements in the [vertices](vertices-fhdb.md) buffer.
- [vertices](vertices-fhdb.md): A buffer of vertex positions for each point in the face mesh.
- [textureCoordinateCount](texturecoordinatecount.md): The number of elements in the [textureCoordinates](texturecoordinates-8ahq1.md) buffer.
- [textureCoordinates](texturecoordinates-8ahq1.md): A buffer of texture coordinate values for each point in the face mesh.
- [triangleIndices](triangleindices-3tb1o.md): A buffer of indices describing the triangle mesh formed by the face geometry’s vertex data.
