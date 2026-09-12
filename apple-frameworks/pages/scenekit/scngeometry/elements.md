> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/elements](https://developer.apple.com/documentation/scenekit/scngeometry/elements)

# elements (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An array of geometry elements that describe the geometry’s shape.

## Declaration

```swift
var elements: [SCNGeometryElement] { get }
```

<a id="Discussion"></a>

## Discussion

Each [SCNGeometryElement](../scngeometryelement.md) object describes how vertices from the geometry’s sources are combined into polygons to create the geometry’s shape. Visible geometries contain at least one element.

For geometries with multiple elements, you can use the [materials](materials.md) property to attach different materials to each element.

## See Also

### Managing Geometry Data

- [sources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [elementCount](elementcount.md): The number of geometry elements in the geometry.
- [element(at:)](element%28at_%29.md): Returns the geometry element at a specified index.
- [sources(for:)](sources%28for_%29.md): Returns the geometry sources for a specified semantic.

# geometryElements (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An array of geometry elements that describe the geometry’s shape.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SCNGeometryElement *> * geometryElements;
```

<a id="Discussion"></a>

## Discussion

Each [SCNGeometryElement](../scngeometryelement.md) object describes how vertices from the geometry’s sources are combined into polygons to create the geometry’s shape. Visible geometries contain at least one element.

For geometries with multiple elements, you can use the [materials](materials.md) property to attach different materials to each element.

## See Also

### Managing Geometry Data

- [geometrySources](sources.md): An array of geometry sources that provide vertex data for the geometry.
- [geometryElementCount](elementcount.md): The number of geometry elements in the geometry.
- [geometryElementAtIndex:](element%28at_%29.md): Returns the geometry element at a specified index.
- [geometrySourcesForSemantic:](sources%28for_%29.md): Returns the geometry sources for a specified semantic.
