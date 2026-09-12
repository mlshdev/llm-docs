> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/sentrecordzonechanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/sentrecordzonechanges)

# CKSyncEngine.Event.SentRecordZoneChanges

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The sync engine finished sending a batch of record zone changes to the server.

## Declaration

```swift
struct SentRecordZoneChanges
```

<a id="overview"></a>

## Overview

If a record save succeeded, you should encode the system fields of this record to use the next time you save. See [encodeSystemFields(with:)](../../ckrecord/encodesystemfields%28with_%29.md).

If a record deletion succeeded, you should remove any local system fields for that record.

If the record change failed, try to resolve the issue causing the error and save the record again if necessary.

## Topics

### Accessing successful changes

- [deletedRecordIDs](sentrecordzonechanges/deletedrecordids.md): The unique identifiers of the deleted records.
- [savedRecords](sentrecordzonechanges/savedrecords.md): The modified records.

### Accessing failed changes

- [failedRecordDeletes](sentrecordzonechanges/failedrecorddeletes.md): The unique identifiers of the records CloudKit is unable to delete, and the reasons why.
- [failedRecordSaves](sentrecordzonechanges/failedrecordsaves.md): The records that CloudKit is unable to modify.
- [CKSyncEngine.Event.SentRecordZoneChanges.FailedRecordSave](sentrecordzonechanges/failedrecordsave.md): A type that describes an unsuccessful attempt to modify a single record.

### Debugging the event

- [description](sentrecordzonechanges/description.md): A textual description of the event that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](sentrecordzonechanges/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pending local changes

- [CKSyncEngine.Event.willSendChanges(\_:)](willsendchanges%28__%29.md): The sync engine is about to send changes to the server.
- [CKSyncEngine.Event.WillSendChanges](willsendchanges.md): A type that provides information about an imminent send of local changes.
- [CKSyncEngine.Event.sentDatabaseChanges(\_:)](sentdatabasechanges%28__%29.md): The sync engine sent a batch of database changes to the server.
- [CKSyncEngine.Event.SentDatabaseChanges](sentdatabasechanges.md): A type that provides information about a sent batch of database changes.
- [CKSyncEngine.Event.sentRecordZoneChanges(\_:)](sentrecordzonechanges%28__%29.md): The sync engine sent a batch of record zone changes to the server.
- [CKSyncEngine.Event.didSendChanges(\_:)](didsendchanges%28__%29.md): The sync engine finished sending changes to the server.
- [CKSyncEngine.Event.DidSendChanges](didsendchanges.md): A type that provides information about a finished send operation.
