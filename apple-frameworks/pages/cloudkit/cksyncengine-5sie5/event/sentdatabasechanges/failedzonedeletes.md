> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/sentdatabasechanges/failedzonedeletes](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/sentdatabasechanges/failedzonedeletes)

# failedZoneDeletes

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The unique identifiers of the record zones CloudKit is unable to delete, and the reasons why.

## Declaration

```swift
let failedZoneDeletes: [CKRecordZone.ID : CKError]
```

## See Also

### Accessing failed changes

- [failedZoneSaves](failedzonesaves.md): The record zones that CloudKit is unable to modify.
- [CKSyncEngine.Event.SentDatabaseChanges.FailedZoneSave](failedzonesave.md): A type that describes an unsuccessful attempt to modify a single record zone.
