> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/records(matching:inzonewith:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/records(matching:inzonewith:))

# records(matching:inZoneWith:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · tvOS 15.0+ (deprecated in 15.0) · visionOS · watchOS 8.0+ (deprecated in 8.0)

Searches for records in the specified record zone and returns them to an awaiting caller.

> Use [records(matching:inZoneWith:desiredKeys:resultsLimit:)](records%28matching_inzonewith_desiredkeys_resultslimit_%29.md) instead.

## Declaration

```swift
func records(matching query: CKQuery, inZoneWith zoneID: CKRecordZone.ID?) async throws -> [CKRecord]
```

## Parameters

- `query`: The query that contains the search parameters. For more information, see [CKQuery](../ckquery.md).
- `zoneID`: The identifier of the record zone to search. If you’re searching a shared database, provide a record zone identifier; otherwise, you can specify `nil` to search all record zones in the database.

<a id="return-value"></a>

## Return Value

An array of records that match the specified query.

<a id="discussion"></a>

## Discussion

For information on a more configurable way to search a database, see [CKQueryOperation](../ckqueryoperation.md).

## See Also

### Querying Records

- [records(matching:inZoneWith:desiredKeys:resultsLimit:)](records%28matching_inzonewith_desiredkeys_resultslimit_%29.md): Searches for records that match a predicate and returns them to an awaiting caller.
- [records(continuingMatchFrom:desiredKeys:resultsLimit:)](records%28continuingmatchfrom_desiredkeys_resultslimit_%29.md): Retrieves the next batch of records from an existing search and returns them to an awaiting caller.
- [fetch(withQuery:inZoneWith:desiredKeys:resultsLimit:completionHandler:)](fetch%28withquery_inzonewith_desiredkeys_resultslimit_completionhandler_%29.md): Searches for records that match a predicate and delivers them to a completion handler.
- [fetch(withCursor:desiredKeys:resultsLimit:completionHandler:)](fetch%28withcursor_desiredkeys_resultslimit_completionhandler_%29.md): Retrieves the next batch of records from an existing search and delivers them to a completion handler.
- [perform(\_:inZoneWith:completionHandler:)](perform%28__inzonewith_completionhandler_%29.md): Deprecated. Searches for records matching a predicate in the specified record zone.
