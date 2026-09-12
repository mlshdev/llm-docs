> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/save(_:completionhandler:)-3tatz](https://developer.apple.com/documentation/cloudkit/ckdatabase/save(_:completionhandler:)-3tatz)

# save(\_:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Saves a specific record.

## Declaration

```swift
func save(_ record: CKRecord, completionHandler: @escaping @Sendable (CKRecord?, (any Error)?) -> Void)
```

## Parameters

- `record`: The record to save.
- `completionHandler`: The closure to execute after CloudKit saves the record.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The saved record (as it appears on the server), or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully saves the record.

The save succeeds only when the specified record is new, or is a more recent version than the one on the server.

For information on a more convenient way to save records, see [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md).

## See Also

### Modifying Records

- [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md): Modifies the specified records and returns the results to an awaiting caller.
- [modifyRecords(saving:deleting:savePolicy:atomically:completionHandler:)](modifyrecords%28saving_deleting_savepolicy_atomically_completionhandler_%29.md): Modifies the specified records and delivers the results to a completion handler.
- [CKModifyRecordsOperation.RecordSavePolicy](../ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
- [delete(withRecordID:completionHandler:)](delete%28withrecordid_completionhandler_%29.md): Deletes a specific record.

# saveRecord:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Saves a specific record.

## Declaration

```objectivec
- (void) saveRecord:(CKRecord *) record completionHandler:(void (^)(CKRecord *record, NSError *error)) completionHandler;
```

## Parameters

- `record`: The record to save.
- `completionHandler`: The closure to execute after CloudKit saves the record.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The saved record (as it appears on the server), or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully saves the record.

The save succeeds only when the specified record is new, or is a more recent version than the one on the server.

For information on a more convenient way to save records, see [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md).

## See Also

### Modifying Records

- [CKRecordSavePolicy](../ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
- [deleteRecordWithID:completionHandler:](delete%28withrecordid_completionhandler_%29.md): Deletes a specific record.
