> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/copyevents(in:from:insertat:)](https://developer.apple.com/documentation/avfaudio/avmusictrack/copyevents(in:from:insertat:))

# copyEvents(in:from:insertAt:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Copies the events from the source track and splices them into the current music track.

## Declaration

```swift
func copyEvents(in range: AVBeatRange, from sourceTrack: AVMusicTrack, insertAt insertStartBeat: AVMusicTimeStamp)
```

## Parameters

- `range`: The range of beats.
- `sourceTrack`: The music track to copy the events from.
- `insertStartBeat`: The start beat to splice the events into.

<a id="Discussion"></a>

## Discussion

All events originally at or past the insertion beat shift forward by the duration of the copied-in range.

## See Also

### Cutting and Copying Events

- [cutEvents(in:)](cutevents%28in_%29.md): Splices all events in the beat range from the music track.
- [copyAndMergeEvents(in:from:mergeAt:)](copyandmergeevents%28in_from_mergeat_%29.md): Copies the events from the source track and merges them into the current music track.

# copyEventsInRange:fromTrack:insertAtBeat: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Copies the events from the source track and splices them into the current music track.

## Declaration

```objectivec
- (void) copyEventsInRange:(AVBeatRange) range fromTrack:(AVMusicTrack *) sourceTrack insertAtBeat:(AVMusicTimeStamp) insertStartBeat;
```

## Parameters

- `range`: The range of beats.
- `sourceTrack`: The music track to copy the events from.
- `insertStartBeat`: The start beat to splice the events into.

<a id="Discussion"></a>

## Discussion

All events originally at or past the insertion beat shift forward by the duration of the copied-in range.

## See Also

### Cutting and Copying Events

- [cutEventsInRange:](cutevents%28in_%29.md): Splices all events in the beat range from the music track.
- [copyAndMergeEventsInRange:fromTrack:mergeAtBeat:](copyandmergeevents%28in_from_mergeat_%29.md): Copies the events from the source track and merges them into the current music track.
