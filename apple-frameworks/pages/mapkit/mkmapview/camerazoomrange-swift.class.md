> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/camerazoomrange-swift.class](https://developer.apple.com/documentation/mapkit/mkmapview/camerazoomrange-swift.class)

# MKMapView.CameraZoomRange (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A camera zoom range that limits the distances to which the user can zoom.

## Declaration

```swift
class CameraZoomRange
```

<a id="overview"></a>

## Overview

Create a camera zoom range to limit the distance to which the user can zoom. After you create the camera zoom range, you can apply it to multiple map views. If you don’t create a camera zoom range, your map view allows the user to zoom to MapKit’s capabilities.

## Topics

### Creating a camera zoom range

- [init(minCenterCoordinateDistance:maxCenterCoordinateDistance:)](camerazoomrange-swift.class/init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [init(minCenterCoordinateDistance:)](camerazoomrange-swift.class/init%28mincentercoordinatedistance_%29.md): Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.
- [init(maxCenterCoordinateDistance:)](camerazoomrange-swift.class/init%28maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.
- [MKMapCameraZoomDefault](../mkmapcamerazoomdefault.md): A constant value used to represent the default value for zooming in or out on a map.

### Accessing zoom range values

- [maxCenterCoordinateDistance](camerazoomrange-swift.class/maxcentercoordinatedistance.md): The maximum distance of the camera to the center of the map, measured in meters.
- [minCenterCoordinateDistance](camerazoomrange-swift.class/mincentercoordinatedistance.md): The minimum distance of the camera to the center of the map, measured in meters.

### Initializers

- [init(coder:)](camerazoomrange-swift.class/init%28coder_%29.md)

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
- [MKMapView.CameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.

# MKMapCameraZoomRange (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A camera zoom range that limits the distances to which the user can zoom.

## Declaration

```objectivec
@interface MKMapCameraZoomRange : NSObject
```

<a id="overview"></a>

## Overview

Create a camera zoom range to limit the distance to which the user can zoom. After you create the camera zoom range, you can apply it to multiple map views. If you don’t create a camera zoom range, your map view allows the user to zoom to MapKit’s capabilities.

## Topics

### Creating a camera zoom range

- [initWithMinCenterCoordinateDistance:maxCenterCoordinateDistance:](camerazoomrange-swift.class/init%28mincentercoordinatedistance_maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying a minimum and maximum distance from your map view’s center coordinates, measured in meters.
- [initWithMinCenterCoordinateDistance:](camerazoomrange-swift.class/init%28mincentercoordinatedistance_%29.md): Create a camera zoom range by specifying the minimum distance from your map view’s center coordinate, measured in meters.
- [initWithMaxCenterCoordinateDistance:](camerazoomrange-swift.class/init%28maxcentercoordinatedistance_%29.md): Create a camera zoom range by specifying the maximum distance from your map view’s center coordinate, measured in meters.
- [MKMapCameraZoomDefault](../mkmapcamerazoomdefault.md): A constant value used to represent the default value for zooming in or out on a map.

### Accessing zoom range values

- [maxCenterCoordinateDistance](camerazoomrange-swift.class/maxcentercoordinatedistance.md): The maximum distance of the camera to the center of the map, measured in meters.
- [minCenterCoordinateDistance](camerazoomrange-swift.class/mincentercoordinatedistance.md): The minimum distance of the camera to the center of the map, measured in meters.

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
- [MKMapCameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
