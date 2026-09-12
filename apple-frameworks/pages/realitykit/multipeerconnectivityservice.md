> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/multipeerconnectivityservice](https://developer.apple.com/documentation/realitykit/multipeerconnectivityservice)

# MultipeerConnectivityService

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+

A service that provides scene synchronization among all peers in a multipeer connectivity session.

## Declaration

```swift
class MultipeerConnectivityService
```

<a id="overview"></a>

## Overview

RealityKit uses this class to automatically sync scenes with other connected devices running the same app. It leverages the [Multipeer Connectivity](../multipeerconnectivity.md) framework to automatically keep the scenes of all connected devices synchronized. To sync a RealityKit scene, create a [MultipeerConnectivityService](multipeerconnectivityservice.md) object initialized with an [MCSession](../multipeerconnectivity/mcsession.md) and assign it to your scene’s [synchronizationService](scene/synchronizationservice.md) property.

```swift
let peerID = MCPeerID(displayName: UIDevice.current.name)
let session = MCSession(peer: peerID, securityIdentity: nil, encryptionPreference: .required)
arView.scene.synchronizationService = try?
MultipeerConnectivityService(session: self.session)
```

For more information on browsing for, and connecting to, other devices, see [Multipeer Connectivity](../multipeerconnectivity.md).

## Topics

### Creating a connectivity service

- [init(session:)](multipeerconnectivityservice/init%28session_%29.md): Creates a new connectivity service.

### Getting the session

- [session](multipeerconnectivityservice/session.md): The multipeer connectivity session used by the service.

### Managing ownership

- [owner(of:)](multipeerconnectivityservice/owner%28of_%29.md): Gets the device that owns a given entity.
- [giveOwnership(of:toPeer:)](multipeerconnectivityservice/giveownership%28of_topeer_%29.md): Transfers ownership of the given entity to the named network device.

### Finding an entity

- [entity(for:)](multipeerconnectivityservice/entity%28for_%29.md): Gets the entity with the given identifier.

### Pausing and resuming

- [stopSync()](multipeerconnectivityservice/stopsync%28%29.md): Stops multipeer synchronization.
- [startSync()](multipeerconnectivityservice/startsync%28%29.md): Begins multipeer synchronization.

### Configuring the session

- [setHandshake(count:timeoutMs:)](multipeerconnectivityservice/sethandshake%28count_timeoutms_%29.md): Configures handshake and timeout settings.

## Relationships

### Conforms To

- [SynchronizationService](synchronizationservice.md)

## See Also

### Multipeer synchronization

- [Loading remote assets in multiplayer apps](loading-remote-assets.md): Ensure assets load on all connected peers before using them.
- [NetworkCompatibilityToken](networkcompatibilitytoken.md): An opaque token used to check the networking compatibility between two peers in a multipeer connection.
- [NetworkCompatibilityToken.Compatibility](networkcompatibilitytoken/compatibility.md): Indicates whether two devices running RealityKit are compatible and able to connect and sync scenes.
- [TransientComponent](transientcomponent.md): An interface for components that aren’t saved to file or cloned.
