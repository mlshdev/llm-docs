> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera/init(lookingatcenter:fromeyecoordinate:eyealtitude:)](https://developer.apple.com/documentation/mapkit/mkmapcamera/init(lookingatcenter:fromeyecoordinate:eyealtitude:))

# init(lookingAtCenter:fromEyeCoordinate:eyeAltitude:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Returns a new camera object using the specified viewing angle information.

## Declaration

```swift
convenience init(lookingAtCenter centerCoordinate: CLLocationCoordinate2D, fromEyeCoordinate eyeCoordinate: CLLocationCoordinate2D, eyeAltitude: CLLocationDistance)
```

## Parameters

- `centerCoordinate`: The coordinate point on which the framework centers the map.
- `eyeCoordinate`: The coordinate point at which to place the camera. If the value for this parameter is equal to the value in the `centerCoordinate` parameter, the framework displays the map as if the camera is looking straight down. If this point is offset from the `centerCoordinate` value, the framework displays the map with an appropriate heading and pitch angle.
- `eyeAltitude`: The altitude (in meters) above the ground at which to place the camera.

<a id="return-value"></a>

## Return Value

A new camera object that initializes with the specified information.

<a id="Discussion"></a>

## Discussion

This method calculates the required pitch and heading angles to accommodate the specified eye position and altitude.

## See Also

### Getting a camera object

- [init(lookingAtCenter:fromDistance:pitch:heading:)](init%28lookingatcenter_fromdistance_pitch_heading_%29.md): Returns a new camera object using the specified distance, pitch, and heading information.
- [init(lookingAt:forViewSize:allowPitch:)](init%28lookingat_forviewsize_allowpitch_%29.md): Returns a new camera object using the specified map item, view size, and pitch.

# cameraLookingAtCenterCoordinate:fromEyeCoordinate:eyeAltitude: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Returns a new camera object using the specified viewing angle information.

## Declaration

```objectivec
+ (instancetype) cameraLookingAtCenterCoordinate:(CLLocationCoordinate2D) centerCoordinate fromEyeCoordinate:(CLLocationCoordinate2D) eyeCoordinate eyeAltitude:(CLLocationDistance) eyeAltitude;
```

## Parameters

- `centerCoordinate`: The coordinate point on which the framework centers the map.
- `eyeCoordinate`: The coordinate point at which to place the camera. If the value for this parameter is equal to the value in the `centerCoordinate` parameter, the framework displays the map as if the camera is looking straight down. If this point is offset from the `centerCoordinate` value, the framework displays the map with an appropriate heading and pitch angle.
- `eyeAltitude`: The altitude (in meters) above the ground at which to place the camera.

<a id="return-value"></a>

## Return Value

A new camera object that initializes with the specified information.

<a id="Discussion"></a>

## Discussion

This method calculates the required pitch and heading angles to accommodate the specified eye position and altitude.

## See Also

### Getting a camera object

- [camera](camera.md): Returns a new camera object for you to configure.
- [cameraLookingAtCenterCoordinate:fromDistance:pitch:heading:](init%28lookingatcenter_fromdistance_pitch_heading_%29.md): Returns a new camera object using the specified distance, pitch, and heading information.
- [cameraLookingAtMapItem:forViewSize:allowPitch:](init%28lookingat_forviewsize_allowpitch_%29.md): Returns a new camera object using the specified map item, view size, and pitch.
