> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/managedobjectcontext](https://developer.apple.com/documentation/coredata/nsmanagedobject/managedobjectcontext)

# managedObjectContext (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context with which the managed object is registered.

## Declaration

```swift
unowned(unsafe) var managedObjectContext: NSManagedObjectContext? { get }
```

<a id="Discussion"></a>

## Discussion

May be `nil` if the receiver has been deleted from its context.

If the receiver is a fault, accessing this property does not cause it to fire.

## See Also

### Getting State Information

- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [isInserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [isUpdated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [isDeleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [isFault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFault(forRelationshipNamed:)](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.

# managedObjectContext (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context with which the managed object is registered.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, nullable) NSManagedObjectContext * managedObjectContext;
```

<a id="Discussion"></a>

## Discussion

May be `nil` if the receiver has been deleted from its context.

If the receiver is a fault, accessing this property does not cause it to fire.

## See Also

### Getting State Information

- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [inserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [updated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [deleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [fault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFaultForRelationshipNamed:](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.
