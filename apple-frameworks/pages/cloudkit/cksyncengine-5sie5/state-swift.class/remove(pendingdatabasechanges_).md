> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/state-swift.class/remove(pendingdatabasechanges:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/state-swift.class/remove(pendingdatabasechanges:))

# remove(pendingDatabaseChanges:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Removes the specified database changes from the state.

## Declaration

```swift
final func remove(pendingDatabaseChanges: [CKSyncEngine.PendingDatabaseChange])
```

## Parameters

- `pendingDatabaseChanges`: An array of database changes.

<a id="discussion"></a>

## Discussion

Use this method when you no longer want the sync engine to send certain pending changes.

## See Also

### Manipulating pending changes

- [add(pendingDatabaseChanges:)](add%28pendingdatabasechanges_%29.md): Adds the specified database changes to the state.
- [CKSyncEngine.PendingDatabaseChange](../pendingdatabasechange.md): Describes an unsent database modification.
- [add(pendingRecordZoneChanges:)](add%28pendingrecordzonechanges_%29.md): Adds the specified record zone changes to the state.
- [remove(pendingRecordZoneChanges:)](remove%28pendingrecordzonechanges_%29.md): Removes the specified record zone changes from the state.
- [CKSyncEngine.PendingRecordZoneChange](../pendingrecordzonechange.md): Describes an unsent record modification.
