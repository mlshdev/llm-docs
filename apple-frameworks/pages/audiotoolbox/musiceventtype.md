> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musiceventtype](https://developer.apple.com/documentation/audiotoolbox/musiceventtype)

# MusicEventType (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

MIDI and other music event types, used by music event iterator functions.

## Declaration

```swift
typealias MusicEventType = UInt32
```

## Topics

### Constants

- [kMusicEventType_NULL](kmusiceventtype_null.md): A null music event.
- [kMusicEventType_ExtendedNote](kmusiceventtype_extendednote.md): A non-MIDI music event with variable number of parameters.
- [kMusicEventType_ExtendedTempo](kmusiceventtype_extendedtempo.md): An event that signals a change in tempo, in beats-per-minute.
- [kMusicEventType_User](kmusiceventtype_user.md): User-defined data.
- [kMusicEventType_Meta](kmusiceventtype_meta.md): A standard MIDI file metaevent.
- [kMusicEventType_MIDINoteMessage](kmusiceventtype_midinotemessage.md): A MIDI note-on message, including duration.
- [kMusicEventType_MIDIChannelMessage](kmusiceventtype_midichannelmessage.md): A MIDI channel message, other than note control.
- [kMusicEventType_MIDIRawData](kmusiceventtype_midirawdata.md): MIDI system-exclusive data.
- [kMusicEventType_Parameter](kmusiceventtype_parameter.md): An audio unit parameter event.
- [kMusicEventType_AUPreset](kmusiceventtype_aupreset.md): An event containing an audio unit user preset dictionary.

## See Also

### Iterating Over Music Events

- [NewMusicEventIterator(\_:\_:)](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator(\_:)](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent(\_:)](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek(\_:\_:)](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent(\_:)](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo(\_:\_:\_:\_:\_:)](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent(\_:\_:)](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent(\_:\_:)](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent(\_:\_:)](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent(\_:)](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventInfo(\_:\_:\_:)](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime(\_:\_:)](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.

# MusicEventType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

MIDI and other music event types, used by music event iterator functions.

## Declaration

```objectivec
typedef UInt32 MusicEventType;
```

## Topics

### Constants

- [kMusicEventType_NULL](kmusiceventtype_null.md): A null music event.
- [kMusicEventType_ExtendedNote](kmusiceventtype_extendednote.md): A non-MIDI music event with variable number of parameters.
- [kMusicEventType_ExtendedTempo](kmusiceventtype_extendedtempo.md): An event that signals a change in tempo, in beats-per-minute.
- [kMusicEventType_User](kmusiceventtype_user.md): User-defined data.
- [kMusicEventType_Meta](kmusiceventtype_meta.md): A standard MIDI file metaevent.
- [kMusicEventType_MIDINoteMessage](kmusiceventtype_midinotemessage.md): A MIDI note-on message, including duration.
- [kMusicEventType_MIDIChannelMessage](kmusiceventtype_midichannelmessage.md): A MIDI channel message, other than note control.
- [kMusicEventType_MIDIRawData](kmusiceventtype_midirawdata.md): MIDI system-exclusive data.
- [kMusicEventType_Parameter](kmusiceventtype_parameter.md): An audio unit parameter event.
- [kMusicEventType_AUPreset](kmusiceventtype_aupreset.md): An event containing an audio unit user preset dictionary.

## See Also

### Iterating Over Music Events

- [NewMusicEventIterator](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventInfo](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.
