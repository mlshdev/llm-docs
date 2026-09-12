> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/terminate()](https://developer.apple.com/documentation/appkit/nsrunningapplication/terminate())

# terminate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to quit the receiver normally.

## Declaration

```swift
func terminate() -> Bool
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the request was successfully sent, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method will return [false](https://developer.apple.com/documentation/swift/false) if the application is no longer running when the terminate message is sent to the receiver.

This method may return before the receiver exits; you should observe the terminated property to determine when the application terminates.

Sandboxed applications can’t use this method to terminate other applications. This method returns [false](https://developer.apple.com/documentation/swift/false) when called from a sandboxed application.

## See Also

### Terminating applications

- [forceTerminate()](forceterminate%28%29.md): Attempts to force the receiver to quit.
- [isTerminated](isterminated.md): Indicates that the receiver’s application has terminated.
- [terminateAutomaticallyTerminableApplications()](terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.

# terminate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to quit the receiver normally.

## Declaration

```objectivec
- (BOOL) terminate;
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the request was successfully sent, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method will return [false](https://developer.apple.com/documentation/swift/false) if the application is no longer running when the terminate message is sent to the receiver.

This method may return before the receiver exits; you should observe the terminated property to determine when the application terminates.

Sandboxed applications can’t use this method to terminate other applications. This method returns [false](https://developer.apple.com/documentation/swift/false) when called from a sandboxed application.

## See Also

### Terminating applications

- [forceTerminate](forceterminate%28%29.md): Attempts to force the receiver to quit.
- [terminated](isterminated.md): Indicates that the receiver’s application has terminated.
- [terminateAutomaticallyTerminableApplications](terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.
