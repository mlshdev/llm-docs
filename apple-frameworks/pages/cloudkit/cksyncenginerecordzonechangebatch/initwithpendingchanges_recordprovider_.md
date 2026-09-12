> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginerecordzonechangebatch/initwithpendingchanges:recordprovider:](https://developer.apple.com/documentation/cloudkit/cksyncenginerecordzonechangebatch/initwithpendingchanges:recordprovider:)

# initWithPendingChanges:recordProvider:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a batch of records to modify using the provided record zone changes.

## Declaration

```objectivec
- (instancetype) initWithPendingChanges:(NSArray<CKSyncEnginePendingRecordZoneChange *> *) pendingChanges recordProvider:(CKRecord * (^)(CKRecordID *recordID)) recordProvider;
```

## Parameters

- `pendingChanges`: The record zone changes to process.
- `recordProvider`: A block that returns the record for the specified record identifier.

<a id="return-value"></a>

## Return Value

The batch of records to modify, or `nil` if there are no pending changes.

<a id="discussion"></a>

## Discussion

This method iterates over `pendingChanges` and adds the necessary information to the new batch, until there are no more changes or the size of the batch reaches the maximum limit. If the type of change is a record save, the method asks the specified `recordProvider` block for that record. If the closure returns `nil`, the method skips that change.

## See Also

### Creating a batch

- [CKSyncEnginePendingRecordZoneChange](../cksyncenginependingrecordzonechange.md): An object that describes an unsent record modification.
- [initWithRecordsToSave:recordIDsToDelete:atomicByZone:](initwithrecordstosave_recordidstodelete_atomicbyzone_.md): Creates a batch of records to modify.
