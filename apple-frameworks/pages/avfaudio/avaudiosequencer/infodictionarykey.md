> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/infodictionarykey](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/infodictionarykey)

# AVAudioSequencer.InfoDictionaryKey (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that defines metadata keys for a sequencer.

## Declaration

```swift
struct InfoDictionaryKey
```

## Topics

### Getting Album Details

- [album](infodictionarykey/album.md): A key that represents the album.
- [artist](infodictionarykey/artist.md): A key that represents the artist.
- [comments](infodictionarykey/comments.md): A key that represents the comments.
- [composer](infodictionarykey/composer.md): A key that represents the composer.
- [copyright](infodictionarykey/copyright.md): A key that represents the copyright statement.
- [genre](infodictionarykey/genre.md): A key that represents the genre.
- [lyricist](infodictionarykey/lyricist.md): A key that represents the lyricist.
- [title](infodictionarykey/title.md): A key that represents the title.
- [trackNumber](infodictionarykey/tracknumber.md): A key that represents the track number.
- [subTitle](infodictionarykey/subtitle.md): A key that represents the subtitle.
- [year](infodictionarykey/year.md): A key that represents the year.

### Getting the Duration and Time

- [approximateDurationInSeconds](infodictionarykey/approximatedurationinseconds.md): A key that represents the approximate duration.
- [timeSignature](infodictionarykey/timesignature.md): A key that represents the time signature.
- [tempo](infodictionarykey/tempo.md): A key that represents the tempo.

### Getting the Recording Date

- [recordedDate](infodictionarykey/recordeddate.md): A key that represents the date of the recording.

### Getting Encoding Information

- [encodingApplication](infodictionarykey/encodingapplication.md): A key that represents the encoding application.
- [sourceEncoder](infodictionarykey/sourceencoder.md): A key that represents the encoder the source uses.
- [nominalBitRate](infodictionarykey/nominalbitrate.md): A key that represents the nominal bit rate.
- [sourceBitDepth](infodictionarykey/sourcebitdepth.md): A key that represents the bit depth of the source.
- [keySignature](infodictionarykey/keysignature.md): A key that represents the key signature.

### Getting the Channel Layout

- [channelLayout](infodictionarykey/channellayout.md): A key that represents the channel layout.

### Getting the Recording Code

- [ISRC](infodictionarykey/isrc.md): A key that represents the international standard recording code.

### Creating a Dictionary Key

- [init(rawValue:)](infodictionarykey/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Sequence Properties

- [isPlaying](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [data(withSMPTEResolution:error:)](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

# AVAudioSequencerInfoDictionaryKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that defines metadata keys for a sequencer.

## Declaration

```objectivec
typedef NSString * AVAudioSequencerInfoDictionaryKey;
```

## Topics

### Getting Album Details

- [AVAudioSequencerInfoDictionaryKeyAlbum](infodictionarykey/album.md): A key that represents the album.
- [AVAudioSequencerInfoDictionaryKeyArtist](infodictionarykey/artist.md): A key that represents the artist.
- [AVAudioSequencerInfoDictionaryKeyComments](infodictionarykey/comments.md): A key that represents the comments.
- [AVAudioSequencerInfoDictionaryKeyComposer](infodictionarykey/composer.md): A key that represents the composer.
- [AVAudioSequencerInfoDictionaryKeyCopyright](infodictionarykey/copyright.md): A key that represents the copyright statement.
- [AVAudioSequencerInfoDictionaryKeyGenre](infodictionarykey/genre.md): A key that represents the genre.
- [AVAudioSequencerInfoDictionaryKeyLyricist](infodictionarykey/lyricist.md): A key that represents the lyricist.
- [AVAudioSequencerInfoDictionaryKeyTitle](infodictionarykey/title.md): A key that represents the title.
- [AVAudioSequencerInfoDictionaryKeyTrackNumber](infodictionarykey/tracknumber.md): A key that represents the track number.
- [AVAudioSequencerInfoDictionaryKeySubTitle](infodictionarykey/subtitle.md): A key that represents the subtitle.
- [AVAudioSequencerInfoDictionaryKeyYear](infodictionarykey/year.md): A key that represents the year.

### Getting the Duration and Time

- [AVAudioSequencerInfoDictionaryKeyApproximateDurationInSeconds](infodictionarykey/approximatedurationinseconds.md): A key that represents the approximate duration.
- [AVAudioSequencerInfoDictionaryKeyTimeSignature](infodictionarykey/timesignature.md): A key that represents the time signature.
- [AVAudioSequencerInfoDictionaryKeyTempo](infodictionarykey/tempo.md): A key that represents the tempo.

### Getting the Recording Date

- [AVAudioSequencerInfoDictionaryKeyRecordedDate](infodictionarykey/recordeddate.md): A key that represents the date of the recording.

### Getting Encoding Information

- [AVAudioSequencerInfoDictionaryKeyEncodingApplication](infodictionarykey/encodingapplication.md): A key that represents the encoding application.
- [AVAudioSequencerInfoDictionaryKeySourceEncoder](infodictionarykey/sourceencoder.md): A key that represents the encoder the source uses.
- [AVAudioSequencerInfoDictionaryKeyNominalBitRate](infodictionarykey/nominalbitrate.md): A key that represents the nominal bit rate.
- [AVAudioSequencerInfoDictionaryKeySourceBitDepth](infodictionarykey/sourcebitdepth.md): A key that represents the bit depth of the source.
- [AVAudioSequencerInfoDictionaryKeyKeySignature](infodictionarykey/keysignature.md): A key that represents the key signature.

### Getting the Channel Layout

- [AVAudioSequencerInfoDictionaryKeyChannelLayout](infodictionarykey/channellayout.md): A key that represents the channel layout.

### Getting the Recording Code

- [AVAudioSequencerInfoDictionaryKeyISRC](infodictionarykey/isrc.md): A key that represents the international standard recording code.

## See Also

### Getting Sequence Properties

- [playing](isplaying.md): A Boolean value that indicates whether the sequencer’s player is in a playing state.
- [rate](rate.md): The playback rate of the sequencer’s player.
- [tracks](tracks.md): An array that contains all the tracks in the sequence.
- [currentPositionInBeats](currentpositioninbeats.md): The current playback position, in beats.
- [currentPositionInSeconds](currentpositioninseconds.md): The current playback position, in seconds.
- [tempoTrack](tempotrack.md): The track that contains tempo information about the sequence.
- [userInfo](userinfo.md): A dictionary that contains metadata from a sequence.
- [dataWithSMPTEResolution:error:](data%28withsmpteresolution_error_%29.md): Gets a data object that contains the events from the sequence.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
