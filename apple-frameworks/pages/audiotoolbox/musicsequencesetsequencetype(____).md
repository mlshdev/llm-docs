> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequencesetsequencetype(_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicsequencesetsequencetype(_:_:))

# MusicSequenceSetSequenceType(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the sequence type for a music sequence.

## Declaration

```swift
func MusicSequenceSetSequenceType(_ inSequence: MusicSequence, _ inType: MusicSequenceType) -> OSStatus
```

## Parameters

- `inSequence`: The music sequence whose sequence type you want to set.
- `inType`: The type of sequence to assign to the music sequence. For the list of available sequence types, see [MusicSequenceType](musicsequencetype.md). The default sequence type is `kMusicSequenceType_Beats`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The sequence type can be set to `kMusicSequenceType_Beats` at any time. The sequence type can only be set to `kMusicSequenceType_Seconds` or `kMusicSequenceType_Samples` if there are no tempo events already in the sequence.

The following considerations pertain to the various sequence types:

- `kMusicSequenceType_Beats`—Tempo is specified as beats-per-minute. A music sequence of this type can contain any number of tempo events.
- `kMusicSequenceType_Samples`—Tempo is specified as a sample rate, in terms of samples-per-second. If you set the tempo to 44,100 using a sequence of this type, then 44,100 beats corresponds to a duration of one second.
- `kMusicSequenceType_Seconds`—The tempo should be set to 60; a beat is a second.

After setting a music sequence to the `kMusicSequenceType_Samples` or `kMusicSequenceType_Seconds` type, add a single tempo event to specify the tempo.

A meta event of interest for the `kMusicSequenceType_Seconds` sequence type is the SMPTE Offset meta event, which is stored in the tempo track. The sequence doesn’t do anything with this event.

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

# MusicSequenceSetSequenceType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the sequence type for a music sequence.

## Declaration

```objectivec
extern OSStatus MusicSequenceSetSequenceType(MusicSequence inSequence, MusicSequenceType inType);
```

## Parameters

- `inSequence`: The music sequence whose sequence type you want to set.
- `inType`: The type of sequence to assign to the music sequence. For the list of available sequence types, see [MusicSequenceType](musicsequencetype.md). The default sequence type is `kMusicSequenceType_Beats`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The sequence type can be set to `kMusicSequenceType_Beats` at any time. The sequence type can only be set to `kMusicSequenceType_Seconds` or `kMusicSequenceType_Samples` if there are no tempo events already in the sequence.

The following considerations pertain to the various sequence types:

- `kMusicSequenceType_Beats`—Tempo is specified as beats-per-minute. A music sequence of this type can contain any number of tempo events.
- `kMusicSequenceType_Samples`—Tempo is specified as a sample rate, in terms of samples-per-second. If you set the tempo to 44,100 using a sequence of this type, then 44,100 beats corresponds to a duration of one second.
- `kMusicSequenceType_Seconds`—The tempo should be set to 60; a beat is a second.

After setting a music sequence to the `kMusicSequenceType_Samples` or `kMusicSequenceType_Seconds` type, add a single tempo event to specify the tempo.

A meta event of interest for the `kMusicSequenceType_Seconds` sequence type is the SMPTE Offset meta event, which is stored in the tempo track. The sequence doesn’t do anything with this event.

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
