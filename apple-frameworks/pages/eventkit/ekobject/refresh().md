> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekobject/refresh()](https://developer.apple.com/documentation/eventkit/ekobject/refresh())

# refresh() (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Merges changes to this object with the latest saved values.

## Declaration

```swift
func refresh() -> Bool
```

<a id="return-value"></a>

## Return Value

If the operation is successful, [true](https://developer.apple.com/documentation/swift/true); if the object was deleted in the event store, [false](https://developer.apple.com/documentation/swift/false). If this method returns [false](https://developer.apple.com/documentation/swift/false), the object should be released.

<a id="Discussion"></a>

## Discussion

This method merges the local changes to properties of this object with the latest values in the event store. This method updates only properties that have not been modified locally, so you do not lose any changes by invoking this method. You can also use this method to see whether an object was deleted from the event store.

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [isNew](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [reset()](reset%28%29.md): Returns this object to its saved state.
- [rollback()](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.

# refresh (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Merges changes to this object with the latest saved values.

## Declaration

```objectivec
- (BOOL) refresh;
```

<a id="return-value"></a>

## Return Value

If the operation is successful, [true](https://developer.apple.com/documentation/swift/true); if the object was deleted in the event store, [false](https://developer.apple.com/documentation/swift/false). If this method returns [false](https://developer.apple.com/documentation/swift/false), the object should be released.

<a id="Discussion"></a>

## Discussion

This method merges the local changes to properties of this object with the latest values in the event store. This method updates only properties that have not been modified locally, so you do not lose any changes by invoking this method. You can also use this method to see whether an object was deleted from the event store.

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [new](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [reset](reset%28%29.md): Returns this object to its saved state.
- [rollback](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.
