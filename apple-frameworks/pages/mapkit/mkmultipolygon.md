> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipolygon](https://developer.apple.com/documentation/mapkit/mkmultipolygon)

# MKMultiPolygon (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of multiple closed polygon overlays.

## Declaration

```swift
class MKMultiPolygon
```

<a id="overview"></a>

## Overview

Use a [MKMultiPolygon](mkmultipolygon.md) when you have multiple distinct polygon shapes that you intend to render using the same style.

## Topics

### Creating a multipolygon

- [init(\_:)](mkmultipolygon/init%28__%29.md): Creates a multipolygon object using the provided polygons.

### Accessing polygons

- [polygons](mkmultipolygon/polygons.md): An array containing the polygons that make up the multipolygon object.

### Initializers

- [init(polygons:)](mkmultipolygon/init%28polygons_%29.md)

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [MKGeoJSONObject](mkgeojsonobject.md)
- [MKOverlay](mkoverlay.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom shape overlays

- [MKPolygon](mkpolygon.md): A closed polygon overlay.
- [MKPolygonRenderer](mkpolygonrenderer.md): The visual representation of a single polygon overlay.
- [MKMultiPolygonRenderer](mkmultipolygonrenderer.md): The visual representation of multiple polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.

# MKMultiPolygon (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of multiple closed polygon overlays.

## Declaration

```objectivec
@interface MKMultiPolygon : MKShape
```

<a id="overview"></a>

## Overview

Use a [MKMultiPolygon](mkmultipolygon.md) when you have multiple distinct polygon shapes that you intend to render using the same style.

## Topics

### Creating a multipolygon

- [initWithPolygons:](mkmultipolygon/init%28__%29.md): Creates a multipolygon object using the provided polygons.

### Accessing polygons

- [polygons](mkmultipolygon/polygons.md): An array containing the polygons that make up the multipolygon object.

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Conforms To

- [MKGeoJSONObject](mkgeojsonobject.md)
- [MKOverlay](mkoverlay.md)

## See Also

### Custom shape overlays

- [MKPolygon](mkpolygon.md): A closed polygon overlay.
- [MKPolygonRenderer](mkpolygonrenderer.md): The visual representation of a single polygon overlay.
- [MKMultiPolygonRenderer](mkmultipolygonrenderer.md): The visual representation of multiple polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.
