> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/undomanager/removeallactions()

# removeAllActions() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears the undo and redo stacks and reenables the manager.

## Declaration

```swift
func removeAllActions()
```

## See Also

### Related Documentation

- [enableUndoRegistration()](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Clearing undo operations

- [removeAllActions(withTarget:)](removeallactions%28withtarget_%29.md): Clears the undo and redo stacks of all operations involving the specified target as the recipient of the undo message.

# removeAllActions (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears the undo and redo stacks and reenables the manager.

## Declaration

```objectivec
- (void) removeAllActions;
```

## See Also

### Related Documentation

- [enableUndoRegistration](enableundoregistration%28%29.md): Enables the recording of undo operations.

### Clearing undo operations

- [removeAllActionsWithTarget:](removeallactions%28withtarget_%29.md): Clears the undo and redo stacks of all operations involving the specified target as the recipient of the undo message.
