> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/cameraorientation](https://developer.apple.com/documentation/dockkit/dockaccessory/cameraorientation)

# DockAccessory.CameraOrientation

**Framework:** DockKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The set of camera orientations used to extract coordinates.

## Declaration

```swift
enum CameraOrientation
```

## Topics

### Getting camera orientation

- [DockAccessory.CameraOrientation.corrected](cameraorientation/corrected.md): The orientation corresponds to the unit rectangle.
- [DockAccessory.CameraOrientation.faceUp](cameraorientation/faceup.md): The orientation is facing up.
- [DockAccessory.CameraOrientation.faceDown](cameraorientation/facedown.md): The orientation is facing down.
- [DockAccessory.CameraOrientation.landscapeLeft](cameraorientation/landscapeleft.md): The orientation is landscape left.
- [DockAccessory.CameraOrientation.landscapeRight](cameraorientation/landscaperight.md): The orientation is landscape right.
- [DockAccessory.CameraOrientation.portrait](cameraorientation/portrait.md): The orientation is portrait.
- [DockAccessory.CameraOrientation.portraitUpsideDown](cameraorientation/portraitupsidedown.md): The orientation is portrait, upside down.
- [DockAccessory.CameraOrientation.unknown](cameraorientation/unknown.md): The orientation is unknown.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting and tracking

- [selectSubject(at:)](selectsubject%28at_%29.md): Selects a subject to track at the supplied coordinates.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-4yl9b.md): Automatically generate and send tracking vectors to the device.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-44mwn.md): Automatically generate and send tracking vectors to the device.
- [DockAccessory.Observation](observation.md): An observation of the contents of a single video frame.
- [DockAccessory.CameraInformation](camerainformation.md): A collection of tracking information about the camera currently in use.
