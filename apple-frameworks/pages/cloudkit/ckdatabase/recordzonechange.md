> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/recordzonechange](https://developer.apple.com/documentation/cloudkit/ckdatabase/recordzonechange)

# CKDatabase.RecordZoneChange

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Objects that indicate the type of record zone change.

## Declaration

```swift
enum RecordZoneChange
```

## Topics

### Modifications

- [CKDatabase.RecordZoneChange.Modification](recordzonechange/modification.md): A record zone change that represents the modification of a record.

### Deletions

- [CKDatabase.RecordZoneChange.Deletion](recordzonechange/deletion.md): A record zone change that represents the deletion of a record.

## See Also

### Fetching Changes

- [databaseChanges(since:resultsLimit:)](databasechanges%28since_resultslimit_%29.md): Fetches all modified record zones and returns them to an awaiting caller.
- [fetchDatabaseChanges(since:resultsLimit:completionHandler:)](fetchdatabasechanges%28since_resultslimit_completionhandler_%29.md): Fetches all modified record zones and delivers them to a completion handler.
- [CKDatabase.DatabaseChange](databasechange.md): Objects that indicate the type of database change.
- [recordZoneChanges(inZoneWith:since:desiredKeys:resultsLimit:)](recordzonechanges%28inzonewith_since_desiredkeys_resultslimit_%29.md): Fetches all modified records from a specific record zone and returns them to an awaiting caller.
- [fetchRecordZoneChanges(inZoneWith:since:desiredKeys:resultsLimit:completionHandler:)](fetchrecordzonechanges%28inzonewith_since_desiredkeys_resultslimit_completionhandler_%29.md): Fetches all modified records from a specific record zone and delivers them to a completion handler.
