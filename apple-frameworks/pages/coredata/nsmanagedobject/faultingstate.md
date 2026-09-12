> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/faultingstate](https://developer.apple.com/documentation/coredata/nsmanagedobject/faultingstate)

# faultingState (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The faulting state of the managed object.

## Declaration

```swift
var faultingState: Int { get }
```

<a id="return-value"></a>

## Return Value

`0` if the object is fully initialized as a managed object and not transitioning to or from another state, otherwise some other value.

<a id="Discussion"></a>

## Discussion

`0` if the object is fully initialized as a managed object and not transitioning to or from another state, otherwise some other value. This property allows you to determine if an object is in a transitional phase when receiving a key-value observing change notification.

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [isInserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [isUpdated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [isDeleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [isFault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [hasFault(forRelationshipNamed:)](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.

# faultingState (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The faulting state of the managed object.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger faultingState;
```

<a id="return-value"></a>

## Return Value

`0` if the object is fully initialized as a managed object and not transitioning to or from another state, otherwise some other value.

<a id="Discussion"></a>

## Discussion

`0` if the object is fully initialized as a managed object and not transitioning to or from another state, otherwise some other value. This property allows you to determine if an object is in a transitional phase when receiving a key-value observing change notification.

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [inserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [updated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [deleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [fault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [hasFaultForRelationshipNamed:](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.
