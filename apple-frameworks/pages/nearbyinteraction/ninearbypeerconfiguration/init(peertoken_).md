> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbypeerconfiguration/init(peertoken:)](https://developer.apple.com/documentation/nearbyinteraction/ninearbypeerconfiguration/init(peertoken:))

# init(peerToken:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Creates a configuration for interaction between devices, including iPhone and Apple Watch.

## Declaration

```swift
init(peerToken: NIDiscoveryToken)
```

## Parameters

- `peerToken`: The value of another device’s discovery token. This value uniquely identifies the other peer in the interaction session.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

To acquire a peer’s discovery token, two instantiations of the app exchange their respective [discoveryToken](../nisession/discoverytoken.md) over the network using a method you choose. For a discussion that covers sharing discovery tokens using [Multipeer Connectivity](../../multipeerconnectivity.md), see [Discovering peers with Multipeer Connectivity](../discovering-peers-with-multipeer-connectivity.md).

# initWithPeerToken: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Creates a configuration for interaction between devices, including iPhone and Apple Watch.

## Declaration

```objectivec
- (instancetype) initWithPeerToken:(NIDiscoveryToken *) peerToken;
```

## Parameters

- `peerToken`: The value of another device’s discovery token. This value uniquely identifies the other peer in the interaction session.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

To acquire a peer’s discovery token, two instantiations of the app exchange their respective [discoveryToken](../nisession/discoverytoken.md) over the network using a method you choose. For a discussion that covers sharing discovery tokens using [Multipeer Connectivity](../../multipeerconnectivity.md), see [Discovering peers with Multipeer Connectivity](../discovering-peers-with-multipeer-connectivity.md).
