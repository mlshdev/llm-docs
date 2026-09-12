> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/sentdatabasechanges(_:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/sentdatabasechanges(_:))

# CKSyncEngine.Event.sentDatabaseChanges(\_:)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The sync engine sent a batch of database changes to the server.

## Declaration

```swift
case sentDatabaseChanges(CKSyncEngine.Event.SentDatabaseChanges)
```

## See Also

### Pending local changes

- [CKSyncEngine.Event.willSendChanges(\_:)](willsendchanges%28__%29.md): The sync engine is about to send changes to the server.
- [CKSyncEngine.Event.WillSendChanges](willsendchanges.md): A type that provides information about an imminent send of local changes.
- [CKSyncEngine.Event.SentDatabaseChanges](sentdatabasechanges.md): A type that provides information about a sent batch of database changes.
- [CKSyncEngine.Event.sentRecordZoneChanges(\_:)](sentrecordzonechanges%28__%29.md): The sync engine sent a batch of record zone changes to the server.
- [CKSyncEngine.Event.SentRecordZoneChanges](sentrecordzonechanges.md): The sync engine finished sending a batch of record zone changes to the server.
- [CKSyncEngine.Event.didSendChanges(\_:)](didsendchanges%28__%29.md): The sync engine finished sending changes to the server.
- [CKSyncEngine.Event.DidSendChanges](didsendchanges.md): A type that provides information about a finished send operation.
