> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/sessionid](https://developer.apple.com/documentation/gamekit/gksession/sessionid)

# sessionID (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A string used to filter the list of peers who are allowed to see your session.

## Declaration

```swift
var sessionID: String! { get }
```

<a id="Discussion"></a>

## Discussion

The session ID is used by sessions configured as servers to advertise itself to other peers and by sessions configured as clients to search for compatible servers. The session ID should be the short name of an approved Bonjour service type.

## See Also

### Information about the Session

- [displayName](displayname.md): Deprecated. The name of the user.
- [peerID](peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionMode](sessionmode.md): Deprecated. The mode the session uses to find other peers.

# sessionID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A string used to filter the list of peers who are allowed to see your session.

## Declaration

```objectivec
@property (readonly) NSString * sessionID;
```

<a id="Discussion"></a>

## Discussion

The session ID is used by sessions configured as servers to advertise itself to other peers and by sessions configured as clients to search for compatible servers. The session ID should be the short name of an approved Bonjour service type.

## See Also

### Information about the Session

- [displayName](displayname.md): Deprecated. The name of the user.
- [peerID](peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionMode](sessionmode.md): Deprecated. The mode the session uses to find other peers.
