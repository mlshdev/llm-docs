> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetch(withrecordid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetch(withrecordid:completionhandler:))

# fetch(withRecordID:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches a specific record.

## Declaration

```swift
func fetch(withRecordID recordID: CKRecord.ID, completionHandler: @escaping @Sendable (CKRecord?, (any Error)?) -> Void)
```

```swift
func fetch(withRecordID recordID: CKRecord.ID) async throws -> CKRecord
```

## Parameters

- `recordID`: The identifier of the record to fetch.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The requested record, or `nil` if CloudKit can’t provide that record.
- An error if a problem occurs, or `nil` if the fetch completes successfully.

For information on a more convenient way to fetch specific records, see [records(for:desiredKeys:)](records%28for_desiredkeys_%29.md).

## See Also

### Fetching Records

- [records(for:desiredKeys:)](records%28for_desiredkeys_%29.md): Fetches the specified records and returns them to an awaiting caller.
- [fetch(withRecordIDs:desiredKeys:completionHandler:)](fetch%28withrecordids_desiredkeys_completionhandler_%29.md): Fetches the specified records and delivers them to a completion handler.

# fetchRecordWithID:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches a specific record.

## Declaration

```objectivec
- (void) fetchRecordWithID:(CKRecordID *) recordID completionHandler:(void (^)(CKRecord *record, NSError *error)) completionHandler;
```

## Parameters

- `recordID`: The identifier of the record to fetch.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The requested record, or `nil` if CloudKit can’t provide that record.
- An error if a problem occurs, or `nil` if the fetch completes successfully.

For information on a more convenient way to fetch specific records, see [records(for:desiredKeys:)](records%28for_desiredkeys_%29.md).
