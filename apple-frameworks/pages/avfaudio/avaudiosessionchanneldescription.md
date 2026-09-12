> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionchanneldescription](https://developer.apple.com/documentation/avfaudio/avaudiosessionchanneldescription)

# AVAudioSessionChannelDescription (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A class that describes a hardware channel on the current device.

## Declaration

```swift
class AVAudioSessionChannelDescription
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

## Topics

### Getting the Channel Information

- [channelName](avaudiosessionchanneldescription/channelname.md): The descriptive name for the channel.
- [channelNumber](avaudiosessionchanneldescription/channelnumber.md): The index of this channel in its owning port’s array of channels.
- [owningPortUID](avaudiosessionchanneldescription/owningportuid.md): The unique identifier (UID) for this channel’s owning port.
- [channelLabel](avaudiosessionchanneldescription/channellabel.md): A description of the physical location of this channel.

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

### Getting the Port Attributes

- [portName](avaudiosessionportdescription/portname.md): A descriptive name for the port.
- [portType](avaudiosessionportdescription/porttype.md): The type of the port.
- [AVAudioSession.Port](avaudiosession/port.md): A structure that defines the available input and output port types.
- [channels](avaudiosessionportdescription/channels.md): An array of channel objects that describe the port’s input or output channels.
- [uid](avaudiosessionportdescription/uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](avaudiosessionportdescription/hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [isSpatialAudioEnabled](avaudiosessionportdescription/isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.

# AVAudioSessionChannelDescription (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A class that describes a hardware channel on the current device.

## Declaration

```objectivec
@interface AVAudioSessionChannelDescription : NSObject
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

## Topics

### Getting the Channel Information

- [channelName](avaudiosessionchanneldescription/channelname.md): The descriptive name for the channel.
- [channelNumber](avaudiosessionchanneldescription/channelnumber.md): The index of this channel in its owning port’s array of channels.
- [owningPortUID](avaudiosessionchanneldescription/owningportuid.md): The unique identifier (UID) for this channel’s owning port.
- [channelLabel](avaudiosessionchanneldescription/channellabel.md): A description of the physical location of this channel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting the Port Attributes

- [portName](avaudiosessionportdescription/portname.md): A descriptive name for the port.
- [portType](avaudiosessionportdescription/porttype.md): The type of the port.
- [AVAudioSessionPort](avaudiosession/port.md): A structure that defines the available input and output port types.
- [channels](avaudiosessionportdescription/channels.md): An array of channel objects that describe the port’s input or output channels.
- [UID](avaudiosessionportdescription/uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](avaudiosessionportdescription/hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [spatialAudioEnabled](avaudiosessionportdescription/isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.
