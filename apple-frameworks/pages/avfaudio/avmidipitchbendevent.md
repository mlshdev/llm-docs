> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidipitchbendevent](https://developer.apple.com/documentation/avfaudio/avmidipitchbendevent)

# AVMIDIPitchBendEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI pitch bend message.

## Declaration

```swift
class AVMIDIPitchBendEvent
```

## Topics

### Creating a Pitch Bend Event

- [init(channel:value:)](avmidipitchbendevent/init%28channel_value_%29.md): Creates an event with a channel and pitch bend value.

### Configuring a Pitch Bend Event

- [value](avmidipitchbendevent/value.md): The value of the pitch bend event.

## Relationships

### Inherits From

- [AVMIDIChannelEvent](avmidichannelevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelEvent](avmidichannelevent.md): A base class for all MIDI messages that operate on a single MIDI channel.
- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md): An object that represents a MIDI channel pressure message.
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.

# AVMIDIPitchBendEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI pitch bend message.

## Declaration

```objectivec
@interface AVMIDIPitchBendEvent : AVMIDIChannelEvent
```

## Topics

### Creating a Pitch Bend Event

- [initWithChannel:value:](avmidipitchbendevent/init%28channel_value_%29.md): Creates an event with a channel and pitch bend value.

### Configuring a Pitch Bend Event

- [value](avmidipitchbendevent/value.md): The value of the pitch bend event.

## Relationships

### Inherits From

- [AVMIDIChannelEvent](avmidichannelevent.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelEvent](avmidichannelevent.md): A base class for all MIDI messages that operate on a single MIDI channel.
- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md): An object that represents a MIDI channel pressure message.
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.
