> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/inserttimeranges(_:of:at:)](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/inserttimeranges(_:of:at:))

# insertTimeRanges(\_:of:at:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Inserts the time ranges of multiple source tracks into a track of a composition.

## Declaration

```swift
func insertTimeRanges(_ timeRanges: [NSValue], of tracks: [AVAssetTrack], at startTime: CMTime) throws
```

## Parameters

- `timeRanges`: The time ranges of media in the source tracks to insert.
- `tracks`: The source asset tracks that contain the media to insert.
- `startTime`: A start time within composition the track to insert the time range.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a time range of media from a composition track.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.

# insertTimeRanges:ofTracks:atTime:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Inserts the time ranges of multiple source tracks into a track of a composition.

## Declaration

```objectivec
- (BOOL) insertTimeRanges:(NSArray<NSValue *> *) timeRanges ofTracks:(NSArray<AVAssetTrack *> *) tracks atTime:(CMTime) startTime error:(NSError **) outError;
```

## Parameters

- `timeRanges`: The time ranges of media in the source tracks to insert.
- `tracks`: The source asset tracks that contain the media to insert.
- `startTime`: A start time within composition the track to insert the time range.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

## See Also

### Managing time ranges

- [segments](segments.md): The track segments that a composition track contains.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange:ofTrack:atTime:error:](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [removeTimeRange:](removetimerange%28__%29.md): Removes a time range of media from a composition track.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.
