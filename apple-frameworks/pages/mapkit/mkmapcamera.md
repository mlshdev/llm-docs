> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera](https://developer.apple.com/documentation/mapkit/mkmapcamera)

# MKMapCamera (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A virtual camera for defining the appearance of the map.

## Declaration

```swift
class MKMapCamera
```

<a id="overview"></a>

## Overview

A camera object defines a virtual viewpoint above the map surface and affects how MapKit presents the map to the user. You use a camera object to specify the location of the camera on the map, the compass heading indicating the camera’s viewing direction, the pitch of the camera relative to the map perpendicular, and the camera’s altitude above the map. These factors create a map view with a three-dimensional perspective.

After creating an instance of this class, configure it with the desired attributes and assign it to your map view. When you assign a camera to your map view, MapKit centers the map using the value in your camera object’s [centerCoordinate](mkmapcamera/centercoordinate.md) property, updating the map’s own region information in the process. The map also takes the camera’s pitch and altitude into account when calculating the visible region, ensuring that the region encompasses the visible content on the map.

## Topics

### Getting a camera object

- [init(lookingAtCenter:fromEyeCoordinate:eyeAltitude:)](mkmapcamera/init%28lookingatcenter_fromeyecoordinate_eyealtitude_%29.md): Returns a new camera object using the specified viewing angle information.
- [init(lookingAtCenter:fromDistance:pitch:heading:)](mkmapcamera/init%28lookingatcenter_fromdistance_pitch_heading_%29.md): Returns a new camera object using the specified distance, pitch, and heading information.
- [init(lookingAt:forViewSize:allowPitch:)](mkmapcamera/init%28lookingat_forviewsize_allowpitch_%29.md): Returns a new camera object using the specified map item, view size, and pitch.

### Configuring the viewing angle

- [centerCoordinate](mkmapcamera/centercoordinate.md): The map coordinate at the center of the map view.
- [heading](mkmapcamera/heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](mkmapcamera/centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](mkmapcamera/pitch.md): The viewing angle of the camera, in degrees.
- [altitude](mkmapcamera/altitude.md): Deprecated. The altitude above the ground, in meters.

### Initializers

- [init(coder:)](mkmapcamera/init%28coder_%29.md)
- [init(lookingAtCenterCoordinate:fromDistance:pitch:heading:)](mkmapcamera/init%28lookingatcentercoordinate_fromdistance_pitch_heading_%29.md)
- [init(lookingAtCenterCoordinate:fromEyeCoordinate:eyeAltitude:)](mkmapcamera/init%28lookingatcentercoordinate_fromeyecoordinate_eyealtitude_%29.md)
- [init(lookingAtMapItem:forViewSize:allowPitch:)](mkmapcamera/init%28lookingatmapitem_forviewsize_allowpitch_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Map customization

- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKScaleView](mkscaleview.md): A specialized view that displays the scale information for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.

# MKMapCamera (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A virtual camera for defining the appearance of the map.

## Declaration

```objectivec
@interface MKMapCamera : NSObject
```

<a id="overview"></a>

## Overview

A camera object defines a virtual viewpoint above the map surface and affects how MapKit presents the map to the user. You use a camera object to specify the location of the camera on the map, the compass heading indicating the camera’s viewing direction, the pitch of the camera relative to the map perpendicular, and the camera’s altitude above the map. These factors create a map view with a three-dimensional perspective.

After creating an instance of this class, configure it with the desired attributes and assign it to your map view. When you assign a camera to your map view, MapKit centers the map using the value in your camera object’s [centerCoordinate](mkmapcamera/centercoordinate.md) property, updating the map’s own region information in the process. The map also takes the camera’s pitch and altitude into account when calculating the visible region, ensuring that the region encompasses the visible content on the map.

## Topics

### Getting a camera object

- [camera](mkmapcamera/camera.md): Returns a new camera object for you to configure.
- [cameraLookingAtCenterCoordinate:fromEyeCoordinate:eyeAltitude:](mkmapcamera/init%28lookingatcenter_fromeyecoordinate_eyealtitude_%29.md): Returns a new camera object using the specified viewing angle information.
- [cameraLookingAtCenterCoordinate:fromDistance:pitch:heading:](mkmapcamera/init%28lookingatcenter_fromdistance_pitch_heading_%29.md): Returns a new camera object using the specified distance, pitch, and heading information.
- [cameraLookingAtMapItem:forViewSize:allowPitch:](mkmapcamera/init%28lookingat_forviewsize_allowpitch_%29.md): Returns a new camera object using the specified map item, view size, and pitch.

### Configuring the viewing angle

- [centerCoordinate](mkmapcamera/centercoordinate.md): The map coordinate at the center of the map view.
- [heading](mkmapcamera/heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](mkmapcamera/centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](mkmapcamera/pitch.md): The viewing angle of the camera, in degrees.
- [altitude](mkmapcamera/altitude.md): Deprecated. The altitude above the ground, in meters.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Map customization

- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKScaleView](mkscaleview.md): A specialized view that displays the scale information for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.
