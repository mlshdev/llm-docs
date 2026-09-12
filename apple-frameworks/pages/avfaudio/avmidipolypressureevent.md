> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidipolypressureevent](https://developer.apple.com/documentation/avfaudio/avmidipolypressureevent)

# AVMIDIPolyPressureEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI poly or key pressure event.

## Declaration

```swift
class AVMIDIPolyPressureEvent
```

## Topics

### Creating a Poly Pressure Event

- [init(channel:key:pressure:)](avmidipolypressureevent/init%28channel_key_pressure_%29.md): Creates an event with a channel, MIDI key number, and a key pressure value.

### Configuring a Poly Pressure Event

- [key](avmidipolypressureevent/key.md): The MIDI key number.
- [pressure](avmidipolypressureevent/pressure.md): The poly pressure value for the requested key.

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
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.

# AVMIDIPolyPressureEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI poly or key pressure event.

## Declaration

```objectivec
@interface AVMIDIPolyPressureEvent : AVMIDIChannelEvent
```

## Topics

### Creating a Poly Pressure Event

- [initWithChannel:key:pressure:](avmidipolypressureevent/init%28channel_key_pressure_%29.md): Creates an event with a channel, MIDI key number, and a key pressure value.

### Configuring a Poly Pressure Event

- [key](avmidipolypressureevent/key.md): The MIDI key number.
- [pressure](avmidipolypressureevent/pressure.md): The poly pressure value for the requested key.

## Relationships

### Inherits From

- [AVMIDIChannelEvent](avmidichannelevent.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelEvent](avmidichannelevent.md): A base class for all MIDI messages that operate on a single MIDI channel.
- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md): An object that represents a MIDI channel pressure message.
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.
