> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessiondelegate/session(_:didfinishreceivingresourcewithname:frompeer:at:witherror:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsessiondelegate/session(_:didfinishreceivingresourcewithname:frompeer:at:witherror:))

# session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the local peer finished receiving a resource from a nearby peer.

> Use Network Framework instead

## Declaration

```swift
func session(_ session: MCSession, didFinishReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, at localURL: URL?, withError error: (any Error)?)
```

## Parameters

- `session`: The session through which the data was received.
- `resourceName`: The name of the resource, as provided by the sender.
- `peerID`: The peer ID of the sender.
- `localURL`: An `NSURL` object that provides the location of a temporary file containing the received data.
- `error`: An error object indicating what went wrong if the file was not received successfully, or `nil`.

<a id="Discussion"></a>

## Discussion

The file referenced by `resourceURL` is a temporary file. Your app must either read the file or make a copy in a permanent location before this delegate method returns.

## See Also

### MCSession Delegate Methods

- [session(\_:didReceive:fromPeer:)](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session(\_:didStartReceivingResourceWithName:fromPeer:with:)](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session(\_:didReceive:withName:fromPeer:)](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session(\_:peer:didChange:)](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session(\_:didReceiveCertificate:fromPeer:certificateHandler:)](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.

# session:didFinishReceivingResourceWithName:fromPeer:atURL:withError: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the local peer finished receiving a resource from a nearby peer.

> Use Network Framework instead

## Declaration

```objectivec
- (void) session:(MCSession *) session didFinishReceivingResourceWithName:(NSString *) resourceName fromPeer:(MCPeerID *) peerID atURL:(NSURL *) localURL withError:(NSError *) error;
```

## Parameters

- `session`: The session through which the data was received.
- `resourceName`: The name of the resource, as provided by the sender.
- `peerID`: The peer ID of the sender.
- `localURL`: An `NSURL` object that provides the location of a temporary file containing the received data.
- `error`: An error object indicating what went wrong if the file was not received successfully, or `nil`.

<a id="Discussion"></a>

## Discussion

The file referenced by `resourceURL` is a temporary file. Your app must either read the file or make a copy in a permanent location before this delegate method returns.

## See Also

### MCSession Delegate Methods

- [session:didReceiveData:fromPeer:](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session:didStartReceivingResourceWithName:fromPeer:withProgress:](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session:didReceiveStream:withName:fromPeer:](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session:peer:didChangeState:](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session:didReceiveCertificate:fromPeer:certificateHandler:](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.
