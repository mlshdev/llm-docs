> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/undonestedgroup()](https://developer.apple.com/documentation/foundation/undomanager/undonestedgroup())

# undoNestedGroup() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the undo operations in the last undo group (whether top-level or nested), recording the operations on the redo stack as a single group.

## Declaration

```swift
func undoNestedGroup()
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if any undo operations have been registered since the last [enableUndoRegistration()](enableundoregistration%28%29.md) message.

This method posts an [NSUndoManagerCheckpoint](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) and [NSUndoManagerWillUndoChange](../nsnotification/name-swift.struct/nsundomanagerwillundochange.md) before it performs the undo operation, and it posts an [NSUndoManagerDidUndoChange](../nsnotification/name-swift.struct/nsundomanagerdidundochange.md) after it performs the undo operation.

## See Also

### Performing undo and redo

- [undo()](undo%28%29.md): Closes the top-level undo group if necessary, and then performs undo operations on the group.
- [redo()](redo%28%29.md): Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.

# undoNestedGroup (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the undo operations in the last undo group (whether top-level or nested), recording the operations on the redo stack as a single group.

## Declaration

```objectivec
- (void) undoNestedGroup;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if any undo operations have been registered since the last [enableUndoRegistration](enableundoregistration%28%29.md) message.

This method posts an [NSUndoManagerCheckpointNotification](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) and [NSUndoManagerWillUndoChangeNotification](../nsnotification/name-swift.struct/nsundomanagerwillundochange.md) before it performs the undo operation, and it posts an [NSUndoManagerDidUndoChangeNotification](../nsnotification/name-swift.struct/nsundomanagerdidundochange.md) after it performs the undo operation.

## See Also

### Performing undo and redo

- [undo](undo%28%29.md): Closes the top-level undo group if necessary, and then performs undo operations on the group.
- [redo](redo%28%29.md): Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.
