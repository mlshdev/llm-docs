> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginestate/removependingrecordzonechanges:](https://developer.apple.com/documentation/cloudkit/cksyncenginestate/removependingrecordzonechanges:)

# removePendingRecordZoneChanges:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Removes the specified record zone changes from the state.

## Declaration

```objectivec
- (void) removePendingRecordZoneChanges:(NSArray<CKSyncEnginePendingRecordZoneChange *> *) changes;
```

## Parameters

- `changes`: An array of record zone changes.

<a id="discussion"></a>

## Discussion

Use this method when you no longer want the sync engine to send certain pending changes.

## See Also

### Modifying pending changes

- [addPendingDatabaseChanges:](addpendingdatabasechanges_.md): Adds the specified database changes to the state.
- [removePendingDatabaseChanges:](removependingdatabasechanges_.md): Removes the specified database changes from the state.
- [CKSyncEnginePendingZoneDelete](../cksyncenginependingzonedelete.md): An object that describes an unsent record zone deletion.
- [CKSyncEnginePendingZoneSave](../cksyncenginependingzonesave.md): An object that describes an unsent record zone modification.
- [CKSyncEnginePendingDatabaseChange](../cksyncenginependingdatabasechange.md): An object that describes an unsent database modification.
- [addPendingRecordZoneChanges:](addpendingrecordzonechanges_.md): Adds the specified record zone changes to the state.
- [CKSyncEnginePendingRecordZoneChange](../cksyncenginependingrecordzonechange.md): An object that describes an unsent record modification.
