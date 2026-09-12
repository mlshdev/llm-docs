> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowser/invitepeer(_:to:withcontext:timeout:)](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowser/invitepeer(_:to:withcontext:timeout:))

# invitePeer(\_:to:withContext:timeout:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Invites a discovered peer to join a Multipeer Connectivity session.

> Use Network Framework instead

## Declaration

```swift
func invitePeer(_ peerID: MCPeerID, to session: MCSession, withContext context: Data?, timeout: TimeInterval)
```

## Parameters

- `session`: The session you wish the invited peer to join.
- `context`: An arbitrary piece of data that is passed to the nearby peer. This can be used to provide further information to the user about the nature of the invitation.

  > **Important**

  >  The nearby peer should treat any data it receives as potentially untrusted. To learn more about working with untrusted data, read [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).
- `timeout`: The amount of time to wait for the peer to respond to the invitation.

  This timeout is measured in seconds, and must be a positive value. If a negative value or zero is specified, the default timeout (30 seconds) is used.

# invitePeer:toSession:withContext:timeout: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Invites a discovered peer to join a Multipeer Connectivity session.

> Use Network Framework instead

## Declaration

```objectivec
- (void) invitePeer:(MCPeerID *) peerID toSession:(MCSession *) session withContext:(NSData *) context timeout:(NSTimeInterval) timeout;
```

## Parameters

- `session`: The session you wish the invited peer to join.
- `context`: An arbitrary piece of data that is passed to the nearby peer. This can be used to provide further information to the user about the nature of the invitation.

  > **Important**

  >  The nearby peer should treat any data it receives as potentially untrusted. To learn more about working with untrusted data, read [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).
- `timeout`: The amount of time to wait for the peer to respond to the invitation.

  This timeout is measured in seconds, and must be a positive value. If a negative value or zero is specified, the default timeout (30 seconds) is used.
