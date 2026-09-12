> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/discoverytoken](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/discoverytoken)

# discoveryToken (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A unique identifier for a peer device in the session.

## Declaration

```swift
@NSCopying var discoveryToken: NIDiscoveryToken { get }
```

## Mentioned In

- [Discovering peers with Multipeer Connectivity](../discovering-peers-with-multipeer-connectivity.md)

<a id="Discussion"></a>

## Discussion

The value of this property refers to a specific peer device. Your session delegate receives updates for a peer’s position in your delegate’s [session(\_:didUpdate:)](../nisessiondelegate/session%28__didupdate_%29.md) implementation. To correspond the updates to an iPhone or Apple Watch among multiple peer devices with which your app interacts, compare the value of this property to the configuration’s [peerDiscoveryToken](../ninearbypeerconfiguration/peerdiscoverytoken.md). For interactions with third-party accessories, compare the value of this property to the configuration’s [accessoryDiscoveryToken](../ninearbyaccessoryconfiguration/accessorydiscoverytoken.md).

Subsequent sessions with the same peer device produce a different value for this property. For user privacy, the system assigns this property a unique, random number to prevent correlation between this property and a particular device.

# discoveryToken (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A unique identifier for a peer device in the session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NIDiscoveryToken * discoveryToken;
```

## Mentioned In

- [Discovering peers with Multipeer Connectivity](../discovering-peers-with-multipeer-connectivity.md)

<a id="Discussion"></a>

## Discussion

The value of this property refers to a specific peer device. Your session delegate receives updates for a peer’s position in your delegate’s [session:didUpdateNearbyObjects:](../nisessiondelegate/session%28__didupdate_%29.md) implementation. To correspond the updates to an iPhone or Apple Watch among multiple peer devices with which your app interacts, compare the value of this property to the configuration’s [peerDiscoveryToken](../ninearbypeerconfiguration/peerdiscoverytoken.md). For interactions with third-party accessories, compare the value of this property to the configuration’s [accessoryDiscoveryToken](../ninearbyaccessoryconfiguration/accessorydiscoverytoken.md).

Subsequent sessions with the same peer device produce a different value for this property. For user privacy, the system assigns this property a unique, random number to prevent correlation between this property and a particular device.
