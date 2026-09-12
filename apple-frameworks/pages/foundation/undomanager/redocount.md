> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/redocount](https://developer.apple.com/documentation/foundation/undomanager/redocount)

# redoCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The number of times you can invoke redo before there are no actions left to redo.

## Declaration

```swift
var redoCount: Int { get }
```

## See Also

### Managing undo and redo stack depth

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.
- [undoCount](undocount.md): The number of times you can invoke undo before there are no actions left to undo.

# redoCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The number of times you can invoke redo before there are no actions left to redo.

## Declaration

```objectivec
@property (readonly) NSUInteger redoCount;
```

## See Also

### Managing undo and redo stack depth

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.
- [undoCount](undocount.md): The number of times you can invoke undo before there are no actions left to undo.
