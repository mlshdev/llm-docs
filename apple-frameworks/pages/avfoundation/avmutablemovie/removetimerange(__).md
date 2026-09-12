> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/removetimerange(_:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/removetimerange(_:))

# removeTimeRange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes the specified time range from a movie.

## Declaration

```swift
func removeTimeRange(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The time range to be removed.

## See Also

### Managing time ranges

- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [insertTimeRange(\_:of:at:copySampleData:)](inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [scale(\_:toDuration:)](scale%28__toduration_%29.md): Changes the duration of a time range in a movie.

# removeTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes the specified time range from a movie.

## Declaration

```objectivec
- (void) removeTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range to be removed.

## See Also

### Managing time ranges

- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [insertTimeRange:ofAsset:atTime:copySampleData:error:](inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [scaleTimeRange:toDuration:](scale%28__toduration_%29.md): Changes the duration of a time range in a movie.
