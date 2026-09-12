> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptorreader/cameraoverrides](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptorreader/cameraoverrides)

# cameraOverrides

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The current camera params which would override static metadata to use when rendering playback for the PTS specified in the last call to the update method.

## Declaration

```swift
var cameraOverrides: SetCameraCommand.Overrides? { get }
```
