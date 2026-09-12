> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygon](https://developer.apple.com/documentation/mapkit/mkpolygon)

# MKPolygon (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A closed polygon overlay.

## Declaration

```swift
class MKPolygon
```

<a id="overview"></a>

## Overview

The points you add to this overlay connect end-to-end in the order you provide them. The first and last points connect to each other to create a closed shape.

When creating a polygon, you can mask out portions of the polygon by specifying one or more interior polygons. For the polygons you specify, this class uses the even-odd fill rule to determine the final occupied area. When applied to overlapping polygons, this rule can cause the framework to mask specific regions out and thereby remove them from the total occupied area. For more information about how fill rules apply to paths, see [Paths](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_paths/dq_paths.html#//apple_ref/doc/uid/TP30001066-CH211) in [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## Topics

### Creating a polygon overlay

- [init(points:count:)](mkpolygon/init%28points_count_%29.md): Creates and returns a polygon object from the specified set of map points.
- [init(points:count:interiorPolygons:)](mkpolygon/init%28points_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of map points and interior polygons.
- [init(coordinates:count:)](mkpolygon/init%28coordinates_count_%29.md): Creates and returns a polygon object from the specified set of coordinates.
- [init(coordinates:count:interiorPolygons:)](mkpolygon/init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.

### Accessing the interior polygons

- [interiorPolygons](mkpolygon/interiorpolygons.md): The array of polygons that nest inside the enclosing polygon.

## Relationships

### Inherits From

- [MKMultiPoint](mkmultipoint.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [MKGeoJSONObject](mkgeojsonobject.md)
- [MKOverlay](mkoverlay.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom shape overlays

- [MKPolygonRenderer](mkpolygonrenderer.md): The visual representation of a single polygon overlay.
- [MKMultiPolygon](mkmultipolygon.md): A collection of multiple closed polygon overlays.
- [MKMultiPolygonRenderer](mkmultipolygonrenderer.md): The visual representation of multiple polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.

# MKPolygon (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A closed polygon overlay.

## Declaration

```objectivec
@interface MKPolygon : MKMultiPoint
```

<a id="overview"></a>

## Overview

The points you add to this overlay connect end-to-end in the order you provide them. The first and last points connect to each other to create a closed shape.

When creating a polygon, you can mask out portions of the polygon by specifying one or more interior polygons. For the polygons you specify, this class uses the even-odd fill rule to determine the final occupied area. When applied to overlapping polygons, this rule can cause the framework to mask specific regions out and thereby remove them from the total occupied area. For more information about how fill rules apply to paths, see [Paths](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_paths/dq_paths.html#//apple_ref/doc/uid/TP30001066-CH211) in [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## Topics

### Creating a polygon overlay

- [polygonWithPoints:count:](mkpolygon/init%28points_count_%29.md): Creates and returns a polygon object from the specified set of map points.
- [polygonWithPoints:count:interiorPolygons:](mkpolygon/init%28points_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of map points and interior polygons.
- [polygonWithCoordinates:count:](mkpolygon/init%28coordinates_count_%29.md): Creates and returns a polygon object from the specified set of coordinates.
- [polygonWithCoordinates:count:interiorPolygons:](mkpolygon/init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.

### Accessing the interior polygons

- [interiorPolygons](mkpolygon/interiorpolygons.md): The array of polygons that nest inside the enclosing polygon.

## Relationships

### Inherits From

- [MKMultiPoint](mkmultipoint.md)

### Conforms To

- [MKGeoJSONObject](mkgeojsonobject.md)
- [MKOverlay](mkoverlay.md)

## See Also

### Custom shape overlays

- [MKPolygonRenderer](mkpolygonrenderer.md): The visual representation of a single polygon overlay.
- [MKMultiPolygon](mkmultipolygon.md): A collection of multiple closed polygon overlays.
- [MKMultiPolygonRenderer](mkmultipolygonrenderer.md): The visual representation of multiple polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.
