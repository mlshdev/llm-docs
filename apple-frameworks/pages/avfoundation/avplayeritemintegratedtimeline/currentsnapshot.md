> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/currentsnapshot](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/currentsnapshot)

# currentSnapshot (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An immutable representation of the timeline state at time of request.

## Declaration

```swift
var currentSnapshot: AVPlayerItemIntegratedTimelineSnapshot { get }
```

<a id="Discussion"></a>

## Discussion

A timeline snapshot provides a read-only view of the details of the timeline. Because a snapshot provides a fixed view of the timeline at the time of the request, its state doesn’t update as playback continues.

## See Also

### Inspecting snapshots

- [AVPlayerItemIntegratedTimelineSnapshot](../avplayeritemintegratedtimelinesnapshot.md): An immutable representation of inspectable details of an integrated timeline object.
- [snapshotsOutOfSyncNotification](snapshotsoutofsyncnotification.md): A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.

# currentSnapshot (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An immutable representation of the timeline state at time of request.

## Declaration

```objectivec
@property (readonly) AVPlayerItemIntegratedTimelineSnapshot * currentSnapshot;
```

<a id="Discussion"></a>

## Discussion

A timeline snapshot provides a read-only view of the details of the timeline. Because a snapshot provides a fixed view of the timeline at the time of the request, its state doesn’t update as playback continues.

## See Also

### Inspecting snapshots

- [AVPlayerItemIntegratedTimelineSnapshot](../avplayeritemintegratedtimelinesnapshot.md): An immutable representation of inspectable details of an integrated timeline object.
- [AVPlayerIntegratedTimelineSnapshotsOutOfSyncNotification](snapshotsoutofsyncnotification.md): A notification the system posts when the snapshot objects provided by this timeline become out of sync with the current timeline state.
