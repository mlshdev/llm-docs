> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/isundoregistrationenabled](https://developer.apple.com/documentation/foundation/undomanager/isundoregistrationenabled)

# isUndoRegistrationEnabled (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the recording of undo operations is enabled.

## Declaration

```swift
var isUndoRegistrationEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if registration is enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Enabling and disabling undo

- [disableUndoRegistration()](disableundoregistration%28%29.md): Disables the recording of undo operations.
- [enableUndoRegistration()](enableundoregistration%28%29.md): Enables the recording of undo operations.

# undoRegistrationEnabled (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the recording of undo operations is enabled.

## Declaration

```objectivec
@property (readonly, getter=isUndoRegistrationEnabled) BOOL undoRegistrationEnabled;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if registration is enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Enabling and disabling undo

- [disableUndoRegistration](disableundoregistration%28%29.md): Disables the recording of undo operations.
- [enableUndoRegistration](enableundoregistration%28%29.md): Enables the recording of undo operations.
