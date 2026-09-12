> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/displayname](https://developer.apple.com/documentation/gamekit/gksession/displayname)

# displayName (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The name of the user.

## Declaration

```swift
var displayName: String! { get }
```

<a id="Discussion"></a>

## Discussion

The display name is transmitted to visible peers so that they can present a human-readable name for your session.

## See Also

### Related Documentation

- [displayName(forPeer:)](displayname%28forpeer_%29.md): Deprecated. Returns a user-readable name for a peer.

### Information about the Session

- [peerID](peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionID](sessionid.md): Deprecated. A string used to filter the list of peers who are allowed to see your session.
- [sessionMode](sessionmode.md): Deprecated. The mode the session uses to find other peers.

# displayName (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The name of the user.

## Declaration

```objectivec
@property (readonly) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

The display name is transmitted to visible peers so that they can present a human-readable name for your session.

## See Also

### Related Documentation

- [displayNameForPeer:](displayname%28forpeer_%29.md): Deprecated. Returns a user-readable name for a peer.

### Information about the Session

- [peerID](peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionID](sessionid.md): Deprecated. A string used to filter the list of peers who are allowed to see your session.
- [sessionMode](sessionmode.md): Deprecated. The mode the session uses to find other peers.
