> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera/init(lookingatcenter:fromdistance:pitch:heading:)](https://developer.apple.com/documentation/mapkit/mkmapcamera/init(lookingatcenter:fromdistance:pitch:heading:))

# init(lookingAtCenter:fromDistance:pitch:heading:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new camera object using the specified distance, pitch, and heading information.

## Declaration

```swift
convenience init(lookingAtCenter centerCoordinate: CLLocationCoordinate2D, fromDistance distance: CLLocationDistance, pitch: CGFloat, heading: CLLocationDirection)
```

## Parameters

- `centerCoordinate`: The coordinate point on which the framework centers the map.
- `distance`: The line-of-sight distance from the camera to the center coordinate of the map.
- `pitch`: The viewing angle of the camera, in degrees. A value of `0` results in a camera that points straight down at the map. Angles greater than `0` result in a camera that pitches toward the horizon by the specified number of degrees.
- `heading`: The heading of the camera (in degrees) relative to true north. The value `0` means that the top edge of the map view corresponds to true north. The value `90` means the top of the map points due east. The value `180` means the top of the map points due south, and so on.

<a id="return-value"></a>

## Return Value

A new camera object that initializes with the specified information.

<a id="Discussion"></a>

## Discussion

You can obtain the altitude of the camera by multiplying `distance` by the cosine of the `pitch` value.

## See Also

### Getting a camera object

- [init(lookingAtCenter:fromEyeCoordinate:eyeAltitude:)](init%28lookingatcenter_fromeyecoordinate_eyealtitude_%29.md): Returns a new camera object using the specified viewing angle information.
- [init(lookingAt:forViewSize:allowPitch:)](init%28lookingat_forviewsize_allowpitch_%29.md): Returns a new camera object using the specified map item, view size, and pitch.

# cameraLookingAtCenterCoordinate:fromDistance:pitch:heading: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a new camera object using the specified distance, pitch, and heading information.

## Declaration

```objectivec
+ (instancetype) cameraLookingAtCenterCoordinate:(CLLocationCoordinate2D) centerCoordinate fromDistance:(CLLocationDistance) distance pitch:(CGFloat) pitch heading:(CLLocationDirection) heading;
```

## Parameters

- `centerCoordinate`: The coordinate point on which the framework centers the map.
- `distance`: The line-of-sight distance from the camera to the center coordinate of the map.
- `pitch`: The viewing angle of the camera, in degrees. A value of `0` results in a camera that points straight down at the map. Angles greater than `0` result in a camera that pitches toward the horizon by the specified number of degrees.
- `heading`: The heading of the camera (in degrees) relative to true north. The value `0` means that the top edge of the map view corresponds to true north. The value `90` means the top of the map points due east. The value `180` means the top of the map points due south, and so on.

<a id="return-value"></a>

## Return Value

A new camera object that initializes with the specified information.

<a id="Discussion"></a>

## Discussion

You can obtain the altitude of the camera by multiplying `distance` by the cosine of the `pitch` value.

## See Also

### Getting a camera object

- [camera](camera.md): Returns a new camera object for you to configure.
- [cameraLookingAtCenterCoordinate:fromEyeCoordinate:eyeAltitude:](init%28lookingatcenter_fromeyecoordinate_eyealtitude_%29.md): Returns a new camera object using the specified viewing angle information.
- [cameraLookingAtMapItem:forViewSize:allowPitch:](init%28lookingat_forviewsize_allowpitch_%29.md): Returns a new camera object using the specified map item, view size, and pitch.
