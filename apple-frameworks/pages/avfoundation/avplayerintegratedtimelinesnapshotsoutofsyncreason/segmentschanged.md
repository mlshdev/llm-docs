> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason/segmentschanged](https://developer.apple.com/documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason/segmentschanged)

# segmentsChanged (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The snapshot is out of sync due to a change of segments.

## Declaration

```swift
static let segmentsChanged: AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason
```

## See Also

### Getting the reasons

- [currentSegmentChanged](currentsegmentchanged.md): The snapshot is out of sync due to a change of the current segment.
- [loadedTimeRangesChanged](loadedtimerangeschanged.md): The snapshot is out of sync due to a change of the loaded time ranges.

# AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonSegmentsChanged (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The snapshot is out of sync due to a change of segments.

## Declaration

```objectivec
extern AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason const AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonSegmentsChanged;
```

## See Also

### Getting the reasons

- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonCurrentSegmentChanged](currentsegmentchanged.md): The snapshot is out of sync due to a change of the current segment.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonLoadedTimeRangesChanged](loadedtimerangeschanged.md): The snapshot is out of sync due to a change of the loaded time ranges.
