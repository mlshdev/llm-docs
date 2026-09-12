> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/cancelconnect(topeer:)](https://developer.apple.com/documentation/gamekit/gksession/cancelconnect(topeer:))

# cancelConnect(toPeer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Cancels a pending request to connect to another iOS device.

## Declaration

```swift
func cancelConnect(toPeer peerID: String!)
```

## Parameters

- `peerID`: The string identifying the peer you previously requested to connect to.

<a id="Discussion"></a>

## Discussion

Your application previously called [connect(toPeer:withTimeout:)](connect%28topeer_withtimeout_%29.md) to create a connection to another iOS device. When your application cancels the connection attempt, both delegates’ [session(\_:connectionWithPeerFailed:withError:)](../gksessiondelegate/session%28__connectionwithpeerfailed_witherror_%29.md) methods are called.

If your application already connected to the peer, your application should call [disconnectFromAllPeers()](disconnectfromallpeers%28%29.md) instead.

## See Also

### Connecting to a Remote Peer

- [connect(toPeer:withTimeout:)](connect%28topeer_withtimeout_%29.md): Deprecated. Creates a connection to another iOS device.

# cancelConnectToPeer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Cancels a pending request to connect to another iOS device.

## Declaration

```objectivec
- (void) cancelConnectToPeer:(NSString *) peerID;
```

## Parameters

- `peerID`: The string identifying the peer you previously requested to connect to.

<a id="Discussion"></a>

## Discussion

Your application previously called [connectToPeer:withTimeout:](connect%28topeer_withtimeout_%29.md) to create a connection to another iOS device. When your application cancels the connection attempt, both delegates’ [session:connectionWithPeerFailed:withError:](../gksessiondelegate/session%28__connectionwithpeerfailed_witherror_%29.md) methods are called.

If your application already connected to the peer, your application should call [disconnectFromAllPeers](disconnectfromallpeers%28%29.md) instead.

## See Also

### Connecting to a Remote Peer

- [connectToPeer:withTimeout:](connect%28topeer_withtimeout_%29.md): Deprecated. Creates a connection to another iOS device.
