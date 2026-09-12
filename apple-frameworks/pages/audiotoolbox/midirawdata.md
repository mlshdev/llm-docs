> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/midirawdata](https://developer.apple.com/documentation/audiotoolbox/midirawdata)

# MIDIRawData (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes a MIDI system-exclusive (SysEx) message.

## Declaration

```swift
struct MIDIRawData
```

## Topics

### Initializers

- [init()](midirawdata/init%28%29.md)
- [init(length:data:)](midirawdata/init%28length_data_%29.md)

### Instance Properties

- [data](midirawdata/data.md)
- [length](midirawdata/length.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Managing Music Tracks

- [MusicTrackClear(\_:\_:\_:)](musictrackclear%28______%29.md): Removes a specified range of music track events.
- [MusicTrackCopyInsert(\_:\_:\_:\_:\_:)](musictrackcopyinsert%28__________%29.md): Copies a range of events from one music track and inserts them into another music track.
- [MusicTrackCut(\_:\_:\_:)](musictrackcut%28______%29.md): Removes a specified range of music track events, and shifts later events toward the start of the track to fill in the gap.
- [MusicTrackGetDestMIDIEndpoint(\_:\_:)](musictrackgetdestmidiendpoint%28____%29.md): Gets the MIDI endpoint that is the event target for a music track.
- [MusicTrackGetDestNode(\_:\_:)](musictrackgetdestnode%28____%29.md): Gets the audio unit node that is the event target for a music track.
- [MusicTrackGetProperty(\_:\_:\_:\_:)](musictrackgetproperty%28________%29.md): Gets a music track property value.
- [MusicTrackGetSequence(\_:\_:)](musictrackgetsequence%28____%29.md): Gets the music sequence that the music track is a member of.
- [MusicTrackMerge(\_:\_:\_:\_:\_:)](musictrackmerge%28__________%29.md): Copies a range of events from one music track and merges them into another music track.
- [MusicTrackMoveEvents(\_:\_:\_:\_:)](musictrackmoveevents%28________%29.md): Shifts music track events forward or backward in time, in terms of beats.
- [MusicTrackNewAUPresetEvent(\_:\_:\_:)](musictracknewaupresetevent%28______%29.md): Adds an event of type `AUPresetEvent` to a music track.
- [MusicTrackNewExtendedNoteEvent(\_:\_:\_:)](musictracknewextendednoteevent%28______%29.md): Adds an event of type `ExtendedNoteOnEvent` to a music track.
- [MusicTrackNewExtendedTempoEvent(\_:\_:\_:)](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent(\_:\_:\_:)](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent(\_:\_:\_:)](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
- [MusicTrackNewMIDIRawDataEvent(\_:\_:\_:)](musictracknewmidirawdataevent%28______%29.md): Adds an event of type `MIDIRawData` to a music track.

# MIDIRawData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes a MIDI system-exclusive (SysEx) message.

## Declaration

```objectivec
typedef struct MIDIRawData { ... } MIDIRawData;
```

## Topics

### Instance Properties

- [data](midirawdata/data.md)
- [length](midirawdata/length.md)

## See Also

### Managing Music Tracks

- [NewMusicTrackFrom](newmusictrackfrom.md): Deprecated.
- [MusicTrackClear](musictrackclear%28______%29.md): Removes a specified range of music track events.
- [MusicTrackCopyInsert](musictrackcopyinsert%28__________%29.md): Copies a range of events from one music track and inserts them into another music track.
- [MusicTrackCut](musictrackcut%28______%29.md): Removes a specified range of music track events, and shifts later events toward the start of the track to fill in the gap.
- [MusicTrackGetDestMIDIEndpoint](musictrackgetdestmidiendpoint%28____%29.md): Gets the MIDI endpoint that is the event target for a music track.
- [MusicTrackGetDestNode](musictrackgetdestnode%28____%29.md): Gets the audio unit node that is the event target for a music track.
- [MusicTrackGetProperty](musictrackgetproperty%28________%29.md): Gets a music track property value.
- [MusicTrackGetSequence](musictrackgetsequence%28____%29.md): Gets the music sequence that the music track is a member of.
- [MusicTrackMerge](musictrackmerge%28__________%29.md): Copies a range of events from one music track and merges them into another music track.
- [MusicTrackMoveEvents](musictrackmoveevents%28________%29.md): Shifts music track events forward or backward in time, in terms of beats.
- [MusicTrackNewAUPresetEvent](musictracknewaupresetevent%28______%29.md): Adds an event of type `AUPresetEvent` to a music track.
- [MusicTrackNewExtendedNoteEvent](musictracknewextendednoteevent%28______%29.md): Adds an event of type `ExtendedNoteOnEvent` to a music track.
- [MusicTrackNewExtendedTempoEvent](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
