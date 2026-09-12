> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systemuserinterface](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systemuserinterface)

# AVCaptureDevice.SystemUserInterface (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Constants that describe the capture device configuration user interfaces.

## Declaration

```swift
enum SystemUserInterface
```

## Topics

### User interfaces

- [AVCaptureDevice.SystemUserInterface.videoEffects](systemuserinterface/videoeffects.md): The system user interface for changing the state of video effects.
- [AVCaptureDevice.SystemUserInterface.microphoneModes](systemuserinterface/microphonemodes.md): The system user interface for selecting microphone modes.

### Initializers

- [init(rawValue:)](systemuserinterface/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting the configuration user interface

- [showSystemUserInterface(\_:)](showsystemuserinterface%28__%29.md): Displays the system’s user interface to configure video effects or microphone modes.

# AVCaptureSystemUserInterface (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Constants that describe the capture device configuration user interfaces.

## Declaration

```objectivec
enum AVCaptureSystemUserInterface : NSInteger;
```

## Topics

### User interfaces

- [AVCaptureSystemUserInterfaceVideoEffects](systemuserinterface/videoeffects.md): The system user interface for changing the state of video effects.
- [AVCaptureSystemUserInterfaceMicrophoneModes](systemuserinterface/microphonemodes.md): The system user interface for selecting microphone modes.

## See Also

### Presenting the configuration user interface

- [showSystemUserInterface:](showsystemuserinterface%28__%29.md): Displays the system’s user interface to configure video effects or microphone modes.
