> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/recordsformanagedobjectids:](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/recordsformanagedobjectids:)

# recordsForManagedObjectIDs:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary that contains the CloudKit records for the specified managed object IDs.

## Declaration

```objectivec
- (NSDictionary<NSManagedObjectID *,CKRecord *> *) recordsForManagedObjectIDs:(NSArray<NSManagedObjectID *> *) managedObjectIDs;
```

## Parameters

- `managedObjectIDs`: An array of managed object IDs.

<a id="return-value"></a>

## Return Value

A dictionary that uses `managedObjectIDs` as its keys, and each object’s underlying [CKRecord](../../cloudkit/ckrecord.md) as its values. The dictionary excludes IDs that don’t have a CloudKit record.

## Mentioned In

- [Reading CloudKit Records for Core Data](../reading-cloudkit-records-for-core-data.md)

## See Also

### Accessing Records

- [recordForManagedObjectID:](recordformanagedobjectid_.md): Returns the CloudKit record for the specified managed object ID.
- [recordIDForManagedObjectID:](recordidformanagedobjectid_.md): Returns the CloudKit record ID for the specified managed object ID.
- [recordIDsForManagedObjectIDs:](recordidsformanagedobjectids_.md): Returns a dictionary that contains the CloudKit record IDs for the specified managed object IDs.
