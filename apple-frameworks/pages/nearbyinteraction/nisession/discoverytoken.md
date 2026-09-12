> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/discoverytoken](https://developer.apple.com/documentation/nearbyinteraction/nisession/discoverytoken)

# discoveryToken (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A temporary, random identifier for a device.

## Declaration

```swift
@NSCopying var discoveryToken: NIDiscoveryToken? { get }
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)
- [Discovering peers with Multipeer Connectivity](../discovering-peers-with-multipeer-connectivity.md)

<a id="Discussion"></a>

## Discussion

NI sets this property when an app initializes a session. The value of [discoveryToken](../ninearbyobject/discoverytoken.md) is unique to the session and identifies the device that created the session.

To begin a session, an app shares this object with a nearby peer using a network technology that both devices agree to. For an example that shares discovery tokens using [Multipeer Connectivity](../../multipeerconnectivity.md), see [Implementing interactions between users in close proximity](../implementing-interactions-between-users-in-close-proximity.md).

## See Also

### Connecting to a peer device

- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [run(\_:)](run%28__%29.md): Starts a session with a nearby peer.
- [configuration](configuration.md): The configuration run by the session.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.

# discoveryToken (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A temporary, random identifier for a device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NIDiscoveryToken * discoveryToken;
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)
- [Discovering peers with Multipeer Connectivity](../discovering-peers-with-multipeer-connectivity.md)

<a id="Discussion"></a>

## Discussion

NI sets this property when an app initializes a session. The value of [discoveryToken](../ninearbyobject/discoverytoken.md) is unique to the session and identifies the device that created the session.

To begin a session, an app shares this object with a nearby peer using a network technology that both devices agree to. For an example that shares discovery tokens using [Multipeer Connectivity](../../multipeerconnectivity.md), see [Implementing interactions between users in close proximity](../implementing-interactions-between-users-in-close-proximity.md).

## See Also

### Connecting to a peer device

- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [runWithConfiguration:](run%28__%29.md): Starts a session with a nearby peer.
- [configuration](configuration.md): The configuration run by the session.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.
