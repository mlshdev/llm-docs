> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygonrenderer](https://developer.apple.com/documentation/mapkit/mkpolygonrenderer)

# MKPolygonRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The visual representation of a single polygon overlay.

## Declaration

```swift
class MKPolygonRenderer
```

<a id="overview"></a>

## Overview

This renderer creates the polygon overlay by first filling the shape and then representing its outline with strokes. You can change the color and other drawing attributes of the polygon by modifying the properties inherited from the parent class.

## Topics

### Creating a polygon renderer

- [init(polygon:)](mkpolygonrenderer/init%28polygon_%29.md): Creates a new renderer that handles drawing for the specified polygon overlay object.

### Accessing the polygon overlay object

- [polygon](mkpolygonrenderer/polygon.md): The polygon object that contains the information used to draw the overlay’s contents.

### Accessing the stroke

- [strokeStart](mkpolygonrenderer/strokestart.md): The unit distance along the polygon where the stroke starts.
- [strokeEnd](mkpolygonrenderer/strokeend.md): The unit distance along the polygon where the stroke ends.

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
- [MKMultiPolygon](mkmultipolygon.md): A collection of multiple closed polygon overlays.
- [MKMultiPolygonRenderer](mkmultipolygonrenderer.md): The visual representation of multiple polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.

# MKPolygonRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The visual representation of a single polygon overlay.

## Declaration

```objectivec
@interface MKPolygonRenderer : MKOverlayPathRenderer
```

<a id="overview"></a>

## Overview

This renderer creates the polygon overlay by first filling the shape and then representing its outline with strokes. You can change the color and other drawing attributes of the polygon by modifying the properties inherited from the parent class.

## Topics

### Creating a polygon renderer

- [initWithPolygon:](mkpolygonrenderer/init%28polygon_%29.md): Creates a new renderer that handles drawing for the specified polygon overlay object.

### Accessing the polygon overlay object

- [polygon](mkpolygonrenderer/polygon.md): The polygon object that contains the information used to draw the overlay’s contents.

### Accessing the stroke

- [strokeStart](mkpolygonrenderer/strokestart.md): The unit distance along the polygon where the stroke starts.
- [strokeEnd](mkpolygonrenderer/strokeend.md): The unit distance along the polygon where the stroke ends.

## Relationships

### Inherits From

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)

## See Also

### Custom shape overlays

- [MKPolygon](mkpolygon.md): A closed polygon overlay.
- [MKMultiPolygon](mkmultipolygon.md): A collection of multiple closed polygon overlays.
- [MKMultiPolygonRenderer](mkmultipolygonrenderer.md): The visual representation of multiple polygon overlays.
- [MKOverlayPathRenderer](mkoverlaypathrenderer.md): The visual representation of a path-based overlay.
