> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera/init(lookingat:forviewsize:allowpitch:)](https://developer.apple.com/documentation/mapkit/mkmapcamera/init(lookingat:forviewsize:allowpitch:))

# init(lookingAt:forViewSize:allowPitch:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new camera object using the specified map item, view size, and pitch.

## Declaration

```swift
convenience init(lookingAt mapItem: MKMapItem, forViewSize viewSize: CGSize, allowPitch: Bool)
```

## Parameters

- `mapItem`: An [MKMapItem](../mkmapitem.md) that indicates the location of the camera.
- `viewSize`: The view’s size.
- `allowPitch`: A Boolean value that indicates if the camera should the use map’s pitch angle.

## See Also

### Getting a camera object

- [init(lookingAtCenter:fromEyeCoordinate:eyeAltitude:)](init%28lookingatcenter_fromeyecoordinate_eyealtitude_%29.md): Returns a new camera object using the specified viewing angle information.
- [init(lookingAtCenter:fromDistance:pitch:heading:)](init%28lookingatcenter_fromdistance_pitch_heading_%29.md): Returns a new camera object using the specified distance, pitch, and heading information.

# cameraLookingAtMapItem:forViewSize:allowPitch: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new camera object using the specified map item, view size, and pitch.

## Declaration

```objectivec
+ (instancetype) cameraLookingAtMapItem:(MKMapItem *) mapItem forViewSize:(CGSize) viewSize allowPitch:(BOOL) allowPitch;
```

## Parameters

- `mapItem`: An [MKMapItem](../mkmapitem.md) that indicates the location of the camera.
- `viewSize`: The view’s size.
- `allowPitch`: A Boolean value that indicates if the camera should the use map’s pitch angle.

## See Also

### Getting a camera object

- [camera](camera.md): Returns a new camera object for you to configure.
- [cameraLookingAtCenterCoordinate:fromEyeCoordinate:eyeAltitude:](init%28lookingatcenter_fromeyecoordinate_eyealtitude_%29.md): Returns a new camera object using the specified viewing angle information.
- [cameraLookingAtCenterCoordinate:fromDistance:pitch:heading:](init%28lookingatcenter_fromdistance_pitch_heading_%29.md): Returns a new camera object using the specified distance, pitch, and heading information.
