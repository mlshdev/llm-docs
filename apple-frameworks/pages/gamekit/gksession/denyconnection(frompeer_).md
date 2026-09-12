> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/denyconnection(frompeer:)](https://developer.apple.com/documentation/gamekit/gksession/denyconnection(frompeer:))

# denyConnection(fromPeer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Called by the delegate to reject a connection request received from a remote peer.

## Declaration

```swift
func denyConnection(fromPeer peerID: String!)
```

## Parameters

- `peerID`: The string identifying the peer that initiated the connection to the session.

<a id="Discussion"></a>

## Discussion

When your session acts as a server, client peers can discover your session and attempt to connect to it. When a client attempts to connect to the session, the delegate’s [session(\_:didReceiveConnectionRequestFromPeer:)](../gksessiondelegate/session%28__didreceiveconnectionrequestfrompeer_%29.md) method is called to decide whether the peer should be connected. Your application calls this method to reject the request or [acceptConnection(fromPeer:)](acceptconnection%28frompeer_%29.md) to accept it.

## See Also

### Receiving Connections from a Remote Peer

- [acceptConnection(fromPeer:)](acceptconnection%28frompeer_%29.md): Deprecated. Called by the delegate to accept a connection request received from a remote peer.

# denyConnectionFromPeer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Called by the delegate to reject a connection request received from a remote peer.

## Declaration

```objectivec
- (void) denyConnectionFromPeer:(NSString *) peerID;
```

## Parameters

- `peerID`: The string identifying the peer that initiated the connection to the session.

<a id="Discussion"></a>

## Discussion

When your session acts as a server, client peers can discover your session and attempt to connect to it. When a client attempts to connect to the session, the delegate’s [session:didReceiveConnectionRequestFromPeer:](../gksessiondelegate/session%28__didreceiveconnectionrequestfrompeer_%29.md) method is called to decide whether the peer should be connected. Your application calls this method to reject the request or [acceptConnectionFromPeer:error:](acceptconnection%28frompeer_%29.md) to accept it.

## See Also

### Receiving Connections from a Remote Peer

- [acceptConnectionFromPeer:error:](acceptconnection%28frompeer_%29.md): Deprecated. Called by the delegate to accept a connection request received from a remote peer.
