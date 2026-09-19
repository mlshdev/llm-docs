> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivecamera/init(id:calibration:type:presentationframerate:pose:)

# init(id:calibration:type:presentationFrameRate:pose:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
init(id: String, calibration: ImmersiveCameraCalibration, type: ImmersiveCamera.CameraType = .stereoCamera, presentationFrameRate: Int = defaultPresentationFrameRate, pose: Pose3DFloat = .identity)
```
