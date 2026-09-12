> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/recordzonechangebatch/init(recordstosave:recordidstodelete:atomicbyzone:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/recordzonechangebatch/init(recordstosave:recordidstodelete:atomicbyzone:))

# init(recordsToSave:recordIDsToDelete:atomicByZone:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a batch of records to modify.

## Declaration

```swift
init(recordsToSave: [CKRecord] = [], recordIDsToDelete: [CKRecord.ID] = [], atomicByZone: Bool = false)
```

## Parameters

- `recordsToSave`: The records to save.
- `recordIDsToDelete`: The identifiers of the records to delete.
- `atomicByZone`: A Boolean value that determines whether CloudKit modifies the specified records atomically by record zone.

<a id="discussion"></a>

## Discussion

> **Important**

> When using this initializer to create batches, consider the number of records you specify and their combined size. If you specify too many records, or their combined size is too large, the send operation may fail with an error of type [CKError.Code.limitExceeded](../../ckerror/code/limitexceeded.md).

## See Also

### Creating a batch

- [init(pendingChanges:recordProvider:)](init%28pendingchanges_recordprovider_%29.md): Creates a batch of records to modify using the provided record zone changes.
- [CKSyncEngine.PendingRecordZoneChange](../pendingrecordzonechange.md): Describes an unsent record modification.
