> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/interruptionreason](https://developer.apple.com/documentation/avfoundation/avcapturesession/interruptionreason)

# AVCaptureSession.InterruptionReason (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Constants identifying the reason a capture session was interrupted, found in an [wasInterruptedNotification](wasinterruptednotification.md) user info dictionary.

## Declaration

```swift
enum InterruptionReason
```

## Topics

### Constants

- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableInBackground](interruptionreason/videodevicenotavailableinbackground.md): An interruption caused by the app being sent to the background while using a camera.
- [AVCaptureSession.InterruptionReason.audioDeviceInUseByAnotherClient](interruptionreason/audiodeviceinusebyanotherclient.md): An interruption caused by the audio hardware temporarily being made unavailable (for example, for a phone call or alarm).
- [AVCaptureSession.InterruptionReason.videoDeviceInUseByAnotherClient](interruptionreason/videodeviceinusebyanotherclient.md): An interruption caused by the video device temporarily being made unavailable (for example, when used by another capture session).
- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableWithMultipleForegroundApps](interruptionreason/videodevicenotavailablewithmultipleforegroundapps.md): An interruption caused when your app is running in Slide Over, Split View, or Picture in Picture mode on iPad.
- [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableDueToSystemPressure](interruptionreason/videodevicenotavailableduetosystempressure.md): An interruption due to system pressure, such as thermal duress.
- [AVCaptureSession.InterruptionReason.sensitiveContentMitigationActivated](interruptionreason/sensitivecontentmitigationactivated.md): An interruption caused by a `SCVideoStreamAnalyzer` when it detects sensitive content on an associated [AVCaptureDeviceInput](../avcapturedeviceinput.md). To resume your capture session, call your analyzer’s `SCVideoStreamAnalyzer/continueStream` method.

### Initializers

- [init(rawValue:)](interruptionreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User-infomation keys

- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
- [AVCaptureSessionInterruptionReasonKey](../avcapturesessioninterruptionreasonkey.md): Key to retrieve information about a capture interruption from a [wasInterruptedNotification](wasinterruptednotification.md) user info dictionary.

# AVCaptureSessionInterruptionReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Constants identifying the reason a capture session was interrupted, found in an [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md) user info dictionary.

## Declaration

```objectivec
enum AVCaptureSessionInterruptionReason : NSInteger;
```

## Topics

### Constants

- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableInBackground](interruptionreason/videodevicenotavailableinbackground.md): An interruption caused by the app being sent to the background while using a camera.
- [AVCaptureSessionInterruptionReasonAudioDeviceInUseByAnotherClient](interruptionreason/audiodeviceinusebyanotherclient.md): An interruption caused by the audio hardware temporarily being made unavailable (for example, for a phone call or alarm).
- [AVCaptureSessionInterruptionReasonVideoDeviceInUseByAnotherClient](interruptionreason/videodeviceinusebyanotherclient.md): An interruption caused by the video device temporarily being made unavailable (for example, when used by another capture session).
- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableWithMultipleForegroundApps](interruptionreason/videodevicenotavailablewithmultipleforegroundapps.md): An interruption caused when your app is running in Slide Over, Split View, or Picture in Picture mode on iPad.
- [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableDueToSystemPressure](interruptionreason/videodevicenotavailableduetosystempressure.md): An interruption due to system pressure, such as thermal duress.
- [AVCaptureSessionInterruptionReasonSensitiveContentMitigationActivated](interruptionreason/sensitivecontentmitigationactivated.md): An interruption caused by a `SCVideoStreamAnalyzer` when it detects sensitive content on an associated [AVCaptureDeviceInput](../avcapturedeviceinput.md). To resume your capture session, call your analyzer’s `SCVideoStreamAnalyzer/continueStream` method.

## See Also

### User-infomation keys

- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
- [AVCaptureSessionInterruptionReasonKey](../avcapturesessioninterruptionreasonkey.md): Key to retrieve information about a capture interruption from a [AVCaptureSessionWasInterruptedNotification](wasinterruptednotification.md) user info dictionary.
