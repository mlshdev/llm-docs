> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/cancelconnectpeer(_:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/cancelconnectpeer(_:))

# cancelConnectPeer(\_:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+

Cancels an attempt to connect to a peer.

## Declaration

```swift
func cancelConnectPeer(_ peerID: MCPeerID)
```

## Parameters

- `peerID`: The ID of the nearby peer.

<a id="Discussion"></a>

## Discussion

Call this method to cancel connections to peers when you are using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object. It should be called in two situations:

- If your app calls [connectPeer(\_:withNearbyConnectionData:)](connectpeer%28__withnearbyconnectiondata_%29.md) and later needs to cancel the connection attempt
- If your app has obtained nearby connection data for a peer but you decide not to connect to the peer

For more information, see the [Managing Peers Manually](../mcsession.md#Managing-Peers-Manually) section in the overview of the `MCSession` class reference.

## See Also

### Managing Peers Manually

- [connectPeer(\_:withNearbyConnectionData:)](connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [connectedPeers](connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.
- [nearbyConnectionData(forPeer:withCompletionHandler:)](nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.

# cancelConnectPeer: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+

Cancels an attempt to connect to a peer.

## Declaration

```objectivec
- (void) cancelConnectPeer:(MCPeerID *) peerID;
```

## Parameters

- `peerID`: The ID of the nearby peer.

<a id="Discussion"></a>

## Discussion

Call this method to cancel connections to peers when you are using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object. It should be called in two situations:

- If your app calls [connectPeer:withNearbyConnectionData:](connectpeer%28__withnearbyconnectiondata_%29.md) and later needs to cancel the connection attempt
- If your app has obtained nearby connection data for a peer but you decide not to connect to the peer

For more information, see the [Managing Peers Manually](../mcsession.md#Managing-Peers-Manually) section in the overview of the `MCSession` class reference.

## See Also

### Managing Peers Manually

- [connectPeer:withNearbyConnectionData:](connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [connectedPeers](connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.
- [nearbyConnectionDataForPeer:withCompletionHandler:](nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.
