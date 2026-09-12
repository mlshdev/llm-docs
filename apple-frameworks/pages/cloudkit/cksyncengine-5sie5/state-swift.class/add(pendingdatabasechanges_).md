> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/state-swift.class/add(pendingdatabasechanges:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/state-swift.class/add(pendingdatabasechanges:))

# add(pendingDatabaseChanges:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Adds the specified database changes to the state.

## Declaration

```swift
final func add(pendingDatabaseChanges: [CKSyncEngine.PendingDatabaseChange])
```

## Parameters

- `pendingDatabaseChanges`: An array of database changes.

<a id="discussion"></a>

## Discussion

Use this method to enable the sync engine to manage your pending database changes. For example, when someone makes a change that your app needs to send to the server, use this method to record the change. If there are no scheduled sync operations when you invoke this method, the sync engine automatically schedules one to send the changes. After the engine sends those changes, it notifies your app’s sync delegate with an event of type [CKSyncEngine.Event.SentDatabaseChanges](../event/sentdatabasechanges.md).

The sync engine maintains a consistent collection of tracked pending changes, deduplicating them as necessary. The engine removes changes from the list as it sends them, but retains any that fail due to a recoverable error, such as a network issue or exceeding the rate limit.

> **Note**

> The order in which you apply database changes is important.
>
> For example:
>
> - If you add `.saveZone(zoneA)` then `.deleteZone(zoneA)`, the sync engine discards the save and sends only the delete change.
> - If you add `.deleteZone(zoneA)` then `.saveZone(zoneA)`, the sync engine discards the delete and sends only the save change.

## See Also

### Manipulating pending changes

- [remove(pendingDatabaseChanges:)](remove%28pendingdatabasechanges_%29.md): Removes the specified database changes from the state.
- [CKSyncEngine.PendingDatabaseChange](../pendingdatabasechange.md): Describes an unsent database modification.
- [add(pendingRecordZoneChanges:)](add%28pendingrecordzonechanges_%29.md): Adds the specified record zone changes to the state.
- [remove(pendingRecordZoneChanges:)](remove%28pendingrecordzonechanges_%29.md): Removes the specified record zone changes from the state.
- [CKSyncEngine.PendingRecordZoneChange](../pendingrecordzonechange.md): Describes an unsent record modification.
