> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/removetimerange(_:)](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/removetimerange(_:))

# removeTimeRange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes a time range of media from a composition track.

## Declaration

```swift
func removeTimeRange(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The time range to remove.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [insertTimeRanges(\_:of:at:)](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.

# removeTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes a time range of media from a composition track.

## Declaration

```objectivec
- (void) removeTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range to remove.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange:ofTrack:atTime:error:](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [insertTimeRanges:ofTracks:atTime:error:](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.
