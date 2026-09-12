> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/connect(topeer:withtimeout:)](https://developer.apple.com/documentation/gamekit/gksession/connect(topeer:withtimeout:))

# connect(toPeer:withTimeout:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a connection to another iOS device.

## Declaration

```swift
func connect(toPeer peerID: String!, withTimeout timeout: TimeInterval)
```

## Parameters

- `peerID`: The string that identifies the peer to connect to.
- `timeout`: The amount of time to wait before canceling the connection attempt.

<a id="Discussion"></a>

## Discussion

When your application is acting as a client, it calls this method to connect to an available peer it discovered. When your application calls this method, a request is transmitted to the remote peer, who chooses whether to accept or reject the connection request.

If the connection to the remote peer is successful, the delegate’s [session(\_:peer:didChange:)](../gksessiondelegate/session%28__peer_didchange_%29.md) method is called for each peer it successfully connected to. If the connection fails or your application cancels the connection attempt, the session calls the delegate’s [session(\_:connectionWithPeerFailed:withError:)](../gksessiondelegate/session%28__connectionwithpeerfailed_witherror_%29.md) method.

## See Also

### Connecting to a Remote Peer

- [cancelConnect(toPeer:)](cancelconnect%28topeer_%29.md): Deprecated. Cancels a pending request to connect to another iOS device.

# connectToPeer:withTimeout: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a connection to another iOS device.

## Declaration

```objectivec
- (void) connectToPeer:(NSString *) peerID withTimeout:(NSTimeInterval) timeout;
```

## Parameters

- `peerID`: The string that identifies the peer to connect to.
- `timeout`: The amount of time to wait before canceling the connection attempt.

<a id="Discussion"></a>

## Discussion

When your application is acting as a client, it calls this method to connect to an available peer it discovered. When your application calls this method, a request is transmitted to the remote peer, who chooses whether to accept or reject the connection request.

If the connection to the remote peer is successful, the delegate’s [session:peer:didChangeState:](../gksessiondelegate/session%28__peer_didchange_%29.md) method is called for each peer it successfully connected to. If the connection fails or your application cancels the connection attempt, the session calls the delegate’s [session:connectionWithPeerFailed:withError:](../gksessiondelegate/session%28__connectionwithpeerfailed_witherror_%29.md) method.

## See Also

### Connecting to a Remote Peer

- [cancelConnectToPeer:](cancelconnect%28topeer_%29.md): Deprecated. Cancels a pending request to connect to another iOS device.
