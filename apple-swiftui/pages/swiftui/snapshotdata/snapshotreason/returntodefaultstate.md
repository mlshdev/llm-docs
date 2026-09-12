> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/snapshotdata/snapshotreason/returntodefaultstate](https://developer.apple.com/documentation/swiftui/snapshotdata/snapshotreason/returntodefaultstate)

# SnapshotData.SnapshotReason.returnToDefaultState

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** watchOS 9.0+

It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

## Declaration

```swift
case returnToDefaultState
```

## See Also

### Getting the snapshot reasons

- [SnapshotData.SnapshotReason.appBackgrounded](appbackgrounded.md): The app transitioned from the foreground to the background.
- [SnapshotData.SnapshotReason.appScheduled](appscheduled.md): The app scheduled this snapshot.
- [SnapshotData.SnapshotReason.complicationUpdate](complicationupdate.md): The app updated the complication timeline.
- [SnapshotData.SnapshotReason.prelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
