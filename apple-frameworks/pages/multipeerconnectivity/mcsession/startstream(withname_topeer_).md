> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/startstream(withname:topeer:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/startstream(withname:topeer:))

# startStream(withName:toPeer:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Opens a byte stream to a nearby peer.

> Use Network Framework instead

## Declaration

```swift
func startStream(withName streamName: String, toPeer peerID: MCPeerID) throws -> OutputStream
```

## Parameters

- `streamName`: A name for the stream. This name is provided to the nearby peer.
- `peerID`: The ID of the nearby peer.

<a id="return-value"></a>

## Return Value

In Swift, an output stream instance. In Objective-C, an output stream object upon success or `nil` if a stream could not be established.

<a id="Discussion"></a>

## Discussion

This method is nonblocking.

For more information about performing networking with input and output streams, read [Networking Programming Topics](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/NetworkingTopics/Introduction/Introduction.html#//apple_ref/doc/uid/TP40012488).

## See Also

### Sending Data and Resources

- [send(\_:toPeers:with:)](send%28__topeers_with_%29.md): Deprecated. Sends a message to nearby peers.
- [sendResource(at:withName:toPeer:withCompletionHandler:)](sendresource%28at_withname_topeer_withcompletionhandler_%29.md): Deprecated. Sends the contents of a URL to a peer.

# startStreamWithName:toPeer:error: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Opens a byte stream to a nearby peer.

> Use Network Framework instead

## Declaration

```objectivec
- (NSOutputStream *) startStreamWithName:(NSString *) streamName toPeer:(MCPeerID *) peerID error:(NSError **) error;
```

## Parameters

- `streamName`: A name for the stream. This name is provided to the nearby peer.
- `peerID`: The ID of the nearby peer.
- `error`: The address of an `NSError` pointer where an error object should be stored if something goes wrong.

<a id="return-value"></a>

## Return Value

In Swift, an output stream instance. In Objective-C, an output stream object upon success or `nil` if a stream could not be established.

<a id="Discussion"></a>

## Discussion

This method is nonblocking.

For more information about performing networking with input and output streams, read [Networking Programming Topics](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/NetworkingTopics/Introduction/Introduction.html#//apple_ref/doc/uid/TP40012488).

## See Also

### Sending Data and Resources

- [sendData:toPeers:withMode:error:](send%28__topeers_with_%29.md): Deprecated. Sends a message to nearby peers.
- [sendResourceAtURL:withName:toPeer:withCompletionHandler:](sendresource%28at_withname_topeer_withcompletionhandler_%29.md): Deprecated. Sends the contents of a URL to a peer.
