> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/records(matching:inzonewith:desiredkeys:resultslimit:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/records(matching:inzonewith:desiredkeys:resultslimit:))

# records(matching:inZoneWith:desiredKeys:resultsLimit:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Searches for records that match a predicate and returns them to an awaiting caller.

## Declaration

```swift
func records(matching query: CKQuery, inZoneWith zoneID: CKRecordZone.ID? = nil, desiredKeys: [CKRecord.FieldKey]? = nil, resultsLimit: Int = CKQueryOperation.maximumResults) async throws -> (matchResults: [(CKRecord.ID, Result<CKRecord, any Error>)], queryCursor: CKQueryOperation.Cursor?)
```

## Parameters

- `query`: The query that contains the search parameters. For more information, see [CKQuery](../ckquery.md).
- `zoneID`: The identifier of the record zone to search. If you’re searching a shared database, provide a record zone identifier; otherwise, you can specify `nil` to search all record zones in the database.
- `desiredKeys`: The fields to include on each fetched record. To include all fields, specify `nil`; to fetch only system fields, specify an empty array.
- `resultsLimit`: The maximum number of records to return in a single set of results.

<a id="return-value"></a>

## Return Value

A tuple with the following named elements:

- **`matchResults`**: An array of tuples. Each tuple includes a record identifier and a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding matched record, or an error that describes why CloudKit can’t provide that record. For example, if CloudKit fails to materialize an asset field, it returns an error instead of a partial record. CloudKit sorts the array according to the query’s sort descriptors.
- **`queryCursor`**: A cursor if the number of results exceeds `resultsLimit`; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

If you specify `resultsLimit` and the number of matched records exceeds that value, this method returns only that number of records and a *cursor* — an object that marks a specific location in the full search results. To retrieve the next subset of search results, pass that cursor to the [records(continuingMatchFrom:desiredKeys:resultsLimit:)](records%28continuingmatchfrom_desiredkeys_resultslimit_%29.md) method. This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account; otherwise, the returned tuple includes any individual record errors.

For information on a more configurable way to search a database, see [CKQueryOperation](../ckqueryoperation.md).

## See Also

### Querying Records

- [records(continuingMatchFrom:desiredKeys:resultsLimit:)](records%28continuingmatchfrom_desiredkeys_resultslimit_%29.md): Retrieves the next batch of records from an existing search and returns them to an awaiting caller.
- [fetch(withQuery:inZoneWith:desiredKeys:resultsLimit:completionHandler:)](fetch%28withquery_inzonewith_desiredkeys_resultslimit_completionhandler_%29.md): Searches for records that match a predicate and delivers them to a completion handler.
- [fetch(withCursor:desiredKeys:resultsLimit:completionHandler:)](fetch%28withcursor_desiredkeys_resultslimit_completionhandler_%29.md): Retrieves the next batch of records from an existing search and delivers them to a completion handler.
- [perform(\_:inZoneWith:completionHandler:)](perform%28__inzonewith_completionhandler_%29.md): Deprecated. Searches for records matching a predicate in the specified record zone.
- [records(matching:inZoneWith:)](records%28matching_inzonewith_%29.md): Deprecated. Searches for records in the specified record zone and returns them to an awaiting caller.
