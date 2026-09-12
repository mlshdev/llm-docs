> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/microphone](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/microphone)

# microphone (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A microphone device type.

## Declaration

```swift
static let microphone: AVCaptureDevice.DeviceType
```

<a id="Discussion"></a>

## Discussion

In iOS and tvOS, the system only exposes one capture device of this type. The audio routing subsystem decides which physical microphone to use, be it a built-in microphone, a wired headset, or an external microphone. The microphone device’s [localizedName](../localizedname.md) changes as the audio subsystem switches to a different physical device.

## See Also

### Microphones

- [builtInMicrophone](builtinmicrophone.md): Deprecated. A built-in microphone.

# AVCaptureDeviceTypeMicrophone (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A microphone device type.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeMicrophone;
```

<a id="Discussion"></a>

## Discussion

In iOS and tvOS, the system only exposes one capture device of this type. The audio routing subsystem decides which physical microphone to use, be it a built-in microphone, a wired headset, or an external microphone. The microphone device’s [localizedName](../localizedname.md) changes as the audio subsystem switches to a different physical device.

## See Also

### Microphones

- [AVCaptureDeviceTypeBuiltInMicrophone](builtinmicrophone.md): Deprecated. A built-in microphone.
