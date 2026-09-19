> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/recordidsformanagedobjectids:

# recordIDsForManagedObjectIDs:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary that contains the CloudKit record IDs for the specified managed object IDs.

## Declaration

```objectivec
- (NSDictionary<NSManagedObjectID *,CKRecordID *> *) recordIDsForManagedObjectIDs:(NSArray<NSManagedObjectID *> *) managedObjectIDs;
```

## Parameters

- `managedObjectIDs`: An array of the managed object IDs.

<a id="return-value"></a>

## Return Value

A dictionary that uses `managedObjectIDs` as its keys, and the [CKRecordID](../../cloudkit/ckrecord/id.md) of each object’s underlying CloudKit record as its values. The dictionary excludes IDs that don’t have a CloudKit record.

## See Also

### Accessing Records

- [recordForManagedObjectID:](recordformanagedobjectid_.md): Returns the CloudKit record for the specified managed object ID.
- [recordsForManagedObjectIDs:](recordsformanagedobjectids_.md): Returns a dictionary that contains the CloudKit records for the specified managed object IDs.
- [recordIDForManagedObjectID:](recordidformanagedobjectid_.md): Returns the CloudKit record ID for the specified managed object ID.
