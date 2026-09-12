> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportdescription/channels](https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/channels)

# channels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of channel objects that describe the port’s input or output channels.

## Declaration

```swift
var channels: [AVAudioSessionChannelDescription]? { get }
```

<a id="Discussion"></a>

## Discussion

The contents of this array may change if the audio session’s input or output channel count changes.

## See Also

### Getting the Port Attributes

- [portName](portname.md): A descriptive name for the port.
- [portType](porttype.md): The type of the port.
- [AVAudioSession.Port](../avaudiosession/port.md): A structure that defines the available input and output port types.
- [AVAudioSessionChannelDescription](../avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [uid](uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [isSpatialAudioEnabled](isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.

# channels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of channel objects that describe the port’s input or output channels.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<AVAudioSessionChannelDescription *> * channels;
```

<a id="Discussion"></a>

## Discussion

The contents of this array may change if the audio session’s input or output channel count changes.

## See Also

### Getting the Port Attributes

- [portName](portname.md): A descriptive name for the port.
- [portType](porttype.md): The type of the port.
- [AVAudioSessionPort](../avaudiosession/port.md): A structure that defines the available input and output port types.
- [AVAudioSessionChannelDescription](../avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [UID](uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [spatialAudioEnabled](isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.
