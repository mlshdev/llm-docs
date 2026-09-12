> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidopenundogroup](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidopenundogroup)

# NSUndoManagerDidOpenUndoGroup (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted whenever an undo manager opens an undo group.

## Declaration

```swift
static let NSUndoManagerDidOpenUndoGroup: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification originates in the implementation of the [beginUndoGrouping()](../../undomanager/beginundogrouping%28%29.md) method.

The notification object is the `NSUndoManager` object. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the actor, thread, or dispatch queue that calls [beginUndoGrouping()](../../undomanager/beginundogrouping%28%29.md).

## See Also

### Working with notifications

- [NSUndoManagerWillUndoChange](nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChange](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChange](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChange](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpoint](nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerWillCloseUndoGroup](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroup](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](../../nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.

# NSUndoManagerDidOpenUndoGroupNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted whenever an undo manager opens an undo group.

## Declaration

```objectivec
extern NSNotificationName const NSUndoManagerDidOpenUndoGroupNotification;
```

<a id="Discussion"></a>

## Discussion

This notification originates in the implementation of the [beginUndoGrouping](../../undomanager/beginundogrouping%28%29.md) method.

The notification object is the `NSUndoManager` object. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the actor, thread, or dispatch queue that calls [beginUndoGrouping](../../undomanager/beginundogrouping%28%29.md).

## See Also

### Working with notifications

- [NSUndoManagerWillUndoChangeNotification](nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChangeNotification](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChangeNotification](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChangeNotification](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpointNotification](nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerWillCloseUndoGroupNotification](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroupNotification](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](../../nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.
