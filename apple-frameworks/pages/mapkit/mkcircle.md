> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcircle](https://developer.apple.com/documentation/mapkit/mkcircle)

# MKCircle (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A circular overlay with a configurable radius that you center on a geographic coordinate.

## Declaration

```swift
class MKCircle
```

<a id="overview"></a>

## Overview

This class defines the portion of the map that the overlay covers. To draw the region, return an [MKCircleRenderer](mkcirclerenderer.md) object from the [mapView(\_:rendererFor:)](mkmapviewdelegate/mapview%28__rendererfor_%29.md) method of your map view delegate.

## Topics

### Creating a circle overlay

- [init(center:radius:)](mkcircle/init%28center_radius_%29.md): Creates and returns a circle object using the specified coordinate and radius.
- [init(mapRect:)](mkcircle/init%28maprect_%29.md): Creates and returns a circle object that derives the circular area from the specified rectangle.

### Accessing the overlay’s attributes

- [coordinate](mkcircle/coordinate.md): The center point of the circular area, specified as a latitude and longitude.
- [radius](mkcircle/radius.md): The radius of the circular area, in meters.
- [boundingMapRect](mkcircle/boundingmaprect.md): The bounding rectangle of the circular area.

### Initializers

- [init(centerCoordinate:radius:)](mkcircle/init%28centercoordinate_radius_%29.md)

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [MKOverlay](mkoverlay.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Circular overlays

- [MKCircleRenderer](mkcirclerenderer.md): The visual representation of a circular overlay.

# MKCircle (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A circular overlay with a configurable radius that you center on a geographic coordinate.

## Declaration

```objectivec
@interface MKCircle : MKShape
```

<a id="overview"></a>

## Overview

This class defines the portion of the map that the overlay covers. To draw the region, return an [MKCircleRenderer](mkcirclerenderer.md) object from the [mapView:rendererForOverlay:](mkmapviewdelegate/mapview%28__rendererfor_%29.md) method of your map view delegate.

## Topics

### Creating a circle overlay

- [circleWithCenterCoordinate:radius:](mkcircle/init%28center_radius_%29.md): Creates and returns a circle object using the specified coordinate and radius.
- [circleWithMapRect:](mkcircle/init%28maprect_%29.md): Creates and returns a circle object that derives the circular area from the specified rectangle.

### Accessing the overlay’s attributes

- [coordinate](mkcircle/coordinate.md): The center point of the circular area, specified as a latitude and longitude.
- [radius](mkcircle/radius.md): The radius of the circular area, in meters.
- [boundingMapRect](mkcircle/boundingmaprect.md): The bounding rectangle of the circular area.

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Conforms To

- [MKOverlay](mkoverlay.md)

## See Also

### Circular overlays

- [MKCircleRenderer](mkcirclerenderer.md): The visual representation of a circular overlay.
