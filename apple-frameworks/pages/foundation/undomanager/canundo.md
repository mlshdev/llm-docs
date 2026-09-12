> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/canundo](https://developer.apple.com/documentation/foundation/undomanager/canundo)

# canUndo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the manager has any actions to undo.

## Declaration

```swift
var canUndo: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the manager has any actions to undo, otherwise [false](https://developer.apple.com/documentation/swift/false).

The return value doesn’t mean you can safely invoke [undo()](undo%28%29.md) or [undoNestedGroup()](undonestedgroup%28%29.md)—you may have to close open undo groups first.

## See Also

### Related Documentation

- [registerUndo(withTarget:selector:object:)](registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.
- [enableUndoRegistration()](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Checking undo ability

- [canRedo](canredo.md): A Boolean value that indicates whether the manager has any actions to redo.

# canUndo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the manager has any actions to undo.

## Declaration

```objectivec
@property (readonly) BOOL canUndo;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the manager has any actions to undo, otherwise [false](https://developer.apple.com/documentation/swift/false).

The return value doesn’t mean you can safely invoke [undo](undo%28%29.md) or [undoNestedGroup](undonestedgroup%28%29.md)—you may have to close open undo groups first.

## See Also

### Related Documentation

- [registerUndoWithTarget:selector:object:](registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.
- [enableUndoRegistration](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Checking undo ability

- [canRedo](canredo.md): A Boolean value that indicates whether the manager has any actions to redo.
