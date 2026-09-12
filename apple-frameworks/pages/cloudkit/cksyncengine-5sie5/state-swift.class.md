> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/state-swift.class](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/state-swift.class)

# CKSyncEngine.State

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An object that manages the sync engine’s state.

## Declaration

```swift
final class State
```

<a id="overview"></a>

## Overview

To reliably and consistently sync your app’s data, a sync engine keeps a record of several important pieces of data, such as server changes tokens (for databases and record zones), subscription identifiers, the most recent [userRecordID](../ckuseridentity/userrecordid.md), and so on. This class automatically manages that state on behalf of your app, but there are certain elements you can modify. For example, you control the list of pending changes to send to the iCloud servers and manipulate that list using the [add(pendingDatabaseChanges:)](state-swift.class/add%28pendingdatabasechanges_%29.md) and [add(pendingRecordZoneChanges:)](state-swift.class/add%28pendingrecordzonechanges_%29.md) methods. If there aren’t any scheduled sync operations when you invoke these methods, the engine automatically schedules one.

An engine’s state changes periodically and, when it does, the sync engine dispatches a [CKSyncEngine.Event.stateUpdate(\_:)](event/stateupdate%28__%29.md) event to your delegate. The event contains an instance of [CKSyncEngine.State.Serialization](state-swift.class/serialization.md) and, on receipt of such an event, it’s your responsibility to persist the serialized state to disk so that it’s available across app launches. On the next initialization of the sync engine, you provide the most recently persisted state as part of the engine’s configuration. For more information, see [init(database:stateSerialization:delegate:)](configuration/init%28database_stateserialization_delegate_%29.md).

## Topics

### Accessing pending changes

- [hasPendingUntrackedChanges](state-swift.class/haspendinguntrackedchanges.md): A Boolean value that indicates whether there are pending changes that the sync engine is unaware of.
- [pendingDatabaseChanges](state-swift.class/pendingdatabasechanges.md): A list of database changes that the sync engine has yet to send to the iCloud servers.
- [pendingRecordZoneChanges](state-swift.class/pendingrecordzonechanges.md): A list of record zone changes that the sync engine has yet to send to the iCloud servers.

### Manipulating pending changes

- [add(pendingDatabaseChanges:)](state-swift.class/add%28pendingdatabasechanges_%29.md): Adds the specified database changes to the state.
- [remove(pendingDatabaseChanges:)](state-swift.class/remove%28pendingdatabasechanges_%29.md): Removes the specified database changes from the state.
- [CKSyncEngine.PendingDatabaseChange](pendingdatabasechange.md): Describes an unsent database modification.
- [add(pendingRecordZoneChanges:)](state-swift.class/add%28pendingrecordzonechanges_%29.md): Adds the specified record zone changes to the state.
- [remove(pendingRecordZoneChanges:)](state-swift.class/remove%28pendingrecordzonechanges_%29.md): Removes the specified record zone changes from the state.
- [CKSyncEngine.PendingRecordZoneChange](pendingrecordzonechange.md): Describes an unsent record modification.

### Serializing state

- [CKSyncEngine.State.Serialization](state-swift.class/serialization.md): A type that contains the serialized representation of a sync engine’s state.

### Instance Properties

- [zoneIDsWithUnfetchedServerChanges](state-swift.class/zoneidswithunfetchedserverchanges.md): The identifiers of zones with changes on the server that have not yet been fetched.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the engine’s attributes

- [database](database.md): The associated database.
- [state](state-swift.property.md): A collection of state properties used to efficiently manage sync engine operation.
