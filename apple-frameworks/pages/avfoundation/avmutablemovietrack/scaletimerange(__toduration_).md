> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/scaletimerange(_:toduration:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/scaletimerange(_:toduration:))

# scaleTimeRange(\_:toDuration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Changes the duration of a time range in a track.

## Declaration

```swift
func scaleTimeRange(_ timeRange: CMTimeRange, toDuration duration: CMTime)
```

## Parameters

- `timeRange`: The time range to change.
- `duration`: The new duration for the time range.

## See Also

### Managing time ranges

- [insertTimeRange(\_:of:at:copySampleData:)](inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes the specified time range from a track.

# scaleTimeRange:toDuration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Changes the duration of a time range in a track.

## Declaration

```objectivec
- (void) scaleTimeRange:(CMTimeRange) timeRange toDuration:(CMTime) duration;
```

## Parameters

- `timeRange`: The time range to change.
- `duration`: The new duration for the time range.

## See Also

### Managing time ranges

- [insertTimeRange:ofTrack:atTime:copySampleData:error:](inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [removeTimeRange:](removetimerange%28__%29.md): Removes the specified time range from a track.
