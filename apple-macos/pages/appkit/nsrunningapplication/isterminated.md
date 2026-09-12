> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/isterminated](https://developer.apple.com/documentation/appkit/nsrunningapplication/isterminated)

# isTerminated (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates that the receiver’s application has terminated.

## Declaration

```swift
var isTerminated: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of terminated is [true](https://developer.apple.com/documentation/swift/true) if the receiver’s application has terminated, otherwise [false](https://developer.apple.com/documentation/swift/false).

This property is observable using key-value observing.

## See Also

### Terminating applications

- [forceTerminate()](forceterminate%28%29.md): Attempts to force the receiver to quit.
- [terminate()](terminate%28%29.md): Attempts to quit the receiver normally.
- [terminateAutomaticallyTerminableApplications()](terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.

# terminated (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates that the receiver’s application has terminated.

## Declaration

```objectivec
@property (readonly, getter=isTerminated) BOOL terminated;
```

<a id="Discussion"></a>

## Discussion

The value of terminated is [true](https://developer.apple.com/documentation/swift/true) if the receiver’s application has terminated, otherwise [false](https://developer.apple.com/documentation/swift/false).

This property is observable using key-value observing.

## See Also

### Terminating applications

- [forceTerminate](forceterminate%28%29.md): Attempts to force the receiver to quit.
- [terminate](terminate%28%29.md): Attempts to quit the receiver normally.
- [terminateAutomaticallyTerminableApplications](terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.
