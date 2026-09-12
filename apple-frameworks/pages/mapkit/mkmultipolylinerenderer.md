> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipolylinerenderer](https://developer.apple.com/documentation/mapkit/mkmultipolylinerenderer)

# MKMultiPolylineRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A visual representation of multiple polyline overlay objects.

## Declaration

```swift
class MKMultiPolylineRenderer
```

<a id="overview"></a>

## Overview

Use the multipolyline renderer to provide the styling of multiple polylines that you create using [MKMultiPolyline](mkmultipolyline.md).

## Topics

### Creating a multipolyline renderer

- [init(multiPolyline:)](mkmultipolylinerenderer/init%28multipolyline_%29.md): Creates an object that renders a visual representation of multiple polyline objects.

### Accessing the multipolyline object

- [multiPolyline](mkmultipolylinerenderer/multipolyline.md): An object that represents multiple polyline shapes, each consisting of one or more connected line segments.

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

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.

# MKMultiPolylineRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A visual representation of multiple polyline overlay objects.

## Declaration

```objectivec
@interface MKMultiPolylineRenderer : MKOverlayPathRenderer
```

<a id="overview"></a>

## Overview

Use the multipolyline renderer to provide the styling of multiple polylines that you create using [MKMultiPolyline](mkmultipolyline.md).

## Topics

### Creating a multipolyline renderer

- [initWithMultiPolyline:](mkmultipolylinerenderer/init%28multipolyline_%29.md): Creates an object that renders a visual representation of multiple polyline objects.

### Accessing the multipolyline object

- [multiPolyline](mkmultipolylinerenderer/multipolyline.md): An object that represents multiple polyline shapes, each consisting of one or more connected line segments.

## Relationships

### Inherits From

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)

## See Also

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKGradientPolylineRenderer](mkgradientpolylinerenderer.md): A visual representation of any polyline overlay object with a gradient.
