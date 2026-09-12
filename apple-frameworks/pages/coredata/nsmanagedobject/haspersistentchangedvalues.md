> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/haspersistentchangedvalues](https://developer.apple.com/documentation/coredata/nsmanagedobject/haspersistentchangedvalues)

# hasPersistentChangedValues (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the managed object has persistent changes.

## Declaration

```swift
var hasPersistentChangedValues: Bool { get }
```

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [isInserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [isUpdated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [isDeleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [isFault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFault(forRelationshipNamed:)](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.

# hasPersistentChangedValues (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the managed object has persistent changes.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasPersistentChangedValues;
```

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [inserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [updated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [deleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [fault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFaultForRelationshipNamed:](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
