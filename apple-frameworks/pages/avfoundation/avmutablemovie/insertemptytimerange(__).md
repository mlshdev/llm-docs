> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/insertemptytimerange(_:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/insertemptytimerange(_:))

# insertEmptyTimeRange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds an empty time range to a movie.

## Declaration

```swift
func insertEmptyTimeRange(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The time range to be made empty.

<a id="Discussion"></a>

## Discussion

You can’t add empty time ranges to the end of a movie.

## See Also

### Managing time ranges

- [insertTimeRange(\_:of:at:copySampleData:)](inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [scale(\_:toDuration:)](scale%28__toduration_%29.md): Changes the duration of a time range in a movie.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes the specified time range from a movie.

# insertEmptyTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds an empty time range to a movie.

## Declaration

```objectivec
- (void) insertEmptyTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range to be made empty.

<a id="Discussion"></a>

## Discussion

You can’t add empty time ranges to the end of a movie.

## See Also

### Managing time ranges

- [insertTimeRange:ofAsset:atTime:copySampleData:error:](inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [scaleTimeRange:toDuration:](scale%28__toduration_%29.md): Changes the duration of a time range in a movie.
- [removeTimeRange:](removetimerange%28__%29.md): Removes the specified time range from a movie.
