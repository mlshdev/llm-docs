> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidichannelevent](https://developer.apple.com/documentation/avfaudio/avmidichannelevent)

# AVMIDIChannelEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A base class for all MIDI messages that operate on a single MIDI channel.

## Declaration

```swift
class AVMIDIChannelEvent
```

## Topics

### Configuring a Channel Event

- [channel](avmidichannelevent/channel.md): The MIDI channel.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

### Inherited By

- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md)
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md)
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md)
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md)
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md): An object that represents a MIDI channel pressure message.
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.

# AVMIDIChannelEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A base class for all MIDI messages that operate on a single MIDI channel.

## Declaration

```objectivec
@interface AVMIDIChannelEvent : AVMusicEvent
```

## Topics

### Configuring a Channel Event

- [channel](avmidichannelevent/channel.md): The MIDI channel.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

### Inherited By

- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md)
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md)
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md)
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md)
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md): An object that represents a MIDI channel pressure message.
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.
