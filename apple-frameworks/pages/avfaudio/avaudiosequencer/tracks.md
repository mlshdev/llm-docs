> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/tracks](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/tracks)

# tracks (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array that contains all the tracks in the sequence.

## Declaration

```swift
var tracks: [AVMusicTrack] { get }
```

<a id="Discussion"></a>

## Discussion

The track indices start at `0`, and don’t include the tempo track.

## See Also

### Getting Sequence Properties

- [isPlaying](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencer.InfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [data(withSMPTEResolution:error:)](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

# tracks (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array that contains all the tracks in the sequence.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMusicTrack *> * tracks;
```

<a id="Discussion"></a>

## Discussion

The track indices start at `0`, and don’t include the tempo track.

## See Also

### Getting Sequence Properties

- [playing](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencerInfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [dataWithSMPTEResolution:error:](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
