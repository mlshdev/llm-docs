> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/geometrysourcewithnormals:count:](https://developer.apple.com/documentation/scenekit/scngeometrysource/geometrysourcewithnormals:count:)

# geometrySourceWithNormals:count:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry source from an array of normal vectors.

## Declaration

```objectivec
+ (instancetype) geometrySourceWithNormals:(const SCNVector3 *) normals count:(NSInteger) count;
```

## Parameters

- `normals`: An array of three-component vectors, each of which represents a surface normal for the geometry source.
- `count`: The number of normal vectors.

<a id="return-value"></a>

## Return Value

A new geometry source whose [SCNGeometrySource](../scngeometrysource.md) property is [SCNGeometrySourceSemanticNormal](semantic-swift.struct/normal.md).

<a id="Discussion"></a>

## Discussion

SceneKit converts this data to its own format to optimize rendering performance. To read the converted data, examine the properties of the created [SCNGeometrySource](../scngeometrysource.md) object.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry source, use the [geometryWithSources:elements:](../scngeometry/init%28sources_elements_%29.md) method.

## See Also

### Creating Geometry Sources

- [geometrySourceWithData:semantic:vectorCount:floatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride:](init%28data_semantic_vectorcount_usesfloatcomponents_componentspervector_bytespercomponent_dataoffset_datastride_%29.md): Creates a geometry source from the specified data and options.
- [geometrySourceWithVertices:count:](geometrysourcewithvertices_count_.md): Deprecated. Creates a geometry source from an array of vertex positions.
- [geometrySourceWithTextureCoordinates:count:](geometrysourcewithtexturecoordinates_count_.md): Deprecated. Creates a geometry source from an array of texture coordinate points.
