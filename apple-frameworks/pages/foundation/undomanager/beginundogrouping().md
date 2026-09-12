> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/beginundogrouping()](https://developer.apple.com/documentation/foundation/undomanager/beginundogrouping())

# beginUndoGrouping() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the beginning of an undo group.

## Declaration

```swift
func beginUndoGrouping()
```

<a id="Discussion"></a>

## Discussion

All individual undo operations before a subsequent [endUndoGrouping()](endundogrouping%28%29.md) message are grouped together and reversed by a later [undo()](undo%28%29.md) message. By default undo groups are begun automatically at the start of the event loop, but you can begin your own undo groups with this method, and nest them within other groups.

This method posts an [NSUndoManagerCheckpoint](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) unless a top-level undo is in progress. It posts an [NSUndoManagerDidOpenUndoGroup](../nsnotification/name-swift.struct/nsundomanagerdidopenundogroup.md) if a new group was successfully created.

## See Also

### Creating undo groups

- [endUndoGrouping()](endundogrouping%28%29.md): Marks the end of an undo group.
- [groupsByEvent](groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.
- [groupingLevel](groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.

# beginUndoGrouping (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the beginning of an undo group.

## Declaration

```objectivec
- (void) beginUndoGrouping;
```

<a id="Discussion"></a>

## Discussion

All individual undo operations before a subsequent [endUndoGrouping](endundogrouping%28%29.md) message are grouped together and reversed by a later [undo](undo%28%29.md) message. By default undo groups are begun automatically at the start of the event loop, but you can begin your own undo groups with this method, and nest them within other groups.

This method posts an [NSUndoManagerCheckpointNotification](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) unless a top-level undo is in progress. It posts an [NSUndoManagerDidOpenUndoGroupNotification](../nsnotification/name-swift.struct/nsundomanagerdidopenundogroup.md) if a new group was successfully created.

## See Also

### Creating undo groups

- [endUndoGrouping](endundogrouping%28%29.md): Marks the end of an undo group.
- [groupsByEvent](groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.
- [groupingLevel](groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.
