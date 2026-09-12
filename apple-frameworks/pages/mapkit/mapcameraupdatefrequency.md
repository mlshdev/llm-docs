> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcameraupdatefrequency](https://developer.apple.com/documentation/mapkit/mapcameraupdatefrequency)

# MapCameraUpdateFrequency

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A structure that describes when the map camera updates.

## Declaration

```swift
struct MapCameraUpdateFrequency
```

## Topics

### Timing of camera updates

- [continuous](mapcameraupdatefrequency/continuous.md): A value that indicates that all camera updates are continuous, including while interactions are taking place.
- [onEnd](mapcameraupdatefrequency/onend.md): A value that indicates the camera updates when map interactions are complete.

## See Also

### Map customization

- [MapCamera](mapcamera.md): Defines a virtual viewpoint above the map surface.
- [MapCameraBounds](mapcamerabounds.md): Defines an optional boundary of an area within which the map’s center needs to remain.
- [MapCameraPosition](mapcameraposition.md): A structure that describes how to position the map’s camera within the map.
- [MapCameraUpdateContext](mapcameraupdatecontext.md): A structure that defines additional information about the map camera.
