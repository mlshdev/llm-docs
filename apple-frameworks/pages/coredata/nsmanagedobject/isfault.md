> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/isfault](https://developer.apple.com/documentation/coredata/nsmanagedobject/isfault)

# isFault (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the managed object is a fault.

## Declaration

```swift
var isFault: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a fault, otherwise [false](https://developer.apple.com/documentation/swift/false). Knowing whether an object is a fault is useful in many situations when computations are optional. It can also be used to avoid growing the object graph unnecessarily (which may improve performance as it can avoid time-consuming fetches from data stores).

If this property is [false](https://developer.apple.com/documentation/swift/false), then the receiver’s data must be in memory. However, if this property is  [true](https://developer.apple.com/documentation/swift/true), it does *not* mean that the data is not in memory. The data may be in memory, or it may not, depending on many factors influencing caching.

If the receiver is a fault, accessing this property does not cause it to fire.

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [isInserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [isUpdated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [isDeleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFault(forRelationshipNamed:)](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.

# fault (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the managed object is a fault.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFault) BOOL fault;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a fault, otherwise [false](https://developer.apple.com/documentation/swift/false). Knowing whether an object is a fault is useful in many situations when computations are optional. It can also be used to avoid growing the object graph unnecessarily (which may improve performance as it can avoid time-consuming fetches from data stores).

If this property is [false](https://developer.apple.com/documentation/swift/false), then the receiver’s data must be in memory. However, if this property is  [true](https://developer.apple.com/documentation/swift/true), it does *not* mean that the data is not in memory. The data may be in memory, or it may not, depending on many factors influencing caching.

If the receiver is a fault, accessing this property does not cause it to fire.

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [inserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [updated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [deleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasFaultForRelationshipNamed:](hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.
