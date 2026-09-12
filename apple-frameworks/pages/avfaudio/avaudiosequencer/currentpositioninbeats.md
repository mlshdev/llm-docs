> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/currentpositioninbeats](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/currentpositioninbeats)

# currentPositionInBeats (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current playback position, in beats.

## Declaration

```swift
var currentPositionInBeats: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property positions the sequencer’s player to the specified beat. You can update this property while the player is in a playing state, in which case, playback resumes at the new position.

## See Also

### Getting Sequence Properties

- [isPlaying](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencer.InfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [data(withSMPTEResolution:error:)](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

# currentPositionInBeats (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current playback position, in beats.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval currentPositionInBeats;
```

<a id="Discussion"></a>

## Discussion

Setting this property positions the sequencer’s player to the specified beat. You can update this property while the player is in a playing state, in which case, playback resumes at the new position.

## See Also

### Getting Sequence Properties

- [playing](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencerInfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [dataWithSMPTEResolution:error:](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
