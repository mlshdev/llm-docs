> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/activationstate](https://developer.apple.com/documentation/watchconnectivity/wcsession/activationstate)

# activationState (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

The current activation state of the session.

## Declaration

```swift
var activationState: WCSessionActivationState { get }
```

<a id="Discussion"></a>

## Discussion

Check the value of this property before attempting to transfer data or files using the methods of this object. When the value is [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md) you may initiate the transfer of data and files normally. If it is any other value, do not initiate any transfers.

The value of this property is valid even when the session itself is not activated, so you can access it at any time. Use the  [sessionDidBecomeInactive(\_:)](../wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) and [sessionDidDeactivate(\_:)](../wcsessiondelegate/sessiondiddeactivate%28__%29.md) methods of your session delegate to monitor changes in the session’s activation state. You can also use key-value observing to monitor changes to this property.

## See Also

### Configuring the Session

- [delegate](delegate.md): The delegate for the session object
- [activate()](activate%28%29.md): Activates the session asynchronously.

# activationState (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

The current activation state of the session.

## Declaration

```objectivec
@property (nonatomic, readonly) WCSessionActivationState activationState;
```

<a id="Discussion"></a>

## Discussion

Check the value of this property before attempting to transfer data or files using the methods of this object. When the value is [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md) you may initiate the transfer of data and files normally. If it is any other value, do not initiate any transfers.

The value of this property is valid even when the session itself is not activated, so you can access it at any time. Use the  [sessionDidBecomeInactive:](../wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) and [sessionDidDeactivate:](../wcsessiondelegate/sessiondiddeactivate%28__%29.md) methods of your session delegate to monitor changes in the session’s activation state. You can also use key-value observing to monitor changes to this property.

## See Also

### Configuring the Session

- [delegate](delegate.md): The delegate for the session object
- [activateSession](activate%28%29.md): Activates the session asynchronously.
