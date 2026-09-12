> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidiprogramchangeevent](https://developer.apple.com/documentation/avfaudio/avmidiprogramchangeevent)

# AVMIDIProgramChangeEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI program or patch change message.

## Declaration

```swift
class AVMIDIProgramChangeEvent
```

<a id="overview"></a>

## Overview

The effect of this message depends on the [AVMusicTrack](avmusictrack.md) destination audio unit.

## Topics

### Creating a Program Change Event

- [init(channel:programNumber:)](avmidiprogramchangeevent/init%28channel_programnumber_%29.md): Creates a program change event with a channel and program number.

### Configuring a Program Change Event

- [programNumber](avmidiprogramchangeevent/programnumber.md): The MIDI program number.

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
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.

# AVMIDIProgramChangeEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI program or patch change message.

## Declaration

```objectivec
@interface AVMIDIProgramChangeEvent : AVMIDIChannelEvent
```

<a id="overview"></a>

## Overview

The effect of this message depends on the [AVMusicTrack](avmusictrack.md) destination audio unit.

## Topics

### Creating a Program Change Event

- [initWithChannel:programNumber:](avmidiprogramchangeevent/init%28channel_programnumber_%29.md): Creates a program change event with a channel and program number.

### Configuring a Program Change Event

- [programNumber](avmidiprogramchangeevent/programnumber.md): The MIDI program number.

## Relationships

### Inherits From

- [AVMIDIChannelEvent](avmidichannelevent.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelEvent](avmidichannelevent.md): A base class for all MIDI messages that operate on a single MIDI channel.
- [AVMIDIChannelPressureEvent](avmidichannelpressureevent.md): An object that represents a MIDI channel pressure message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.
