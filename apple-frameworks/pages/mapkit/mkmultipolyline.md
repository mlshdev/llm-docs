> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipolyline](https://developer.apple.com/documentation/mapkit/mkmultipolyline)

# MKMultiPolyline (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of multipolyline shapes, each consisting of one or more connected line segments.

## Declaration

```swift
class MKMultiPolyline
```

<a id="overview"></a>

## Overview

Use a [MKMultiPolyline](mkmultipolyline.md) object when you have multiple distinct polyline shapes that you intend to render using the same style.

## Topics

### Creating a multipolyline object

- [init(\_:)](mkmultipolyline/init%28__%29.md): Creates a multipolyline object using the provided polylines.

### Accessing polyline objects

- [polylines](mkmultipolyline/polylines.md): An array containing the polyline objects that make up the multipolyline object.

### Initializers

- [init(polylines:)](mkmultipolyline/init%28polylines_%29.md)

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

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.

# MKMultiPolyline (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of multipolyline shapes, each consisting of one or more connected line segments.

## Declaration

```objectivec
@interface MKMultiPolyline : MKShape
```

<a id="overview"></a>

## Overview

Use a [MKMultiPolyline](mkmultipolyline.md) object when you have multiple distinct polyline shapes that you intend to render using the same style.

## Topics

### Creating a multipolyline object

- [initWithPolylines:](mkmultipolyline/init%28__%29.md): Creates a multipolyline object using the provided polylines.

### Accessing polyline objects

- [polylines](mkmultipolyline/polylines.md): An array containing the polyline objects that make up the multipolyline object.

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Conforms To

- [MKGeoJSONObject](mkgeojsonobject.md)
- [MKOverlay](mkoverlay.md)

## See Also

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.
