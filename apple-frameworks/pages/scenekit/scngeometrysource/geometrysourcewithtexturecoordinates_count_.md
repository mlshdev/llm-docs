> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/geometrysourcewithtexturecoordinates:count:](https://developer.apple.com/documentation/scenekit/scngeometrysource/geometrysourcewithtexturecoordinates:count:)

# geometrySourceWithTextureCoordinates:count:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry source from an array of texture coordinate points.

## Declaration

```objectivec
+ (instancetype) geometrySourceWithTextureCoordinates:(const CGPoint *) texcoord count:(NSInteger) count;
```

## Parameters

- `texcoord`: An array of points, each of which represents a texture coordinate pair for the geometry source.
- `count`: The number of texture coordinate points.

<a id="return-value"></a>

## Return Value

A new geometry source whose [SCNGeometrySource](../scngeometrysource.md) property is [SCNGeometrySourceSemanticTexcoord](semantic-swift.struct/texcoord.md).

<a id="Discussion"></a>

## Discussion

SceneKit converts this data to its own format to optimize rendering performance. To read the converted data, examine the properties of the created [SCNGeometrySource](../scngeometrysource.md) object.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry source, use the [geometryWithSources:elements:](../scngeometry/init%28sources_elements_%29.md) method.

## See Also

### Creating Geometry Sources

- [geometrySourceWithData:semantic:vectorCount:floatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride:](init%28data_semantic_vectorcount_usesfloatcomponents_componentspervector_bytespercomponent_dataoffset_datastride_%29.md): Creates a geometry source from the specified data and options.
- [geometrySourceWithVertices:count:](geometrysourcewithvertices_count_.md): Deprecated. Creates a geometry source from an array of vertex positions.
- [geometrySourceWithNormals:count:](geometrysourcewithnormals_count_.md): Deprecated. Creates a geometry source from an array of normal vectors.
