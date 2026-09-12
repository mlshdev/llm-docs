> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequencetype](https://developer.apple.com/documentation/audiotoolbox/musicsequencetype)

# MusicSequenceType (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The various types of music sequences.

## Declaration

```swift
enum MusicSequenceType
```

## Topics

### Constants

- [MusicSequenceType.beats](musicsequencetype/beats.md): Used for a music sequence that corresponds to a normal MIDI file. The tempo track defines the number of beats per second and can have multiple tempo events.
- [MusicSequenceType.seconds](musicsequencetype/seconds.md): Used for a music sequence that corresponds to a MIDI file, but employs SMPTE timecode. The tempo track contains a single tempo event that specifies 60 beat-per-minute.
- [MusicSequenceType.samples](musicsequencetype/samples.md): Used for audio samples; a music sequence of this type cannot be saved to a MIDI file. The tempo track contains a single tempo event that specifies an audio sample rate in samples-per-second.

### Initializers

- [init(rawValue:)](musicsequencetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [Music Instrument Audio Unit Subtypes](1619498-music-instrument-audio-unit-subt.md)
- [Music Track Properties](1515456-music-track-properties.md): Properties for music tracks.
- [MusicSequenceFileFlags](musicsequencefileflags.md): Flags that configure the behavior of the [MusicSequenceFileCreate(\_:\_:\_:\_:\_:)](musicsequencefilecreate%28__________%29.md) and [MusicSequenceFileCreateData(\_:\_:\_:\_:\_:)](musicsequencefilecreatedata%28__________%29.md) functions.
- [MusicSequenceFileTypeID](musicsequencefiletypeid.md): The various types of files that can be parsed by a music sequence.
- [MusicSequenceLoadFlags](musicsequenceloadflags.md): Flags used to configure the behavior of the [MusicSequenceFileLoad(\_:\_:\_:\_:)](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData(\_:\_:\_:\_:)](musicsequencefileloaddata%28________%29.md) functions.
- [Music Extended Control Event Type](1515446-music-extended-control-event-typ.md)
- [Music Player Errors](1515472-music-player-errors.md)
- [Music Event Types](1515479-music-event-types.md)
- [Music Note Events](1473494-music-note-events.md)
- [Music Device Selectors](1473469-music-device-selectors.md)
- [Music Device Properties](1533931-music-device-properties.md)
- [Music Device Sample Frame Mask](1533978-music-device-sample-frame-mask.md)
- [Music Device Unit Properties](1533963-music-device-unit-properties.md)
- [Instrument Types](1534202-instrument-types.md)
- [Music Device Generic Properties](1533930-music-device-generic-properties.md)

# MusicSequenceType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The various types of music sequences.

## Declaration

```objectivec
enum MusicSequenceType : UInt32;
```

## Topics

### Constants

- [kMusicSequenceType_Beats](musicsequencetype/beats.md): Used for a music sequence that corresponds to a normal MIDI file. The tempo track defines the number of beats per second and can have multiple tempo events.
- [kMusicSequenceType_Seconds](musicsequencetype/seconds.md): Used for a music sequence that corresponds to a MIDI file, but employs SMPTE timecode. The tempo track contains a single tempo event that specifies 60 beat-per-minute.
- [kMusicSequenceType_Samples](musicsequencetype/samples.md): Used for audio samples; a music sequence of this type cannot be saved to a MIDI file. The tempo track contains a single tempo event that specifies an audio sample rate in samples-per-second.

## See Also

### Enumerations

- [Music Instrument Audio Unit Subtypes](1619498-music-instrument-audio-unit-subt.md)
- [Music Track Properties](1515456-music-track-properties.md): Properties for music tracks.
- [MusicSequenceFileFlags](musicsequencefileflags.md): Flags that configure the behavior of the [MusicSequenceFileCreate](musicsequencefilecreate%28__________%29.md) and [MusicSequenceFileCreateData](musicsequencefilecreatedata%28__________%29.md) functions.
- [MusicSequenceFileTypeID](musicsequencefiletypeid.md): The various types of files that can be parsed by a music sequence.
- [MusicSequenceLoadFlags](musicsequenceloadflags.md): Flags used to configure the behavior of the [MusicSequenceFileLoad](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData](musicsequencefileloaddata%28________%29.md) functions.
- [Music Extended Control Event Type](1515446-music-extended-control-event-typ.md)
- [Music Player Errors](1515472-music-player-errors.md)
- [Music Event Types](1515479-music-event-types.md)
- [Music Note Events](1473494-music-note-events.md)
- [Music Device Selectors](1473469-music-device-selectors.md)
- [Music Device Properties](1533931-music-device-properties.md)
- [Music Device Sample Frame Mask](1533978-music-device-sample-frame-mask.md)
- [Music Device Unit Properties](1533963-music-device-unit-properties.md)
- [Instrument Types](1534202-instrument-types.md)
- [Music Device Generic Properties](1533930-music-device-generic-properties.md)
