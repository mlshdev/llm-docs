> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/redo()](https://developer.apple.com/documentation/foundation/undomanager/redo())

# redo() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.

## Declaration

```swift
func redo()
```

<a id="Discussion"></a>

## Discussion

Raises an [internalInconsistencyException](../nsexceptionname/internalinconsistencyexception.md) if the method is invoked during an undo operation.

This method posts an [NSUndoManagerCheckpoint](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) and [NSUndoManagerWillRedoChange](../nsnotification/name-swift.struct/nsundomanagerwillredochange.md) before it performs the redo operation, and it posts the [NSUndoManagerDidRedoChange](../nsnotification/name-swift.struct/nsundomanagerdidredochange.md) after it performs the redo operation.

## See Also

### Related Documentation

- [registerUndo(withTarget:selector:object:)](registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.

### Performing undo and redo

- [undo()](undo%28%29.md): Closes the top-level undo group if necessary, and then performs undo operations on the group.
- [undoNestedGroup()](undonestedgroup%28%29.md): Performs the undo operations in the last undo group (whether top-level or nested), recording the operations on the redo stack as a single group.

# redo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.

## Declaration

```objectivec
- (void) redo;
```

<a id="Discussion"></a>

## Discussion

Raises an [NSInternalInconsistencyException](../nsexceptionname/internalinconsistencyexception.md) if the method is invoked during an undo operation.

This method posts an [NSUndoManagerCheckpointNotification](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) and [NSUndoManagerWillRedoChangeNotification](../nsnotification/name-swift.struct/nsundomanagerwillredochange.md) before it performs the redo operation, and it posts the [NSUndoManagerDidRedoChangeNotification](../nsnotification/name-swift.struct/nsundomanagerdidredochange.md) after it performs the redo operation.

## See Also

### Related Documentation

- [registerUndoWithTarget:selector:object:](registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.

### Performing undo and redo

- [undo](undo%28%29.md): Closes the top-level undo group if necessary, and then performs undo operations on the group.
- [undoNestedGroup](undonestedgroup%28%29.md): Performs the undo operations in the last undo group (whether top-level or nested), recording the operations on the redo stack as a single group.
