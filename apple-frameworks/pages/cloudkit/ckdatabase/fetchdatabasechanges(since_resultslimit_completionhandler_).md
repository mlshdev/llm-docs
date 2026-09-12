> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetchdatabasechanges(since:resultslimit:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetchdatabasechanges(since:resultslimit:completionhandler:))

# fetchDatabaseChanges(since:resultsLimit:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches all modified record zones and delivers them to a completion handler.

## Declaration

```swift
@preconcurrency func fetchDatabaseChanges(since changeToken: CKServerChangeToken?, resultsLimit: Int? = nil, completionHandler: @escaping @Sendable (Result<(modifications: [CKDatabase.DatabaseChange.Modification], deletions: [CKDatabase.DatabaseChange.Deletion], changeToken: CKServerChangeToken, moreComing: Bool), any Error>) -> Void)
```

## Parameters

- `changeToken`: The change token from the previous execution of this method. If this is your app’s first fetch, or you want to refetch every change in the database’s history, specify `nil`.
- `resultsLimit`: The maximum number of changes to return. The server may use a limit lower than this value.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes a single [Result](https://developer.apple.com/documentation/swift/result) parameter that contains either a tuple, or an error if the request fails. For example, when the network is unavailable or the device doesn’t have an active iCloud account.

When present, the tuple contains the following named elements:

- **`modifications`**: An array of database modifications that occur after the time that `changeToken` denotes. Each modification contains details about a modified record zone.
- **`deletions`**: An array of database deletions that occur after the time that `changeToken` denotes. Each deletion contains details about a deleted or purged record zone.
- **`changeToken`**: The change token that corresponds to the fetch results’ most recent change.
- **`moreComing`**: A Boolean value that indicates whether the server has additional changes for you to fetch.

This method fetches record zone changes in a database, which includes new record zones, changed zones — including deleted or purged zones — and zones that contain record changes.

Along with the fetched changes, CloudKit supplies a *change token*, which is an opaque token that denotes a specific point in the database’s history. Store this token and provide it the next time you execute this method. Change tokens conform to [NSSecureCoding](../../foundation/nssecurecoding.md) and are safe to cache on-disk. Don’t infer any behavior or order from a token’s contents.

For information on a more configurable way to fetch database changes, see [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md).

## See Also

### Fetching Changes

- [databaseChanges(since:resultsLimit:)](databasechanges%28since_resultslimit_%29.md): Fetches all modified record zones and returns them to an awaiting caller.
- [CKDatabase.DatabaseChange](databasechange.md): Objects that indicate the type of database change.
- [recordZoneChanges(inZoneWith:since:desiredKeys:resultsLimit:)](recordzonechanges%28inzonewith_since_desiredkeys_resultslimit_%29.md): Fetches all modified records from a specific record zone and returns them to an awaiting caller.
- [fetchRecordZoneChanges(inZoneWith:since:desiredKeys:resultsLimit:completionHandler:)](fetchrecordzonechanges%28inzonewith_since_desiredkeys_resultslimit_completionhandler_%29.md): Fetches all modified records from a specific record zone and delivers them to a completion handler.
- [CKDatabase.RecordZoneChange](recordzonechange.md): Objects that indicate the type of record zone change.
