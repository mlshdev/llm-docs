> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidinoteevent](https://developer.apple.com/documentation/avfaudio/avmidinoteevent)

# AVMIDINoteEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents MIDI note on or off messages.

## Declaration

```swift
class AVMIDINoteEvent
```

## Topics

### Creating a MIDI Note Event

- [init(channel:key:velocity:duration:)](avmidinoteevent/init%28channel_key_velocity_duration_%29.md): Creates an event with a MIDI channel, key number, velocity, and duration.

### Configuring a MIDI Note Event

- [channel](avmidinoteevent/channel.md): The MIDI channel.
- [key](avmidinoteevent/key.md): The MIDI key number.
- [velocity](avmidinoteevent/velocity.md): The MIDI velocity.
- [duration](avmidinoteevent/duration.md): The duration for the note, in beats.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling MIDI Events

- [AVMIDIMetaEvent](avmidimetaevent.md): An object that represents MIDI meta event messages.
- [AVMIDISysexEvent](avmidisysexevent.md): An object that represents a MIDI system exclusive message.

# AVMIDINoteEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents MIDI note on or off messages.

## Declaration

```objectivec
@interface AVMIDINoteEvent : AVMusicEvent
```

## Topics

### Creating a MIDI Note Event

- [initWithChannel:key:velocity:duration:](avmidinoteevent/init%28channel_key_velocity_duration_%29.md): Creates an event with a MIDI channel, key number, velocity, and duration.

### Configuring a MIDI Note Event

- [channel](avmidinoteevent/channel.md): The MIDI channel.
- [key](avmidinoteevent/key.md): The MIDI key number.
- [velocity](avmidinoteevent/velocity.md): The MIDI velocity.
- [duration](avmidinoteevent/duration.md): The duration for the note, in beats.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling MIDI Events

- [AVMIDIMetaEvent](avmidimetaevent.md): An object that represents MIDI meta event messages.
- [AVMIDISysexEvent](avmidisysexevent.md): An object that represents a MIDI system exclusive message.
