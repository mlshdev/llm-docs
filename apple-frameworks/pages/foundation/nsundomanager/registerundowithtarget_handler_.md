> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsundomanager/registerundowithtarget:handler:](https://developer.apple.com/documentation/foundation/nsundomanager/registerundowithtarget:handler:)

# registerUndoWithTarget:handler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Records a single undo operation for a given target so that when the manager performs an undo, it executes the specified block.

## Declaration

```objectivec
- (void) registerUndoWithTarget:(id) target handler:(void (^)(id)) undoHandler;
```

## Parameters

- `target`: The target of the undo operation.
- `undoHandler`: A block to be executed when an operation is undone.

  The block takes a single argument, the target of the undo operation.

## See Also

### Registering undo operations

- [registerUndoWithTarget:selector:object:](../undomanager/registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.
- [prepareWithInvocationTarget:](../undomanager/prepare%28withinvocationtarget_%29.md): Prepares the undo manager for invocation-based undo with the given target as the subject of the next undo operation.
