> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequenceloadflags](https://developer.apple.com/documentation/audiotoolbox/musicsequenceloadflags)

# MusicSequenceLoadFlags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags used to configure the behavior of the [MusicSequenceFileLoad(\_:\_:\_:\_:)](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData(\_:\_:\_:\_:)](musicsequencefileloaddata%28________%29.md) functions.

## Declaration

```swift
struct MusicSequenceLoadFlags
```

## Topics

### Constants

- [smf_ChannelsToTracks](musicsequenceloadflags/smf_channelstotracks.md): If this flag is set the resultant Sequence will contain a tempo track, 1 track for each MIDI Channel that is found in the SMF, 1 track for SysEx or MetaEvents - and this will be the last track in the sequence after the LoadSMFWithFlags calls.

### Initializers

- [init(rawValue:)](musicsequenceloadflags/init%28rawvalue_%29.md)

### Type Properties

- [smf_PreserveTracks](musicsequenceloadflags/smf_preservetracks.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

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

# MusicSequenceLoadFlags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags used to configure the behavior of the [MusicSequenceFileLoad](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData](musicsequencefileloaddata%28________%29.md) functions.

## Declaration

```objectivec
enum MusicSequenceLoadFlags : UInt32;
```

## Topics

### Constants

- [kMusicSequenceLoadSMF_ChannelsToTracks](musicsequenceloadflags/smf_channelstotracks.md): If this flag is set the resultant Sequence will contain a tempo track, 1 track for each MIDI Channel that is found in the SMF, 1 track for SysEx or MetaEvents - and this will be the last track in the sequence after the LoadSMFWithFlags calls.

### Enumeration Cases

- [kMusicSequenceLoadSMF_PreserveTracks](musicsequenceloadflags/smf_preservetracks.md)

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
