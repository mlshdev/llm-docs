> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/tempotrack](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/tempotrack)

# tempoTrack (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The track that contains tempo information about the sequence.

## Declaration

```swift
var tempoTrack: AVMusicTrack { get }
```

<a id="Discussion"></a>

## Discussion

Each sequence has a single tempo track. The framework places all tempo events into this track along with other appropriate events, such as the time signature from a MIDI file.

You can edit the tempo track like any other track. The framework ignores nontempo events in the track.

## See Also

### Getting Sequence Properties

- [isPlaying](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencer.InfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [data(withSMPTEResolution:error:)](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

# tempoTrack (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The track that contains tempo information about the sequence.

## Declaration

```objectivec
@property (nonatomic, readonly) AVMusicTrack * tempoTrack;
```

<a id="Discussion"></a>

## Discussion

Each sequence has a single tempo track. The framework places all tempo events into this track along with other appropriate events, such as the time signature from a MIDI file.

You can edit the tempo track like any other track. The framework ignores nontempo events in the track.

## See Also

### Getting Sequence Properties

- [playing](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencerInfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [dataWithSMPTEResolution:error:](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
