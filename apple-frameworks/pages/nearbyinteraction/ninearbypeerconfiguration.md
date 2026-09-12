> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbypeerconfiguration](https://developer.apple.com/documentation/nearbyinteraction/ninearbypeerconfiguration)

# NINearbyPeerConfiguration (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A configuration that enables interaction between iPhone or Apple Watch devices.

## Declaration

```swift
class NINearbyPeerConfiguration
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

A peer interaction session enables two Apple devices to share their respective distance and direction through the device’s Ultra Wideband (UWB) chip. To start a peer interaction session, create a [NINearbyPeerConfiguration](ninearbypeerconfiguration.md) instance and pass it to an [NISession](nisession.md) instance with the [run(\_:)](nisession/run%28__%29.md) function.

For an example app that demonstrates this configuration, see [Implementing interactions between users in close proximity](implementing-interactions-between-users-in-close-proximity.md).

<a id="Enable-Precision-Finding-for-stationary-objects"></a>

### Enable Precision Finding for stationary objects

In iOS 16, you can combine the visual spatial power of ARKit with the radio sensitivity of the UWB chip to locate stationary nearby objects with considerable precision. To do that, set [isCameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md) to `true` and optionally provide the interaction session with an [ARSession](../arkit/arsession.md) instance through [setARSession(\_:)](nisession/setarsession%28__%29.md) before running the session. Together, the UWB chip and ARKit’s assistance enable Nearby Interaction to provide the same Precision Finding capabilities present in AirTag.

## Topics

### Creating a configuration

- [init(peerToken:)](ninearbypeerconfiguration/init%28peertoken_%29.md): Creates a configuration for interaction between devices, including iPhone and Apple Watch.

### Accessing the discovery token

- [peerDiscoveryToken](ninearbypeerconfiguration/peerdiscoverytoken.md): A value that uniquely identifies the other peer in the interaction session.

### Subclassing a configuration

- [NIConfiguration](niconfiguration.md): An abstract base class for interaction configurations.

### Enabling Camera Assistance

- [isCameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md): A Boolean value that combines the spatial awareness of ARKit with Nearby Interaction to improve the accuracy of a nearby object’s position.

### Checking distance measurement capability

- [isExtendedDistanceMeasurementEnabled](ninearbypeerconfiguration/isextendeddistancemeasurementenabled.md): A Boolean value that indicates whether both peers can use extended distance measurement for this Nearby Interaction session instance.

## Relationships

### Inherits From

- [NIConfiguration](niconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Phone interaction

- [Implementing interactions between users in close proximity](implementing-interactions-between-users-in-close-proximity.md): Enable devices to access relative positioning information.
- [Discovering peers with Multipeer Connectivity](discovering-peers-with-multipeer-connectivity.md): Exchange discovery tokens over the local network.
- [Extending advanced direction finding and ranging](extending-advanced-direction-finding-and-ranging.md): Extend your app’s direction finding capabilities with data from Ultra Wideband devices.

# NINearbyPeerConfiguration (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A configuration that enables interaction between iPhone or Apple Watch devices.

## Declaration

```objectivec
@interface NINearbyPeerConfiguration : NIConfiguration
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

A peer interaction session enables two Apple devices to share their respective distance and direction through the device’s Ultra Wideband (UWB) chip. To start a peer interaction session, create a [NINearbyPeerConfiguration](ninearbypeerconfiguration.md) instance and pass it to an [NISession](nisession.md) instance with the [runWithConfiguration:](nisession/run%28__%29.md) function.

For an example app that demonstrates this configuration, see [Implementing interactions between users in close proximity](implementing-interactions-between-users-in-close-proximity.md).

<a id="Enable-Precision-Finding-for-stationary-objects"></a>

### Enable Precision Finding for stationary objects

In iOS 16, you can combine the visual spatial power of ARKit with the radio sensitivity of the UWB chip to locate stationary nearby objects with considerable precision. To do that, set [cameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md) to `true` and optionally provide the interaction session with an [ARSession](../arkit/arsession.md) instance through [setARSession:](nisession/setarsession%28__%29.md) before running the session. Together, the UWB chip and ARKit’s assistance enable Nearby Interaction to provide the same Precision Finding capabilities present in AirTag.

## Topics

### Creating a configuration

- [initWithPeerToken:](ninearbypeerconfiguration/init%28peertoken_%29.md): Creates a configuration for interaction between devices, including iPhone and Apple Watch.

### Accessing the discovery token

- [peerDiscoveryToken](ninearbypeerconfiguration/peerdiscoverytoken.md): A value that uniquely identifies the other peer in the interaction session.

### Subclassing a configuration

- [NIConfiguration](niconfiguration.md): An abstract base class for interaction configurations.

### Enabling Camera Assistance

- [cameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md): A Boolean value that combines the spatial awareness of ARKit with Nearby Interaction to improve the accuracy of a nearby object’s position.

### Checking distance measurement capability

- [extendedDistanceMeasurementEnabled](ninearbypeerconfiguration/isextendeddistancemeasurementenabled.md): A Boolean value that indicates whether both peers can use extended distance measurement for this Nearby Interaction session instance.

## Relationships

### Inherits From

- [NIConfiguration](niconfiguration.md)

## See Also

### Phone interaction

- [Implementing interactions between users in close proximity](implementing-interactions-between-users-in-close-proximity.md): Enable devices to access relative positioning information.
- [Discovering peers with Multipeer Connectivity](discovering-peers-with-multipeer-connectivity.md): Exchange discovery tokens over the local network.
- [Extending advanced direction finding and ranging](extending-advanced-direction-finding-and-ranging.md): Extend your app’s direction finding capabilities with data from Ultra Wideband devices.
