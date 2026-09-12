> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/disableundoregistration()](https://developer.apple.com/documentation/foundation/undomanager/disableundoregistration())

# disableUndoRegistration() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Disables the recording of undo operations.

## Declaration

```swift
func disableUndoRegistration()
```

<a id="Discussion"></a>

## Discussion

This method disables undos recorded by [registerUndo(withTarget:selector:object:)](registerundo%28withtarget_selector_object_%29.md) or invocation-based undo.

This method can be invoked multiple times by multiple clients. The [enableUndoRegistration()](enableundoregistration%28%29.md) method must be invoked an equal number of times to re-enable undo registration.

## See Also

### Enabling and disabling undo

- [enableUndoRegistration()](enableundoregistration%28%29.md): Enables the recording of undo operations.
- [isUndoRegistrationEnabled](isundoregistrationenabled.md): A Boolean value that indicates whether the recording of undo operations is enabled.

# disableUndoRegistration (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Disables the recording of undo operations.

## Declaration

```objectivec
- (void) disableUndoRegistration;
```

<a id="Discussion"></a>

## Discussion

This method disables undos recorded by [registerUndoWithTarget:selector:object:](registerundo%28withtarget_selector_object_%29.md) or invocation-based undo.

This method can be invoked multiple times by multiple clients. The [enableUndoRegistration](enableundoregistration%28%29.md) method must be invoked an equal number of times to re-enable undo registration.

## See Also

### Enabling and disabling undo

- [enableUndoRegistration](enableundoregistration%28%29.md): Enables the recording of undo operations.
- [undoRegistrationEnabled](isundoregistrationenabled.md): A Boolean value that indicates whether the recording of undo operations is enabled.
