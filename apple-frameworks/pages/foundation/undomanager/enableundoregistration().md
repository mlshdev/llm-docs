> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/enableundoregistration()](https://developer.apple.com/documentation/foundation/undomanager/enableundoregistration())

# enableUndoRegistration() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enables the recording of undo operations.

## Declaration

```swift
func enableUndoRegistration()
```

<a id="Discussion"></a>

## Discussion

Because undo registration is enabled by default, it is often used to balance a prior [disableUndoRegistration()](disableundoregistration%28%29.md) message. Undo registration isn’t actually re-enabled until an enable message balances the last disable message in effect. Raises an `NSInternalInconsistencyException` if invoked while no [disableUndoRegistration()](disableundoregistration%28%29.md) message is in effect.

## See Also

### Enabling and disabling undo

- [disableUndoRegistration()](disableundoregistration%28%29.md): Disables the recording of undo operations.
- [isUndoRegistrationEnabled](isundoregistrationenabled.md): A Boolean value that indicates whether the recording of undo operations is enabled.

# enableUndoRegistration (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enables the recording of undo operations.

## Declaration

```objectivec
- (void) enableUndoRegistration;
```

<a id="Discussion"></a>

## Discussion

Because undo registration is enabled by default, it is often used to balance a prior [disableUndoRegistration](disableundoregistration%28%29.md) message. Undo registration isn’t actually re-enabled until an enable message balances the last disable message in effect. Raises an `NSInternalInconsistencyException` if invoked while no [disableUndoRegistration](disableundoregistration%28%29.md) message is in effect.

## See Also

### Enabling and disabling undo

- [disableUndoRegistration](disableundoregistration%28%29.md): Disables the recording of undo operations.
- [undoRegistrationEnabled](isundoregistrationenabled.md): A Boolean value that indicates whether the recording of undo operations is enabled.
