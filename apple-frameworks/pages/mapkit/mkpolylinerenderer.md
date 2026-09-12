> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolylinerenderer](https://developer.apple.com/documentation/mapkit/mkpolylinerenderer)

# MKPolylineRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A visual representation of any polyline overlay object.

## Declaration

```swift
class MKPolylineRenderer
```

<a id="overview"></a>

## Overview

This renderer strokes the line only; it doesn’t fill it. You can change the color and other drawing attributes of the polyline by modifying the properties it inherits from the main class. You typically use this class as-is and don’t subclass it.

## Topics

### Creating a polyline renderer

- [init(polyline:)](mkpolylinerenderer/init%28polyline_%29.md): Creates a new overlay view using the specified polyline overlay object.

### Accessing the polyline overlay

- [polyline](mkpolylinerenderer/polyline.md): The polyline overlay object that contains the information for drawing the overlay.

### Accessing the stroke

- [strokeStart](mkpolylinerenderer/strokestart.md): The unit distance along the line where the stroke starts.
- [strokeEnd](mkpolylinerenderer/strokeend.md): The unit distance along the line where the stroke ends.

## Relationships

### Inherits From

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)

### Inherited By

- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.

# MKPolylineRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A visual representation of any polyline overlay object.

## Declaration

```objectivec
@interface MKPolylineRenderer : MKOverlayPathRenderer
```

<a id="overview"></a>

## Overview

This renderer strokes the line only; it doesn’t fill it. You can change the color and other drawing attributes of the polyline by modifying the properties it inherits from the main class. You typically use this class as-is and don’t subclass it.

## Topics

### Creating a polyline renderer

- [initWithPolyline:](mkpolylinerenderer/init%28polyline_%29.md): Creates a new overlay view using the specified polyline overlay object.

### Accessing the polyline overlay

- [polyline](mkpolylinerenderer/polyline.md): The polyline overlay object that contains the information for drawing the overlay.

### Accessing the stroke

- [strokeStart](mkpolylinerenderer/strokestart.md): The unit distance along the line where the stroke starts.
- [strokeEnd](mkpolylinerenderer/strokeend.md): The unit distance along the line where the stroke ends.

## Relationships

### Inherits From

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)

### Inherited By

- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md)

## See Also

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.
