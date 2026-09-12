> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/snapshotdata/snapshotreason](https://developer.apple.com/documentation/swiftui/snapshotdata/snapshotreason)

# SnapshotData.SnapshotReason

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** watchOS 9.0+

The reason for a background snapshot task.

## Declaration

```swift
enum SnapshotReason
```

## Topics

### Getting the snapshot reasons

- [SnapshotData.SnapshotReason.appBackgrounded](snapshotreason/appbackgrounded.md): The app transitioned from the foreground to the background.
- [SnapshotData.SnapshotReason.appScheduled](snapshotreason/appscheduled.md): The app scheduled this snapshot.
- [SnapshotData.SnapshotReason.complicationUpdate](snapshotreason/complicationupdate.md): The app updated the complication timeline.
- [SnapshotData.SnapshotReason.prelaunch](snapshotreason/prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [SnapshotData.SnapshotReason.returnToDefaultState](snapshotreason/returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the data

- [identifier](identifier.md): The identifier associated with this snapshot request.
- [reason](reason.md): The reason for a background snapshot task.
