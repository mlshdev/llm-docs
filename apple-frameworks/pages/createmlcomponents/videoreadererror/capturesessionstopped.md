> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreadererror/capturesessionstopped](https://developer.apple.com/documentation/createmlcomponents/videoreadererror/capturesessionstopped)

# VideoReaderError.captureSessionStopped

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+

An error that indicates that the capture session stopped.

## Declaration

```swift
case captureSessionStopped
```

## See Also

### Analyzing the error

- [VideoReaderError.cameraAuthorizationDenied](cameraauthorizationdenied.md): An error that indicates that the camera authorization status is denied. The user has explicitly denied permission for media capture.
- [VideoReaderError.cameraAuthorizationRestricted](cameraauthorizationrestricted.md): An error that indicates that the camera authorization status is restricted. The user is not allowed to access media capture devices.
- [VideoReaderError.frameRateNotSupported(\_:)](frameratenotsupported%28__%29.md): An error that indicates that the frame rate is not supported by the input camera.
- [VideoReaderError.missingVideoTrack(\_:)](missingvideotrack%28__%29.md): An error that indicates that the VideoReader cannot find a video track.
- [VideoReaderError.sourceCameraNotAvailable](sourcecameranotavailable.md): An error that indicates that no cameras are available.
