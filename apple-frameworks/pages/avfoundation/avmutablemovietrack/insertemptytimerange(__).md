> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/insertemptytimerange(_:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/insertemptytimerange(_:))

# insertEmptyTimeRange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds an empty time range to a track.

## Declaration

```swift
func insertEmptyTimeRange(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: A time range to insert.

<a id="Discussion"></a>

## Discussion

You can’t add empty time ranges to the end of a track.

## See Also

### Managing time ranges

- [insertTimeRange(\_:of:at:copySampleData:)](inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes the specified time range from a track.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.

# insertEmptyTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds an empty time range to a track.

## Declaration

```objectivec
- (void) insertEmptyTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: A time range to insert.

<a id="Discussion"></a>

## Discussion

You can’t add empty time ranges to the end of a track.

## See Also

### Managing time ranges

- [insertTimeRange:ofTrack:atTime:copySampleData:error:](inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [removeTimeRange:](removetimerange%28__%29.md): Removes the specified time range from a track.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.
