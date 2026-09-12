> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/redo()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/redo())

# redo() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.

## Declaration

```swift
func redo()
```

## See Also

### Related Documentation

- [processPendingChanges()](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.

### Undoing changes

- [undoManager](undomanager.md): The object that provides undo support for the context.
- [undo()](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [reset()](reset%28%29.md): Returns the context to its base state.
- [rollback()](rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.

# redo (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.

## Declaration

```objectivec
- (void) redo;
```

## See Also

### Related Documentation

- [processPendingChanges](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.

### Undoing changes

- [undoManager](undomanager.md): The object that provides undo support for the context.
- [undo](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [reset](reset%28%29.md): Returns the context to its base state.
- [rollback](rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.
