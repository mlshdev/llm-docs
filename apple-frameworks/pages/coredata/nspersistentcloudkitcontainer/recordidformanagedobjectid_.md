> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/recordidformanagedobjectid:](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/recordidformanagedobjectid:)

# recordIDForManagedObjectID:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the CloudKit record ID for the specified managed object ID.

## Declaration

```objectivec
- (CKRecordID *) recordIDForManagedObjectID:(NSManagedObjectID *) managedObjectID;
```

## Parameters

- `managedObjectID`: The ID of the managed object.

<a id="return-value"></a>

## Return Value

An instance of [CKRecordID](../../cloudkit/ckrecord/id.md) if the managed object has an underlying CloudKit record; otherwise, `nil`.

## Mentioned In

- [Reading CloudKit Records for Core Data](../reading-cloudkit-records-for-core-data.md)

## See Also

### Accessing Records

- [recordForManagedObjectID:](recordformanagedobjectid_.md): Returns the CloudKit record for the specified managed object ID.
- [recordsForManagedObjectIDs:](recordsformanagedobjectids_.md): Returns a dictionary that contains the CloudKit records for the specified managed object IDs.
- [recordIDsForManagedObjectIDs:](recordidsformanagedobjectids_.md): Returns a dictionary that contains the CloudKit record IDs for the specified managed object IDs.
