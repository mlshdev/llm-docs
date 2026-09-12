> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/inserttimerange(_:of:at:)](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/inserttimerange(_:of:at:))

# insertTimeRange(\_:of:at:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Inserts a time range of media from a source track into a composition track.

## Declaration

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of track: AVAssetTrack, at startTime: CMTime) throws
```

## Parameters

- `timeRange`: The time range of media in the source track to add.
- `track`: The source asset track that contains the media to add.
- `startTime`: A start time within the composition track to insert the time range.

<a id="Discussion"></a>

## Discussion

The time range you insert presents at its natural duration and rate. If necessary, you can scale it to a different duration by calling the [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md) method.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRanges(\_:of:at:)](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a time range of media from a composition track.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.

# insertTimeRange:ofTrack:atTime:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Inserts a time range of media from a source track into a composition track.

## Declaration

```objectivec
- (BOOL) insertTimeRange:(CMTimeRange) timeRange ofTrack:(AVAssetTrack *) track atTime:(CMTime) startTime error:(NSError **) outError;
```

## Parameters

- `timeRange`: The time range of media in the source track to add.
- `track`: The source asset track that contains the media to add.
- `startTime`: A start time within the composition track to insert the time range.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

<a id="Discussion"></a>

## Discussion

The time range you insert presents at its natural duration and rate. If necessary, you can scale it to a different duration by calling the [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md) method.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRanges:ofTracks:atTime:error:](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [removeTimeRange:](removetimerange%28__%29.md): Removes a time range of media from a composition track.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.
