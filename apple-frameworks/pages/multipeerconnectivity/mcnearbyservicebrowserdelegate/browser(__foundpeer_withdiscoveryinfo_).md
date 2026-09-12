> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate/browser(_:foundpeer:withdiscoveryinfo:)](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate/browser(_:foundpeer:withdiscoveryinfo:))

# browser(\_:foundPeer:withDiscoveryInfo:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a nearby peer is found.

> Use Network Framework instead

## Declaration

```swift
func browser(_ browser: MCNearbyServiceBrowser, foundPeer peerID: MCPeerID, withDiscoveryInfo info: [String : String]?)
```

## Parameters

- `browser`: The browser object that found the nearby peer.
- `peerID`: The unique ID of the peer that was found.
- `info`: The info dictionary advertised by the discovered peer. For more information on the contents of this dictionary, see the documentation for [init(peer:discoveryInfo:serviceType:)](../mcnearbyserviceadvertiser/init%28peer_discoveryinfo_servicetype_%29.md) in [MCNearbyServiceAdvertiser](../mcnearbyserviceadvertiser.md).

<a id="Discussion"></a>

## Discussion

The peer ID provided to this delegate method can be used to invite the nearby peer to join a session.

## See Also

### Peer Discovery Delegate Methods

- [browser(\_:lostPeer:)](browser%28__lostpeer_%29.md): Deprecated. Called when a nearby peer is lost.

# browser:foundPeer:withDiscoveryInfo: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a nearby peer is found.

> Use Network Framework instead

## Declaration

```objectivec
- (void) browser:(MCNearbyServiceBrowser *) browser foundPeer:(MCPeerID *) peerID withDiscoveryInfo:(NSDictionary<NSString *,NSString *> *) info;
```

## Parameters

- `browser`: The browser object that found the nearby peer.
- `peerID`: The unique ID of the peer that was found.
- `info`: The info dictionary advertised by the discovered peer. For more information on the contents of this dictionary, see the documentation for [initWithPeer:discoveryInfo:serviceType:](../mcnearbyserviceadvertiser/init%28peer_discoveryinfo_servicetype_%29.md) in [MCNearbyServiceAdvertiser](../mcnearbyserviceadvertiser.md).

<a id="Discussion"></a>

## Discussion

The peer ID provided to this delegate method can be used to invite the nearby peer to join a session.

## See Also

### Peer Discovery Delegate Methods

- [browser:lostPeer:](browser%28__lostpeer_%29.md): Deprecated. Called when a nearby peer is lost.
