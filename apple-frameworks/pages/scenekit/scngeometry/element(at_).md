> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/element(at:)](https://developer.apple.com/documentation/scenekit/scngeometry/element(at:))

# element(at:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the geometry element at a specified index.

## Declaration

```swift
func element(at elementIndex: Int) -> SCNGeometryElement
```

## Parameters

- `elementIndex`: The index of the geometry element.

<a id="return-value"></a>

## Return Value

A geometry element.

<a id="Discussion"></a>

## Discussion

Each [SCNGeometryElement](../scngeometryelement.md) object describes how vertices from the geometry’s sources are combined into polygons to create the geometry’s shape. Visible geometries contain at least one element.

## See Also

### Related Documentation

- [init(sources:elements:)](init%28sources_elements_%29.md): Creates a new geometry built from the specified geometry sources and elements.

### Managing Geometry Data

- [elements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [sources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [elementCount](elementcount.md): The number of geometry elements in the geometry.
- [sources(for:)](sources%28for_%29.md): Returns the geometry sources for a specified semantic.

# geometryElementAtIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the geometry element at a specified index.

## Declaration

```objectivec
- (SCNGeometryElement *) geometryElementAtIndex:(NSInteger) elementIndex;
```

## Parameters

- `elementIndex`: The index of the geometry element.

<a id="return-value"></a>

## Return Value

A geometry element.

<a id="Discussion"></a>

## Discussion

Each [SCNGeometryElement](../scngeometryelement.md) object describes how vertices from the geometry’s sources are combined into polygons to create the geometry’s shape. Visible geometries contain at least one element.

## See Also

### Related Documentation

- [geometryWithSources:elements:](init%28sources_elements_%29.md): Creates a new geometry built from the specified geometry sources and elements.

### Managing Geometry Data

- [geometryElements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [geometrySources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [geometryElementCount](elementcount.md): The number of geometry elements in the geometry.
- [geometrySourcesForSemantic:](sources%28for_%29.md): Returns the geometry sources for a specified semantic.
