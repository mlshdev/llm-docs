> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/removeallactions(withtarget:)](https://developer.apple.com/documentation/foundation/undomanager/removeallactions(withtarget:))

# removeAllActions(withTarget:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears the undo and redo stacks of all operations involving the specified target as the recipient of the undo message.

## Declaration

```swift
func removeAllActions(withTarget target: Any)
```

## Parameters

- `target`: The recipient of the undo messages to be removed.

<a id="Discussion"></a>

## Discussion

Doesn’t re-enable the manager if it’s disabled.

## See Also

### Related Documentation

- [enableUndoRegistration()](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Clearing undo operations

- [removeAllActions()](removeallactions%28%29.md): Clears the undo and redo stacks and reenables the manager.

# removeAllActionsWithTarget: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears the undo and redo stacks of all operations involving the specified target as the recipient of the undo message.

## Declaration

```objectivec
- (void) removeAllActionsWithTarget:(id) target;
```

## Parameters

- `target`: The recipient of the undo messages to be removed.

<a id="Discussion"></a>

## Discussion

Doesn’t re-enable the manager if it’s disabled.

## See Also

### Related Documentation

- [enableUndoRegistration](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Clearing undo operations

- [removeAllActions](removeallactions%28%29.md): Clears the undo and redo stacks and reenables the manager.
