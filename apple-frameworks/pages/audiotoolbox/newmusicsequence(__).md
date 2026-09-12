> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/newmusicsequence(_:)](https://developer.apple.com/documentation/audiotoolbox/newmusicsequence(_:))

# NewMusicSequence(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Creates a new empty music sequence.

## Declaration

```swift
func NewMusicSequence(_ outSequence: UnsafeMutablePointer<MusicSequence?>) -> OSStatus
```

## Parameters

- `outSequence`: On output, the new, empty music sequence.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

A new music sequence has only a tempo track, with a default tempo of 120 beats-per-minute. The default sequence type is beat-based. For the various sequence types, see [MusicSequenceType](musicsequencetype.md).

To direct the output of a music sequence to an audio processing graph, use the [MusicSequenceSetAUGraph(\_:\_:)](musicsequencesetaugraph%28____%29.md) function. To direct the output instead to a MIDI endpoint, use the [MusicSequenceSetMIDIEndpoint(\_:\_:)](musicsequencesetmidiendpoint%28____%29.md) function.

To direct the output of a specific music track, use the [MusicTrackSetDestNode(\_:\_:)](musictracksetdestnode%28____%29.md) and [MusicTrackSetDestMIDIEndpoint(\_:\_:)](musictracksetdestmidiendpoint%28____%29.md) functions, described in `MusicTrack`.

## See Also

### Managing Music Sequences

- [DisposeMusicSequence(\_:)](disposemusicsequence%28__%29.md): Disposes of a music sequence.
- [MusicSequenceBarBeatTimeToBeats(\_:\_:\_:)](musicsequencebarbeattimetobeats%28______%29.md): Formats a music sequence’s bar-beat time to its beat time.
- [MusicSequenceBeatsToBarBeatTime(\_:\_:\_:\_:)](musicsequencebeatstobarbeattime%28________%29.md): Formats a music sequence’s beat time to its bar-beat time.
- [MusicSequenceDisposeTrack(\_:\_:)](musicsequencedisposetrack%28____%29.md): Removes a music track from a music sequence, and disposes of the track.
- [MusicSequenceFileCreate(\_:\_:\_:\_:\_:)](musicsequencefilecreate%28__________%29.md): Creates a MIDI file from the events in a music sequence.
- [MusicSequenceFileCreateData(\_:\_:\_:\_:\_:)](musicsequencefilecreatedata%28__________%29.md): Creates a data object containing the events from a music sequence.
- [MusicSequenceFileLoad(\_:\_:\_:\_:)](musicsequencefileload%28________%29.md): Loads data into a music sequence from a URL reference.
- [MusicSequenceFileLoadData(\_:\_:\_:\_:)](musicsequencefileloaddata%28________%29.md): Load data into a music sequence from a data reference.
- [MusicSequenceGetAUGraph(\_:\_:)](musicsequencegetaugraph%28____%29.md): Gets the audio processing graph associated with a music sequence.
- [MusicSequenceGetBeatsForSeconds(\_:\_:\_:)](musicsequencegetbeatsforseconds%28______%29.md): Calculates the number of beats that correspond to a number of seconds.
- [MusicSequenceGetIndTrack(\_:\_:\_:)](musicsequencegetindtrack%28______%29.md): Gets the music track at the specified track index.
- [MusicSequenceGetInfoDictionary(\_:)](musicsequencegetinfodictionary%28__%29.md): Returns a dictionary containing music sequence information.
- [MusicSequenceGetSMPTEResolution(\_:\_:\_:)](musicsequencegetsmpteresolution%28______%29.md)
- [MusicSequenceGetSecondsForBeats(\_:\_:\_:)](musicsequencegetsecondsforbeats%28______%29.md): Calculates the number of seconds that correspond to a number of beats.
- [MusicSequenceGetSequenceType(\_:\_:)](musicsequencegetsequencetype%28____%29.md): Gets the sequence type for a music sequence.

# NewMusicSequence (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Creates a new empty music sequence.

## Declaration

```objectivec
extern OSStatus NewMusicSequence(MusicSequence*outSequence);
```

## Parameters

- `outSequence`: On output, the new, empty music sequence.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

A new music sequence has only a tempo track, with a default tempo of 120 beats-per-minute. The default sequence type is beat-based. For the various sequence types, see [MusicSequenceType](musicsequencetype.md).

To direct the output of a music sequence to an audio processing graph, use the [MusicSequenceSetAUGraph](musicsequencesetaugraph%28____%29.md) function. To direct the output instead to a MIDI endpoint, use the [MusicSequenceSetMIDIEndpoint](musicsequencesetmidiendpoint%28____%29.md) function.

To direct the output of a specific music track, use the [MusicTrackSetDestNode](musictracksetdestnode%28____%29.md) and [MusicTrackSetDestMIDIEndpoint](musictracksetdestmidiendpoint%28____%29.md) functions, described in `MusicTrack`.

## See Also

### Managing Music Sequences

- [DisposeMusicSequence](disposemusicsequence%28__%29.md): Disposes of a music sequence.
- [MusicSequenceBarBeatTimeToBeats](musicsequencebarbeattimetobeats%28______%29.md): Formats a music sequence’s bar-beat time to its beat time.
- [MusicSequenceBeatsToBarBeatTime](musicsequencebeatstobarbeattime%28________%29.md): Formats a music sequence’s beat time to its bar-beat time.
- [MusicSequenceDisposeTrack](musicsequencedisposetrack%28____%29.md): Removes a music track from a music sequence, and disposes of the track.
- [MusicSequenceFileCreate](musicsequencefilecreate%28__________%29.md): Creates a MIDI file from the events in a music sequence.
- [MusicSequenceFileCreateData](musicsequencefilecreatedata%28__________%29.md): Creates a data object containing the events from a music sequence.
- [MusicSequenceFileLoad](musicsequencefileload%28________%29.md): Loads data into a music sequence from a URL reference.
- [MusicSequenceFileLoadData](musicsequencefileloaddata%28________%29.md): Load data into a music sequence from a data reference.
- [MusicSequenceGetAUGraph](musicsequencegetaugraph%28____%29.md): Gets the audio processing graph associated with a music sequence.
- [MusicSequenceGetBeatsForSeconds](musicsequencegetbeatsforseconds%28______%29.md): Calculates the number of beats that correspond to a number of seconds.
- [MusicSequenceGetIndTrack](musicsequencegetindtrack%28______%29.md): Gets the music track at the specified track index.
- [MusicSequenceGetInfoDictionary](musicsequencegetinfodictionary%28__%29.md): Returns a dictionary containing music sequence information.
- [MusicSequenceGetSMPTEResolution](musicsequencegetsmpteresolution%28______%29.md)
- [MusicSequenceGetSecondsForBeats](musicsequencegetsecondsforbeats%28______%29.md): Calculates the number of seconds that correspond to a number of beats.
- [MusicSequenceGetSequenceType](musicsequencegetsequencetype%28____%29.md): Gets the sequence type for a music sequence.
