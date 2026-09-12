> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/disconnectpeer(fromallpeers:)](https://developer.apple.com/documentation/gamekit/gksession/disconnectpeer(fromallpeers:))

# disconnectPeer(fromAllPeers:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Disconnects a connected peer from all peers connected to the session.

## Declaration

```swift
func disconnectPeer(fromAllPeers peerID: String!)
```

## Parameters

- `peerID`: A string identifying the peer to disconnect.

## See Also

### Working with Connected Peers

- [setDataReceiveHandler(\_:withContext:)](setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [send(\_:toPeers:with:)](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendData(toAllPeers:with:)](senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectTimeout](disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers()](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.

# disconnectPeerFromAllPeers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Disconnects a connected peer from all peers connected to the session.

## Declaration

```objectivec
- (void) disconnectPeerFromAllPeers:(NSString *) peerID;
```

## Parameters

- `peerID`: A string identifying the peer to disconnect.

## See Also

### Working with Connected Peers

- [setDataReceiveHandler:withContext:](setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [sendData:toPeers:withDataMode:error:](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendDataToAllPeers:withDataMode:error:](senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectTimeout](disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
