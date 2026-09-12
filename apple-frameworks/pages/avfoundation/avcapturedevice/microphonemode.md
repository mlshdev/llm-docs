> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/microphonemode](https://developer.apple.com/documentation/avfoundation/avcapturedevice/microphonemode)

# AVCaptureDevice.MicrophoneMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Constants that define the available microphone modes.

## Declaration

```swift
enum MicrophoneMode
```

## Topics

### Microphone modes

- [AVCaptureDevice.MicrophoneMode.standard](microphonemode/standard.md): A mode that processes microphone audio with standard voice DSP.
- [AVCaptureDevice.MicrophoneMode.wideSpectrum](microphonemode/widespectrum.md): A mode that minimizes microphone audio processing to capture all sounds in the room.
- [AVCaptureDevice.MicrophoneMode.voiceIsolation](microphonemode/voiceisolation.md): A mode that processes microphone audio to isolate the voice and attenuate other signals.

### Initializers

- [init(rawValue:)](microphonemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the microphone mode

- [activeMicrophoneMode](activemicrophonemode.md): The device’s active microphone mode.
- [preferredMicrophoneMode](preferredmicrophonemode.md): The microphone mode that the user selects in Control Center.

# AVCaptureMicrophoneMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Constants that define the available microphone modes.

## Declaration

```objectivec
enum AVCaptureMicrophoneMode : NSInteger;
```

## Topics

### Microphone modes

- [AVCaptureMicrophoneModeStandard](microphonemode/standard.md): A mode that processes microphone audio with standard voice DSP.
- [AVCaptureMicrophoneModeWideSpectrum](microphonemode/widespectrum.md): A mode that minimizes microphone audio processing to capture all sounds in the room.
- [AVCaptureMicrophoneModeVoiceIsolation](microphonemode/voiceisolation.md): A mode that processes microphone audio to isolate the voice and attenuate other signals.

## See Also

### Inspecting the microphone mode

- [activeMicrophoneMode](activemicrophonemode.md): The device’s active microphone mode.
- [preferredMicrophoneMode](preferredmicrophonemode.md): The microphone mode that the user selects in Control Center.
