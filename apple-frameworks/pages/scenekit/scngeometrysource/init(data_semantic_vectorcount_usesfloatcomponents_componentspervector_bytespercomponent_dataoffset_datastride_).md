> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/init(data:semantic:vectorcount:usesfloatcomponents:componentspervector:bytespercomponent:dataoffset:datastride:)](https://developer.apple.com/documentation/scenekit/scngeometrysource/init(data:semantic:vectorcount:usesfloatcomponents:componentspervector:bytespercomponent:dataoffset:datastride:))

# init(data:semantic:vectorCount:usesFloatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry source from the specified data and options.

## Declaration

```swift
convenience init(data: Data, semantic: SCNGeometrySource.Semantic, vectorCount: Int, usesFloatComponents floatComponents: Bool, componentsPerVector: Int, bytesPerComponent: Int, dataOffset offset: Int, dataStride stride: Int)
```

## Parameters

- `data`: The data for the geometry source.
- `semantic`: The semantic value (or attribute) that the geometry source describes for each vertex. See Geometry Semantic Identifiers for available values.
- `vectorCount`: The number of geometry source vectors.
- `floatComponents`: A Boolean value that indicates whether vector components are floating-point values. Specify [true](https://developer.apple.com/documentation/swift/true) for floating-point values, or [false](https://developer.apple.com/documentation/swift/false) for integer values.
- `componentsPerVector`: The number of scalar components in each vector.
- `bytesPerComponent`: The size, in bytes, of each vector component.
- `offset`: The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- `stride`: The number of bytes from each vector to the next in the data.

<a id="return-value"></a>

## Return Value

A new geometry source object.

<a id="Discussion"></a>

## Discussion

A geometry source’s data is an array of vectors, each of which represents a particular attribute (or semantic) of a vertex in the geometry. The other parameters determine how SceneKit interprets this data. For example, an array of vertex positions may have three 32-bit floating-point components per vector, but an array of texture coordinates may have two 8-bit integer coponents per vector. You can use the `offset` and `stride` parameters together to interleave data for multiple geometry sources in the same array, improving rendering performance. See [SCNGeometrySource](../scngeometrysource.md) for details.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry source, use the [init(sources:elements:)](../scngeometry/init%28sources_elements_%29.md) method.

## See Also

### Creating Geometry Sources

- [init(vertices:)](init%28vertices_%29.md): Deprecated. Creates a geometry source from an array of vertex positions.
- [init(normals:)](init%28normals_%29.md): Deprecated. Creates a geometry source from an array of normal vectors.
- [init(textureCoordinates:)](init%28texturecoordinates_%29.md): Deprecated. Creates a geometry source from an array of texture coordinate points.

# geometrySourceWithData:semantic:vectorCount:floatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a geometry source from the specified data and options.

## Declaration

```objectivec
+ (instancetype) geometrySourceWithData:(NSData *) data semantic:(SCNGeometrySourceSemantic) semantic vectorCount:(NSInteger) vectorCount floatComponents:(BOOL) floatComponents componentsPerVector:(NSInteger) componentsPerVector bytesPerComponent:(NSInteger) bytesPerComponent dataOffset:(NSInteger) offset dataStride:(NSInteger) stride;
```

## Parameters

- `data`: The data for the geometry source.
- `semantic`: The semantic value (or attribute) that the geometry source describes for each vertex. See Geometry Semantic Identifiers for available values.
- `vectorCount`: The number of geometry source vectors.
- `floatComponents`: A Boolean value that indicates whether vector components are floating-point values. Specify [true](https://developer.apple.com/documentation/swift/true) for floating-point values, or [false](https://developer.apple.com/documentation/swift/false) for integer values.
- `componentsPerVector`: The number of scalar components in each vector.
- `bytesPerComponent`: The size, in bytes, of each vector component.
- `offset`: The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- `stride`: The number of bytes from each vector to the next in the data.

<a id="return-value"></a>

## Return Value

A new geometry source object.

<a id="Discussion"></a>

## Discussion

A geometry source’s data is an array of vectors, each of which represents a particular attribute (or semantic) of a vertex in the geometry. The other parameters determine how SceneKit interprets this data. For example, an array of vertex positions may have three 32-bit floating-point components per vector, but an array of texture coordinates may have two 8-bit integer coponents per vector. You can use the `offset` and `stride` parameters together to interleave data for multiple geometry sources in the same array, improving rendering performance. See [SCNGeometrySource](../scngeometrysource.md) for details.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry source, use the [geometryWithSources:elements:](../scngeometry/init%28sources_elements_%29.md) method.

## See Also

### Creating Geometry Sources

- [geometrySourceWithVertices:count:](geometrysourcewithvertices_count_.md): Deprecated. Creates a geometry source from an array of vertex positions.
- [geometrySourceWithNormals:count:](geometrysourcewithnormals_count_.md): Deprecated. Creates a geometry source from an array of normal vectors.
- [geometrySourceWithTextureCoordinates:count:](geometrysourcewithtexturecoordinates_count_.md): Deprecated. Creates a geometry source from an array of texture coordinate points.
