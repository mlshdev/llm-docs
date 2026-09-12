> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeodesicpolyline](https://developer.apple.com/documentation/mapkit/mkgeodesicpolyline)

# MKGeodesicPolyline (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.

## Declaration

```swift
class MKGeodesicPolyline
```

<a id="overview"></a>

## Overview

A geodesic polyline contains a set of points that connect end-to-end in the order that you provide them. The first and last points don’t automatically connect to each other. When displaying on a two-dimensional map view, the line segment between any two points may appear curved.

## Topics

### Creating a geodesic polyline overlay

- [init(points:count:)](mkgeodesicpolyline/init%28points_count_%29.md): Creates and returns a geodesic polyline using the specified map points.
- [init(coordinates:count:)](mkgeodesicpolyline/init%28coordinates_count_%29.md): Creates and returns a geodesic polyline using the specified coordinates.

## Relationships

### Inherits From

- [MKPolyline](mkpolyline.md)

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

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.

# MKGeodesicPolyline (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.

## Declaration

```objectivec
@interface MKGeodesicPolyline : MKPolyline
```

<a id="overview"></a>

## Overview

A geodesic polyline contains a set of points that connect end-to-end in the order that you provide them. The first and last points don’t automatically connect to each other. When displaying on a two-dimensional map view, the line segment between any two points may appear curved.

## Topics

### Creating a geodesic polyline overlay

- [polylineWithPoints:count:](mkgeodesicpolyline/init%28points_count_%29.md): Creates and returns a geodesic polyline using the specified map points.
- [polylineWithCoordinates:count:](mkgeodesicpolyline/init%28coordinates_count_%29.md): Creates and returns a geodesic polyline using the specified coordinates.

## Relationships

### Inherits From

- [MKPolyline](mkpolyline.md)

## See Also

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.
