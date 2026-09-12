> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordzonesoperation/init(recordzonestosave:recordzoneidstodelete:)](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/init(recordzonestosave:recordzoneidstodelete:))

# init(recordZonesToSave:recordZoneIDsToDelete:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

Creates an operation for modifying the specified record zones.

## Declaration

```swift
convenience init(recordZonesToSave: [CKRecordZone]? = nil, recordZoneIDsToDelete: [CKRecordZone.ID]? = nil)
```

## Parameters

- `recordZonesToSave`: The record zones to save. You can specify `nil` for this parameter.
- `recordZoneIDsToDelete`: The IDs of the record zones to delete. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

The record zones you intend to save or delete must all reside in the same database, which you specify when you configure the operation. If you delete a record zone, CloudKit deletes any records it contains.

## See Also

### Creating a Modify Zones Operation

- [init()](init%28%29.md): Creates an empty modify record zones operation.
