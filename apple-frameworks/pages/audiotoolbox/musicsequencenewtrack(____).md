> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequencenewtrack(_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicsequencenewtrack(_:_:))

# MusicSequenceNewTrack(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Add a new, empty music track to a music sequence.

## Declaration

```swift
func MusicSequenceNewTrack(_ inSequence: MusicSequence, _ outTrack: UnsafeMutablePointer<MusicTrack?>) -> OSStatus
```

## Parameters

- `inSequence`: The music sequence to add the new music track to.
- `outTrack`: On output, the new music track that was appended to the list of tracks for the music sequence.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Managing Music Sequences

- [NewMusicSequence(\_:)](newmusicsequence%28__%29.md): Creates a new empty music sequence.
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

# MusicSequenceNewTrack (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Add a new, empty music track to a music sequence.

## Declaration

```objectivec
extern OSStatus MusicSequenceNewTrack(MusicSequence inSequence, MusicTrack*outTrack);
```

## Parameters

- `inSequence`: The music sequence to add the new music track to.
- `outTrack`: On output, the new music track that was appended to the list of tracks for the music sequence.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Managing Music Sequences

- [NewMusicSequence](newmusicsequence%28__%29.md): Creates a new empty music sequence.
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
