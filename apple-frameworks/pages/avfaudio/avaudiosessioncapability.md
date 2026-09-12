> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessioncapability](https://developer.apple.com/documentation/avfaudio/avaudiosessioncapability)

# AVAudioSessionCapability (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Describes whether a specific capability is supported and if that capability is currently enabled

## Declaration

```swift
class AVAudioSessionCapability
```

## Topics

### Inspecting a capability

- [isEnabled](avaudiosessioncapability/isenabled.md): A Boolean value that indicates whether the capability is enabled.
- [isSupported](avaudiosessioncapability/issupported.md): A Boolean value that indicates whether the capability is supported.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the port extension

- [bluetoothMicrophoneExtension](avaudiosessionportdescription/bluetoothmicrophoneextension.md): An optional port extension that describes capabilities relevant to Bluetooth microphone ports.
- [AVAudioSessionPortExtensionBluetoothMicrophone](avaudiosessionportextensionbluetoothmicrophone.md): An object that describes capabilities of Bluetooth microphone ports.

# AVAudioSessionCapability (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Describes whether a specific capability is supported and if that capability is currently enabled

## Declaration

```objectivec
@interface AVAudioSessionCapability : NSObject
```

## Topics

### Inspecting a capability

- [enabled](avaudiosessioncapability/isenabled.md): A Boolean value that indicates whether the capability is enabled.
- [supported](avaudiosessioncapability/issupported.md): A Boolean value that indicates whether the capability is supported.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessing the port extension

- [bluetoothMicrophoneExtension](avaudiosessionportdescription/bluetoothmicrophoneextension.md): An optional port extension that describes capabilities relevant to Bluetooth microphone ports.
- [AVAudioSessionPortExtensionBluetoothMicrophone](avaudiosessionportextensionbluetoothmicrophone.md): An object that describes capabilities of Bluetooth microphone ports.
