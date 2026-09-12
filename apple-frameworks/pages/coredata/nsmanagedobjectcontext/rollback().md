> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/rollback()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/rollback())

# rollback() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.

## Declaration

```swift
func rollback()
```

<a id="Discussion"></a>

## Discussion

This method does not refetch data from the persistent store or stores.

## See Also

### Related Documentation

- [processPendingChanges()](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [stalenessInterval](stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.

### Undoing changes

- [undoManager](undomanager.md): The object that provides undo support for the context.
- [undo()](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo()](redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [reset()](reset%28%29.md): Returns the context to its base state.

# rollback (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.

## Declaration

```objectivec
- (void) rollback;
```

<a id="Discussion"></a>

## Discussion

This method does not refetch data from the persistent store or stores.

## See Also

### Related Documentation

- [processPendingChanges](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [stalenessInterval](stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.

### Undoing changes

- [undoManager](undomanager.md): The object that provides undo support for the context.
- [undo](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo](redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [reset](reset%28%29.md): Returns the context to its base state.
