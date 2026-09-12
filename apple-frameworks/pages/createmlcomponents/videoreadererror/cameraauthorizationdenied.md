> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreadererror/cameraauthorizationdenied](https://developer.apple.com/documentation/createmlcomponents/videoreadererror/cameraauthorizationdenied)

# VideoReaderError.cameraAuthorizationDenied

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An error that indicates that the camera authorization status is denied. The user has explicitly denied permission for media capture.

## Declaration

```swift
case cameraAuthorizationDenied
```

## See Also

### Analyzing the error

- [VideoReaderError.cameraAuthorizationRestricted](cameraauthorizationrestricted.md): An error that indicates that the camera authorization status is restricted. The user is not allowed to access media capture devices.
- [VideoReaderError.frameRateNotSupported(\_:)](frameratenotsupported%28__%29.md): An error that indicates that the frame rate is not supported by the input camera.
- [VideoReaderError.missingVideoTrack(\_:)](missingvideotrack%28__%29.md): An error that indicates that the VideoReader cannot find a video track.
- [VideoReaderError.sourceCameraNotAvailable](sourcecameranotavailable.md): An error that indicates that no cameras are available.
- [VideoReaderError.captureSessionStopped](capturesessionstopped.md): An error that indicates that the capture session stopped.
