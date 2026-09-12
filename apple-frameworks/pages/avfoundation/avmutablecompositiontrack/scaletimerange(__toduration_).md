> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/scaletimerange(_:toduration:)](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/scaletimerange(_:toduration:))

# scaleTimeRange(\_:toDuration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Changes the duration of a time range of the track.

## Declaration

```swift
func scaleTimeRange(_ timeRange: CMTimeRange, toDuration duration: CMTime)
```

## Parameters

- `timeRange`: The time range to scale.
- `duration`: A new duration value.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [insertTimeRanges(\_:of:at:)](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a time range of media from a composition track.

# scaleTimeRange:toDuration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Changes the duration of a time range of the track.

## Declaration

```objectivec
- (void) scaleTimeRange:(CMTimeRange) timeRange toDuration:(CMTime) duration;
```

## Parameters

- `timeRange`: The time range to scale.
- `duration`: A new duration value.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange:ofTrack:atTime:error:](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [insertTimeRanges:ofTracks:atTime:error:](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [removeTimeRange:](removetimerange%28__%29.md): Removes a time range of media from a composition track.
