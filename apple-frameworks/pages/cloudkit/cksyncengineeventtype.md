> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineeventtype](https://developer.apple.com/documentation/cloudkit/cksyncengineeventtype)

# CKSyncEngineEventType (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Describes an event that occurs during a sync operation.

## Declaration

```swift
enum CKSyncEngineEventType
```

## Topics

### Event types

- [CKSyncEngineEventType.stateUpdate](cksyncengineeventtype/stateupdate.md): The sync engine updated its state.
- [CKSyncEngineEventType.accountChange](cksyncengineeventtype/accountchange.md): The user signed in or out of their account.
- [CKSyncEngineEventType.fetchedDatabaseChanges](cksyncengineeventtype/fetcheddatabasechanges.md): The sync engine has fetched new database changes from the server.
- [CKSyncEngineEventType.fetchedRecordZoneChanges](cksyncengineeventtype/fetchedrecordzonechanges.md): The sync engine fetched new record zone changes from the server.
- [CKSyncEngineEventType.sentDatabaseChanges](cksyncengineeventtype/sentdatabasechanges.md): The sync engine sent a batch of database changes to the server.
- [CKSyncEngineEventType.sentRecordZoneChanges](cksyncengineeventtype/sentrecordzonechanges.md): The sync engine sent a batch of record zone changes to the server.
- [CKSyncEngineEventType.willFetchChanges](cksyncengineeventtype/willfetchchanges.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngineEventType.willFetchRecordZoneChanges](cksyncengineeventtype/willfetchrecordzonechanges.md): The sync engine is about to fetch record zone changes from the server for a specific zone.
- [CKSyncEngineEventType.didFetchRecordZoneChanges](cksyncengineeventtype/didfetchrecordzonechanges.md): The sync engine has completed fetching record zone changes from the server for a specific zone.
- [CKSyncEngineEventType.didFetchChanges](cksyncengineeventtype/didfetchchanges.md): The sync engine finished fetching changes from the server.
- [CKSyncEngineEventType.willSendChanges](cksyncengineeventtype/willsendchanges.md): The sync engine is about to send changes to the server.
- [CKSyncEngineEventType.didSendChanges](cksyncengineeventtype/didsendchanges.md): The sync engine finished sending changes to the server.

### Initializers

- [init(rawValue:)](cksyncengineeventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling sync events

- [handleEvent(\_:syncEngine:)](cksyncenginedelegate-1q7g8/handleevent%28__syncengine_%29.md): Tells the delegate to handle the specified sync event.
- [CKSyncEngine.Event](cksyncengine-5sie5/event.md): Describes an event that occurs during a sync operation.

# CKSyncEngineEventType (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes an event that occurs during a sync operation.

## Declaration

```objectivec
enum CKSyncEngineEventType : NSInteger;
```

## Topics

### Event types

- [CKSyncEngineEventTypeStateUpdate](cksyncengineeventtype/stateupdate.md): The sync engine updated its state.
- [CKSyncEngineEventTypeAccountChange](cksyncengineeventtype/accountchange.md): The user signed in or out of their account.
- [CKSyncEngineEventTypeFetchedDatabaseChanges](cksyncengineeventtype/fetcheddatabasechanges.md): The sync engine has fetched new database changes from the server.
- [CKSyncEngineEventTypeFetchedRecordZoneChanges](cksyncengineeventtype/fetchedrecordzonechanges.md): The sync engine fetched new record zone changes from the server.
- [CKSyncEngineEventTypeSentDatabaseChanges](cksyncengineeventtype/sentdatabasechanges.md): The sync engine sent a batch of database changes to the server.
- [CKSyncEngineEventTypeSentRecordZoneChanges](cksyncengineeventtype/sentrecordzonechanges.md): The sync engine sent a batch of record zone changes to the server.
- [CKSyncEngineEventTypeWillFetchChanges](cksyncengineeventtype/willfetchchanges.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngineEventTypeWillFetchRecordZoneChanges](cksyncengineeventtype/willfetchrecordzonechanges.md): The sync engine is about to fetch record zone changes from the server for a specific zone.
- [CKSyncEngineEventTypeDidFetchRecordZoneChanges](cksyncengineeventtype/didfetchrecordzonechanges.md): The sync engine has completed fetching record zone changes from the server for a specific zone.
- [CKSyncEngineEventTypeDidFetchChanges](cksyncengineeventtype/didfetchchanges.md): The sync engine finished fetching changes from the server.
- [CKSyncEngineEventTypeWillSendChanges](cksyncengineeventtype/willsendchanges.md): The sync engine is about to send changes to the server.
- [CKSyncEngineEventTypeDidSendChanges](cksyncengineeventtype/didsendchanges.md): The sync engine finished sending changes to the server.
