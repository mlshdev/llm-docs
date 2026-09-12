> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsundomanagerwillundochange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerwillundochange)

# NSUndoManagerWillUndoChange (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted just before an undo manager performs an undo operation.

## Declaration

```swift
static let NSUndoManagerWillUndoChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

If you invoke [undo()](../../undomanager/undo%28%29.md) or [undoNestedGroup()](../../undomanager/undonestedgroup%28%29.md), this notification is posted. The notification object is the [UndoManager](../../undomanager.md) object. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the actor, thread, or dispatch queue that calls [undo()](../../undomanager/undo%28%29.md).

## See Also

### Working with notifications

- [NSUndoManagerDidUndoChange](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChange](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChange](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpoint](nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidOpenUndoGroup](nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroup](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroup](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](../../nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.

# NSUndoManagerWillUndoChangeNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted just before an undo manager performs an undo operation.

## Declaration

```objectivec
extern NSNotificationName const NSUndoManagerWillUndoChangeNotification;
```

<a id="Discussion"></a>

## Discussion

If you invoke [undo](../../undomanager/undo%28%29.md) or [undoNestedGroup](../../undomanager/undonestedgroup%28%29.md), this notification is posted. The notification object is the [NSUndoManager](../../undomanager.md) object. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the actor, thread, or dispatch queue that calls [undo](../../undomanager/undo%28%29.md).

## See Also

### Working with notifications

- [NSUndoManagerDidUndoChangeNotification](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChangeNotification](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChangeNotification](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpointNotification](nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidOpenUndoGroupNotification](nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroupNotification](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroupNotification](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](../../nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.
