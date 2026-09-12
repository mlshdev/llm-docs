> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/cameraboundary-swift.class](https://developer.apple.com/documentation/mapkit/mkmapview/cameraboundary-swift.class)

# MKMapView.CameraBoundary (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A boundary of an area within which the map’s center needs to remain.

## Declaration

```swift
class CameraBoundary
```

<a id="overview"></a>

## Overview

The constraints of the camera boundary restrict the center point of your map.

## Topics

### Creating a camera boundary

- [init(coder:)](cameraboundary-swift.class/init%28coder_%29.md): Creates a camera boundary using the provided coder.
- [init(coordinateRegion:)](cameraboundary-swift.class/init%28coordinateregion_%29.md): Creates a camera boundary using the provided coordinate region.
- [init(mapRect:)](cameraboundary-swift.class/init%28maprect_%29.md): Creates a camera boundary using the provided map rectangle.

### Accessing the boundary

- [mapRect](cameraboundary-swift.class/maprect.md): The map rectangle that describes the camera boundary.
- [region](cameraboundary-swift.class/region.md): The coordinate region that describes the camera boundary.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Constraining the map view

- [setCameraBoundary(\_:animated:)](setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange(\_:animated:)](setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [cameraZoomRange](camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapView.CameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.

# MKMapCameraBoundary (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A boundary of an area within which the map’s center needs to remain.

## Declaration

```objectivec
@interface MKMapCameraBoundary : NSObject
```

<a id="overview"></a>

## Overview

The constraints of the camera boundary restrict the center point of your map.

## Topics

### Creating a camera boundary

- [initWithCoder:](cameraboundary-swift.class/init%28coder_%29.md): Creates a camera boundary using the provided coder.
- [initWithCoordinateRegion:](cameraboundary-swift.class/init%28coordinateregion_%29.md): Creates a camera boundary using the provided coordinate region.
- [initWithMapRect:](cameraboundary-swift.class/init%28maprect_%29.md): Creates a camera boundary using the provided map rectangle.

### Accessing the boundary

- [mapRect](cameraboundary-swift.class/maprect.md): The map rectangle that describes the camera boundary.
- [region](cameraboundary-swift.class/region.md): The coordinate region that describes the camera boundary.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Constraining the map view

- [setCameraBoundary:animated:](setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange:animated:](setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [cameraZoomRange](camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapCameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.
