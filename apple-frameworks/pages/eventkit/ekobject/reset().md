> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekobject/reset()](https://developer.apple.com/documentation/eventkit/ekobject/reset())

# reset() (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Returns this object to its saved state.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

This method updates all the properties of this object with the corresponding values in the event store. Any local changes that were not saved before invoking this method are lost. This method does nothing if the object was never saved.

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [isNew](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh()](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [rollback()](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.

# reset (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Returns this object to its saved state.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

This method updates all the properties of this object with the corresponding values in the event store. Any local changes that were not saved before invoking this method are lost. This method does nothing if the object was never saved.

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [new](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [rollback](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.
