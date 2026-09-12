> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyaccessoryconfiguration/accessorydiscoverytoken](https://developer.apple.com/documentation/nearbyinteraction/ninearbyaccessoryconfiguration/accessorydiscoverytoken)

# accessoryDiscoveryToken (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

An identifier for the accessory in a session.

## Declaration

```swift
@NSCopying var accessoryDiscoveryToken: NIDiscoveryToken { get }
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The value of this property refers to a specific peer accessory. To match [distance](../ninearbyobject/distance-676dm.md) updates your app receives through a session with a peer using [session(\_:didUpdate:)](../nisessiondelegate/session%28__didupdate_%29.md), compare the argument object’s discovery token with the value of this property.

Subsequent sessions with the same peer device produce a different value for this property. For user privacy, the system assigns a random number unique to the session that prevents the correlation of this property with a particular device.

# accessoryDiscoveryToken (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

An identifier for the accessory in a session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NIDiscoveryToken * accessoryDiscoveryToken;
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The value of this property refers to a specific peer accessory. To match [distance](../ninearbyobject/distance-676dm.md) updates your app receives through a session with a peer using [session:didUpdateNearbyObjects:](../nisessiondelegate/session%28__didupdate_%29.md), compare the argument object’s discovery token with the value of this property.

Subsequent sessions with the same peer device produce a different value for this property. For user privacy, the system assigns a random number unique to the session that prevents the correlation of this property with a particular device.
