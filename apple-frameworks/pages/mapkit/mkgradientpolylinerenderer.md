> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgradientpolylinerenderer](https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer)

# MKGradientPolylineRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A visual representation of any polyline overlay object with a gradient.

## Declaration

```swift
class MKGradientPolylineRenderer
```

<a id="overview"></a>

## Overview

This renderer only applies a stroke to the line; it doesn’t fill it. Set the gradients with [setColors:atLocations:](mkgradientpolylinerenderer/setcolors_atlocations_.md) and pair colors to locations that MapKit represents as unit distance values along the distance of the polyline. Don’t subclass `MKGradientPolylineRenderer`. Use the class as-is.

The gradient displays itself along the direction of the line.

## Topics

### Accessing the gradient colors

- [setColors(\_:locations:)](mkgradientpolylinerenderer/setcolors%28__locations_%29-3xrou.md): Sets the iOS colors and corresponding unit distance values to create gradients.
- [setColors(\_:locations:)](mkgradientpolylinerenderer/setcolors%28__locations_%29-1tuft.md): Sets the macOS colors and corresponding unit distance values to create gradients.
- [colors](mkgradientpolylinerenderer/colors.md): An array that represents the gradient’s color transition points.
- [locations](mkgradientpolylinerenderer/locations-7k6qz.md): An array of location indexes that correspond to their respective colors.

## Relationships

### Inherits From

- [MKPolylineRenderer](mkpolylinerenderer.md)

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
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.

# MKGradientPolylineRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A visual representation of any polyline overlay object with a gradient.

## Declaration

```objectivec
@interface MKGradientPolylineRenderer : MKPolylineRenderer
```

<a id="overview"></a>

## Overview

This renderer only applies a stroke to the line; it doesn’t fill it. Set the gradients with [setColors:atLocations:](mkgradientpolylinerenderer/setcolors_atlocations_.md) and pair colors to locations that MapKit represents as unit distance values along the distance of the polyline. Don’t subclass `MKGradientPolylineRenderer`. Use the class as-is.

The gradient displays itself along the direction of the line.

## Topics

### Accessing the gradient colors

- [setColors:atLocations:](mkgradientpolylinerenderer/setcolors_atlocations_.md): Sets the colors and corresponding unit distance values to create gradients.
- [colors](mkgradientpolylinerenderer/colors.md): An array that represents the gradient’s color transition points.
- [locations](mkgradientpolylinerenderer/locations-50knt.md): An array of location indices corresponding to their respective colors.

## Relationships

### Inherits From

- [MKPolylineRenderer](mkpolylinerenderer.md)

## See Also

### Multiple segment lines

- [MKPolyline](mkpolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [MKGeodesicPolyline](mkgeodesicpolyline.md): An open polygon overlay consisting of line segments that follow the contours of the Earth to create the shortest path between the specified points.
- [MKMultiPolyline](mkmultipolyline.md): A collection of multipolyline shapes, each consisting of one or more connected line segments.
- [MKPolylineRenderer](mkpolylinerenderer.md): A visual representation of any polyline overlay object.
- [MKMultiPolylineRenderer](mkmultipolylinerenderer.md): A visual representation of multiple polyline overlay objects.
