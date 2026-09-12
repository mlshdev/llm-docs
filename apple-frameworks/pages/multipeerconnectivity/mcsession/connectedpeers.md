> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/connectedpeers](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/connectedpeers)

# connectedPeers (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An array of all peers that are currently connected to this session.

> Use Network Framework instead

## Declaration

```swift
var connectedPeers: [MCPeerID] { get }
```

## See Also

### Managing Peers Manually

- [connectPeer(\_:withNearbyConnectionData:)](connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [cancelConnectPeer(\_:)](cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [nearbyConnectionData(forPeer:withCompletionHandler:)](nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.

# connectedPeers (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An array of all peers that are currently connected to this session.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<MCPeerID *> * connectedPeers;
```

```objectivec
@property (atomic, readonly) NSArray<MCPeerID *> * connectedPeers;
```

## See Also

### Managing Peers Manually

- [connectPeer:withNearbyConnectionData:](connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [cancelConnectPeer:](cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [nearbyConnectionDataForPeer:withCompletionHandler:](nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.
