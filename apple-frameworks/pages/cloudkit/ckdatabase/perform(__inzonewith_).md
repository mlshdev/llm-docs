> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/perform(_:inzonewith:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/perform(_:inzonewith:))

# perform(\_:inZoneWith:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · tvOS 15.0+ (deprecated in 15.0) · visionOS · watchOS 8.0+ (deprecated in 8.0)

Searches for records matching a predicate in the specified record zone.

## Declaration

```swift
func perform(_ query: CKQuery, inZoneWith zoneID: CKRecordZone.ID?) async throws -> [CKRecord]
```

## Parameters

- `query`: The query that contains the search parameters. For more information, see [CKQuery](../ckquery.md).
- `zoneID`: The identifier of the record zone to search. If you’re searching a shared database, provide a record zone identifier; otherwise, you can specify `nil` to search all record zones in the database.

<a id="return-value"></a>

## Return Value

The records that match the specified query.

<a id="discussion"></a>

## Discussion

For information on a more convenient way to search a database, see [records(matching:inZoneWith:desiredKeys:resultsLimit:)](records%28matching_inzonewith_desiredkeys_resultslimit_%29.md).
