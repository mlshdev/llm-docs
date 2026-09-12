> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/reset()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/reset())

# reset() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the context to its base state.

## Declaration

```swift
func reset()
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

<a id="Discussion"></a>

## Discussion

All the receiver’s managed objects are “forgotten.” If you use this method, you should ensure that you also discard references to any managed objects fetched using the receiver, since they will be invalid afterwards.

## See Also

### Related Documentation

- [stalenessInterval](stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.

### Undoing changes

- [undoManager](undomanager.md): The object that provides undo support for the context.
- [undo()](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo()](redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [rollback()](rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.

# reset (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the context to its base state.

## Declaration

```objectivec
- (void) reset;
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

<a id="Discussion"></a>

## Discussion

All the receiver’s managed objects are “forgotten.” If you use this method, you should ensure that you also discard references to any managed objects fetched using the receiver, since they will be invalid afterwards.

## See Also

### Related Documentation

- [stalenessInterval](stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.

### Undoing changes

- [undoManager](undomanager.md): The object that provides undo support for the context.
- [undo](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo](redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [rollback](rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.
