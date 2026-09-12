> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/elementcount](https://developer.apple.com/documentation/scenekit/scngeometry/elementcount)

# elementCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of geometry elements in the geometry.

## Declaration

```swift
var elementCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each [SCNGeometryElement](../scngeometryelement.md) object describes how vertices from the geometry’s sources are combined into polygons to create the geometry’s shape. Visible geometries contain at least one element.

For geometries with multiple elements, you can use the [materials](materials.md) property to attach different materials to each element.

## See Also

### Managing Geometry Data

- [elements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [sources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [element(at:)](element%28at_%29.md): Returns the geometry element at a specified index.
- [sources(for:)](sources%28for_%29.md): Returns the geometry sources for a specified semantic.

# geometryElementCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of geometry elements in the geometry.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger geometryElementCount;
```

<a id="Discussion"></a>

## Discussion

Each [SCNGeometryElement](../scngeometryelement.md) object describes how vertices from the geometry’s sources are combined into polygons to create the geometry’s shape. Visible geometries contain at least one element.

For geometries with multiple elements, you can use the [materials](materials.md) property to attach different materials to each element.

## See Also

### Managing Geometry Data

- [geometryElements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [geometrySources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [geometryElementAtIndex:](element%28at_%29.md): Returns the geometry element at a specified index.
- [geometrySourcesForSemantic:](sources%28for_%29.md): Returns the geometry sources for a specified semantic.
