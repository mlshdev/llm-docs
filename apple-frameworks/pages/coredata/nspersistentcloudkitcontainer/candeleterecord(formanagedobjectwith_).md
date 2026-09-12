> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/candeleterecord(formanagedobjectwith:)](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/candeleterecord(formanagedobjectwith:))

# canDeleteRecord(forManagedObjectWith:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a Boolean value that indicates whether the user can delete the managed object’s underlying CloudKit record.

## Declaration

```swift
func canDeleteRecord(forManagedObjectWith objectID: NSManagedObjectID) -> Bool
```

## Parameters

- `objectID`: The ID of the managed object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can delete the CloudKit record; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) if [canModifyManagedObjects(in:)](canmodifymanagedobjects%28in_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) and any of the following conditions are true:

- `objectID` is a temporary object identifier.
- The persistent store that contains the managed object isn’t using CloudKit.
- The persistent store manages the user’s private database.
- The persistent store manages the public database, and the user owns the underlying record or Core Data has yet to save the managed object to iCloud.
- The persistent store manages the shared database, and the user has the necessary permissions to delete the managed object’s underlying record. For more information, see [CKShare.ParticipantPermission](../../cloudkit/ckshare/participantpermission.md).

## See Also

### Checking Permissions

- [canUpdateRecord(forManagedObjectWith:)](canupdaterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can modify the managed object’s underlying CloudKit record.
- [canModifyManagedObjects(in:)](canmodifymanagedobjects%28in_%29.md): Returns a Boolean value that indicates whether the user can modify the specified persistent store.

# canDeleteRecordForManagedObjectWithID: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a Boolean value that indicates whether the user can delete the managed object’s underlying CloudKit record.

## Declaration

```objectivec
- (BOOL) canDeleteRecordForManagedObjectWithID:(NSManagedObjectID *) objectID;
```

## Parameters

- `objectID`: The ID of the managed object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can delete the CloudKit record; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) if [canModifyManagedObjectsInStore:](canmodifymanagedobjects%28in_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) and any of the following conditions are true:

- `objectID` is a temporary object identifier.
- The persistent store that contains the managed object isn’t using CloudKit.
- The persistent store manages the user’s private database.
- The persistent store manages the public database, and the user owns the underlying record or Core Data has yet to save the managed object to iCloud.
- The persistent store manages the shared database, and the user has the necessary permissions to delete the managed object’s underlying record. For more information, see [CKShareParticipantPermission](../../cloudkit/ckshare/participantpermission.md).

## See Also

### Checking Permissions

- [canUpdateRecordForManagedObjectWithID:](canupdaterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can modify the managed object’s underlying CloudKit record.
- [canModifyManagedObjectsInStore:](canmodifymanagedobjects%28in_%29.md): Returns a Boolean value that indicates whether the user can modify the specified persistent store.
