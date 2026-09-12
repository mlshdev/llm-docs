> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkshape](https://developer.apple.com/documentation/mapkit/mkshape)

# MKShape (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An abstract class that defines the basic properties for all shape-based overlay objects.

## Declaration

```swift
class MKShape
```

<a id="overview"></a>

## Overview

You can’t instantiate this class directly; use a subclass instead. Subclasses are responsible for defining the geometry of the shape and providing an appropriate value for the coordinate property they inherit from the [MKAnnotation](mkannotation.md) protocol.

## Topics

### Accessing the shape attributes

- [title](mkshape/title.md): The title of the shape annotation.
- [subtitle](mkshape/subtitle.md): The subtitle of the shape annotation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MKCircle](mkcircle.md)
- [MKMultiPoint](mkmultipoint.md)
- [MKMultiPolygon](mkmultipolygon.md)
- [MKMultiPolyline](mkmultipolyline.md)
- [MKPointAnnotation](mkpointannotation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shared behavior

- [MKOverlay](mkoverlay.md): An interface for associating content with a specific map region.
- [MKOverlayRenderer](mkoverlayrenderer.md): The shared infrastructure for drawing overlays on the map surface.
- [MKMultiPoint](mkmultipoint.md): An abstract class that defines the common behavior that open and closed polygon overlays share.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.

# MKShape (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An abstract class that defines the basic properties for all shape-based overlay objects.

## Declaration

```objectivec
@interface MKShape : NSObject
```

<a id="overview"></a>

## Overview

You can’t instantiate this class directly; use a subclass instead. Subclasses are responsible for defining the geometry of the shape and providing an appropriate value for the coordinate property they inherit from the [MKAnnotation](mkannotation.md) protocol.

## Topics

### Accessing the shape attributes

- [title](mkshape/title.md): The title of the shape annotation.
- [subtitle](mkshape/subtitle.md): The subtitle of the shape annotation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MKCircle](mkcircle.md)
- [MKMultiPoint](mkmultipoint.md)
- [MKMultiPolygon](mkmultipolygon.md)
- [MKMultiPolyline](mkmultipolyline.md)
- [MKPointAnnotation](mkpointannotation.md)

### Conforms To

- [MKAnnotation](mkannotation.md)

## See Also

### Shared behavior

- [MKOverlay](mkoverlay.md): An interface for associating content with a specific map region.
- [MKOverlayRenderer](mkoverlayrenderer.md): The shared infrastructure for drawing overlays on the map surface.
- [MKMultiPoint](mkmultipoint.md): An abstract class that defines the common behavior that open and closed polygon overlays share.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.
