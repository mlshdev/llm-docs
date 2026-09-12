> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/scale(_:toduration:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/scale(_:toduration:))

# scale(\_:toDuration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Changes the duration of a time range in a movie.

## Declaration

```swift
func scale(_ timeRange: CMTimeRange, toDuration duration: CMTime)
```

## Parameters

- `timeRange`: The time range to be changed.
- `duration`: The new duration for the time range.

## See Also

### Managing time ranges

- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [insertTimeRange(\_:of:at:copySampleData:)](inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes the specified time range from a movie.

# scaleTimeRange:toDuration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Changes the duration of a time range in a movie.

## Declaration

```objectivec
- (void) scaleTimeRange:(CMTimeRange) timeRange toDuration:(CMTime) duration;
```

## Parameters

- `timeRange`: The time range to be changed.
- `duration`: The new duration for the time range.

## See Also

### Managing time ranges

- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [insertTimeRange:ofAsset:atTime:copySampleData:error:](inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [removeTimeRange:](removetimerange%28__%29.md): Removes the specified time range from a movie.
