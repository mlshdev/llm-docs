> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musictrackmerge(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musictrackmerge(_:_:_:_:_:))

# MusicTrackMerge(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Copies a range of events from one music track and merges them into another music track.

## Declaration

```swift
func MusicTrackMerge(_ inSourceTrack: MusicTrack, _ inSourceStartTime: MusicTimeStamp, _ inSourceEndTime: MusicTimeStamp, _ inDestTrack: MusicTrack, _ inDestInsertTime: MusicTimeStamp) -> OSStatus
```

## Parameters

- `inSourceTrack`: The music track that you want to copy events from.
- `inSourceStartTime`: The start time, in beats, for the range of music track events that you want to copy from the source track.
- `inSourceEndTime`: The end time, in beats, for the range of music track events that you want to copy from the source track.
- `inDestTrack`: The music track that you want to add events to.
- `inDestInsertTime`: The insertion point, in beats, in the destination music track for the copied events.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The events inserted into the destination music track are merged with existing events in that track. The events in the destination track that existed prior to calling this function remain in place.

The `inSourceStartTime` value must be less than the `inSourceEndTime` value.

## See Also

### Managing Music Tracks

- [MusicTrackClear(\_:\_:\_:)](musictrackclear%28______%29.md): Removes a specified range of music track events.
- [MusicTrackCopyInsert(\_:\_:\_:\_:\_:)](musictrackcopyinsert%28__________%29.md): Copies a range of events from one music track and inserts them into another music track.
- [MusicTrackCut(\_:\_:\_:)](musictrackcut%28______%29.md): Removes a specified range of music track events, and shifts later events toward the start of the track to fill in the gap.
- [MusicTrackGetDestMIDIEndpoint(\_:\_:)](musictrackgetdestmidiendpoint%28____%29.md): Gets the MIDI endpoint that is the event target for a music track.
- [MusicTrackGetDestNode(\_:\_:)](musictrackgetdestnode%28____%29.md): Gets the audio unit node that is the event target for a music track.
- [MusicTrackGetProperty(\_:\_:\_:\_:)](musictrackgetproperty%28________%29.md): Gets a music track property value.
- [MusicTrackGetSequence(\_:\_:)](musictrackgetsequence%28____%29.md): Gets the music sequence that the music track is a member of.
- [MusicTrackMoveEvents(\_:\_:\_:\_:)](musictrackmoveevents%28________%29.md): Shifts music track events forward or backward in time, in terms of beats.
- [MusicTrackNewAUPresetEvent(\_:\_:\_:)](musictracknewaupresetevent%28______%29.md): Adds an event of type `AUPresetEvent` to a music track.
- [MusicTrackNewExtendedNoteEvent(\_:\_:\_:)](musictracknewextendednoteevent%28______%29.md): Adds an event of type `ExtendedNoteOnEvent` to a music track.
- [MusicTrackNewExtendedTempoEvent(\_:\_:\_:)](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent(\_:\_:\_:)](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent(\_:\_:\_:)](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
- [MusicTrackNewMIDIRawDataEvent(\_:\_:\_:)](musictracknewmidirawdataevent%28______%29.md): Adds an event of type `MIDIRawData` to a music track.
- [MusicTrackNewMetaEvent(\_:\_:\_:)](musictracknewmetaevent%28______%29.md): Adds an event of type `MIDIMetaEvent` to a music track.

# MusicTrackMerge (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Copies a range of events from one music track and merges them into another music track.

## Declaration

```objectivec
extern OSStatus MusicTrackMerge(MusicTrack inSourceTrack, MusicTimeStamp inSourceStartTime, MusicTimeStamp inSourceEndTime, MusicTrack inDestTrack, MusicTimeStamp inDestInsertTime);
```

## Parameters

- `inSourceTrack`: The music track that you want to copy events from.
- `inSourceStartTime`: The start time, in beats, for the range of music track events that you want to copy from the source track.
- `inSourceEndTime`: The end time, in beats, for the range of music track events that you want to copy from the source track.
- `inDestTrack`: The music track that you want to add events to.
- `inDestInsertTime`: The insertion point, in beats, in the destination music track for the copied events.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The events inserted into the destination music track are merged with existing events in that track. The events in the destination track that existed prior to calling this function remain in place.

The `inSourceStartTime` value must be less than the `inSourceEndTime` value.

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
- [MusicTrackMoveEvents](musictrackmoveevents%28________%29.md): Shifts music track events forward or backward in time, in terms of beats.
- [MusicTrackNewAUPresetEvent](musictracknewaupresetevent%28______%29.md): Adds an event of type `AUPresetEvent` to a music track.
- [MusicTrackNewExtendedNoteEvent](musictracknewextendednoteevent%28______%29.md): Adds an event of type `ExtendedNoteOnEvent` to a music track.
- [MusicTrackNewExtendedTempoEvent](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
- [MusicTrackNewMIDIRawDataEvent](musictracknewmidirawdataevent%28______%29.md): Adds an event of type `MIDIRawData` to a music track.
