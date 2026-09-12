> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event)

# CKSyncEngine.Event

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Describes an event that occurs during a sync operation.

## Declaration

```swift
enum Event
```

<a id="overview"></a>

## Overview

While syncing, [CKSyncEngine](../cksyncengine-5sie5.md) posts several different types of events. Each event has an associated struct value with details describing the nature of the event.

See the documentation for each event struct for more details about when and why an event is posted.

> **Important**

> You don’t create instances of this type manually. Instead, the sync engine provides them to your app’s delegate during sync operations.

## Topics

### Account changes

- [CKSyncEngine.Event.accountChange(\_:)](event/accountchange%28__%29.md): The user signed in or out of their account.
- [CKSyncEngine.Event.AccountChange](event/accountchange.md): The user signed in or out of their account.

### Remote database changes

- [CKSyncEngine.Event.willFetchChanges(\_:)](event/willfetchchanges%28__%29.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngine.Event.WillFetchChanges](event/willfetchchanges.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngine.Event.fetchedDatabaseChanges(\_:)](event/fetcheddatabasechanges%28__%29.md): The sync engine has fetched new database changes from the server.
- [CKSyncEngine.Event.FetchedDatabaseChanges](event/fetcheddatabasechanges.md): A type that provides information about fetched database changes.
- [CKSyncEngine.Event.didFetchChanges(\_:)](event/didfetchchanges%28__%29.md): The sync engine finished fetching changes from the server.
- [CKSyncEngine.Event.DidFetchChanges](event/didfetchchanges.md): A type that provides information about a finished database fetch.

### Remote record zone changes

- [CKSyncEngine.Event.willFetchRecordZoneChanges(\_:)](event/willfetchrecordzonechanges%28__%29.md): The sync engine is about to fetch record zone changes from the server for a specific zone.
- [CKSyncEngine.Event.WillFetchRecordZoneChanges](event/willfetchrecordzonechanges.md): A type that provides information about an imminent fetch of changes in a record zone.
- [CKSyncEngine.Event.fetchedRecordZoneChanges(\_:)](event/fetchedrecordzonechanges%28__%29.md): The sync engine fetched new record zone changes from the server.
- [CKSyncEngine.Event.FetchedRecordZoneChanges](event/fetchedrecordzonechanges.md): A type that provides information about fetched record zone changes.
- [CKSyncEngine.Event.didFetchRecordZoneChanges(\_:)](event/didfetchrecordzonechanges%28__%29.md): The sync engine has completed fetching record zone changes from the server for a specific zone.
- [CKSyncEngine.Event.DidFetchRecordZoneChanges](event/didfetchrecordzonechanges.md): A type that provides information about a finished record zone fetch.

### Pending local changes

- [CKSyncEngine.Event.willSendChanges(\_:)](event/willsendchanges%28__%29.md): The sync engine is about to send changes to the server.
- [CKSyncEngine.Event.WillSendChanges](event/willsendchanges.md): A type that provides information about an imminent send of local changes.
- [CKSyncEngine.Event.sentDatabaseChanges(\_:)](event/sentdatabasechanges%28__%29.md): The sync engine sent a batch of database changes to the server.
- [CKSyncEngine.Event.SentDatabaseChanges](event/sentdatabasechanges.md): A type that provides information about a sent batch of database changes.
- [CKSyncEngine.Event.sentRecordZoneChanges(\_:)](event/sentrecordzonechanges%28__%29.md): The sync engine sent a batch of record zone changes to the server.
- [CKSyncEngine.Event.SentRecordZoneChanges](event/sentrecordzonechanges.md): The sync engine finished sending a batch of record zone changes to the server.
- [CKSyncEngine.Event.didSendChanges(\_:)](event/didsendchanges%28__%29.md): The sync engine finished sending changes to the server.
- [CKSyncEngine.Event.DidSendChanges](event/didsendchanges.md): A type that provides information about a finished send operation.

### State updates

- [CKSyncEngine.Event.stateUpdate(\_:)](event/stateupdate%28__%29.md): The sync engine updated its state.
- [CKSyncEngine.Event.StateUpdate](event/stateupdate.md): The sync engine state was updated, and you should persist it locally.

### Debugging the event

- [description](event/description.md): A textual description of the event that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](event/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling sync events

- [handleEvent(\_:syncEngine:)](../cksyncenginedelegate-1q7g8/handleevent%28__syncengine_%29.md): Tells the delegate to handle the specified sync event.
- [CKSyncEngineEventType](../cksyncengineeventtype.md): Describes an event that occurs during a sync operation.
