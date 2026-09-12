> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/segments](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/segments)

# segments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The track segments that a composition track contains.

## Declaration

```swift
var segments: [AVCompositionTrackSegment]! { get set }
```

## See Also

### Managing time ranges

- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [insertTimeRanges(\_:of:at:)](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a time range of media from a composition track.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.

# segments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The track segments that a composition track contains.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<AVCompositionTrackSegment *> * segments;
```

## See Also

### Managing time ranges

- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within the track.
- [insertTimeRange:ofTrack:atTime:error:](inserttimerange%28__of_at_%29.md): Inserts a time range of media from a source track into a composition track.
- [insertTimeRanges:ofTracks:atTime:error:](inserttimeranges%28__of_at_%29.md): Inserts the time ranges of multiple source tracks into a track of a composition.
- [removeTimeRange:](removetimerange%28__%29.md): Removes a time range of media from a composition track.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of a time range of the track.
