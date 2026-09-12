> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/modifyrecords(saving:deleting:savepolicy:atomically:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/modifyrecords(saving:deleting:savepolicy:atomically:))

# modifyRecords(saving:deleting:savePolicy:atomically:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Modifies the specified records and returns the results to an awaiting caller.

## Declaration

```swift
func modifyRecords(saving recordsToSave: [CKRecord], deleting recordIDsToDelete: [CKRecord.ID], savePolicy: CKModifyRecordsOperation.RecordSavePolicy = .ifServerRecordUnchanged, atomically: Bool = true) async throws -> (saveResults: [CKRecord.ID : Result<CKRecord, any Error>], deleteResults: [CKRecord.ID : Result<Void, any Error>])
```

## Parameters

- `recordsToSave`: The records to save.
- `recordIDsToDelete`: The identifiers of the records to permanently delete.
- `savePolicy`: The policy to use when modifying existing records. For possible values, see [CKModifyRecordsOperation.RecordSavePolicy](../ckmodifyrecordsoperation/recordsavepolicy.md).
- `atomically`: If [true](https://developer.apple.com/documentation/swift/true), the entire operation fails if CloudKit can’t modify one or more of the specified records; otherwise, CloudKit reports individual failures in the returned tuple. Atomic changes are only applicable in record zones that have the [atomic](../ckrecordzone/capabilities-swift.struct/atomic.md) capability.

<a id="return-value"></a>

## Return Value

A tuple with the following named elements:

- **`saveResults`**: A dictionary of saved records. The dictionary uses the identifiers of the records you specify in `recordsToSave` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding modified record (as it appears on the server), or an error that describes why CloudKit can’t modify that record.
- **`deleteResults`**: A dictionary of deleted records. The dictionary uses the identifiers you specify in `recordIDsToDelete` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either [Void](https://developer.apple.com/documentation/swift/void) to indicate a successful deletion, or an error that describes why CloudKit can’t delete that record.

<a id="discussion"></a>

## Discussion

Deleting records may cause additional deletions if other records in the database reference the deleted records. CloudKit doesn’t provide the identifiers of any additional records it deletes. This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account, or when `atomically` is [true](https://developer.apple.com/documentation/swift/true) and one or more of the specified changes fail; otherwise, the returned tuple includes any individual record errors.

For information on a more configurable way to modify records, see [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md).

## See Also

### Modifying Records

- [modifyRecords(saving:deleting:savePolicy:atomically:completionHandler:)](modifyrecords%28saving_deleting_savepolicy_atomically_completionhandler_%29.md): Modifies the specified records and delivers the results to a completion handler.
- [CKModifyRecordsOperation.RecordSavePolicy](../ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
- [save(\_:completionHandler:)](save%28__completionhandler_%29-3tatz.md): Saves a specific record.
- [delete(withRecordID:completionHandler:)](delete%28withrecordid_completionhandler_%29.md): Deletes a specific record.
