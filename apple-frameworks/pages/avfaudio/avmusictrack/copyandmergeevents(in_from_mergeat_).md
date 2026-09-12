> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/copyandmergeevents(in:from:mergeat:)](https://developer.apple.com/documentation/avfaudio/avmusictrack/copyandmergeevents(in:from:mergeat:))

# copyAndMergeEvents(in:from:mergeAt:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Copies the events from the source track and merges them into the current music track.

## Declaration

```swift
func copyAndMergeEvents(in range: AVBeatRange, from sourceTrack: AVMusicTrack, mergeAt mergeStartBeat: AVMusicTimeStamp)
```

## Parameters

- `range`: The range of beats.
- `sourceTrack`: The music track to copy the events from.
- `mergeStartBeat`: The start beat where the copied events merge into.

<a id="Discussion"></a>

## Discussion

The system won’t modify events originally at or past the start beat. Copying events from track to track follows the same type-exclusion rules as adding events.

## See Also

### Cutting and Copying Events

- [cutEvents(in:)](cutevents%28in_%29.md): Splices all events in the beat range from the music track.
- [copyEvents(in:from:insertAt:)](copyevents%28in_from_insertat_%29.md): Copies the events from the source track and splices them into the current music track.

# copyAndMergeEventsInRange:fromTrack:mergeAtBeat: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Copies the events from the source track and merges them into the current music track.

## Declaration

```objectivec
- (void) copyAndMergeEventsInRange:(AVBeatRange) range fromTrack:(AVMusicTrack *) sourceTrack mergeAtBeat:(AVMusicTimeStamp) mergeStartBeat;
```

## Parameters

- `range`: The range of beats.
- `sourceTrack`: The music track to copy the events from.
- `mergeStartBeat`: The start beat where the copied events merge into.

<a id="Discussion"></a>

## Discussion

The system won’t modify events originally at or past the start beat. Copying events from track to track follows the same type-exclusion rules as adding events.

## See Also

### Cutting and Copying Events

- [cutEventsInRange:](cutevents%28in_%29.md): Splices all events in the beat range from the music track.
- [copyEventsInRange:fromTrack:insertAtBeat:](copyevents%28in_from_insertat_%29.md): Copies the events from the source track and splices them into the current music track.
