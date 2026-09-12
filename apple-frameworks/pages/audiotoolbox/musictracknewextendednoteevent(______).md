> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musictracknewextendednoteevent(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musictracknewextendednoteevent(_:_:_:))

# MusicTrackNewExtendedNoteEvent(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Adds an event of type `ExtendedNoteOnEvent` to a music track.

## Declaration

```swift
func MusicTrackNewExtendedNoteEvent(_ inTrack: MusicTrack, _ inTimeStamp: MusicTimeStamp, _ inInfo: UnsafePointer<ExtendedNoteOnEvent>) -> OSStatus
```

## Parameters

- `inTrack`: The music track to add the event to.
- `inTimeStamp`: The timestamp, in beats, at which to add the event. Must be greater than or equal to 0.
- `inInfo`: The event to add to the music track.

<a id="return-value"></a>

## Return Value

A result code.

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
- [MusicTrackNewExtendedTempoEvent(\_:\_:\_:)](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent(\_:\_:\_:)](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent(\_:\_:\_:)](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
- [MusicTrackNewMIDIRawDataEvent(\_:\_:\_:)](musictracknewmidirawdataevent%28______%29.md): Adds an event of type `MIDIRawData` to a music track.
- [MusicTrackNewMetaEvent(\_:\_:\_:)](musictracknewmetaevent%28______%29.md): Adds an event of type `MIDIMetaEvent` to a music track.

# MusicTrackNewExtendedNoteEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Adds an event of type `ExtendedNoteOnEvent` to a music track.

## Declaration

```objectivec
extern OSStatus MusicTrackNewExtendedNoteEvent(MusicTrack inTrack, MusicTimeStamp inTimeStamp, const ExtendedNoteOnEvent *inInfo);
```

## Parameters

- `inTrack`: The music track to add the event to.
- `inTimeStamp`: The timestamp, in beats, at which to add the event. Must be greater than or equal to 0.
- `inInfo`: The event to add to the music track.

<a id="return-value"></a>

## Return Value

A result code.

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
- [MusicTrackNewExtendedTempoEvent](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
- [MusicTrackNewMIDIRawDataEvent](musictracknewmidirawdataevent%28______%29.md): Adds an event of type `MIDIRawData` to a music track.
