> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordzonesoperation/initwithrecordzonestosave:recordzoneidstodelete:](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/initwithrecordzonestosave:recordzoneidstodelete:)

# initWithRecordZonesToSave:recordZoneIDsToDelete:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an operation for modifying the specified record zones.

## Declaration

```objectivec
- (instancetype) initWithRecordZonesToSave:(NSArray<CKRecordZone *> *) recordZonesToSave recordZoneIDsToDelete:(NSArray<CKRecordZoneID *> *) recordZoneIDsToDelete;
```

## Parameters

- `recordZonesToSave`: The record zones to save. You can specify `nil` for this parameter.
- `recordZoneIDsToDelete`: The IDs of the record zones to delete. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

The record zones you intend to save or delete must all reside in the same database, which you specify when you configure the operation. If you delete a record zone, CloudKit deletes any records it contains.

## See Also

### Creating a Modify Zones Operation

- [init](init%28%29.md): Creates an empty modify record zones operation.
