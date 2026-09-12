> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/levelsofundo](https://developer.apple.com/documentation/foundation/undomanager/levelsofundo)

# levelsOfUndo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of top-level undo groups the undo manager holds.

## Declaration

```swift
var levelsOfUndo: Int { get set }
```

<a id="Discussion"></a>

## Discussion

An integer specifying the number of undo groups. A limit of `0` indicates no limit, so the manager never drops old undo groups.

When ending an undo group results in the number of groups exceeding this limit, the manager drops the oldest groups from the stack. The default is `0`.

If you change the limit to a level below the prior limit, the manager immediately drops old undo groups.

## See Also

### Related Documentation

- [enableUndoRegistration()](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Managing undo and redo stack depth

- [undoCount](undocount.md): The number of times you can invoke undo before there are no actions left to undo.
- [redoCount](redocount.md): The number of times you can invoke redo before there are no actions left to redo.

# levelsOfUndo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of top-level undo groups the undo manager holds.

## Declaration

```objectivec
@property NSUInteger levelsOfUndo;
```

<a id="Discussion"></a>

## Discussion

An integer specifying the number of undo groups. A limit of `0` indicates no limit, so the manager never drops old undo groups.

When ending an undo group results in the number of groups exceeding this limit, the manager drops the oldest groups from the stack. The default is `0`.

If you change the limit to a level below the prior limit, the manager immediately drops old undo groups.

## See Also

### Related Documentation

- [enableUndoRegistration](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Managing undo and redo stack depth

- [undoCount](undocount.md): The number of times you can invoke undo before there are no actions left to undo.
- [redoCount](redocount.md): The number of times you can invoke redo before there are no actions left to redo.
