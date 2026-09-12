> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/snapshotresponse](https://developer.apple.com/documentation/swiftui/snapshotresponse)

# SnapshotResponse

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 9.0+

Your application’s response to a snapshot background task.

## Declaration

```swift
struct SnapshotResponse
```

## Topics

### Creating a response

- [init(restoredDefaultState:estimatedSnapshotExpiration:identifier:)](snapshotresponse/init%28restoreddefaultstate_estimatedsnapshotexpiration_identifier_%29.md): Creates a snapshot response.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling background tasks

- [backgroundTask(\_:action:)](scene/backgroundtask%28__action_%29.md): Runs the specified action when the system provides a background task.
- [BackgroundTask](backgroundtask.md): The kinds of background tasks that your app or extension can handle.
- [SnapshotData](snapshotdata.md): The associated data of a snapshot background task.
