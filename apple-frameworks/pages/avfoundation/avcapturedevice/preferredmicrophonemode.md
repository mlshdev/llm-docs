> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/preferredmicrophonemode](https://developer.apple.com/documentation/avfoundation/avcapturedevice/preferredmicrophonemode)

# preferredMicrophoneMode (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The microphone mode that the user selects in Control Center.

## Declaration

```swift
class var preferredMicrophoneMode: AVCaptureDevice.MicrophoneMode { get }
```

<a id="Discussion"></a>

## Discussion

Use key-value observing to monitor the user’s microphone mode selection.

## See Also

### Inspecting the microphone mode

- [activeMicrophoneMode](activemicrophonemode.md): The device’s active microphone mode.
- [AVCaptureDevice.MicrophoneMode](microphonemode.md): Constants that define the available microphone modes.

# preferredMicrophoneMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The microphone mode that the user selects in Control Center.

## Declaration

```objectivec
@property (class, readonly) AVCaptureMicrophoneMode preferredMicrophoneMode;
```

<a id="Discussion"></a>

## Discussion

Use key-value observing to monitor the user’s microphone mode selection.

## See Also

### Inspecting the microphone mode

- [activeMicrophoneMode](activemicrophonemode.md): The device’s active microphone mode.
- [AVCaptureMicrophoneMode](microphonemode.md): Constants that define the available microphone modes.
