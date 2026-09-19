> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkmapcamera/camera

# camera

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Returns a new camera object for you to configure.

## Declaration

```objectivec
+ (instancetype) camera;
```

<a id="return-value"></a>

## Return Value

A new camera object.

<a id="Discussion"></a>

## Discussion

You must change the values of the returned camera object before using it.

## See Also

### Getting a camera object

- [cameraLookingAtCenterCoordinate:fromEyeCoordinate:eyeAltitude:](init%28lookingatcenter_fromeyecoordinate_eyealtitude_%29.md): Returns a new camera object using the specified viewing angle information.
- [cameraLookingAtCenterCoordinate:fromDistance:pitch:heading:](init%28lookingatcenter_fromdistance_pitch_heading_%29.md): Returns a new camera object using the specified distance, pitch, and heading information.
- [cameraLookingAtMapItem:forViewSize:allowPitch:](init%28lookingat_forviewsize_allowpitch_%29.md): Returns a new camera object using the specified map item, view size, and pitch.
