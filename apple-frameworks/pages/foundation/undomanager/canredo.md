> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/canredo](https://developer.apple.com/documentation/foundation/undomanager/canredo)

# canRedo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the manager has any actions to redo.

## Declaration

```swift
var canRedo: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the manager has any actions to redo, otherwise [false](https://developer.apple.com/documentation/swift/false).

Because any undo operation registered clears the redo stack, this method posts an [NSUndoManagerCheckpoint](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) to allow clients to apply their pending operations before testing the redo stack.

## See Also

### Related Documentation

- [redo()](redo%28%29.md): Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.

### Checking undo ability

- [canUndo](canundo.md): A Boolean value that indicates whether the manager has any actions to undo.

# canRedo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the manager has any actions to redo.

## Declaration

```objectivec
@property (readonly) BOOL canRedo;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the manager has any actions to redo, otherwise [false](https://developer.apple.com/documentation/swift/false).

Because any undo operation registered clears the redo stack, this method posts an [NSUndoManagerCheckpointNotification](../nsnotification/name-swift.struct/nsundomanagercheckpoint.md) to allow clients to apply their pending operations before testing the redo stack.

## See Also

### Related Documentation

- [redo](redo%28%29.md): Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.

### Checking undo ability

- [canUndo](canundo.md): A Boolean value that indicates whether the manager has any actions to undo.
