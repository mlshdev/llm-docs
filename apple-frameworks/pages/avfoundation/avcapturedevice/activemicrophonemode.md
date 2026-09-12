> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/activemicrophonemode](https://developer.apple.com/documentation/avfoundation/avcapturedevice/activemicrophonemode)

# activeMicrophoneMode (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device’s active microphone mode.

## Declaration

```swift
class var activeMicrophoneMode: AVCaptureDevice.MicrophoneMode { get }
```

<a id="Discussion"></a>

## Discussion

The value may differ from the value of the [preferredMicrophoneMode](preferredmicrophonemode.md) property if the app’s active audio route doesn’t support the mode.

This property is key-value observable.

## See Also

### Inspecting the microphone mode

- [preferredMicrophoneMode](preferredmicrophonemode.md): The microphone mode that the user selects in Control Center.
- [AVCaptureDevice.MicrophoneMode](microphonemode.md): Constants that define the available microphone modes.

# activeMicrophoneMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device’s active microphone mode.

## Declaration

```objectivec
@property (class, readonly) AVCaptureMicrophoneMode activeMicrophoneMode;
```

<a id="Discussion"></a>

## Discussion

The value may differ from the value of the [preferredMicrophoneMode](preferredmicrophonemode.md) property if the app’s active audio route doesn’t support the mode.

This property is key-value observable.

## See Also

### Inspecting the microphone mode

- [preferredMicrophoneMode](preferredmicrophonemode.md): The microphone mode that the user selects in Control Center.
- [AVCaptureMicrophoneMode](microphonemode.md): Constants that define the available microphone modes.
