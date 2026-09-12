> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/snapshotdata](https://developer.apple.com/documentation/swiftui/snapshotdata)

# SnapshotData

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 9.0+

The associated data of a snapshot background task.

## Declaration

```swift
struct SnapshotData
```

## Topics

### Getting the data

- [identifier](snapshotdata/identifier.md): The identifier associated with this snapshot request.
- [reason](snapshotdata/reason.md): The reason for a background snapshot task.
- [SnapshotData.SnapshotReason](snapshotdata/snapshotreason.md): The reason for a background snapshot task.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling background tasks

- [backgroundTask(\_:action:)](scene/backgroundtask%28__action_%29.md): Runs the specified action when the system provides a background task.
- [BackgroundTask](backgroundtask.md): The kinds of background tasks that your app or extension can handle.
- [SnapshotResponse](snapshotresponse.md): Your application’s response to a snapshot background task.
