> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/delegate](https://developer.apple.com/documentation/watchconnectivity/wcsession/delegate)

# delegate (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate for the session object

## Declaration

```swift
weak var delegate: (any WCSessionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You must assign an object conforming to the [WCSessionDelegate](../wcsessiondelegate.md) protocol to this property before calling the [activate()](activate%28%29.md) method. The delegate is responsible for responding to session-related changes, for processing incoming data, and for responding to errors.

For more information about implementing your delegate object, see [WCSessionDelegate](../wcsessiondelegate.md).

## See Also

### Configuring the Session

- [activate()](activate%28%29.md): Activates the session asynchronously.
- [activationState](activationstate.md): The current activation state of the session.

# delegate (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate for the session object

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<WCSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You must assign an object conforming to the [WCSessionDelegate](../wcsessiondelegate.md) protocol to this property before calling the [activateSession](activate%28%29.md) method. The delegate is responsible for responding to session-related changes, for processing incoming data, and for responding to errors.

For more information about implementing your delegate object, see [WCSessionDelegate](../wcsessiondelegate.md).

## See Also

### Configuring the Session

- [activateSession](activate%28%29.md): Activates the session asynchronously.
- [activationState](activationstate.md): The current activation state of the session.
