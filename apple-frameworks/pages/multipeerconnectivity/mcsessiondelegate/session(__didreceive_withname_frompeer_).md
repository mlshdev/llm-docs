> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessiondelegate/session(_:didreceive:withname:frompeer:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsessiondelegate/session(_:didreceive:withname:frompeer:))

# session(\_:didReceive:withName:fromPeer:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a nearby peer opens a byte stream connection to the local peer.

> Use Network Framework instead

## Declaration

```swift
func session(_ session: MCSession, didReceive stream: InputStream, withName streamName: String, fromPeer peerID: MCPeerID)
```

## Parameters

- `session`: The session through which the byte stream was opened.
- `stream`: An `NSInputStream` object that represents the local endpoint for the byte stream.
- `streamName`: The name of the stream, as provided by the originator.
- `peerID`: The peer ID of the originator of the stream.

## See Also

### MCSession Delegate Methods

- [session(\_:didReceive:fromPeer:)](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session(\_:didStartReceivingResourceWithName:fromPeer:with:)](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:)](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session(\_:peer:didChange:)](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session(\_:didReceiveCertificate:fromPeer:certificateHandler:)](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.

# session:didReceiveStream:withName:fromPeer: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a nearby peer opens a byte stream connection to the local peer.

> Use Network Framework instead

## Declaration

```objectivec
- (void) session:(MCSession *) session didReceiveStream:(NSInputStream *) stream withName:(NSString *) streamName fromPeer:(MCPeerID *) peerID;
```

## Parameters

- `session`: The session through which the byte stream was opened.
- `stream`: An `NSInputStream` object that represents the local endpoint for the byte stream.
- `streamName`: The name of the stream, as provided by the originator.
- `peerID`: The peer ID of the originator of the stream.

## See Also

### MCSession Delegate Methods

- [session:didReceiveData:fromPeer:](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session:didStartReceivingResourceWithName:fromPeer:withProgress:](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session:didFinishReceivingResourceWithName:fromPeer:atURL:withError:](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session:peer:didChangeState:](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session:didReceiveCertificate:fromPeer:certificateHandler:](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.
