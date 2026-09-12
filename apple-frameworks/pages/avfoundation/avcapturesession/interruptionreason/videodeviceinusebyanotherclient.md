> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/interruptionreason/videodeviceinusebyanotherclient](https://developer.apple.com/documentation/avfoundation/avcapturesession/interruptionreason/videodeviceinusebyanotherclient)

# AVCaptureSession.InterruptionReason.videoDeviceInUseByAnotherClient (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

An interruption caused by the video device temporarily being made unavailable (for example, when used by another capture session).

## Declaration

```swift
case videoDeviceInUseByAnotherClient
```

## See Also

### Constants

- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableInBackground](videodevicenotavailableinbackground.md): An interruption caused by the app being sent to the background while using a camera.
- [AVCaptureSession.InterruptionReason.audioDeviceInUseByAnotherClient](audiodeviceinusebyanotherclient.md): An interruption caused by the audio hardware temporarily being made unavailable (for example, for a phone call or alarm).
- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableWithMultipleForegroundApps](videodevicenotavailablewithmultipleforegroundapps.md): An interruption caused when your app is running in Slide Over, Split View, or Picture in Picture mode on iPad.
- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableDueToSystemPressure](videodevicenotavailableduetosystempressure.md): An interruption due to system pressure, such as thermal duress.
- [AVCaptureSession.InterruptionReason.sensitiveContentMitigationActivated](sensitivecontentmitigationactivated.md): An interruption caused by a `SCVideoStreamAnalyzer` when it detects sensitive content on an associated [AVCaptureDeviceInput](../../avcapturedeviceinput.md). To resume your capture session, call your analyzer’s `SCVideoStreamAnalyzer/continueStream` method.

# AVCaptureSessionInterruptionReasonVideoDeviceInUseByAnotherClient (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

An interruption caused by the video device temporarily being made unavailable (for example, when used by another capture session).

## Declaration

```objectivec
AVCaptureSessionInterruptionReasonVideoDeviceInUseByAnotherClient
```

## See Also

### Constants

- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableInBackground](videodevicenotavailableinbackground.md): An interruption caused by the app being sent to the background while using a camera.
- [AVCaptureSessionInterruptionReasonAudioDeviceInUseByAnotherClient](audiodeviceinusebyanotherclient.md): An interruption caused by the audio hardware temporarily being made unavailable (for example, for a phone call or alarm).
- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableWithMultipleForegroundApps](videodevicenotavailablewithmultipleforegroundapps.md): An interruption caused when your app is running in Slide Over, Split View, or Picture in Picture mode on iPad.
- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableDueToSystemPressure](videodevicenotavailableduetosystempressure.md): An interruption due to system pressure, such as thermal duress.
- [AVCaptureSessionInterruptionReasonSensitiveContentMitigationActivated](sensitivecontentmitigationactivated.md): An interruption caused by a `SCVideoStreamAnalyzer` when it detects sensitive content on an associated [AVCaptureDeviceInput](../../avcapturedeviceinput.md). To resume your capture session, call your analyzer’s `SCVideoStreamAnalyzer/continueStream` method.
