> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequencesetusercallback(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicsequencesetusercallback(_:_:_:))

# MusicSequenceSetUserCallback(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Registers a user callback function with a music sequence.

## Declaration

```swift
func MusicSequenceSetUserCallback(_ inSequence: MusicSequence, _ inCallback: MusicSequenceUserCallback?, _ inClientData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inSequence`: The music sequence that you want to add a user callback function to.
- `inCallback`: A reference to your callback function. Use `NULL` to remove a registered callback function.
- `inClientData`: Your data that the music sequence provides back to your callback function when it is invoked.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The music sequence invokes your callback for each user event added to any music track owned by the sequence. If there is a callback registered, then UserEvents will be chased when MusicPlayerSetTime is called. In that case the inStartSliceBeat and inEndSliceBeat will both be the same value and will be the beat that the player is chasing to.

Usually, where the sequence data is being scheduled for playback, the following applies:

```objc
inStartSliceBeat <= inEventTime < inEndSliceBeat
```

The only exception to this is if the track that owns the MusicEvent is looping. In this case the start beat will still be less than the end beat (so your callback can still determine that it is playing, and what beats are currently being scheduled), however, the inEventTime will be the original time-stamped time of the user event.

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

# MusicSequenceSetUserCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Registers a user callback function with a music sequence.

## Declaration

```objectivec
extern OSStatus MusicSequenceSetUserCallback(MusicSequence inSequence, MusicSequenceUserCallback inCallback, void *inClientData);
```

## Parameters

- `inSequence`: The music sequence that you want to add a user callback function to.
- `inCallback`: A reference to your callback function. Use `NULL` to remove a registered callback function.
- `inClientData`: Your data that the music sequence provides back to your callback function when it is invoked.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The music sequence invokes your callback for each user event added to any music track owned by the sequence. If there is a callback registered, then UserEvents will be chased when MusicPlayerSetTime is called. In that case the inStartSliceBeat and inEndSliceBeat will both be the same value and will be the beat that the player is chasing to.

Usually, where the sequence data is being scheduled for playback, the following applies:

```objc
inStartSliceBeat <= inEventTime < inEndSliceBeat
```

The only exception to this is if the track that owns the MusicEvent is looping. In this case the start beat will still be less than the end beat (so your callback can still determine that it is playing, and what beats are currently being scheduled), however, the inEventTime will be the original time-stamped time of the user event.

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
