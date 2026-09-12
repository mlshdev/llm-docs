> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/data(withsmpteresolution:error:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/data(withsmpteresolution:error:))

# data(withSMPTEResolution:error:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets a data object that contains the events from the sequence.

## Declaration

```swift
func data(withSMPTEResolution SMPTEResolution: Int, error outError: NSErrorPointer) -> Data
```

## Parameters

- `SMPTEResolution`: The relationship between tick and quarter note for saving to a Standard MIDI File. Pass `0` to use the default.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="Discussion"></a>

## Discussion

The client controls the lifetime of the data value this method returns.

## See Also

### Getting Sequence Properties

- [isPlaying](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencer.InfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

# dataWithSMPTEResolution:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets a data object that contains the events from the sequence.

## Declaration

```objectivec
- (NSData *) dataWithSMPTEResolution:(NSInteger) SMPTEResolution error:(NSError **) outError;
```

## Parameters

- `SMPTEResolution`: The relationship between tick and quarter note for saving to a Standard MIDI File. Pass `0` to use the default.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="Discussion"></a>

## Discussion

The client controls the lifetime of the data value this method returns.

## See Also

### Getting Sequence Properties

- [playing](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [AVAudioSequencerInfoDictionaryKey](infodictionarykey.md): Constants that defines metadata keys for a sequencer.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
