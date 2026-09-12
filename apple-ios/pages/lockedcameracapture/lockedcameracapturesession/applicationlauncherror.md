> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracapturesession/applicationlauncherror](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturesession/applicationlauncherror)

# LockedCameraCaptureSession.ApplicationLaunchError

**Framework:** LockedCameraCapture  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Indicates why launching the extension’s containing app failed.

## Declaration

```swift
enum ApplicationLaunchError
```

## Topics

### Enumeration Cases

- [LockedCameraCaptureSession.ApplicationLaunchError.applicationNotFound](applicationlauncherror/applicationnotfound.md): An error that the launch failed because the system didn’t find the application.
- [LockedCameraCaptureSession.ApplicationLaunchError.authenticationFailed](applicationlauncherror/authenticationfailed.md): An error that the launch failed because authentication failed and the device is locked.
- [LockedCameraCaptureSession.ApplicationLaunchError.unknown](applicationlauncherror/unknown.md): An error that the launch failed with an unknown error.

### Instance Properties

- [errorCode](applicationlauncherror/errorcode.md): An integer value that represents the error code.
- [failureReason](applicationlauncherror/failurereason.md): A string that describes the error that occurred.

### Type Properties

- [errorDomain](applicationlauncherror/errordomain.md): The domain for errors that can occur when launching the extension’s containing app.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
