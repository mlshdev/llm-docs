> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrackloopcount](https://developer.apple.com/documentation/avfaudio/avmusictrackloopcount)

# AVMusicTrackLoopCount (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Options that define the number of times a track loops.

## Declaration

```swift
enum AVMusicTrackLoopCount
```

## Topics

### Elements

- [AVMusicTrackLoopCount.forever](avmusictrackloopcount/forever.md): A track that loops forever.

### Initializers

- [init(rawValue:)](avmusictrackloopcount/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Music Tracks

- [AVMusicTrack](avmusictrack.md): A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.
- [createAndAppendTrack()](avaudiosequencer/createandappendtrack%28%29.md): Creates a new music track and appends it to the sequencer’s list.
- [reverseEvents()](avaudiosequencer/reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [removeTrack(\_:)](avaudiosequencer/removetrack%28__%29.md): Removes the music track from the sequencer.

# AVMusicTrackLoopCount (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Options that define the number of times a track loops.

## Declaration

```objectivec
enum AVMusicTrackLoopCount : NSInteger;
```

## Topics

### Elements

- [AVMusicTrackLoopCountForever](avmusictrackloopcount/forever.md): A track that loops forever.

## See Also

### Handling Music Tracks

- [AVMusicTrack](avmusictrack.md): A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.
- [createAndAppendTrack](avaudiosequencer/createandappendtrack%28%29.md): Creates a new music track and appends it to the sequencer’s list.
- [reverseEvents](avaudiosequencer/reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [removeTrack:](avaudiosequencer/removetrack%28__%29.md): Removes the music track from the sequencer.
