> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipoint](https://developer.apple.com/documentation/mapkit/mkmultipoint)

# MKMultiPoint (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An abstract class that defines the common behavior that open and closed polygon overlays share.

## Declaration

```swift
class MKMultiPoint
```

<a id="overview"></a>

## Overview

Don’t create instances of this class directly. Instead, create instances of the [MKPolygon](mkpolygon.md) or [MKPolyline](mkpolyline.md) classes. However, you can use the methods and property of this class to access information about the specific points associated with the line or polygon.

## Topics

### Accessing the points in the shape

- [points()](mkmultipoint/points%28%29.md): Returns an array of map points associated with the shape.
- [pointCount](mkmultipoint/pointcount.md): The number of points associated with the shape.
- [location(atPointIndex:)](mkmultipoint/location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
- [locations(at:)](mkmultipoint/locations%28at_%29.md): Translates a point index set into a unit distance along the shape.

### Getting coordinate values

- [getCoordinates(\_:range:)](mkmultipoint/getcoordinates%28__range_%29.md): Retrieves one or more points associated with the shape and converts them to coordinate values.

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Inherited By

- [MKPolygon](mkpolygon.md)
- [MKPolyline](mkpolyline.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shared behavior

- [MKOverlay](mkoverlay.md): An interface for associating content with a specific map region.
- [MKOverlayRenderer](mkoverlayrenderer.md): The shared infrastructure for drawing overlays on the map surface.
- [MKShape](mkshape.md): An abstract class that defines the basic properties for all shape-based overlay objects.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.

# MKMultiPoint (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An abstract class that defines the common behavior that open and closed polygon overlays share.

## Declaration

```objectivec
@interface MKMultiPoint : MKShape
```

<a id="overview"></a>

## Overview

Don’t create instances of this class directly. Instead, create instances of the [MKPolygon](mkpolygon.md) or [MKPolyline](mkpolyline.md) classes. However, you can use the methods and property of this class to access information about the specific points associated with the line or polygon.

## Topics

### Accessing the points in the shape

- [points](mkmultipoint/points%28%29.md): Returns an array of map points associated with the shape.
- [pointCount](mkmultipoint/pointcount.md): The number of points associated with the shape.
- [locationAtPointIndex:](mkmultipoint/location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
- [locationsAtPointIndexes:](mkmultipoint/locationsatpointindexes_.md): Returns a set of unit distance values that correspond to the point indexes along the shape.

### Getting coordinate values

- [getCoordinates:range:](mkmultipoint/getcoordinates%28__range_%29.md): Retrieves one or more points associated with the shape and converts them to coordinate values.

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Inherited By

- [MKPolygon](mkpolygon.md)
- [MKPolyline](mkpolyline.md)

### Conforms To

- [MKGeoJSONObject](mkgeojsonobject.md)

## See Also

### Shared behavior

- [MKOverlay](mkoverlay.md): An interface for associating content with a specific map region.
- [MKOverlayRenderer](mkoverlayrenderer.md): The shared infrastructure for drawing overlays on the map surface.
- [MKShape](mkshape.md): An abstract class that defines the basic properties for all shape-based overlay objects.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.
