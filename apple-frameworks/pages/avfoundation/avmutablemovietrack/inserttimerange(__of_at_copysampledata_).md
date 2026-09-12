> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/inserttimerange(_:of:at:copysampledata:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/inserttimerange(_:of:at:copysampledata:))

# insertTimeRange(\_:of:at:copySampleData:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Inserts a portion of an asset track into the target movie.

## Declaration

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of track: AVAssetTrack, at startTime: CMTime, copySampleData: Bool) throws
```

## Parameters

- `timeRange`: The time range of the track to insert.
- `track`: An [AVAssetTrack](../avassettrack.md) object indicating the source of the inserted media. This value can’t be `nil`.
- `startTime`: The time in the target track at which the media is to be inserted.
- `copySampleData`: A Boolean value that indicates whether sample data is to be copied from the source to the destination during edits. If `YES`, the sample data is written to the location specified by the track property `mediaDataStorage` if non-nil, or else by the movie property `defaultMediaDataStorage` if non-nil; if both are nil, the method fails and returns `NO`. If `NO`, sample data isn’t written and sample references to the samples in their original container are added as necessary.

## See Also

### Managing time ranges

- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes the specified time range from a track.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.

# insertTimeRange:ofTrack:atTime:copySampleData:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Inserts a portion of an asset track into the target movie.

## Declaration

```objectivec
- (BOOL) insertTimeRange:(CMTimeRange) timeRange ofTrack:(AVAssetTrack *) track atTime:(CMTime) startTime copySampleData:(BOOL) copySampleData error:(NSError **) outError;
```

## Parameters

- `timeRange`: The time range of the track to insert.
- `track`: An [AVAssetTrack](../avassettrack.md) object indicating the source of the inserted media. This value can’t be `nil`.
- `startTime`: The time in the target track at which the media is to be inserted.
- `copySampleData`: A Boolean value that indicates whether sample data is to be copied from the source to the destination during edits. If `YES`, the sample data is written to the location specified by the track property `mediaDataStorage` if non-nil, or else by the movie property `defaultMediaDataStorage` if non-nil; if both are nil, the method fails and returns `NO`. If `NO`, sample data isn’t written and sample references to the samples in their original container are added as necessary.
- `outError`: An error that describes the nature of the failure.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates the success of the insertion.

## See Also

### Managing time ranges

- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [removeTimeRange:](removetimerange%28__%29.md): Removes the specified time range from a track.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.
