> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/captureerror/devicenotsupported](https://developer.apple.com/documentation/roomplan/roomcapturesession/captureerror/devicenotsupported)

# RoomCaptureSession.CaptureError.deviceNotSupported

**Framework:** RoomPlan  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An error that indicates that the framework doesn’t support the user’s device.

## Declaration

```swift
case deviceNotSupported
```

## See Also

### Identifying the error cause

- [RoomCaptureSession.CaptureError.deviceTooHot](devicetoohot.md): An error that indicates when the device thermal metrics surpass the framework’s limitations.
- [RoomCaptureSession.CaptureError.exceedSceneSizeLimit](exceedscenesizelimit.md): An error that indicates when the scene size grows past the framework’s limitations.
- [RoomCaptureSession.CaptureError.invalidARConfiguration](invalidarconfiguration.md): An error that indicates when the ARKit session runs an unsupported configuration.
- [RoomCaptureSession.CaptureError.worldTrackingFailure](worldtrackingfailure.md): An error that indicates an issue with the underlying ARKit session.
- [RoomCaptureSession.CaptureError.internalError](internalerror.md): An error that indicates when the framework encounters an unexpected error case.
