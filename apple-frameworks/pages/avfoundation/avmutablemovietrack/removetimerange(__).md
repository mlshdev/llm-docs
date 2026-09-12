> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/removetimerange(_:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/removetimerange(_:))

# removeTimeRange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes the specified time range from a track.

## Declaration

```swift
func removeTimeRange(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The time range to remove.

## See Also

### Managing time ranges

- [insertTimeRange(\_:of:at:copySampleData:)](inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.

# removeTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes the specified time range from a track.

## Declaration

```objectivec
- (void) removeTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range to remove.

## See Also

### Managing time ranges

- [insertTimeRange:ofTrack:atTime:copySampleData:error:](inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.
