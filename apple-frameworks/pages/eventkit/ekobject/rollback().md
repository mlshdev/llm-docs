> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekobject/rollback()](https://developer.apple.com/documentation/eventkit/ekobject/rollback())

# rollback() (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Rolls back the property values of this object to its original state when it was first fetched.

## Declaration

```swift
func rollback()
```

<a id="Discussion"></a>

## Discussion

Any local changes to this object are lost when invoking this method. This method does not re-fetch property values from the event store. This method does nothing if the object was never changed.

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [isNew](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh()](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset()](reset%28%29.md): Returns this object to its saved state.

# rollback (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Rolls back the property values of this object to its original state when it was first fetched.

## Declaration

```objectivec
- (void) rollback;
```

<a id="Discussion"></a>

## Discussion

Any local changes to this object are lost when invoking this method. This method does not re-fetch property values from the event store. This method does nothing if the object was never changed.

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [new](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset](reset%28%29.md): Returns this object to its saved state.
