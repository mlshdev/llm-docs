> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginerecordzonechangebatch/initwithrecordstosave:recordidstodelete:atomicbyzone:](https://developer.apple.com/documentation/cloudkit/cksyncenginerecordzonechangebatch/initwithrecordstosave:recordidstodelete:atomicbyzone:)

# initWithRecordsToSave:recordIDsToDelete:atomicByZone:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a batch of records to modify.

## Declaration

```objectivec
- (instancetype) initWithRecordsToSave:(NSArray<CKRecord *> *) recordsToSave recordIDsToDelete:(NSArray<CKRecordID *> *) recordIDsToDelete atomicByZone:(BOOL) atomicByZone;
```

## Parameters

- `recordsToSave`: The records to save.
- `recordIDsToDelete`: The identifiers of the records to delete.
- `atomicByZone`: A Boolean value that determines whether CloudKit modifies the specified records atomically by record zone.

<a id="return-value"></a>

## Return Value

An initialized change batch.

<a id="discussion"></a>

## Discussion

> **Important**

> When using this initializer to create batches, consider the number of records you specify and their combined size. If you specify too many records, or their combined size is too large, the send operation may fail with an error of type [CKErrorLimitExceeded](../ckerror/code/limitexceeded.md).

## See Also

### Creating a batch

- [initWithPendingChanges:recordProvider:](initwithpendingchanges_recordprovider_.md): Creates a batch of records to modify using the provided record zone changes.
- [CKSyncEnginePendingRecordZoneChange](../cksyncenginependingrecordzonechange.md): An object that describes an unsent record modification.
