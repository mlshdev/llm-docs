> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/track(_:camerainformation:)-44mwn](https://developer.apple.com/documentation/dockkit/dockaccessory/track(_:camerainformation:)-44mwn)

# track(\_:cameraInformation:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Automatically generate and send tracking vectors to the device.

## Declaration

```swift
final func track(_ data: [DockAccessory.Observation], cameraInformation: DockAccessory.CameraInformation) async throws
```

## Parameters

- `data`: An array of [DockAccessory.Observation](observation.md) objects indicating the location of objects of interest in the frame.
- `cameraInformation`: The camera currently being used, and the orientation of the device.

<a id="discussion"></a>

## Discussion

The device receives tracking vectors based on manually constructed observations.

Disable system tracking, then supply the observations at a fixed rate between 10 and 30 times per second. Any other rate is unsupported. Calling this method without first disabling system tracking is a fatal error.

> **Throws**

> [DockKitError.notSupported](../dockkiterror/notsupported.md) if called on macOS.

## See Also

### Selecting and tracking

- [selectSubject(at:)](selectsubject%28at_%29.md): Selects a subject to track at the supplied coordinates.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-4yl9b.md): Automatically generate and send tracking vectors to the device.
- [DockAccessory.Observation](observation.md): An observation of the contents of a single video frame.
- [DockAccessory.CameraInformation](camerainformation.md): A collection of tracking information about the camera currently in use.
- [DockAccessory.CameraOrientation](cameraorientation.md): The set of camera orientations used to extract coordinates.
