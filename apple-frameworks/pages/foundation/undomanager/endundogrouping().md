> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/endundogrouping()](https://developer.apple.com/documentation/foundation/undomanager/endundogrouping())

# endUndoGrouping() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the end of an undo group.

## Declaration

```swift
func endUndoGrouping()
```

<a id="Discussion"></a>

## Discussion

All individual undo operations back to the matching [beginUndoGrouping()](beginundogrouping%28%29.md) message are grouped together and reversed by a later [undo()](undo%28%29.md) or [undoNestedGroup()](undonestedgroup%28%29.md) message. Undo groups can be nested, thus providing functionality similar to nested transactions. Raises an `NSInternalInconsistencyException` if there’s no [beginUndoGrouping()](beginundogrouping%28%29.md) message in effect.

This method posts an [NSUndoManagerCheckpoint](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) and an [NSUndoManagerDidCloseUndoGroup](../nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup.md) just before the group is closed.

## See Also

### Related Documentation

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.

### Creating undo groups

- [beginUndoGrouping()](beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [groupsByEvent](groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.
- [groupingLevel](groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.

# endUndoGrouping (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the end of an undo group.

## Declaration

```objectivec
- (void) endUndoGrouping;
```

<a id="Discussion"></a>

## Discussion

All individual undo operations back to the matching [beginUndoGrouping](beginundogrouping%28%29.md) message are grouped together and reversed by a later [undo](undo%28%29.md) or [undoNestedGroup](undonestedgroup%28%29.md) message. Undo groups can be nested, thus providing functionality similar to nested transactions. Raises an `NSInternalInconsistencyException` if there’s no [beginUndoGrouping](beginundogrouping%28%29.md) message in effect.

This method posts an [NSUndoManagerCheckpointNotification](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) and an [NSUndoManagerDidCloseUndoGroupNotification](../nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup.md) just before the group is closed.

## See Also

### Related Documentation

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.

### Creating undo groups

- [beginUndoGrouping](beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [groupsByEvent](groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.
- [groupingLevel](groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.
