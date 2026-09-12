> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineeventtype/fetcheddatabasechanges](https://developer.apple.com/documentation/cloudkit/cksyncengineeventtype/fetcheddatabasechanges)

# CKSyncEngineEventType.fetchedDatabaseChanges (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The sync engine has fetched new database changes from the server.

## Declaration

```swift
case fetchedDatabaseChanges
```

## See Also

### Event types

- [CKSyncEngineEventType.stateUpdate](stateupdate.md): The sync engine updated its state.
- [CKSyncEngineEventType.accountChange](accountchange.md): The user signed in or out of their account.
- [CKSyncEngineEventType.fetchedRecordZoneChanges](fetchedrecordzonechanges.md): The sync engine fetched new record zone changes from the server.
- [CKSyncEngineEventType.sentDatabaseChanges](sentdatabasechanges.md): The sync engine sent a batch of database changes to the server.
- [CKSyncEngineEventType.sentRecordZoneChanges](sentrecordzonechanges.md): The sync engine sent a batch of record zone changes to the server.
- [CKSyncEngineEventType.willFetchChanges](willfetchchanges.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngineEventType.willFetchRecordZoneChanges](willfetchrecordzonechanges.md): The sync engine is about to fetch record zone changes from the server for a specific zone.
- [CKSyncEngineEventType.didFetchRecordZoneChanges](didfetchrecordzonechanges.md): The sync engine has completed fetching record zone changes from the server for a specific zone.
- [CKSyncEngineEventType.didFetchChanges](didfetchchanges.md): The sync engine finished fetching changes from the server.
- [CKSyncEngineEventType.willSendChanges](willsendchanges.md): The sync engine is about to send changes to the server.
- [CKSyncEngineEventType.didSendChanges](didsendchanges.md): The sync engine finished sending changes to the server.

# CKSyncEngineEventTypeFetchedDatabaseChanges (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sync engine has fetched new database changes from the server.

## Declaration

```objectivec
CKSyncEngineEventTypeFetchedDatabaseChanges
```

## See Also

### Event types

- [CKSyncEngineEventTypeStateUpdate](stateupdate.md): The sync engine updated its state.
- [CKSyncEngineEventTypeAccountChange](accountchange.md): The user signed in or out of their account.
- [CKSyncEngineEventTypeFetchedRecordZoneChanges](fetchedrecordzonechanges.md): The sync engine fetched new record zone changes from the server.
- [CKSyncEngineEventTypeSentDatabaseChanges](sentdatabasechanges.md): The sync engine sent a batch of database changes to the server.
- [CKSyncEngineEventTypeSentRecordZoneChanges](sentrecordzonechanges.md): The sync engine sent a batch of record zone changes to the server.
- [CKSyncEngineEventTypeWillFetchChanges](willfetchchanges.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngineEventTypeWillFetchRecordZoneChanges](willfetchrecordzonechanges.md): The sync engine is about to fetch record zone changes from the server for a specific zone.
- [CKSyncEngineEventTypeDidFetchRecordZoneChanges](didfetchrecordzonechanges.md): The sync engine has completed fetching record zone changes from the server for a specific zone.
- [CKSyncEngineEventTypeDidFetchChanges](didfetchchanges.md): The sync engine finished fetching changes from the server.
- [CKSyncEngineEventTypeWillSendChanges](willsendchanges.md): The sync engine is about to send changes to the server.
- [CKSyncEngineEventTypeDidSendChanges](didsendchanges.md): The sync engine finished sending changes to the server.
