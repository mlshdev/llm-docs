> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/record(for:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/record(for:))

# record(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches a specific record.

## Declaration

```swift
func record(for recordID: CKRecord.ID) async throws -> CKRecord
```

## Parameters

- `recordID`: The identifier of the record to fetch.

<a id="return-value"></a>

## Return Value

The requested record.

<a id="discussion"></a>

## Discussion

This method throws an error if the record cannot be found or if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account.

For information on a more convenient way to fetch specific records, see [records(for:desiredKeys:)](records%28for_desiredkeys_%29.md).
