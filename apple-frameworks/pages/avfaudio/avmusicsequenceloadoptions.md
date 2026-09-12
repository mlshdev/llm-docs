> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusicsequenceloadoptions](https://developer.apple.com/documentation/avfaudio/avmusicsequenceloadoptions)

# AVMusicSequenceLoadOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines whether data on different MIDI channels map to multiple tracks, or whether the framework preserves the tracks as they are.

## Declaration

```swift
struct AVMusicSequenceLoadOptions
```

## Topics

### Getting Standard Load Options

- [smf_ChannelsToTracks](avmusicsequenceloadoptions/smf_channelstotracks.md): An option that represents data on different MIDI channels mapped to multiple tracks.

### Creating a Load Option

- [init(rawValue:)](avmusicsequenceloadoptions/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

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

### Managing Sequence Load Options

- [load(from:options:)](avaudiosequencer/load%28from_options_%29-8o58w.md): Parses the data and adds its events to the sequence.
- [load(from:options:)](avaudiosequencer/load%28from_options_%29-9kb6m.md): Loads the file the URL references and adds the events to the sequence.

# AVMusicSequenceLoadOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines whether data on different MIDI channels map to multiple tracks, or whether the framework preserves the tracks as they are.

## Declaration

```objectivec
enum AVMusicSequenceLoadOptions : NSUInteger;
```

## Topics

### Getting Standard Load Options

- [AVMusicSequenceLoadSMF_ChannelsToTracks](avmusicsequenceloadoptions/smf_channelstotracks.md): An option that represents data on different MIDI channels mapped to multiple tracks.

### Creating a Load Option

- [AVMusicSequenceLoadSMF_PreserveTracks](avmusicsequenceloadoptions/avmusicsequenceloadsmf_preservetracks.md): An option that preserves the tracks as they are.

## See Also

### Managing Sequence Load Options

- [loadFromData:options:error:](avaudiosequencer/load%28from_options_%29-8o58w.md): Parses the data and adds its events to the sequence.
- [loadFromURL:options:error:](avaudiosequencer/load%28from_options_%29-9kb6m.md): Loads the file the URL references and adds the events to the sequence.
