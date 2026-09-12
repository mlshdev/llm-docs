> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/send(_:topeers:with:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/send(_:topeers:with:))

# send(\_:toPeers:with:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends a message to nearby peers.

> Use Network Framework instead

## Declaration

```swift
func send(_ data: Data, toPeers peerIDs: [MCPeerID], with mode: MCSessionSendDataMode) throws
```

## Parameters

- `data`: An instance containing the message to send.
- `peerIDs`: An array of peer ID instances representing the peers that should receive the message.
- `mode`: The transmission mode to use (reliable or unreliable delivery).

<a id="Discussion"></a>

## Discussion

This method is asynchronous (nonblocking).

On the recipient device, the session instance calls its delegate instance’s [session(\_:didReceive:fromPeer:)](../mcsessiondelegate/session%28__didreceive_frompeer_%29.md) method with the message after it has been fully received.

## See Also

### Sending Data and Resources

- [sendResource(at:withName:toPeer:withCompletionHandler:)](sendresource%28at_withname_topeer_withcompletionhandler_%29.md): Deprecated. Sends the contents of a URL to a peer.
- [startStream(withName:toPeer:)](startstream%28withname_topeer_%29.md): Deprecated. Opens a byte stream to a nearby peer.

# sendData:toPeers:withMode:error: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends a message to nearby peers.

> Use Network Framework instead

## Declaration

```objectivec
- (BOOL) sendData:(NSData *) data toPeers:(NSArray<MCPeerID *> *) peerIDs withMode:(MCSessionSendDataMode) mode error:(NSError **) error;
```

## Parameters

- `data`: An instance containing the message to send.
- `peerIDs`: An array of peer ID instances representing the peers that should receive the message.
- `mode`: The transmission mode to use (reliable or unreliable delivery).
- `error`: In Objective-C, the address of an `NSError` pointer where an error object should be stored upon error.

<a id="return-value"></a>

## Return Value

In Objective-C, [true](https://developer.apple.com/documentation/swift/true) if the message was successfully enqueued for delivery, or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

This method is asynchronous (nonblocking).

On the recipient device, the session instance calls its delegate instance’s [session:didReceiveData:fromPeer:](../mcsessiondelegate/session%28__didreceive_frompeer_%29.md) method with the message after it has been fully received.

## See Also

### Sending Data and Resources

- [sendResourceAtURL:withName:toPeer:withCompletionHandler:](sendresource%28at_withname_topeer_withcompletionhandler_%29.md): Deprecated. Sends the contents of a URL to a peer.
- [startStreamWithName:toPeer:error:](startstream%28withname_topeer_%29.md): Deprecated. Opens a byte stream to a nearby peer.
