> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/records(for:desiredkeys:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/records(for:desiredkeys:))

# records(for:desiredKeys:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the specified records and returns them to an awaiting caller.

## Declaration

```swift
func records(for ids: [CKRecord.ID], desiredKeys: [CKRecord.FieldKey]? = nil) async throws -> [CKRecord.ID : Result<CKRecord, any Error>]
```

## Parameters

- `ids`: The identifiers of the records to fetch.
- `desiredKeys`: The fields to include on each fetched record. To include all fields, specify `nil`; to fetch only system fields, specify an empty array.

<a id="return-value"></a>

## Return Value

A dictionary that contains the fetched records. The dictionary uses the identifiers you specify in `ids` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched record, or an error that describes why CloudKit can’t provide that record.

<a id="discussion"></a>

## Discussion

If you’re fetching records of different types, make sure that `desiredKeys` is the union of all the fields you require across each distinct record type.

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account; otherwise, the returned dictionary includes any individual record errors.

For information on a more configurable way to fetch specific records, see [CKFetchRecordsOperation](../ckfetchrecordsoperation.md).

## See Also

### Fetching Records

- [fetch(withRecordIDs:desiredKeys:completionHandler:)](fetch%28withrecordids_desiredkeys_completionhandler_%29.md): Fetches the specified records and delivers them to a completion handler.
- [fetch(withRecordID:completionHandler:)](fetch%28withrecordid_completionhandler_%29.md): Fetches a specific record.
