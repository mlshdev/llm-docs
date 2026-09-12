> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/delegate](https://developer.apple.com/documentation/nearbyinteraction/nisession/delegate)

# delegate (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that the framework notifies of session events.

## Declaration

```swift
weak var delegate: (any NISessionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

An app must set a delegate to receive the peer’s distance and direction information through [session(\_:didUpdate:)](../nisessiondelegate/session%28__didupdate_%29.md). The [session(\_:didInvalidateWith:)](../nisessiondelegate/session%28__didinvalidatewith_%29.md) and [session(\_:didRemove:reason:)](../nisessiondelegate/session%28__didremove_reason_%29.md) callbacks notify you when the session invalidated or removed a peer. The system may suspend an interaction session for various reasons (see [sessionWasSuspended(\_:)](../nisessiondelegate/sessionwassuspended%28__%29.md)), such as when the peer backgrounds the app.

## See Also

### Managing life cycle

- [pause()](pause%28%29.md): Stops sending distance and direction updates to the peer.
- [invalidate()](invalidate%28%29.md): Stops a running session.

# delegate (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that the framework notifies of session events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<NISessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

An app must set a delegate to receive the peer’s distance and direction information through [session:didUpdateNearbyObjects:](../nisessiondelegate/session%28__didupdate_%29.md). The [session:didInvalidateWithError:](../nisessiondelegate/session%28__didinvalidatewith_%29.md) and [session:didRemoveNearbyObjects:withReason:](../nisessiondelegate/session%28__didremove_reason_%29.md) callbacks notify you when the session invalidated or removed a peer. The system may suspend an interaction session for various reasons (see [sessionWasSuspended:](../nisessiondelegate/sessionwassuspended%28__%29.md)), such as when the peer backgrounds the app.

## See Also

### Managing life cycle

- [pause](pause%28%29.md): Stops sending distance and direction updates to the peer.
- [invalidate](invalidate%28%29.md): Stops a running session.
