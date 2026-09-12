> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/isplaying](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/isplaying)

# isPlaying (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the sequencer’s player is in a playing state.

## Declaration

```swift
var isPlaying: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value returns [true](https://developer.apple.com/documentation/swift/true) if the sequencer’s player is in a started state. The framework considers it to be playing until it explicitly stops, including when playing past the end of the events in a sequence.

## See Also

### Getting Sequence Properties

- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencer.InfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [data(withSMPTEResolution:error:)](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

# playing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the sequencer’s player is in a playing state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPlaying) BOOL playing;
```

<a id="Discussion"></a>

## Discussion

This value returns [true](https://developer.apple.com/documentation/swift/true) if the sequencer’s player is in a started state. The framework considers it to be playing until it explicitly stops, including when playing past the end of the events in a sequence.

## See Also

### Getting Sequence Properties

- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencerInfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [dataWithSMPTEResolution:error:](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
