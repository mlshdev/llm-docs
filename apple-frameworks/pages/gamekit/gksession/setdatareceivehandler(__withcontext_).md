> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/setdatareceivehandler(_:withcontext:)](https://developer.apple.com/documentation/gamekit/gksession/setdatareceivehandler(_:withcontext:))

# setDataReceiveHandler(\_:withContext:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the object that handles data received from other peers connected to the session.

## Declaration

```swift
func setDataReceiveHandler(_ handler: Any!, withContext context: UnsafeMutableRawPointer!)
```

## Parameters

- `handler`: The object you want the session to call when it receives data from other peers.
- `context`: Arbitrary data to be passed to each invocation of the handler.

<a id="Discussion"></a>

## Discussion

The handler must implement a method with the following signature:

```objc
- (void) receiveData:(NSData *)data fromPeer:(NSString *)peer inSession: (GKSession *)session context:(void *)context;
```

where *data* contains the bytes received from a remote peer, *peer* is a string that identifies the peer, *session* is the session that received the data, and *context* is the same context that was passed into the original call to [setDataReceiveHandler(\_:withContext:)](setdatareceivehandler%28__withcontext_%29.md).

> **Important**

>  Data received from other peers should be treated as *untrusted* data. Be sure to validate the data you receive from the session and write your code carefully to avoid security vulnerabilities. See the [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415) for more information.

## See Also

### Working with Connected Peers

- [send(\_:toPeers:with:)](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendData(toAllPeers:with:)](senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectTimeout](disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers()](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeer(fromAllPeers:)](disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.

# setDataReceiveHandler:withContext: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the object that handles data received from other peers connected to the session.

## Declaration

```objectivec
- (void) setDataReceiveHandler:(id) handler withContext:(void *) context;
```

## Parameters

- `handler`: The object you want the session to call when it receives data from other peers.
- `context`: Arbitrary data to be passed to each invocation of the handler.

<a id="Discussion"></a>

## Discussion

The handler must implement a method with the following signature:

```objc
- (void) receiveData:(NSData *)data fromPeer:(NSString *)peer inSession: (GKSession *)session context:(void *)context;
```

where *data* contains the bytes received from a remote peer, *peer* is a string that identifies the peer, *session* is the session that received the data, and *context* is the same context that was passed into the original call to [setDataReceiveHandler:withContext:](setdatareceivehandler%28__withcontext_%29.md).

> **Important**

>  Data received from other peers should be treated as *untrusted* data. Be sure to validate the data you receive from the session and write your code carefully to avoid security vulnerabilities. See the [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415) for more information.

## See Also

### Working with Connected Peers

- [sendData:toPeers:withDataMode:error:](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendDataToAllPeers:withDataMode:error:](senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectTimeout](disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeerFromAllPeers:](disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.
