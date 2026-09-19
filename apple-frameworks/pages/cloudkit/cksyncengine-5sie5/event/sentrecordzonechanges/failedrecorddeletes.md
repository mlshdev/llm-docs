> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/sentrecordzonechanges/failedrecorddeletes

# failedRecordDeletes

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The unique identifiers of the records CloudKit is unable to delete, and the reasons why.

## Declaration

```swift
let failedRecordDeletes: [CKRecord.ID : CKError]
```

## See Also

### Accessing failed changes

- [failedRecordSaves](failedrecordsaves.md): The records that CloudKit is unable to modify.
- [CKSyncEngine.Event.SentRecordZoneChanges.FailedRecordSave](failedrecordsave.md): A type that describes an unsuccessful attempt to modify a single record.
