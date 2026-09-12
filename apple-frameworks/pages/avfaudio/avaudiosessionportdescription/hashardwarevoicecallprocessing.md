> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportdescription/hashardwarevoicecallprocessing](https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/hashardwarevoicecallprocessing)

# hasHardwareVoiceCallProcessing (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.

## Declaration

```swift
var hasHardwareVoiceCallProcessing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Applications that use their own proprietary voice-processing algorithms should use this property to decide when to disable processing. If your app uses Apple’s Voice Processing I/O unit (subtype `kAudioUnitSubType_VoiceProcessingIO`), the system automatically manages this for you.

## See Also

### Getting the Port Attributes

- [portName](portname.md): A descriptive name for the port.
- [portType](porttype.md): The type of the port.
- [AVAudioSession.Port](../avaudiosession/port.md): A structure that defines the available input and output port types.
- [channels](channels.md): An array of channel objects that describe the port’s input or output channels.
- [AVAudioSessionChannelDescription](../avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [uid](uid.md): A system-assigned unique identifier (UID) for the port.
- [isSpatialAudioEnabled](isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.

# hasHardwareVoiceCallProcessing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.

## Declaration

```objectivec
@property (readonly) BOOL hasHardwareVoiceCallProcessing;
```

<a id="Discussion"></a>

## Discussion

Applications that use their own proprietary voice-processing algorithms should use this property to decide when to disable processing. If your app uses Apple’s Voice Processing I/O unit (subtype `kAudioUnitSubType_VoiceProcessingIO`), the system automatically manages this for you.

## See Also

### Getting the Port Attributes

- [portName](portname.md): A descriptive name for the port.
- [portType](porttype.md): The type of the port.
- [AVAudioSessionPort](../avaudiosession/port.md): A structure that defines the available input and output port types.
- [channels](channels.md): An array of channel objects that describe the port’s input or output channels.
- [AVAudioSessionChannelDescription](../avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [UID](uid.md): A system-assigned unique identifier (UID) for the port.
- [spatialAudioEnabled](isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.
