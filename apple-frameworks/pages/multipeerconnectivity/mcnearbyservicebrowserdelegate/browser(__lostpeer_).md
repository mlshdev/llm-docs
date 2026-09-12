> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate/browser(_:lostpeer:)](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate/browser(_:lostpeer:))

# browser(\_:lostPeer:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a nearby peer is lost.

> Use Network Framework instead

## Declaration

```swift
func browser(_ browser: MCNearbyServiceBrowser, lostPeer peerID: MCPeerID)
```

## Parameters

- `browser`: The browser object that lost the nearby peer.
- `peerID`: The unique ID of the nearby peer that was lost.

<a id="Discussion"></a>

## Discussion

This callback informs your app that invitations can no longer be sent to a peer, and that your app should remove that peer from its user interface.

> **Important**

>  Because there is a delay between when a host leaves a network and when the underlying Bonjour layer detects that it has left, the fact that your app has not yet received a disappearance callback does not guarantee that it can communicate with the peer successfully.

## See Also

### Peer Discovery Delegate Methods

- [browser(\_:foundPeer:withDiscoveryInfo:)](browser%28__foundpeer_withdiscoveryinfo_%29.md): Deprecated. Called when a nearby peer is found.

# browser:lostPeer: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a nearby peer is lost.

> Use Network Framework instead

## Declaration

```objectivec
- (void) browser:(MCNearbyServiceBrowser *) browser lostPeer:(MCPeerID *) peerID;
```

## Parameters

- `browser`: The browser object that lost the nearby peer.
- `peerID`: The unique ID of the nearby peer that was lost.

<a id="Discussion"></a>

## Discussion

This callback informs your app that invitations can no longer be sent to a peer, and that your app should remove that peer from its user interface.

> **Important**

>  Because there is a delay between when a host leaves a network and when the underlying Bonjour layer detects that it has left, the fact that your app has not yet received a disappearance callback does not guarantee that it can communicate with the peer successfully.

## See Also

### Peer Discovery Delegate Methods

- [browser:foundPeer:withDiscoveryInfo:](browser%28__foundpeer_withdiscoveryinfo_%29.md): Deprecated. Called when a nearby peer is found.
