> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/snapshotsoutofsyncnotification](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/snapshotsoutofsyncnotification)

# snapshotsOutOfSyncNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.

## Declaration

```swift
class let snapshotsOutOfSyncNotification: NSNotification.Name
```

## Topics

### User-information keys

- [snapshotsOutOfSyncReasonKey](snapshotsoutofsyncreasonkey.md): A key to retrieve the reason for an out-of-sync state notification.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason](../avplayerintegratedtimelinesnapshotsoutofsyncreason.md): Constants that represent the reason for an out-of-sync state.

## See Also

### Inspecting snapshots

- [currentSnapshot](currentsnapshot.md): An immutable representation of the timeline state at time of request.
- [AVPlayerItemIntegratedTimelineSnapshot](../avplayeritemintegratedtimelinesnapshot.md): An immutable representation of inspectable details of an integrated timeline object.

# AVPlayerIntegratedTimelineSnapshotsOutOfSyncNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerIntegratedTimelineSnapshotsOutOfSyncNotification;
```

## Topics

### User-information keys

- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReasonKey](snapshotsoutofsyncreasonkey.md): A key to retrieve the reason for an out-of-sync state notification.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncReason](../avplayerintegratedtimelinesnapshotsoutofsyncreason.md): Constants that represent the reason for an out-of-sync state.

## See Also

### Inspecting snapshots

- [currentSnapshot](currentsnapshot.md): An immutable representation of the timeline state at time of request.
- [AVPlayerItemIntegratedTimelineSnapshot](../avplayeritemintegratedtimelinesnapshot.md): An immutable representation of inspectable details of an integrated timeline object.
