> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/removalreason/timeout](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/removalreason/timeout)

# NINearbyObject.RemovalReason.timeout (Swift)

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

NI timed out the session.

## Declaration

```swift
case timeout
```

<a id="Discussion"></a>

## Discussion

The framework times out a session if the peer user closes the app, or if too much time passes in a suspended state (see [sessionWasSuspended(\_:)](../../nisessiondelegate/sessionwassuspended%28__%29.md)). NI may also time out a session to save device resources.

An app must watch for timed-out peers. If the app wishes to continue interaction with a timed-out peer device, the app must begin a new session.

## See Also

### Reasons

- [NINearbyObject.RemovalReason.peerEnded](peerended.md): The peer ended the session.
- [NINearbyObject.RemovalReason.peerEnded](peerended.md): The peer ended the session.

# NINearbyObjectRemovalReasonTimeout (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

NI timed out the session.

## Declaration

```objectivec
NINearbyObjectRemovalReasonTimeout
```

<a id="Discussion"></a>

## Discussion

The framework times out a session if the peer user closes the app, or if too much time passes in a suspended state (see [sessionWasSuspended:](../../nisessiondelegate/sessionwassuspended%28__%29.md)). NI may also time out a session to save device resources.

An app must watch for timed-out peers. If the app wishes to continue interaction with a timed-out peer device, the app must begin a new session.

## See Also

### Reasons

- [NINearbyObjectRemovalReasonPeerEnded](peerended.md): The peer ended the session.
- [NINearbyObjectRemovalReasonPeerEnded](peerended.md): The peer ended the session.
