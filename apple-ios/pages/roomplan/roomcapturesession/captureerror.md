> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/captureerror](https://developer.apple.com/documentation/roomplan/roomcapturesession/captureerror)

# RoomCaptureSession.CaptureError

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Errors that can occur during a room-capture session.

## Declaration

```swift
enum CaptureError
```

<a id="overview"></a>

## Overview

The `error` argument of a room-capture session delgate’s  [captureSession(\_:didEndWith:error:)](../roomcapturesessiondelegate/capturesession%28__didendwith_error_%29.md) function is of this type.

## Topics

### Identifying the error cause

- [RoomCaptureSession.CaptureError.deviceNotSupported](captureerror/devicenotsupported.md): An error that indicates that the framework doesn’t support the user’s device.
- [RoomCaptureSession.CaptureError.deviceTooHot](captureerror/devicetoohot.md): An error that indicates when the device thermal metrics surpass the framework’s limitations.
- [RoomCaptureSession.CaptureError.exceedSceneSizeLimit](captureerror/exceedscenesizelimit.md): An error that indicates when the scene size grows past the framework’s limitations.
- [RoomCaptureSession.CaptureError.invalidARConfiguration](captureerror/invalidarconfiguration.md): An error that indicates when the ARKit session runs an unsupported configuration.
- [RoomCaptureSession.CaptureError.worldTrackingFailure](captureerror/worldtrackingfailure.md): An error that indicates an issue with the underlying ARKit session.
- [RoomCaptureSession.CaptureError.internalError](captureerror/internalerror.md): An error that indicates when the framework encounters an unexpected error case.

### Inspecting error information

- [errorDescription](captureerror/errordescription.md): A human-readable explanation for the error.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to events

- [delegate](delegate.md): An object that observes important events in the room-scanning process.
