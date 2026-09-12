> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessiondelegate/session(_:didstartreceivingresourcewithname:frompeer:with:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsessiondelegate/session(_:didstartreceivingresourcewithname:frompeer:with:))

# session(\_:didStartReceivingResourceWithName:fromPeer:with:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the local peer began receiving a resource from a nearby peer.

> Use Network Framework instead

## Declaration

```swift
func session(_ session: MCSession, didStartReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, with progress: Progress)
```

## Parameters

- `session`: The session that started receiving the resource.
- `resourceName`: The name of the resource, as provided by the sender.
- `peerID`: The sender’s peer ID.
- `progress`: An `NSProgress` object that can be used to cancel the transfer or queried to determine how far the transfer has progressed.

## See Also

### MCSession Delegate Methods

- [session(\_:didReceive:fromPeer:)](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:)](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session(\_:didReceive:withName:fromPeer:)](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session(\_:peer:didChange:)](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session(\_:didReceiveCertificate:fromPeer:certificateHandler:)](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.

# session:didStartReceivingResourceWithName:fromPeer:withProgress: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the local peer began receiving a resource from a nearby peer.

> Use Network Framework instead

## Declaration

```objectivec
- (void) session:(MCSession *) session didStartReceivingResourceWithName:(NSString *) resourceName fromPeer:(MCPeerID *) peerID withProgress:(NSProgress *) progress;
```

## Parameters

- `session`: The session that started receiving the resource.
- `resourceName`: The name of the resource, as provided by the sender.
- `peerID`: The sender’s peer ID.
- `progress`: An `NSProgress` object that can be used to cancel the transfer or queried to determine how far the transfer has progressed.

## See Also

### MCSession Delegate Methods

- [session:didReceiveData:fromPeer:](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session:didFinishReceivingResourceWithName:fromPeer:atURL:withError:](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session:didReceiveStream:withName:fromPeer:](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session:peer:didChangeState:](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session:didReceiveCertificate:fromPeer:certificateHandler:](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.
