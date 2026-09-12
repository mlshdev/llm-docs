> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/connectpeer(_:withnearbyconnectiondata:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/connectpeer(_:withnearbyconnectiondata:))

# connectPeer(\_:withNearbyConnectionData:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+

Call this method to connect a peer to the session when using your own service discovery code instead of an  `MCNearbyServiceBrowser` or `MCBrowserViewController` object.

## Declaration

```swift
func connectPeer(_ peerID: MCPeerID, withNearbyConnectionData data: Data)
```

## Parameters

- `peerID`: The peer ID object obtained from the nearby peer.
- `data`: The connection data object obtained from the nearby peer.

<a id="Discussion"></a>

## Discussion

Call this method to connect to peers when you are using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object. For more information, see the [Managing Peers Manually](../mcsession.md#Managing-Peers-Manually) section in the overview of the `MCSession` class reference.

## See Also

### Managing Peers Manually

- [cancelConnectPeer(\_:)](cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [connectedPeers](connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.
- [nearbyConnectionData(forPeer:withCompletionHandler:)](nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.

# connectPeer:withNearbyConnectionData: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+

Call this method to connect a peer to the session when using your own service discovery code instead of an  `MCNearbyServiceBrowser` or `MCBrowserViewController` object.

## Declaration

```objectivec
- (void) connectPeer:(MCPeerID *) peerID withNearbyConnectionData:(NSData *) data;
```

## Parameters

- `peerID`: The peer ID object obtained from the nearby peer.
- `data`: The connection data object obtained from the nearby peer.

<a id="Discussion"></a>

## Discussion

Call this method to connect to peers when you are using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object. For more information, see the [Managing Peers Manually](../mcsession.md#Managing-Peers-Manually) section in the overview of the `MCSession` class reference.

## See Also

### Managing Peers Manually

- [cancelConnectPeer:](cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [connectedPeers](connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.
- [nearbyConnectionDataForPeer:withCompletionHandler:](nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.
