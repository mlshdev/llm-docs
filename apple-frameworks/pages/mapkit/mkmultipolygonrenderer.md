> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipolygonrenderer](https://developer.apple.com/documentation/mapkit/mkmultipolygonrenderer)

# MKMultiPolygonRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The visual representation of multiple polygon overlays.

## Declaration

```swift
class MKMultiPolygonRenderer
```

<a id="overview"></a>

## Overview

Use this renderer to provide the style for multiple polygons created using [MKMultiPolygon](mkmultipolygon.md).

## Topics

### Creating a multipolygon renderer

- [init(multiPolygon:)](mkmultipolygonrenderer/init%28multipolygon_%29.md): Creates and returns a renderer that handles drawing for the specified multipolygon overlay object.

### Accessing the multipolygon object

- [multiPolygon](mkmultipolygonrenderer/multipolygon.md): The multipolygon object that the renderer uses to draw the overlay’s contents.

## Relationships

### Inherits From

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom shape overlays

- [MKPolygon](mkpolygon.md): A closed polygon overlay.
- [MKPolygonRenderer](mkpolygonrenderer.md): The visual representation of a single polygon overlay.
- [MKMultiPolygon](mkmultipolygon.md): A collection of multiple closed polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.

# MKMultiPolygonRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The visual representation of multiple polygon overlays.

## Declaration

```objectivec
@interface MKMultiPolygonRenderer : MKOverlayPathRenderer
```

<a id="overview"></a>

## Overview

Use this renderer to provide the style for multiple polygons created using [MKMultiPolygon](mkmultipolygon.md).

## Topics

### Creating a multipolygon renderer

- [initWithMultiPolygon:](mkmultipolygonrenderer/init%28multipolygon_%29.md): Creates and returns a renderer that handles drawing for the specified multipolygon overlay object.

### Accessing the multipolygon object

- [multiPolygon](mkmultipolygonrenderer/multipolygon.md): The multipolygon object that the renderer uses to draw the overlay’s contents.

## Relationships

### Inherits From

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)

## See Also

### Custom shape overlays

- [MKPolygon](mkpolygon.md): A closed polygon overlay.
- [MKPolygonRenderer](mkpolygonrenderer.md): The visual representation of a single polygon overlay.
- [MKMultiPolygon](mkmultipolygon.md): A collection of multiple closed polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.
