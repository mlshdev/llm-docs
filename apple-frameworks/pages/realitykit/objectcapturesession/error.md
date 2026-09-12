> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/error](https://developer.apple.com/documentation/realitykit/objectcapturesession/error)

# ObjectCaptureSession.Error

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Errors associated with the top-level computation of this class.

## Declaration

```swift
enum Error
```

## Topics

### Enumeration Cases

- [ObjectCaptureSession.Error.cancelled](error/cancelled.md): The user requested that the session be canceled and the session is now canceled. Another session may now be created.
- [ObjectCaptureSession.Error.directoryNotEmpty(\_:)](error/directorynotempty%28__%29.md): We cannot continue a pre-existing capture, so if an output directory is provided that already exists and it is not empty, this error is thrown.
- [ObjectCaptureSession.Error.insufficientStorage(requiredBytes:)](error/insufficientstorage%28requiredbytes_%29.md): The session can’t be started since there is not enough storage space in the provided directories.
- [ObjectCaptureSession.Error.sensorFailed](error/sensorfailed.md): There was an ARKit failure in one of the sensors.
- [ObjectCaptureSession.Error.trackingFailed](error/trackingfailed.md): There was an unrecoverable error related to tracking the object or environment.

### Instance Properties

- [localizedDescription](error/localizeddescription.md): Retrieve the localized description for this error.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring the session

- [ObjectCaptureSession.CaptureState](capturestate.md): State of the capture session.
