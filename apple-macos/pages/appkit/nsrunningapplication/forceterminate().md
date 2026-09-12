> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/forceterminate()](https://developer.apple.com/documentation/appkit/nsrunningapplication/forceterminate())

# forceTerminate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to force the receiver to quit.

## Declaration

```swift
func forceTerminate() -> Bool
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the application successfully terminated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method will return [false](https://developer.apple.com/documentation/swift/false) if the application is no longer running when the `forceTerminate` message is sent to the receiver.

This method may return before the receiver exits; you should observe the terminated property to determine when the application terminates.

Sandboxed applications can’t use this method to terminate other applciations. This method returns [false](https://developer.apple.com/documentation/swift/false) when called from a sandboxed application.

## See Also

### Terminating applications

- [terminate()](terminate%28%29.md): Attempts to quit the receiver normally.
- [isTerminated](isterminated.md): Indicates that the receiver’s application has terminated.
- [terminateAutomaticallyTerminableApplications()](terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.

# forceTerminate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to force the receiver to quit.

## Declaration

```objectivec
- (BOOL) forceTerminate;
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the application successfully terminated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method will return [false](https://developer.apple.com/documentation/swift/false) if the application is no longer running when the `forceTerminate` message is sent to the receiver.

This method may return before the receiver exits; you should observe the terminated property to determine when the application terminates.

Sandboxed applications can’t use this method to terminate other applciations. This method returns [false](https://developer.apple.com/documentation/swift/false) when called from a sandboxed application.

## See Also

### Terminating applications

- [terminate](terminate%28%29.md): Attempts to quit the receiver normally.
- [terminated](isterminated.md): Indicates that the receiver’s application has terminated.
- [terminateAutomaticallyTerminableApplications](terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.
