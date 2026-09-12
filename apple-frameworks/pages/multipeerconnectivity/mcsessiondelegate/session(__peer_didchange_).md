> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessiondelegate/session(_:peer:didchange:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsessiondelegate/session(_:peer:didchange:))

# session(\_:peer:didChange:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when the state of a nearby peer changes.

> Use Network Framework instead

## Declaration

```swift
func session(_ session: MCSession, peer peerID: MCPeerID, didChange state: MCSessionState)
```

## Parameters

- `session`: The session that manages the nearby peer whose state changed.
- `peerID`: The ID of the nearby peer whose state changed.
- `state`: The new state of the nearby peer.

<a id="Discussion"></a>

## Discussion

This delegate method is called with the following state values when the nearby peer’s state changes:

- [MCSessionState.connected](../mcsessionstate/connected.md)—the nearby peer accepted the invitation and is now connected to the session.
- [MCSessionState.notConnected](../mcsessionstate/notconnected.md)—the nearby peer declined the invitation, the connection could not be established, or a previously connected peer is no longer connected.

## See Also

### MCSession Delegate Methods

- [session(\_:didReceive:fromPeer:)](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session(\_:didStartReceivingResourceWithName:fromPeer:with:)](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:)](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session(\_:didReceive:withName:fromPeer:)](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session(\_:didReceiveCertificate:fromPeer:certificateHandler:)](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.

# session:peer:didChangeState: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when the state of a nearby peer changes.

> Use Network Framework instead

## Declaration

```objectivec
- (void) session:(MCSession *) session peer:(MCPeerID *) peerID didChangeState:(MCSessionState) state;
```

## Parameters

- `session`: The session that manages the nearby peer whose state changed.
- `peerID`: The ID of the nearby peer whose state changed.
- `state`: The new state of the nearby peer.

<a id="Discussion"></a>

## Discussion

This delegate method is called with the following state values when the nearby peer’s state changes:

- [MCSessionStateConnected](../mcsessionstate/connected.md)—the nearby peer accepted the invitation and is now connected to the session.
- [MCSessionStateNotConnected](../mcsessionstate/notconnected.md)—the nearby peer declined the invitation, the connection could not be established, or a previously connected peer is no longer connected.

## See Also

### MCSession Delegate Methods

- [session:didReceiveData:fromPeer:](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session:didStartReceivingResourceWithName:fromPeer:withProgress:](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session:didFinishReceivingResourceWithName:fromPeer:atURL:withError:](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session:didReceiveStream:withName:fromPeer:](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session:didReceiveCertificate:fromPeer:certificateHandler:](session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.
