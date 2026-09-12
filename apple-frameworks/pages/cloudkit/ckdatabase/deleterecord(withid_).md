> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/deleterecord(withid:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/deleterecord(withid:))

# deleteRecord(withID:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Deletes a specific record.

## Declaration

```swift
@discardableResult func deleteRecord(withID recordID: CKRecord.ID) async throws -> CKRecord.ID
```

## Parameters

- `recordID`: The identifier of the record to delete.

<a id="return-value"></a>

## Return Value

The identifier of the deleted record.

<a id="discussion"></a>

## Discussion

Deleting a record may cause additional deletions if other records in the database reference the deleted record. CloudKit doesn’t provide the identifiers of any additional records it deletes. This method throws an error if the request fails, such as when the record doesn’t exist, the network is unavailable or the device doesn’t have an active iCloud account.

For information on a more convenient way to delete records, see [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md).
