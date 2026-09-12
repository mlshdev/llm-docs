> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/perform(_:inzonewith:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/perform(_:inzonewith:completionhandler:))

# perform(\_:inZoneWith:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

Searches for records matching a predicate in the specified record zone.

> renamed to fetch(withQuery:inZoneWith:desiredKeys:resultsLimit:completionHandler:)

## Declaration

```swift
func perform(_ query: CKQuery, inZoneWith zoneID: CKRecordZone.ID?, completionHandler: @escaping @Sendable ([CKRecord]?, (any Error)?) -> Void)
```

## Parameters

- `query`: The query that contains the search parameters. For more information, see [CKQuery](../ckquery.md).
- `zoneID`: The identifier of the record zone to search. If you’re searching a shared database, provide a record zone identifier; otherwise, you can specify `nil` to search all record zones in the database.
- `completionHandler`: The closure to execute with the search results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The records that match the specified query, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit completes the search successfully.

For information on a more convenient way to search a database, see [records(matching:inZoneWith:desiredKeys:resultsLimit:)](records%28matching_inzonewith_desiredkeys_resultslimit_%29.md).

## See Also

### Querying Records

- [records(matching:inZoneWith:desiredKeys:resultsLimit:)](records%28matching_inzonewith_desiredkeys_resultslimit_%29.md): Searches for records that match a predicate and returns them to an awaiting caller.
- [records(continuingMatchFrom:desiredKeys:resultsLimit:)](records%28continuingmatchfrom_desiredkeys_resultslimit_%29.md): Retrieves the next batch of records from an existing search and returns them to an awaiting caller.
- [fetch(withQuery:inZoneWith:desiredKeys:resultsLimit:completionHandler:)](fetch%28withquery_inzonewith_desiredkeys_resultslimit_completionhandler_%29.md): Searches for records that match a predicate and delivers them to a completion handler.
- [fetch(withCursor:desiredKeys:resultsLimit:completionHandler:)](fetch%28withcursor_desiredkeys_resultslimit_completionhandler_%29.md): Retrieves the next batch of records from an existing search and delivers them to a completion handler.
- [records(matching:inZoneWith:)](records%28matching_inzonewith_%29.md): Deprecated. Searches for records in the specified record zone and returns them to an awaiting caller.

# performQuery:inZoneWithID:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches for records matching a predicate in the specified record zone.

## Declaration

```objectivec
- (void) performQuery:(CKQuery *) query inZoneWithID:(CKRecordZoneID *) zoneID completionHandler:(void (^)(NSArray<CKRecord *> *results, NSError *error)) completionHandler;
```

## Parameters

- `query`: The query that contains the search parameters. For more information, see [CKQuery](../ckquery.md).
- `zoneID`: The identifier of the record zone to search. If you’re searching a shared database, provide a record zone identifier; otherwise, you can specify `nil` to search all record zones in the database.
- `completionHandler`: The closure to execute with the search results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The records that match the specified query, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit completes the search successfully.

For information on a more convenient way to search a database, see [records(matching:inZoneWith:desiredKeys:resultsLimit:)](records%28matching_inzonewith_desiredkeys_resultslimit_%29.md).
