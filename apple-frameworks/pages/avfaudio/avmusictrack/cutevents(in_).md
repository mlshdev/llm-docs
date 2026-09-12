> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/cutevents(in:)](https://developer.apple.com/documentation/avfaudio/avmusictrack/cutevents(in:))

# cutEvents(in:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Splices all events in the beat range from the music track.

## Declaration

```swift
func cutEvents(in range: AVBeatRange)
```

## Parameters

- `range`: The range of beats.

<a id="Discussion"></a>

## Discussion

All events past the end of the range you specify shift backward by the duration of the range.

## See Also

### Cutting and Copying Events

- [copyEvents(in:from:insertAt:)](copyevents%28in_from_insertat_%29.md): Copies the events from the source track and splices them into the current music track.
- [copyAndMergeEvents(in:from:mergeAt:)](copyandmergeevents%28in_from_mergeat_%29.md): Copies the events from the source track and merges them into the current music track.

# cutEventsInRange: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Splices all events in the beat range from the music track.

## Declaration

```objectivec
- (void) cutEventsInRange:(AVBeatRange) range;
```

## Parameters

- `range`: The range of beats.

<a id="Discussion"></a>

## Discussion

All events past the end of the range you specify shift backward by the duration of the range.

## See Also

### Cutting and Copying Events

- [copyEventsInRange:fromTrack:insertAtBeat:](copyevents%28in_from_insertat_%29.md): Copies the events from the source track and splices them into the current music track.
- [copyAndMergeEventsInRange:fromTrack:mergeAtBeat:](copyandmergeevents%28in_from_mergeat_%29.md): Copies the events from the source track and merges them into the current music track.
