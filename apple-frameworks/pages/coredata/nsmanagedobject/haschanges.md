> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/haschanges](https://developer.apple.com/documentation/coredata/nsmanagedobject/haschanges)

# hasChanges (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.

## Declaration

```swift
var hasChanges: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has been inserted, has been deleted, or has unsaved changes, otherwise [false](https://developer.apple.com/documentation/swift/false). The result is the equivalent of OR-ing the values of [isInserted](isinserted.md), [isDeleted](isdeleted.md), and [isUpdated](isupdated.md).

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [isInserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [isUpdated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [isDeleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [isFault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFault(forRelationshipNamed:)](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.

# hasChanges (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasChanges;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has been inserted, has been deleted, or has unsaved changes, otherwise [false](https://developer.apple.com/documentation/swift/false). The result is the equivalent of OR-ing the values of [inserted](isinserted.md), [deleted](isdeleted.md), and [updated](isupdated.md).

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [inserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [updated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [deleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [fault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFaultForRelationshipNamed:](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.
