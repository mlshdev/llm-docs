> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/prepare(withinvocationtarget:)](https://developer.apple.com/documentation/foundation/undomanager/prepare(withinvocationtarget:))

# prepare(withInvocationTarget:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prepares the undo manager for invocation-based undo with the given target as the subject of the next undo operation.

## Declaration

```swift
func prepare(withInvocationTarget target: Any) -> Any
```

## Parameters

- `target`: The target of the undo operation.

  The undo manager maintains a weak reference to `target`.

<a id="return-value"></a>

## Return Value

A proxy object that forwards messages to the undo manager for recording as undo actions.

## See Also

### Registering undo operations

- [registerUndo(withTarget:handler:)](registerundo%28withtarget_handler_%29.md): Registers the specified closure to implement a single undo operation that the target receives.
- [registerUndo(withTarget:selector:object:)](registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.

# prepareWithInvocationTarget: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prepares the undo manager for invocation-based undo with the given target as the subject of the next undo operation.

## Declaration

```objectivec
- (id) prepareWithInvocationTarget:(id) target;
```

## Parameters

- `target`: The target of the undo operation.

  The undo manager maintains a weak reference to `target`.

<a id="return-value"></a>

## Return Value

A proxy object that forwards messages to the undo manager for recording as undo actions.

## See Also

### Registering undo operations

- [registerUndoWithTarget:handler:](../nsundomanager/registerundowithtarget_handler_.md): Records a single undo operation for a given target so that when the manager performs an undo, it executes the specified block.
- [registerUndoWithTarget:selector:object:](registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.
