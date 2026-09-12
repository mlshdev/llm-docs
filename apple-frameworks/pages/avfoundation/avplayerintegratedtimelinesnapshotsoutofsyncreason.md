> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason](https://developer.apple.com/documentation/avfoundation/avplayerintegratedtimelinesnapshotsoutofsyncreason)

# AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that represent the reason for an out-of-sync state.

## Declaration

```swift
struct AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason
```

## Topics

### Getting the reasons

- [segmentsChanged](avplayerintegratedtimelinesnapshotsoutofsyncreason/segmentschanged.md): The snapshot is out of sync due to a change of segments.
- [currentSegmentChanged](avplayerintegratedtimelinesnapshotsoutofsyncreason/currentsegmentchanged.md): The snapshot is out of sync due to a change of the current segment.
- [loadedTimeRangesChanged](avplayerintegratedtimelinesnapshotsoutofsyncreason/loadedtimerangeschanged.md): The snapshot is out of sync due to a change of the loaded time ranges.

### Creating a reason

- [init(rawValue:)](avplayerintegratedtimelinesnapshotsoutofsyncreason/init%28rawvalue_%29.md): Creates a new out-of-sync reason from the value you specify.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User-information keys

- [snapshotsOutOfSyncReasonKey](avplayeritemintegratedtimeline/snapshotsoutofsyncreasonkey.md): A key to retrieve the reason for an out-of-sync state notification.

# AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that represent the reason for an out-of-sync state.

## Declaration

```objectivec
typedef NSString * AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason;
```

## Topics

### Getting the reasons

- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonSegmentsChanged](avplayerintegratedtimelinesnapshotsoutofsyncreason/segmentschanged.md): The snapshot is out of sync due to a change of segments.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonCurrentSegmentChanged](avplayerintegratedtimelinesnapshotsoutofsyncreason/currentsegmentchanged.md): The snapshot is out of sync due to a change of the current segment.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonLoadedTimeRangesChanged](avplayerintegratedtimelinesnapshotsoutofsyncreason/loadedtimerangeschanged.md): The snapshot is out of sync due to a change of the loaded time ranges.

## See Also

### User-information keys

- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonKey](avplayeritemintegratedtimeline/snapshotsoutofsyncreasonkey.md): A key to retrieve the reason for an out-of-sync state notification.
