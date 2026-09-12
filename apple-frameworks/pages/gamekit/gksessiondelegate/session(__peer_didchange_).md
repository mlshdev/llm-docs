> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessiondelegate/session(_:peer:didchange:)](https://developer.apple.com/documentation/gamekit/gksessiondelegate/session(_:peer:didchange:))

# session(\_:peer:didChange:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Received by the delegate when a peer changes state.

## Declaration

```swift
optional func session(_ session: GKSession, peer peerID: String, didChange state: GKPeerConnectionState)
```

## Parameters

- `session`: The session that received the update.
- `peerID`: A string that identifies the peer.
- `state`: The state the peer changed to.

<a id="Discussion"></a>

## Discussion

A session calls this method whenever a visible peer changes it state relative to itself. The action your delegate should take depends on what state the peer moved to.

- When a peer first becomes visible to the session, it appears with a state of GKPeerStateAvailable.  Your application should show this peer in its user interface. If the peer changes its state to GKPeerStateUnavailable, it no longer accepts connection requests and your application should remove it from the user interface.
- The delegate should ignore GKPeerStateConnecting changes and implement the [session(\_:didReceiveConnectionRequestFromPeer:)](session%28__didreceiveconnectionrequestfrompeer_%29.md) method instead.
- When a peer is connected (GKPeerStateConnected), your application may send data to the peer and receive data from the peer. If a connection to a peer is lost or if the peer deliberately disconnects (GKPeerStateDisconnected), your application should stop sending messages to this peer.

> **Important**

>  If a [GKPeerPickerController](../gkpeerpickercontroller.md) object is being used to configure the session, the controller handles updates for the GKPeerStateAvailable, GKPeerStateUnavailable, and GKPeerStateConnected states. Your delegate can ignore state changes if the peer picker dialog is in use.

# session:peer:didChangeState: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Received by the delegate when a peer changes state.

## Declaration

```objectivec
- (void) session:(GKSession *) session peer:(NSString *) peerID didChangeState:(GKPeerConnectionState) state;
```

## Parameters

- `session`: The session that received the update.
- `peerID`: A string that identifies the peer.
- `state`: The state the peer changed to.

<a id="Discussion"></a>

## Discussion

A session calls this method whenever a visible peer changes it state relative to itself. The action your delegate should take depends on what state the peer moved to.

- When a peer first becomes visible to the session, it appears with a state of GKPeerStateAvailable.  Your application should show this peer in its user interface. If the peer changes its state to GKPeerStateUnavailable, it no longer accepts connection requests and your application should remove it from the user interface.
- The delegate should ignore GKPeerStateConnecting changes and implement the [session:didReceiveConnectionRequestFromPeer:](session%28__didreceiveconnectionrequestfrompeer_%29.md) method instead.
- When a peer is connected (GKPeerStateConnected), your application may send data to the peer and receive data from the peer. If a connection to a peer is lost or if the peer deliberately disconnects (GKPeerStateDisconnected), your application should stop sending messages to this peer.

> **Important**

>  If a [GKPeerPickerController](../gkpeerpickercontroller.md) object is being used to configure the session, the controller handles updates for the GKPeerStateAvailable, GKPeerStateUnavailable, and GKPeerStateConnected states. Your delegate can ignore state changes if the peer picker dialog is in use.
