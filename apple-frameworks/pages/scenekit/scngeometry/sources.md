> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/sources](https://developer.apple.com/documentation/scenekit/scngeometry/sources)

# sources (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An array of geometry sources that provide vertex data for the geometry.

## Declaration

```swift
var sources: [SCNGeometrySource] { get }
```

<a id="Discussion"></a>

## Discussion

Each [SCNGeometrySource](../scngeometrysource.md) object describes an attribute of all vertices in the geometry (such as vertex position, surface normal vector, color, or texture mapping coordinates) identified by the source’s [semantic](../scngeometrysource/semantic-swift.property.md) property. A geometry always has at least one source (for the [vertex](../scngeometrysource/semantic-swift.struct/vertex.md) semantic), typically has additional sources for use in lighting and shading, and may have other sources for skeletal animation or surface subdivision information.

## See Also

### Managing Geometry Data

- [elements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [elementCount](elementcount.md): The number of geometry elements in the geometry.
- [element(at:)](element%28at_%29.md): Returns the geometry element at a specified index.
- [sources(for:)](sources%28for_%29.md): Returns the geometry sources for a specified semantic.

# geometrySources (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An array of geometry sources that provide vertex data for the geometry.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SCNGeometrySource *> * geometrySources;
```

<a id="Discussion"></a>

## Discussion

Each [SCNGeometrySource](../scngeometrysource.md) object describes an attribute of all vertices in the geometry (such as vertex position, surface normal vector, color, or texture mapping coordinates) identified by the source’s [semantic](../scngeometrysource/semantic-swift.property.md) property. A geometry always has at least one source (for the [SCNGeometrySourceSemanticVertex](../scngeometrysource/semantic-swift.struct/vertex.md) semantic), typically has additional sources for use in lighting and shading, and may have other sources for skeletal animation or surface subdivision information.

## See Also

### Managing Geometry Data

- [geometryElements](elements.md): An array of geometry elements that describe the geometry’s shape.
- [geometryElementCount](elementcount.md): The number of geometry elements in the geometry.
- [geometryElementAtIndex:](element%28at_%29.md): Returns the geometry element at a specified index.
- [geometrySourcesForSemantic:](sources%28for_%29.md): Returns the geometry sources for a specified semantic.
