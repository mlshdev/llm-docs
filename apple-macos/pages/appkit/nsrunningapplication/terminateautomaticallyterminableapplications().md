> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/terminateautomaticallyterminableapplications()](https://developer.apple.com/documentation/appkit/nsrunningapplication/terminateautomaticallyterminableapplications())

# terminateAutomaticallyTerminableApplications() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Terminates invisibly running applications as if triggered by system memory pressure.

## Declaration

```swift
class func terminateAutomaticallyTerminableApplications()
```

<a id="Discussion"></a>

## Discussion

This method is intended for installer applications and similar applications to ensure that nothing is unexpectedly relying on the files they’re replacing.

## See Also

### Terminating applications

- [forceTerminate()](forceterminate%28%29.md): Attempts to force the receiver to quit.
- [terminate()](terminate%28%29.md): Attempts to quit the receiver normally.
- [isTerminated](isterminated.md): Indicates that the receiver’s application has terminated.

# terminateAutomaticallyTerminableApplications (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Terminates invisibly running applications as if triggered by system memory pressure.

## Declaration

```objectivec
+ (void) terminateAutomaticallyTerminableApplications;
```

<a id="Discussion"></a>

## Discussion

This method is intended for installer applications and similar applications to ensure that nothing is unexpectedly relying on the files they’re replacing.

## See Also

### Terminating applications

- [forceTerminate](forceterminate%28%29.md): Attempts to force the receiver to quit.
- [terminate](terminate%28%29.md): Attempts to quit the receiver normally.
- [terminated](isterminated.md): Indicates that the receiver’s application has terminated.
