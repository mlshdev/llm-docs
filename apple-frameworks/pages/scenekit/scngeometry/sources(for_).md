> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/sources(for:)](https://developer.apple.com/documentation/scenekit/scngeometry/sources(for:))

# sources(for:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the geometry sources for a specified semantic.

## Declaration

```swift
func sources(for semantic: SCNGeometrySource.Semantic) -> [SCNGeometrySource]
```

## Parameters

- `semantic`: A constant identifying a semantic for which to return geometry sources. See Geometry Semantic Identifiers for possible values.

<a id="return-value"></a>

## Return Value

An array of [SCNGeometrySource](../scngeometrysource.md) objects, or `nil` if the geometry has no source for the specified semantic.

<a id="Discussion"></a>

## Discussion

Each [SCNGeometrySource](../scngeometrysource.md) object describes an attribute of all vertices in the geometry (such as vertex position, surface normal vector, color, or texture mapping coordinates) identified by the source’s [semantic](../scngeometrysource/semantic-swift.property.md) property. A geometry always has at least one source, for the [vertex](../scngeometrysource/semantic-swift.struct/vertex.md) semantic, typically has additional sources for use in lighting and shading, and may have other sources for skeletal animation or surface subdivision information.

The vertex, normal, and color semantics each refer to at most one source. A geometry may have multiple sources for the [texcoord](../scngeometrysource/semantic-swift.struct/texcoord.md) semantic—in this case, indices in the returned array correspond to values for the [mappingChannel](../scnmaterialproperty/mappingchannel.md) property used when attaching textures to materials.

## See Also

### Related Documentation

- [init(sources:elements:)](init%28sources_elements_%29.md): Creates a new geometry built from the specified geometry sources and elements.

### Managing Geometry Data

- [elements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [sources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [elementCount](elementcount.md): The number of geometry elements in the geometry.
- [element(at:)](element%28at_%29.md): Returns the geometry element at a specified index.

# geometrySourcesForSemantic: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the geometry sources for a specified semantic.

## Declaration

```objectivec
- (NSArray<SCNGeometrySource *> *) geometrySourcesForSemantic:(SCNGeometrySourceSemantic) semantic;
```

## Parameters

- `semantic`: A constant identifying a semantic for which to return geometry sources. See Geometry Semantic Identifiers for possible values.

<a id="return-value"></a>

## Return Value

An array of [SCNGeometrySource](../scngeometrysource.md) objects, or `nil` if the geometry has no source for the specified semantic.

<a id="Discussion"></a>

## Discussion

Each [SCNGeometrySource](../scngeometrysource.md) object describes an attribute of all vertices in the geometry (such as vertex position, surface normal vector, color, or texture mapping coordinates) identified by the source’s [semantic](../scngeometrysource/semantic-swift.property.md) property. A geometry always has at least one source, for the [SCNGeometrySourceSemanticVertex](../scngeometrysource/semantic-swift.struct/vertex.md) semantic, typically has additional sources for use in lighting and shading, and may have other sources for skeletal animation or surface subdivision information.

The vertex, normal, and color semantics each refer to at most one source. A geometry may have multiple sources for the [SCNGeometrySourceSemanticTexcoord](../scngeometrysource/semantic-swift.struct/texcoord.md) semantic—in this case, indices in the returned array correspond to values for the [mappingChannel](../scnmaterialproperty/mappingchannel.md) property used when attaching textures to materials.

## See Also

### Related Documentation

- [geometryWithSources:elements:](init%28sources_elements_%29.md): Creates a new geometry built from the specified geometry sources and elements.

### Managing Geometry Data

- [geometryElements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [geometrySources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [geometryElementCount](elementcount.md): The number of geometry elements in the geometry.
- [geometryElementAtIndex:](element%28at_%29.md): Returns the geometry element at a specified index.
