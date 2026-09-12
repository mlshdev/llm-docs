> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/activate()](https://developer.apple.com/documentation/watchconnectivity/wcsession/activate())

# activate() (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

Activates the session asynchronously.

## Declaration

```swift
func activate()
```

<a id="Discussion"></a>

## Discussion

This method executes asynchronously and calls the [session(\_:activationDidCompleteWith:error:)](../wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md) method of your delegate object upon completion. Call this method when your app is ready to communicate with its counterpart. Your cannot send or receive messages until you call this method. If the [delegate](delegate.md) property is `nil`, calling this method logs an error.

In watchOS 2.1 and earlier, this method activates the session synchronously and always results in an active session.

## See Also

### Configuring the Session

- [delegate](delegate.md): The delegate for the session object
- [activationState](activationstate.md): The current activation state of the session.

# activateSession (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Activates the session asynchronously.

## Declaration

```objectivec
- (void) activateSession;
```

<a id="Discussion"></a>

## Discussion

This method executes asynchronously and calls the [session:activationDidCompleteWithState:error:](../wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md) method of your delegate object upon completion. Call this method when your app is ready to communicate with its counterpart. Your cannot send or receive messages until you call this method. If the [delegate](delegate.md) property is `nil`, calling this method logs an error.

In watchOS 2.1 and earlier, this method activates the session synchronously and always results in an active session.

## See Also

### Configuring the Session

- [delegate](delegate.md): The delegate for the session object
- [activationState](activationstate.md): The current activation state of the session.
