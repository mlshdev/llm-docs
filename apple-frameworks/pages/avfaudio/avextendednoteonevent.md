> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendednoteonevent](https://developer.apple.com/documentation/avfaudio/avextendednoteonevent)

# AVExtendedNoteOnEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a custom extension of a MIDI note on event.

## Declaration

```swift
class AVExtendedNoteOnEvent
```

<a id="overview"></a>

## Overview

Use this to allow an app to trigger a custom note on event on one of several Apple audio units that support it. The floating point note and velocity numbers allow for optional fractional control of the note’s runtime properties that the system modulates by those inputs. This event supports the possibility of an audio unit with more than the standard 16 MIDI channels.

## Topics

### Creating a Note On Event

- [init(midiNote:velocity:groupID:duration:)](avextendednoteonevent/init%28midinote_velocity_groupid_duration_%29-60hve.md): Creates an event with a MIDI note, velocity, group identifier, and duration.
- [init(midiNote:velocity:instrumentID:groupID:duration:)](avextendednoteonevent/init%28midinote_velocity_instrumentid_groupid_duration_%29-rqr5.md): Creates a note on event with the default instrument.

### Configuring a Note On Event

- [midiNote](avextendednoteonevent/midinote.md): The MIDI note number.
- [velocity](avextendednoteonevent/velocity.md): The MDI velocity.
- [instrumentID](avextendednoteonevent/instrumentid.md): The instrument identifier.
- [groupID](avextendednoteonevent/groupid.md): The audio unit channel that handles the event.
- [duration](avextendednoteonevent/duration.md): The duration of the event, in beats.

### Getting the Default Instrument

- [defaultInstrument](avextendednoteonevent/defaultinstrument.md): A constant that represents the default instrument identifier.

### Initializers

- [init(MIDINote:velocity:groupID:duration:)](avextendednoteonevent/init%28midinote_velocity_groupid_duration_%29-985j8.md)
- [init(MIDINote:velocity:instrumentID:groupID:duration:)](avextendednoteonevent/init%28midinote_velocity_instrumentid_groupid_duration_%29-3a40r.md)

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

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.

# AVExtendedNoteOnEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a custom extension of a MIDI note on event.

## Declaration

```objectivec
@interface AVExtendedNoteOnEvent : AVMusicEvent
```

<a id="overview"></a>

## Overview

Use this to allow an app to trigger a custom note on event on one of several Apple audio units that support it. The floating point note and velocity numbers allow for optional fractional control of the note’s runtime properties that the system modulates by those inputs. This event supports the possibility of an audio unit with more than the standard 16 MIDI channels.

## Topics

### Creating a Note On Event

- [initWithMIDINote:velocity:groupID:duration:](avextendednoteonevent/init%28midinote_velocity_groupid_duration_%29-60hve.md): Creates an event with a MIDI note, velocity, group identifier, and duration.
- [initWithMIDINote:velocity:instrumentID:groupID:duration:](avextendednoteonevent/init%28midinote_velocity_instrumentid_groupid_duration_%29-rqr5.md): Creates a note on event with the default instrument.

### Configuring a Note On Event

- [midiNote](avextendednoteonevent/midinote.md): The MIDI note number.
- [velocity](avextendednoteonevent/velocity.md): The MDI velocity.
- [instrumentID](avextendednoteonevent/instrumentid.md): The instrument identifier.
- [groupID](avextendednoteonevent/groupid.md): The audio unit channel that handles the event.
- [duration](avextendednoteonevent/duration.md): The duration of the event, in beats.

### Getting the Default Instrument

- [AVExtendedNoteOnEventDefaultInstrument](avextendednoteonevent/defaultinstrument.md): A constant that represents the default instrument identifier.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
