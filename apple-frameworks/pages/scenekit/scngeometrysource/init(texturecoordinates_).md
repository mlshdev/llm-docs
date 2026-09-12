> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/init(texturecoordinates:)](https://developer.apple.com/documentation/scenekit/scngeometrysource/init(texturecoordinates:))

# init(textureCoordinates:)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry source from an array of texture coordinate points.

## Declaration

```swift
@nonobjc convenience init(textureCoordinates: [CGPoint])
```

## Parameters

- `textureCoordinates`: An array of points, each of which represents a texture coordinate pair for the geometry source.

<a id="return-value"></a>

## Return Value

A new geometry source whose [semantic](semantic-swift.property.md) property is [texcoord](semantic-swift.struct/texcoord.md).

<a id="Discussion"></a>

## Discussion

SceneKit converts this data to its own format to optimize rendering performance. To read the converted data, examine the properties of the created [SCNGeometrySource](../scngeometrysource.md) object.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry source, use the [init(sources:elements:)](../scngeometry/init%28sources_elements_%29.md) method.

## See Also

### Creating Geometry Sources

- [init(data:semantic:vectorCount:usesFloatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride:)](init%28data_semantic_vectorcount_usesfloatcomponents_componentspervector_bytespercomponent_dataoffset_datastride_%29.md): Creates a geometry source from the specified data and options.
- [init(vertices:)](init%28vertices_%29.md): Deprecated. Creates a geometry source from an array of vertex positions.
- [init(normals:)](init%28normals_%29.md): Deprecated. Creates a geometry source from an array of normal vectors.
