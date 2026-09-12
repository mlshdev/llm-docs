> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/hasfault(forrelationshipnamed:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/hasfault(forrelationshipnamed:))

# hasFault(forRelationshipNamed:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the relationship for a given key is a fault.

## Declaration

```swift
func hasFault(forRelationshipNamed key: String) -> Bool
```

## Parameters

- `key`: The name of one of the receiver’s relationships.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the relationship for `key` is a fault; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the specified relationship is a fault, calling this method does not result in the fault firing.

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [isInserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [isUpdated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [isDeleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [isFault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.

# hasFaultForRelationshipNamed: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the relationship for a given key is a fault.

## Declaration

```objectivec
- (BOOL) hasFaultForRelationshipNamed:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s relationships.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the relationship for `key` is a fault; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the specified relationship is a fault, calling this method does not result in the fault firing.

## See Also

### Getting State Information

- [managedObjectContext](managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [inserted](isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [updated](isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [deleted](isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [fault](isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](faultingstate.md): The faulting state of the managed object.
- [hasPersistentChangedValues](haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.
