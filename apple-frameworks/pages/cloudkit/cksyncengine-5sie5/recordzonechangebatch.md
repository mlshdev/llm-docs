> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/recordzonechangebatch](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/recordzonechangebatch)

# CKSyncEngine.RecordZoneChangeBatch

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that contains the record changes for a single send operation.

## Declaration

```swift
struct RecordZoneChangeBatch
```

## Topics

### Creating a batch

- [init(pendingChanges:recordProvider:)](recordzonechangebatch/init%28pendingchanges_recordprovider_%29.md): Creates a batch of records to modify using the provided record zone changes.
- [CKSyncEngine.PendingRecordZoneChange](pendingrecordzonechange.md): Describes an unsent record modification.
- [init(recordsToSave:recordIDsToDelete:atomicByZone:)](recordzonechangebatch/init%28recordstosave_recordidstodelete_atomicbyzone_%29.md): Creates a batch of records to modify.

### Managing atomicity

- [atomicByZone](recordzonechangebatch/atomicbyzone.md): A Boolean value that determines whether CloudKit modifies records atomically by record zone.

### Managing the records

- [recordIDsToDelete](recordzonechangebatch/recordidstodelete.md): The record identifiers of the records to delete.
- [recordsToSave](recordzonechangebatch/recordstosave.md): The records to save.

### Debugging the batch

- [description](recordzonechangebatch/description.md): The textual description of the batch that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](recordzonechangebatch/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending changes

- [nextRecordZoneChangeBatch(\_:syncEngine:)](../cksyncenginedelegate-1q7g8/nextrecordzonechangebatch%28__syncengine_%29.md): Asks the delegate to provide the next set of record changes to send to the server.
- [CKSyncEngine.SendChangesContext](sendchangescontext.md): The context of an attempt to send changes to the server.
