> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/inserttimerange(_:of:at:copysampledata:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/inserttimerange(_:of:at:copysampledata:))

# insertTimeRange(\_:of:at:copySampleData:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Inserts all of the tracks in a specified time range of an asset into a movie.

## Declaration

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of asset: AVAsset, at startTime: CMTime, copySampleData: Bool) throws
```

## Parameters

- `timeRange`: The time range of the asset to be inserted.
- `asset`: An [AVAsset](../avasset.md) object indicating the source of the inserted media. This value can’t be `nil`.
- `startTime`: The time in the target movie at which the media is to be inserted.
- `copySampleData`: A Boolean value that indicates whether sample data is to be copied from the source to the destination during edits.

<a id="Discussion"></a>

## Discussion

This method may add new tracks to the target movie to ensure that all tracks of the asset are represented in the inserted time range.

## See Also

### Managing time ranges

- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [scale(\_:toDuration:)](scale%28__toduration_%29.md): Changes the duration of a time range in a movie.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes the specified time range from a movie.

# insertTimeRange:ofAsset:atTime:copySampleData:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Inserts all of the tracks in a specified time range of an asset into a movie.

## Declaration

```objectivec
- (BOOL) insertTimeRange:(CMTimeRange) timeRange ofAsset:(AVAsset *) asset atTime:(CMTime) startTime copySampleData:(BOOL) copySampleData error:(NSError **) outError;
```

## Parameters

- `timeRange`: The time range of the asset to be inserted.
- `asset`: An [AVAsset](../avasset.md) object indicating the source of the inserted media. This value can’t be `nil`.
- `startTime`: The time in the target movie at which the media is to be inserted.
- `copySampleData`: A Boolean value that indicates whether sample data is to be copied from the source to the destination during edits.
- `outError`: An error that describes the nature of the failure.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the tracks were successfully inserted.

<a id="Discussion"></a>

## Discussion

This method may add new tracks to the target movie to ensure that all tracks of the asset are represented in the inserted time range.

## See Also

### Managing time ranges

- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [scaleTimeRange:toDuration:](scale%28__toduration_%29.md): Changes the duration of a time range in a movie.
- [removeTimeRange:](removetimerange%28__%29.md): Removes the specified time range from a movie.
