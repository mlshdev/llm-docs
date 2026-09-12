> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointannotation](https://developer.apple.com/documentation/mapkit/mkpointannotation)

# MKPointAnnotation (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A string-based piece of location-specific data that you apply to a specific point on a map.

## Declaration

```swift
class MKPointAnnotation
```

<a id="overview"></a>

## Overview

You use this class, rather than define a custom annotation object, in situations where all you want to do is display a title string at the specified point on the map.

## Topics

### Creating a Point Annotation

- [init()](mkpointannotation/init%28%29.md): Creates a map annotation that shows a title string at a point on a map.
- [init(coordinate:)](mkpointannotation/init%28coordinate_%29.md): Creates a point annotation at the specified coordinate on the map.
- [init(coordinate:title:subtitle:)](mkpointannotation/init%28coordinate_title_subtitle_%29.md): Creates a point annotation displaying a title and subtitle string at the specified coordinate on the map.

### Accessing the Annotation’s Location

- [coordinate](mkpointannotation/coordinate.md): The coordinate point of the annotation.

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Location annotations

- [Annotating a Map with Custom Data](annotating-a-map-with-custom-data.md): Annotate a map with location-specific data using default and customized annotation views and callouts.
- [MKMapItemAnnotation](mkmapitemannotation.md): An annotation that represents a map item
- [MKMarkerAnnotationView](mkmarkerannotationview.md): An annotation view that displays a balloon-shaped marker at the designated location.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.

# MKPointAnnotation (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A string-based piece of location-specific data that you apply to a specific point on a map.

## Declaration

```objectivec
@interface MKPointAnnotation : MKShape
```

<a id="overview"></a>

## Overview

You use this class, rather than define a custom annotation object, in situations where all you want to do is display a title string at the specified point on the map.

## Topics

### Creating a Point Annotation

- [init](mkpointannotation/init%28%29.md): Creates a map annotation that shows a title string at a point on a map.
- [initWithCoordinate:](mkpointannotation/init%28coordinate_%29.md): Creates a point annotation at the specified coordinate on the map.
- [initWithCoordinate:title:subtitle:](mkpointannotation/init%28coordinate_title_subtitle_%29.md): Creates a point annotation displaying a title and subtitle string at the specified coordinate on the map.

### Accessing the Annotation’s Location

- [coordinate](mkpointannotation/coordinate.md): The coordinate point of the annotation.

## Relationships

### Inherits From

- [MKShape](mkshape.md)

### Conforms To

- [MKGeoJSONObject](mkgeojsonobject.md)

## See Also

### Location annotations

- [Annotating a Map with Custom Data](annotating-a-map-with-custom-data.md): Annotate a map with location-specific data using default and customized annotation views and callouts.
- [MKMapItemAnnotation](mkmapitemannotation.md): An annotation that represents a map item
- [MKMarkerAnnotationView](mkmarkerannotationview.md): An annotation view that displays a balloon-shaped marker at the designated location.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.
