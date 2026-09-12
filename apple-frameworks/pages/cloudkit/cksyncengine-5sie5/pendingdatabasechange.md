> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/pendingdatabasechange](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/pendingdatabasechange)

# CKSyncEngine.PendingDatabaseChange

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Describes an unsent database modification.

## Declaration

```swift
enum PendingDatabaseChange
```

## Topics

### Database change types

- [CKSyncEnginePendingDatabaseChangeType](../cksyncenginependingdatabasechangetype.md): Describes the type of a pending database change.

### Identifying and comparing changes

- [==(\_:\_:)](pendingdatabasechange/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Debugging the change

- [description](pendingdatabasechange/description.md): A textual description of the change that’s suitable for logging.

### Enumeration Cases

- [CKSyncEngine.PendingDatabaseChange.deleteZone(\_:)](pendingdatabasechange/deletezone%28__%29.md): A pending deletion of a zone from the server.
- [CKSyncEngine.PendingDatabaseChange.saveZone(\_:)](pendingdatabasechange/savezone%28__%29.md): A pending save of a zone to the server.

### Default Implementations

- [CustomStringConvertible Implementations](pendingdatabasechange/customstringconvertible-implementations.md)
- [Equatable Implementations](pendingdatabasechange/equatable-implementations.md)

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
- [add(pendingRecordZoneChanges:)](state-swift.class/add%28pendingrecordzonechanges_%29.md): Adds the specified record zone changes to the state.
- [remove(pendingRecordZoneChanges:)](state-swift.class/remove%28pendingrecordzonechanges_%29.md): Removes the specified record zone changes from the state.
- [CKSyncEngine.PendingRecordZoneChange](pendingrecordzonechange.md): Describes an unsent record modification.
