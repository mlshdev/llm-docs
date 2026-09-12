> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/undomanager](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/undomanager)

# undoManager (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object that provides undo support for the context.

## Declaration

```swift
var undoManager: UndoManager? { get set }
```

<a id="Discussion"></a>

## Discussion

Enable undo support for a context by setting this property to an instance of [UndoManager](../../foundation/undomanager.md). This can be an undo manager that’s exclusive to the context, or an existing undo manager if you want to integrate the context’s undo operations with those of the rest of your app.

If your context uses an undo manager, you can realize a performance benefit by temporarily setting this property to `nil` when performing expensive operations on that context, such as importing a large number of objects.

The default value is `nil`.

## See Also

### Undoing changes

- [undo()](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo()](redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [reset()](reset%28%29.md): Returns the context to its base state.
- [rollback()](rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.

# undoManager (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object that provides undo support for the context.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSUndoManager * undoManager;
```

<a id="Discussion"></a>

## Discussion

Enable undo support for a context by setting this property to an instance of [NSUndoManager](../../foundation/undomanager.md). This can be an undo manager that’s exclusive to the context, or an existing undo manager if you want to integrate the context’s undo operations with those of the rest of your app.

If your context uses an undo manager, you can realize a performance benefit by temporarily setting this property to `nil` when performing expensive operations on that context, such as importing a large number of objects.

The default value is `nil`.

## See Also

### Undoing changes

- [undo](undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo](redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [reset](reset%28%29.md): Returns the context to its base state.
- [rollback](rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.
