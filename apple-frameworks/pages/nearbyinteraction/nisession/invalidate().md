> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/invalidate()](https://developer.apple.com/documentation/nearbyinteraction/nisession/invalidate())

# invalidate() (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Stops a running session.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

When an app calls this function, NI invokes [session(\_:didRemove:reason:)](../nisessiondelegate/session%28__didremove_reason_%29.md) on the peer’s side and passes in the `reason` [NINearbyObject.RemovalReason.peerEnded](../ninearbyobject/removalreason/peerended.md). The app can’t restart invalid sessions.

## See Also

### Managing life cycle

- [delegate](delegate.md): An object that the framework notifies of session events.
- [pause()](pause%28%29.md): Stops sending distance and direction updates to the peer.

# invalidate (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Stops a running session.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

When an app calls this function, NI invokes [session:didRemoveNearbyObjects:withReason:](../nisessiondelegate/session%28__didremove_reason_%29.md) on the peer’s side and passes in the `reason` [NINearbyObjectRemovalReasonPeerEnded](../ninearbyobject/removalreason/peerended.md). The app can’t restart invalid sessions.

## See Also

### Managing life cycle

- [delegate](delegate.md): An object that the framework notifies of session events.
- [pause](pause%28%29.md): Stops sending distance and direction updates to the peer.
