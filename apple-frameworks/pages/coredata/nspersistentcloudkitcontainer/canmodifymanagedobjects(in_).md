> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/canmodifymanagedobjects(in:)](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/canmodifymanagedobjects(in:))

# canModifyManagedObjects(in:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a Boolean value that indicates whether the user can modify the specified persistent store.

## Declaration

```swift
func canModifyManagedObjects(in store: NSPersistentStore) -> Bool
```

## Parameters

- `store`: The persistent store.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can modify records in the persistent store’s CloudKit database; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine whether the user is able to write any records to the CloudKit database. To find out if the user can modify a specific object, use the [canUpdateRecord(forManagedObjectWith:)](canupdaterecord%28formanagedobjectwith_%29.md) and [canDeleteRecord(forManagedObjectWith:)](candeleterecord%28formanagedobjectwith_%29.md) methods instead.

This method always returns [true](https://developer.apple.com/documentation/swift/true) for persistent stores that manage the user’s private CloudKit database.

## See Also

### Checking Permissions

- [canUpdateRecord(forManagedObjectWith:)](canupdaterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can modify the managed object’s underlying CloudKit record.
- [canDeleteRecord(forManagedObjectWith:)](candeleterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can delete the managed object’s underlying CloudKit record.

# canModifyManagedObjectsInStore: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a Boolean value that indicates whether the user can modify the specified persistent store.

## Declaration

```objectivec
- (BOOL) canModifyManagedObjectsInStore:(NSPersistentStore *) store;
```

## Parameters

- `store`: The persistent store.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can modify records in the persistent store’s CloudKit database; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine whether the user is able to write any records to the CloudKit database. To find out if the user can modify a specific object, use the [canUpdateRecordForManagedObjectWithID:](canupdaterecord%28formanagedobjectwith_%29.md) and [canDeleteRecordForManagedObjectWithID:](candeleterecord%28formanagedobjectwith_%29.md) methods instead.

This method always returns [true](https://developer.apple.com/documentation/swift/true) for persistent stores that manage the user’s private CloudKit database.

## See Also

### Checking Permissions

- [canUpdateRecordForManagedObjectWithID:](canupdaterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can modify the managed object’s underlying CloudKit record.
- [canDeleteRecordForManagedObjectWithID:](candeleterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can delete the managed object’s underlying CloudKit record.
