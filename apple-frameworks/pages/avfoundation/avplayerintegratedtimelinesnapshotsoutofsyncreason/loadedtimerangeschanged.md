> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason/loadedtimerangeschanged](https://developer.apple.com/documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason/loadedtimerangeschanged)

# loadedTimeRangesChanged (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The snapshot is out of sync due to a change of the loaded time ranges.

## Declaration

```swift
static let loadedTimeRangesChanged: AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason
```

## See Also

### Getting the reasons

- [segmentsChanged](segmentschanged.md): The snapshot is out of sync due to a change of segments.
- [currentSegmentChanged](currentsegmentchanged.md): The snapshot is out of sync due to a change of the current segment.

# AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonLoadedTimeRangesChanged (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The snapshot is out of sync due to a change of the loaded time ranges.

## Declaration

```objectivec
extern AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason const AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonLoadedTimeRangesChanged;
```

## See Also

### Getting the reasons

- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonSegmentsChanged](segmentschanged.md): The snapshot is out of sync due to a change of segments.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonCurrentSegmentChanged](currentsegmentchanged.md): The snapshot is out of sync due to a change of the current segment.
