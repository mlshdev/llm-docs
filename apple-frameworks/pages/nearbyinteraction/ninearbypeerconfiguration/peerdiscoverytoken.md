> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbypeerconfiguration/peerdiscoverytoken](https://developer.apple.com/documentation/nearbyinteraction/ninearbypeerconfiguration/peerdiscoverytoken)

# peerDiscoveryToken (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A value that uniquely identifies the other peer in the interaction session.

## Declaration

```swift
@NSCopying var peerDiscoveryToken: NIDiscoveryToken { get }
```

<a id="Discussion"></a>

## Discussion

NI sets this property to the value of the peer discovery token you pass to the [init(peerToken:)](init%28peertoken_%29.md) initializer.

# peerDiscoveryToken (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A value that uniquely identifies the other peer in the interaction session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NIDiscoveryToken * peerDiscoveryToken;
```

<a id="Discussion"></a>

## Discussion

NI sets this property to the value of the peer discovery token you pass to the [initWithPeerToken:](init%28peertoken_%29.md) initializer.
