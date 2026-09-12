> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/delete(withrecordid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/delete(withrecordid:completionhandler:))

# delete(withRecordID:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deletes a specific record.

## Declaration

```swift
func delete(withRecordID recordID: CKRecord.ID, completionHandler: @escaping @Sendable (CKRecord.ID?, (any Error)?) -> Void)
```

```swift
func delete(withRecordID recordID: CKRecord.ID) async throws -> CKRecord.ID
```

## Parameters

- `recordID`: The identifier of the record to delete.
- `completionHandler`: The closure to execute after CloudKit deletes the record.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The identifier of the deleted record, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully deletes the record.

Deleting a record may cause additional deletions if other records in the database reference the deleted record. CloudKit doesn’t provide the identifiers of any additional records it deletes.

For information on a more convenient way to delete records, see [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md).

## See Also

### Modifying Records

- [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md): Modifies the specified records and returns the results to an awaiting caller.
- [modifyRecords(saving:deleting:savePolicy:atomically:completionHandler:)](modifyrecords%28saving_deleting_savepolicy_atomically_completionhandler_%29.md): Modifies the specified records and delivers the results to a completion handler.
- [CKModifyRecordsOperation.RecordSavePolicy](../ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
- [save(\_:completionHandler:)](save%28__completionhandler_%29-3tatz.md): Saves a specific record.

# deleteRecordWithID:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deletes a specific record.

## Declaration

```objectivec
- (void) deleteRecordWithID:(CKRecordID *) recordID completionHandler:(void (^)(CKRecordID *recordID, NSError *error)) completionHandler;
```

## Parameters

- `recordID`: The identifier of the record to delete.
- `completionHandler`: The closure to execute after CloudKit deletes the record.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The identifier of the deleted record, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully deletes the record.

Deleting a record may cause additional deletions if other records in the database reference the deleted record. CloudKit doesn’t provide the identifiers of any additional records it deletes.

For information on a more convenient way to delete records, see [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md).

## See Also

### Modifying Records

- [CKRecordSavePolicy](../ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
- [saveRecord:completionHandler:](save%28__completionhandler_%29-3tatz.md): Saves a specific record.
