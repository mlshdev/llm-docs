> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetch(withrecordids:desiredkeys:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetch(withrecordids:desiredkeys:completionhandler:))

# fetch(withRecordIDs:desiredKeys:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the specified records and delivers them to a completion handler.

## Declaration

```swift
@preconcurrency func fetch(withRecordIDs recordIDs: [CKRecord.ID], desiredKeys: [CKRecord.FieldKey]? = nil, completionHandler: @escaping @Sendable (Result<[CKRecord.ID : Result<CKRecord, any Error>], any Error>) -> Void)
```

## Parameters

- `recordIDs`: The identifiers of the records to fetch.
- `desiredKeys`: The fields to include on each fetched record. To include all fields, specify `nil`; to fetch only system fields, specify an empty array.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either a dictionary of fetched records, or an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account. When present, the dictionary uses the identifiers you specify in `recordIDs` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched record, or an error that describes why CloudKit can’t provide that record.

If you’re fetching records of different types, make sure that `desiredKeys` is the union of all the fields you require across each distinct record type.

For information on a more configurable way to fetch specific records, see [CKFetchRecordsOperation](../ckfetchrecordsoperation.md).

## See Also

### Fetching Records

- [records(for:desiredKeys:)](records%28for_desiredkeys_%29.md): Fetches the specified records and returns them to an awaiting caller.
- [fetch(withRecordID:completionHandler:)](fetch%28withrecordid_completionhandler_%29.md): Fetches a specific record.
