> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsundomanagercheckpoint](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagercheckpoint)

# NSUndoManagerCheckpoint (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.

## Declaration

```swift
static let NSUndoManagerCheckpoint: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSUndoManager` object. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the actor, thread, or dispatch queue that calls [beginUndoGrouping()](../../undomanager/beginundogrouping%28%29.md), [endUndoGrouping()](../../undomanager/endundogrouping%28%29.md), or [canRedo](../../undomanager/canredo.md).

## See Also

### Working with notifications

- [NSUndoManagerWillUndoChange](nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChange](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChange](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChange](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerDidOpenUndoGroup](nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroup](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroup](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](../../nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.

# NSUndoManagerCheckpointNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.

## Declaration

```objectivec
extern NSNotificationName const NSUndoManagerCheckpointNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSUndoManager` object. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the actor, thread, or dispatch queue that calls [beginUndoGrouping](../../undomanager/beginundogrouping%28%29.md), [endUndoGrouping](../../undomanager/endundogrouping%28%29.md), or [canRedo](../../undomanager/canredo.md).

## See Also

### Working with notifications

- [NSUndoManagerWillUndoChangeNotification](nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChangeNotification](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChangeNotification](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChangeNotification](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerDidOpenUndoGroupNotification](nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroupNotification](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroupNotification](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](../../nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.
