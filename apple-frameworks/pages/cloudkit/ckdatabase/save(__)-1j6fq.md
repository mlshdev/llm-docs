> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/save(_:)-1j6fq](https://developer.apple.com/documentation/cloudkit/ckdatabase/save(_:)-1j6fq)

# save(\_:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Saves a specific record.

## Declaration

```swift
func save(_ record: CKRecord) async throws -> CKRecord
```

## Parameters

- `record`: The record to save.

<a id="return-value"></a>

## Return Value

The saved record (as it appears on the server)

<a id="discussion"></a>

## Discussion

The save succeeds only when the specified record is new, or is a more recent version than the one on the server.

For information on a more convenient way to save records, see [modifyRecords(saving:deleting:savePolicy:atomically:)](modifyrecords%28saving_deleting_savepolicy_atomically_%29.md).
