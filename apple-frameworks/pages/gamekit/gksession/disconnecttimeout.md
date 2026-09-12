> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/disconnecttimeout](https://developer.apple.com/documentation/gamekit/gksession/disconnecttimeout)

# disconnectTimeout (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.

## Declaration

```swift
var disconnectTimeout: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The timeout is the waiting period before disconnecting a peer from the session. If a peer is disconnected, the delegate’s [session(\_:peer:didChange:)](../gksessiondelegate/session%28__peer_didchange_%29.md) method is called.

## See Also

### Working with Connected Peers

- [setDataReceiveHandler(\_:withContext:)](setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [send(\_:toPeers:with:)](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendData(toAllPeers:with:)](senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectFromAllPeers()](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeer(fromAllPeers:)](disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.

# disconnectTimeout (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.

## Declaration

```objectivec
@property (assign) NSTimeInterval disconnectTimeout;
```

<a id="Discussion"></a>

## Discussion

The timeout is the waiting period before disconnecting a peer from the session. If a peer is disconnected, the delegate’s [session:peer:didChangeState:](../gksessiondelegate/session%28__peer_didchange_%29.md) method is called.

## See Also

### Working with Connected Peers

- [setDataReceiveHandler:withContext:](setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [sendData:toPeers:withDataMode:error:](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendDataToAllPeers:withDataMode:error:](senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectFromAllPeers](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeerFromAllPeers:](disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.
