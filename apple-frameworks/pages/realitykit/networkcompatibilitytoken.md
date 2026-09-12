> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/networkcompatibilitytoken](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken)

# NetworkCompatibilityToken

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

An opaque token used to check the networking compatibility between two peers in a multipeer connection.

## Declaration

```swift
final class NetworkCompatibilityToken
```

<a id="overview"></a>

## Overview

[RealityKit](../realitykit.md) apps running on incompatible versions of RealityKit can’t connect and sync over the network. Use [NetworkCompatibilityToken](networkcompatibilitytoken.md) to check if two peers can synchronize [RealityKit](../realitykit.md) scenes over the network. With this class, host applications can prevent incompatible clients from joining.

Client apps send a copy of their token to the host when attempting to connect to a host app. The host deserializes that token and calls [compatibilityWith(\_:)](networkcompatibilitytoken/compatibilitywith%28__%29.md) on [NetworkCompatibilityToken](networkcompatibilitytoken.md).[local](networkcompatibilitytoken/local.md). If [compatibilityWith(\_:)](networkcompatibilitytoken/compatibilitywith%28__%29.md) returns [NetworkCompatibilityToken.Compatibility.compatible](networkcompatibilitytoken/compatibility/compatible.md), the client and host can sync and it’s safe to proceed with the connection. If [compatibilityWith(\_:)](networkcompatibilitytoken/compatibilitywith%28__%29.md) returns any other value, the client that’s attempting to connect is incompatible and should be ignored.

A client running a [MCNearbyServiceAdvertiser](../multipeerconnectivity/mcnearbyserviceadvertiser.md), for example, writes its own token into its [discoveryInfo](../multipeerconnectivity/mcnearbyserviceadvertiser/discoveryinfo.md) dictionary. When the host (running a [MCNearbyServiceBrowser](../multipeerconnectivity/mcnearbyservicebrowser.md)) discovers that client, it deserializes the client’s token from the `discoverInfo` dictionary and uses it to check compatibility before inviting the client to the [MCSession](../multipeerconnectivity/mcsession.md).

> **Note**

> Even if two peers are compatible, scene synchronization can fail for other reasons, such as packet corruption or a poor network connection.

## Topics

### Retrieving tokens

- [local](networkcompatibilitytoken/local.md): A token containing the local peer’s networking compatibility info.

### Checking compatibility

- [compatibilityWith(\_:)](networkcompatibilitytoken/compatibilitywith%28__%29.md): Compares network compatibility tokens between the local device and another device.

### Serializing tokens

- [init(from:)](networkcompatibilitytoken/init%28from_%29.md): Creates a new instance from a decoder.
- [encode(to:)](networkcompatibilitytoken/encode%28to_%29.md): Writes the token’s data into an encoder.

### Enumerations

- [NetworkCompatibilityToken.Compatibility](networkcompatibilitytoken/compatibility.md): Indicates whether two devices running RealityKit are compatible and able to connect and sync scenes.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Multipeer synchronization

- [Loading remote assets in multiplayer apps](loading-remote-assets.md): Ensure assets load on all connected peers before using them.
- [MultipeerConnectivityService](multipeerconnectivityservice.md): A service that provides scene synchronization among all peers in a multipeer connectivity session.
- [NetworkCompatibilityToken.Compatibility](networkcompatibilitytoken/compatibility.md): Indicates whether two devices running RealityKit are compatible and able to connect and sync scenes.
- [TransientComponent](transientcomponent.md): An interface for components that aren’t saved to file or cloned.
