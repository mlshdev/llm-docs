> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/selectsubject(at:)](https://developer.apple.com/documentation/dockkit/dockaccessory/selectsubject(at:))

# selectSubject(at:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Selects a subject to track at the supplied coordinates.

## Declaration

```swift
final func selectSubject(at unitPoint: CGPoint) async throws
```

<a id="discussion"></a>

## Discussion

There may be times when more than one subject is in a video frame. Use this method to track a specific subject within that frame by passing a  location within the frame. The coordinates are relative to the top left of the video frame, and are values between `0` and `1`. If the framework doesn’t detect a subject at the passed coordinates, the method throws an error.

If you disable system tracking, this configuration change applies to any custom tracking for this dock accessory. The configuration applies to any camera stream the app has open if system tracking is enabled.

Call this method when implementing your own custom tracking behavior.

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device isn’t docked, or other errors if no subject is found at the position.

## See Also

### Selecting and tracking

- [track(\_:cameraInformation:)](track%28__camerainformation_%29-4yl9b.md): Automatically generate and send tracking vectors to the device.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-44mwn.md): Automatically generate and send tracking vectors to the device.
- [DockAccessory.Observation](observation.md): An observation of the contents of a single video frame.
- [DockAccessory.CameraInformation](camerainformation.md): A collection of tracking information about the camera currently in use.
- [DockAccessory.CameraOrientation](cameraorientation.md): The set of camera orientations used to extract coordinates.
