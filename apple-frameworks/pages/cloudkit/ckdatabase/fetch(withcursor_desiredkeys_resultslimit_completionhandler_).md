> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetch(withcursor:desiredkeys:resultslimit:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetch(withcursor:desiredkeys:resultslimit:completionhandler:))

# fetch(withCursor:desiredKeys:resultsLimit:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Retrieves the next batch of records from an existing search and delivers them to a completion handler.

## Declaration

```swift
@preconcurrency func fetch(withCursor queryCursor: CKQueryOperation.Cursor, desiredKeys: [CKRecord.FieldKey]? = nil, resultsLimit: Int = CKQueryOperation.maximumResults, completionHandler: @escaping @Sendable (Result<(matchResults: [(CKRecord.ID, Result<CKRecord, any Error>)], queryCursor: CKQueryOperation.Cursor?), any Error>) -> Void)
```

## Parameters

- `queryCursor`: The cursor that identifies, within the full search results, the location of the next subset of results to retrieve.
- `desiredKeys`: The fields to include on each fetched record. To include all fields, specify `nil`; to fetch only system fields, specify an empty array.
- `resultsLimit`: The maximum number of records to return in a single set of results.
- `completionHandler`: The closure to execute with the search results.

<a id="discussion"></a>

## Discussion

The completion handler takes a single [Result](https://developer.apple.com/documentation/swift/result) parameter that contains either a tuple, or an error if the request fails. For example, when the network is unavailable or the device doesn’t have an active iCloud account.

When present, the tuple contains the following named elements:

- **`matchResults`**: An array of tuples. Each tuple includes a record identifier and a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding matched record, or an error that describes why CloudKit can’t provide that record. For example, if CloudKit fails to materialize an asset field, it returns an error instead of a partial record. CloudKit sorts the array according to the query’s sort descriptors.
- **`queryCursor`**: A cursor if the number of results exceeds `resultsLimit`; otherwise, `nil`.

If you specify `resultsLimit` and the number of matched records exceeds that value, CloudKit provides only that number of records and a *cursor* — an object that marks a specific location in the full search results. To retrieve the next subset of search results, execute this method again and pass the provided cursor from previous execution.

For information on a more configurable way to search a database, see [CKQueryOperation](../ckqueryoperation.md).

## See Also

### Querying Records

- [records(matching:inZoneWith:desiredKeys:resultsLimit:)](records%28matching_inzonewith_desiredkeys_resultslimit_%29.md): Searches for records that match a predicate and returns them to an awaiting caller.
- [records(continuingMatchFrom:desiredKeys:resultsLimit:)](records%28continuingmatchfrom_desiredkeys_resultslimit_%29.md): Retrieves the next batch of records from an existing search and returns them to an awaiting caller.
- [fetch(withQuery:inZoneWith:desiredKeys:resultsLimit:completionHandler:)](fetch%28withquery_inzonewith_desiredkeys_resultslimit_completionhandler_%29.md): Searches for records that match a predicate and delivers them to a completion handler.
- [perform(\_:inZoneWith:completionHandler:)](perform%28__inzonewith_completionhandler_%29.md): Deprecated. Searches for records matching a predicate in the specified record zone.
- [records(matching:inZoneWith:)](records%28matching_inzonewith_%29.md): Deprecated. Searches for records in the specified record zone and returns them to an awaiting caller.
