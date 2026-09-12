> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/captureerror/invalidarconfiguration](https://developer.apple.com/documentation/roomplan/roomcapturesession/captureerror/invalidarconfiguration)

# RoomCaptureSession.CaptureError.invalidARConfiguration

**Framework:** RoomPlan  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An error that indicates when the ARKit session runs an unsupported configuration.

## Declaration

```swift
case invalidARConfiguration
```

<a id="discussion"></a>

## Discussion

The system throws this error if the app attempts to set a value for the room-capture session’s[arSession](../arsession.md) object.

## See Also

### Identifying the error cause

- [RoomCaptureSession.CaptureError.deviceNotSupported](devicenotsupported.md): An error that indicates that the framework doesn’t support the user’s device.
- [RoomCaptureSession.CaptureError.deviceTooHot](devicetoohot.md): An error that indicates when the device thermal metrics surpass the framework’s limitations.
- [RoomCaptureSession.CaptureError.exceedSceneSizeLimit](exceedscenesizelimit.md): An error that indicates when the scene size grows past the framework’s limitations.
- [RoomCaptureSession.CaptureError.worldTrackingFailure](worldtrackingfailure.md): An error that indicates an issue with the underlying ARKit session.
- [RoomCaptureSession.CaptureError.internalError](internalerror.md): An error that indicates when the framework encounters an unexpected error case.
