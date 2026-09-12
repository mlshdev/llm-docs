> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason/currentsegmentchanged](https://developer.apple.com/documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason/currentsegmentchanged)

# currentSegmentChanged (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The snapshot is out of sync due to a change of the current segment.

## Declaration

```swift
static let currentSegmentChanged: AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason
```

## See Also

### Getting the reasons

- [segmentsChanged](segmentschanged.md): The snapshot is out of sync due to a change of segments.
- [loadedTimeRangesChanged](loadedtimerangeschanged.md): The snapshot is out of sync due to a change of the loaded time ranges.

# AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonCurrentSegmentChanged (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The snapshot is out of sync due to a change of the current segment.

## Declaration

```objectivec
extern AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason const AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonCurrentSegmentChanged;
```

## See Also

### Getting the reasons

- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonSegmentsChanged](segmentschanged.md): The snapshot is out of sync due to a change of segments.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonLoadedTimeRangesChanged](loadedtimerangeschanged.md): The snapshot is out of sync due to a change of the loaded time ranges.
