> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolyline](https://developer.apple.com/documentation/mapkit/mkpolyline)

# MKPolyline (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An open polygon overlay consisting of one or more connected line segments.

## Declaration

```swift
class MKPolyline
```

<a id="overview"></a>

## Overview

The points connect end-to-end in the order that you provide them. The first and last points don’t automatically connect to each other.

## Topics

### Creating a polyline overlay

- [init(points:count:)](mkpolyline/init%28points_count_%29.md): Creates a polyline object from the specified set of map points.
- [init(coordinates:count:)](mkpolyline/init%28coordinates_count_%29.md): Creates a polyline object from the specified set of coordinates.

## Relationships

### Inherits From

- [MKMultiPoint](mkmultipoint.md)

### Inherited By

- [MKGeodesicPolyline](mkgeodesicpolyline.md)

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

### Multiple segment lines

- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.

# MKPolyline (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An open polygon overlay consisting of one or more connected line segments.

## Declaration

```objectivec
@interface MKPolyline : MKMultiPoint
```

<a id="overview"></a>

## Overview

The points connect end-to-end in the order that you provide them. The first and last points don’t automatically connect to each other.

## Topics

### Creating a polyline overlay

- [polylineWithPoints:count:](mkpolyline/init%28points_count_%29.md): Creates a polyline object from the specified set of map points.
- [polylineWithCoordinates:count:](mkpolyline/init%28coordinates_count_%29.md): Creates a polyline object from the specified set of coordinates.

## Relationships

### Inherits From

- [MKMultiPoint](mkmultipoint.md)

### Inherited By

- [MKGeodesicPolyline](mkgeodesicpolyline.md)

### Conforms To

- [MKGeoJSONObject](mkgeojsonobject.md)
- [MKOverlay](mkoverlay.md)

## See Also

### Multiple segment lines

- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.
