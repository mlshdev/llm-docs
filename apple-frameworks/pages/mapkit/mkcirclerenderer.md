> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcirclerenderer](https://developer.apple.com/documentation/mapkit/mkcirclerenderer)

# MKCircleRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The visual representation of a circular overlay.

## Declaration

```swift
class MKCircleRenderer
```

<a id="overview"></a>

## Overview

This renderer fills and strokes the circular region that the overlay object represents. You can change the color and other drawing attributes of the circle by modifying the properties it inherits from the main class. You typically use this class as-is and don’t subclass it.

You create an instance of this class in your map view delegate’s [mapView(\_:rendererFor:)](mkmapviewdelegate/mapview%28__rendererfor_%29.md) method.

## Topics

### Creating a circle renderer

- [init(circle:)](mkcirclerenderer/init%28circle_%29.md): Creates a new overlay view using the specified circle overlay object.

### Accessing the overlay object

- [circle](mkcirclerenderer/circle.md): The circle overlay object that contains the information for drawing the overlay.

### Accessing the stroke

- [strokeStart](mkcirclerenderer/strokestart.md): The unit distance along the circle where the stroke starts.
- [strokeEnd](mkcirclerenderer/strokeend.md): The unit distance along the circle where the stroke ends.

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

### Circular overlays

- [MKCircle](mkcircle.md): A circular overlay with a configurable radius that you center on a geographic coordinate.

# MKCircleRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The visual representation of a circular overlay.

## Declaration

```objectivec
@interface MKCircleRenderer : MKOverlayPathRenderer
```

<a id="overview"></a>

## Overview

This renderer fills and strokes the circular region that the overlay object represents. You can change the color and other drawing attributes of the circle by modifying the properties it inherits from the main class. You typically use this class as-is and don’t subclass it.

You create an instance of this class in your map view delegate’s [mapView:rendererForOverlay:](mkmapviewdelegate/mapview%28__rendererfor_%29.md) method.

## Topics

### Creating a circle renderer

- [initWithCircle:](mkcirclerenderer/init%28circle_%29.md): Creates a new overlay view using the specified circle overlay object.

### Accessing the overlay object

- [circle](mkcirclerenderer/circle.md): The circle overlay object that contains the information for drawing the overlay.

### Accessing the stroke

- [strokeStart](mkcirclerenderer/strokestart.md): The unit distance along the circle where the stroke starts.
- [strokeEnd](mkcirclerenderer/strokeend.md): The unit distance along the circle where the stroke ends.

## Relationships

### Inherits From

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)

## See Also

### Circular overlays

- [MKCircle](mkcircle.md): A circular overlay with a configurable radius that you center on a geographic coordinate.
