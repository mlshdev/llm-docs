> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/pendingrecordzonechange](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/pendingrecordzonechange)

# CKSyncEngine.PendingRecordZoneChange

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Describes an unsent record modification.

## Declaration

```swift
enum PendingRecordZoneChange
```

## Topics

### Record change types

- [CKSyncEnginePendingRecordZoneChangeType](../cksyncenginependingrecordzonechangetype.md): A type of change in a record zone that needs to be sent to the server.

### Debugging the change

- [description](pendingrecordzonechange/description.md): A textual description of the change that’s suitable for logging.

### Enumeration Cases

- [CKSyncEngine.PendingRecordZoneChange.deleteRecord(\_:)](pendingrecordzonechange/deleterecord%28__%29.md): A pending deletion of a record from the server.
- [CKSyncEngine.PendingRecordZoneChange.saveRecord(\_:)](pendingrecordzonechange/saverecord%28__%29.md): A pending save of a record to the server.

### Default Implementations

- [CustomStringConvertible Implementations](pendingrecordzonechange/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Manipulating pending changes

- [add(pendingDatabaseChanges:)](state-swift.class/add%28pendingdatabasechanges_%29.md): Adds the specified database changes to the state.
- [remove(pendingDatabaseChanges:)](state-swift.class/remove%28pendingdatabasechanges_%29.md): Removes the specified database changes from the state.
- [CKSyncEngine.PendingDatabaseChange](pendingdatabasechange.md): Describes an unsent database modification.
- [add(pendingRecordZoneChanges:)](state-swift.class/add%28pendingrecordzonechanges_%29.md): Adds the specified record zone changes to the state.
- [remove(pendingRecordZoneChanges:)](state-swift.class/remove%28pendingrecordzonechanges_%29.md): Removes the specified record zone changes from the state.
