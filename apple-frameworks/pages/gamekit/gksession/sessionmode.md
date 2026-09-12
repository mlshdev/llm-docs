> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/sessionmode](https://developer.apple.com/documentation/gamekit/gksession/sessionmode)

# sessionMode (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

The mode the session uses to find other peers.

> No longer supported.

## Declaration

```swift
var sessionMode: GKSessionMode { get }
```

<a id="Discussion"></a>

## Discussion

The session mode changes the behavior of the session when [isAvailable](isavailable.md) is set to [true](https://developer.apple.com/documentation/swift/true).

- A [GKSessionMode.server](../gksessionmode/server.md) session advertises itself to local devices using its session ID.
- A [GKSessionMode.client](../gksessionmode/client.md) session searches for local devices advertising the same session ID. As it discovers available and compatible peers, it calls the delegate’s  [session(\_:peer:didChange:)](../gksessiondelegate/session%28__peer_didchange_%29.md) method.
- A [GKSessionMode.peer](../gksessionmode/peer.md) session both advertises as a server and searches as a client.

## See Also

### Related Documentation

- [isAvailable](isavailable.md): Deprecated. A Boolean value that determines whether or not the session wants to connect to new peers.

### Information about the Session

- [displayName](displayname.md): Deprecated. The name of the user.
- [peerID](peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionID](sessionid.md): Deprecated. A string used to filter the list of peers who are allowed to see your session.

# sessionMode (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

The mode the session uses to find other peers.

> No longer supported.

## Declaration

```objectivec
@property (readonly) GKSessionMode sessionMode;
```

<a id="Discussion"></a>

## Discussion

The session mode changes the behavior of the session when [available](isavailable.md) is set to [true](https://developer.apple.com/documentation/swift/true).

- A [GKSessionModeServer](../gksessionmode/server.md) session advertises itself to local devices using its session ID.
- A [GKSessionModeClient](../gksessionmode/client.md) session searches for local devices advertising the same session ID. As it discovers available and compatible peers, it calls the delegate’s  [session:peer:didChangeState:](../gksessiondelegate/session%28__peer_didchange_%29.md) method.
- A [GKSessionModePeer](../gksessionmode/peer.md) session both advertises as a server and searches as a client.

## See Also

### Related Documentation

- [available](isavailable.md): Deprecated. A Boolean value that determines whether or not the session wants to connect to new peers.

### Information about the Session

- [displayName](displayname.md): Deprecated. The name of the user.
- [peerID](peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionID](sessionid.md): Deprecated. A string used to filter the list of peers who are allowed to see your session.
