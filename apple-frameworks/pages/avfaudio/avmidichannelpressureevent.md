> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidichannelpressureevent](https://developer.apple.com/documentation/avfaudio/avmidichannelpressureevent)

# AVMIDIChannelPressureEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI channel pressure message.

## Declaration

```swift
class AVMIDIChannelPressureEvent
```

<a id="overview"></a>

## Overview

The effect of this message depends on the [AVMusicTrack](avmusictrack.md) destination audio unit, and the capabilities of the destination’s loaded instrument.

## Topics

### Creating a Pressure Event

- [init(channel:pressure:)](avmidichannelpressureevent/init%28channel_pressure_%29.md): Creates a pressure event with a channel and pressure value.

### Configuring a Pressure Event

- [pressure](avmidichannelpressureevent/pressure.md): The MIDI channel pressure.

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
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.

# AVMIDIChannelPressureEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI channel pressure message.

## Declaration

```objectivec
@interface AVMIDIChannelPressureEvent : AVMIDIChannelEvent
```

<a id="overview"></a>

## Overview

The effect of this message depends on the [AVMusicTrack](avmusictrack.md) destination audio unit, and the capabilities of the destination’s loaded instrument.

## Topics

### Creating a Pressure Event

- [initWithChannel:pressure:](avmidichannelpressureevent/init%28channel_pressure_%29.md): Creates a pressure event with a channel and pressure value.

### Configuring a Pressure Event

- [pressure](avmidichannelpressureevent/pressure.md): The MIDI channel pressure.

## Relationships

### Inherits From

- [AVMIDIChannelEvent](avmidichannelevent.md)

## See Also

### Handling MIDI Channel Events

- [AVMIDIChannelEvent](avmidichannelevent.md): A base class for all MIDI messages that operate on a single MIDI channel.
- [AVMIDIProgramChangeEvent](avmidiprogramchangeevent.md): An object that represents a MIDI program or patch change message.
- [AVMIDIPolyPressureEvent](avmidipolypressureevent.md): An object that represents a MIDI poly or key pressure event.
- [AVMIDIPitchBendEvent](avmidipitchbendevent.md): An object that represents a MIDI pitch bend message.
- [AVMIDIControlChangeEvent](avmidicontrolchangeevent.md): An object that represents a MIDI control change message.
