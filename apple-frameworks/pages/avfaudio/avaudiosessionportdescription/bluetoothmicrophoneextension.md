> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportdescription/bluetoothmicrophoneextension](https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/bluetoothmicrophoneextension)

# bluetoothMicrophoneExtension (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An optional port extension that describes capabilities relevant to Bluetooth microphone ports.

## Declaration

```swift
var bluetoothMicrophoneExtension: AVAudioSessionPortExtensionBluetoothMicrophone? { get }
```

<a id="discussion"></a>

## Discussion

This property is optional and will be `nil` for all ports for which this capability set doesn’t apply.

## See Also

### Accessing the port extension

- [AVAudioSessionPortExtensionBluetoothMicrophone](../avaudiosessionportextensionbluetoothmicrophone.md): An object that describes capabilities of Bluetooth microphone ports.
- [AVAudioSessionCapability](../avaudiosessioncapability.md): Describes whether a specific capability is supported and if that capability is currently enabled

# bluetoothMicrophoneExtension (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An optional port extension that describes capabilities relevant to Bluetooth microphone ports.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioSessionPortExtensionBluetoothMicrophone * bluetoothMicrophoneExtension;
```

<a id="discussion"></a>

## Discussion

This property is optional and will be `nil` for all ports for which this capability set doesn’t apply.

## See Also

### Accessing the port extension

- [AVAudioSessionPortExtensionBluetoothMicrophone](../avaudiosessionportextensionbluetoothmicrophone.md): An object that describes capabilities of Bluetooth microphone ports.
- [AVAudioSessionCapability](../avaudiosessioncapability.md): Describes whether a specific capability is supported and if that capability is currently enabled
