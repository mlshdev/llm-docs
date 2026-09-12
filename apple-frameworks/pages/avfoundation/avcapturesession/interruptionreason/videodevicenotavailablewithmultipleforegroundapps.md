> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/interruptionreason/videodevicenotavailablewithmultipleforegroundapps](https://developer.apple.com/documentation/avfoundation/avcapturesession/interruptionreason/videodevicenotavailablewithmultipleforegroundapps)

# AVCaptureSession.InterruptionReason.videoDeviceNotAvailableWithMultipleForegroundApps (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

An interruption caused when your app is running in Slide Over, Split View, or Picture in Picture mode on iPad.

## Declaration

```swift
case videoDeviceNotAvailableWithMultipleForegroundApps
```

<a id="Discussion"></a>

## Discussion

If your capture session configuration disallows accessing the camera while multitasking, the system interrupts it with this reason when a user switches to a multitasking mode like Split View. The system doesn’t interrupt your capture session with this reason if [isMultitaskingCameraAccessEnabled](../ismultitaskingcameraaccessenabled.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableInBackground](videodevicenotavailableinbackground.md): An interruption caused by the app being sent to the background while using a camera.
- [AVCaptureSession.InterruptionReason.audioDeviceInUseByAnotherClient](audiodeviceinusebyanotherclient.md): An interruption caused by the audio hardware temporarily being made unavailable (for example, for a phone call or alarm).
- [AVCaptureSession.InterruptionReason.videoDeviceInUseByAnotherClient](videodeviceinusebyanotherclient.md): An interruption caused by the video device temporarily being made unavailable (for example, when used by another capture session).
- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableDueToSystemPressure](videodevicenotavailableduetosystempressure.md): An interruption due to system pressure, such as thermal duress.
- [AVCaptureSession.InterruptionReason.sensitiveContentMitigationActivated](sensitivecontentmitigationactivated.md): An interruption caused by a `SCVideoStreamAnalyzer` when it detects sensitive content on an associated [AVCaptureDeviceInput](../../avcapturedeviceinput.md). To resume your capture session, call your analyzer’s `SCVideoStreamAnalyzer/continueStream` method.

# AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableWithMultipleForegroundApps (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

An interruption caused when your app is running in Slide Over, Split View, or Picture in Picture mode on iPad.

## Declaration

```objectivec
AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableWithMultipleForegroundApps
```

<a id="Discussion"></a>

## Discussion

If your capture session configuration disallows accessing the camera while multitasking, the system interrupts it with this reason when a user switches to a multitasking mode like Split View. The system doesn’t interrupt your capture session with this reason if [multitaskingCameraAccessEnabled](../ismultitaskingcameraaccessenabled.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableInBackground](videodevicenotavailableinbackground.md): An interruption caused by the app being sent to the background while using a camera.
- [AVCaptureSessionInterruptionReasonAudioDeviceInUseByAnotherClient](audiodeviceinusebyanotherclient.md): An interruption caused by the audio hardware temporarily being made unavailable (for example, for a phone call or alarm).
- [AVCaptureSessionInterruptionReasonVideoDeviceInUseByAnotherClient](videodeviceinusebyanotherclient.md): An interruption caused by the video device temporarily being made unavailable (for example, when used by another capture session).
- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableDueToSystemPressure](videodevicenotavailableduetosystempressure.md): An interruption due to system pressure, such as thermal duress.
- [AVCaptureSessionInterruptionReasonSensitiveContentMitigationActivated](sensitivecontentmitigationactivated.md): An interruption caused by a `SCVideoStreamAnalyzer` when it detects sensitive content on an associated [AVCaptureDeviceInput](../../avcapturedeviceinput.md). To resume your capture session, call your analyzer’s `SCVideoStreamAnalyzer/continueStream` method.
