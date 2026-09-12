> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidicontrolchangeevent](https://developer.apple.com/documentation/avfaudio/avmidicontrolchangeevent)

# AVMIDIControlChangeEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI control change message.

## Declaration

```swift
class AVMIDIControlChangeEvent
```

## Topics

### Creating a Control Change Event

- [init(channel:messageType:value:)](avmidicontrolchangeevent/init%28channel_messagetype_value_%29.md): Creates an event with a channel, control change type, and a value.

### Inspecting a Control Change Event

- [value](avmidicontrolchangeevent/value.md): The value of the control change event.
- [messageType](avmidicontrolchangeevent/messagetype-swift.property.md): The type of control change message.
- [AVMIDIControlChangeEvent.MessageType](avmidicontrolchangeevent/messagetype-swift.enum.md): Constants that represents control change event types.

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
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.

# AVMIDIControlChangeEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI control change message.

## Declaration

```objectivec
@interface AVMIDIControlChangeEvent : AVMIDIChannelEvent
```

## Topics

### Creating a Control Change Event

- [initWithChannel:messageType:value:](avmidicontrolchangeevent/init%28channel_messagetype_value_%29.md): Creates an event with a channel, control change type, and a value.

### Inspecting a Control Change Event

- [value](avmidicontrolchangeevent/value.md): The value of the control change event.
- [messageType](avmidicontrolchangeevent/messagetype-swift.property.md): The type of control change message.
- [AVMIDIControlChangeMessageType](avmidicontrolchangeevent/messagetype-swift.enum.md): Constants that represents control change event types.

## Relationships

### Inherits From

- [AVMIDIChannelEvent](avmidichannelevent.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelEvent](avmidichannelevent.md): A base class for all MIDI messages that operate on a single MIDI channel.
- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md): An object that represents a MIDI channel pressure message.
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
