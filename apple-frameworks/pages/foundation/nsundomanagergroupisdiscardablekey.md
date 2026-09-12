> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsundomanagergroupisdiscardablekey](https://developer.apple.com/documentation/foundation/nsundomanagergroupisdiscardablekey)

# NSUndoManagerGroupIsDiscardableKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.

## Declaration

```swift
let NSUndoManagerGroupIsDiscardableKey: String
```

<a id="Discussion"></a>

## Discussion

The key has a corresponding value of [true](https://developer.apple.com/documentation/swift/true), wrapped as a Boolean [NSNumber](nsnumber.md) object, if the undo group as a whole is discardable.

## See Also

### Working with notifications

- [NSUndoManagerWillUndoChange](nsnotification/name-swift.struct/nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChange](nsnotification/name-swift.struct/nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChange](nsnotification/name-swift.struct/nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChange](nsnotification/name-swift.struct/nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpoint](nsnotification/name-swift.struct/nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidOpenUndoGroup](nsnotification/name-swift.struct/nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroup](nsnotification/name-swift.struct/nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroup](nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.

# NSUndoManagerGroupIsDiscardableKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.

## Declaration

```objectivec
extern NSString * const NSUndoManagerGroupIsDiscardableKey;
```

<a id="Discussion"></a>

## Discussion

The key has a corresponding value of [true](https://developer.apple.com/documentation/swift/true), wrapped as a Boolean [NSNumber](nsnumber.md) object, if the undo group as a whole is discardable.

## See Also

### Working with notifications

- [NSUndoManagerWillUndoChangeNotification](nsnotification/name-swift.struct/nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChangeNotification](nsnotification/name-swift.struct/nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChangeNotification](nsnotification/name-swift.struct/nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChangeNotification](nsnotification/name-swift.struct/nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpointNotification](nsnotification/name-swift.struct/nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidOpenUndoGroupNotification](nsnotification/name-swift.struct/nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroupNotification](nsnotification/name-swift.struct/nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroupNotification](nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
