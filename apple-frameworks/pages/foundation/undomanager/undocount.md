> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/undocount](https://developer.apple.com/documentation/foundation/undomanager/undocount)

# undoCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The number of times you can invoke undo before there are no actions left to undo.

## Declaration

```swift
var undoCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

A nonzero value doesn’t imply you can safely invoke [undo()](undo%28%29.md) immediately, because you may have to close open undo groups first.

## See Also

### Managing undo and redo stack depth

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.
- [redoCount](redocount.md): The number of times you can invoke redo before there are no actions left to redo.

# undoCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The number of times you can invoke undo before there are no actions left to undo.

## Declaration

```objectivec
@property (readonly) NSUInteger undoCount;
```

<a id="Discussion"></a>

## Discussion

A nonzero value doesn’t imply you can safely invoke [undo](undo%28%29.md) immediately, because you may have to close open undo groups first.

## See Also

### Managing undo and redo stack depth

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.
- [redoCount](redocount.md): The number of times you can invoke redo before there are no actions left to redo.
