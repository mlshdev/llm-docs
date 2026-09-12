> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessiondelegate/session(_:didreceiveconnectionrequestfrompeer:)](https://developer.apple.com/documentation/gamekit/gksessiondelegate/session(_:didreceiveconnectionrequestfrompeer:))

# session(\_:didReceiveConnectionRequestFromPeer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Received by the delegate when a remote peer wants to create a connection to the session.

## Declaration

```swift
optional func session(_ session: GKSession, didReceiveConnectionRequestFromPeer peerID: String)
```

## Parameters

- `session`: The session that received the request.
- `peerID`: A string that uniquely identifies the peer.

<a id="Discussion"></a>

## Discussion

The delegate should call the session’s [acceptConnection(fromPeer:)](../gksession/acceptconnection%28frompeer_%29.md) method if it wants to accept the connection or the [denyConnection(fromPeer:)](../gksession/denyconnection%28frompeer_%29.md) method if it wants to refuse the connection.

> **Important**

>  If a [GKPeerPickerController](../gkpeerpickercontroller.md) object is being used to configure the session, the controller handles this message automatically. Your delegate can ignore it if the peer picker dialog is in use. If your application is not using a [GKPeerPickerController](../gkpeerpickercontroller.md) object to configure the session, your delegate must implement this method as described above.

# session:didReceiveConnectionRequestFromPeer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Received by the delegate when a remote peer wants to create a connection to the session.

## Declaration

```objectivec
- (void) session:(GKSession *) session didReceiveConnectionRequestFromPeer:(NSString *) peerID;
```

## Parameters

- `session`: The session that received the request.
- `peerID`: A string that uniquely identifies the peer.

<a id="Discussion"></a>

## Discussion

The delegate should call the session’s [acceptConnectionFromPeer:error:](../gksession/acceptconnection%28frompeer_%29.md) method if it wants to accept the connection or the [denyConnectionFromPeer:](../gksession/denyconnection%28frompeer_%29.md) method if it wants to refuse the connection.

> **Important**

>  If a [GKPeerPickerController](../gkpeerpickercontroller.md) object is being used to configure the session, the controller handles this message automatically. Your delegate can ignore it if the peer picker dialog is in use. If your application is not using a [GKPeerPickerController](../gkpeerpickercontroller.md) object to configure the session, your delegate must implement this method as described above.
