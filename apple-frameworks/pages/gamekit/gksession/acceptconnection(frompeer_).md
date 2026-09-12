> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/acceptconnection(frompeer:)](https://developer.apple.com/documentation/gamekit/gksession/acceptconnection(frompeer:))

# acceptConnection(fromPeer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Called by the delegate to accept a connection request received from a remote peer.

## Declaration

```swift
func acceptConnection(fromPeer peerID: String!) throws
```

## Parameters

- `peerID`: The string identifying the peer that initiated the connection to the session.

<a id="Discussion"></a>

## Discussion

When your session acts as a server, client peers can discover your session and attempt to connect to it. When a client attempts to connect to the session, the delegate’s [session(\_:didReceiveConnectionRequestFromPeer:)](../gksessiondelegate/session%28__didreceiveconnectionrequestfrompeer_%29.md) method is called to decide whether the peer should be connected. Your application calls this method to accept the request, or [denyConnection(fromPeer:)](denyconnection%28frompeer_%29.md) to reject it.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Receiving Connections from a Remote Peer

- [denyConnection(fromPeer:)](denyconnection%28frompeer_%29.md): Deprecated. Called by the delegate to reject a connection request received from a remote peer.

# acceptConnectionFromPeer:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Called by the delegate to accept a connection request received from a remote peer.

## Declaration

```objectivec
- (BOOL) acceptConnectionFromPeer:(NSString *) peerID error:(NSError **) error;
```

## Parameters

- `peerID`: The string identifying the peer that initiated the connection to the session.
- `error`: If an error occurred when connecting the peer, upon return contains an `NSError` object that explains the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a connection was established to the remote peer; [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

When your session acts as a server, client peers can discover your session and attempt to connect to it. When a client attempts to connect to the session, the delegate’s [session:didReceiveConnectionRequestFromPeer:](../gksessiondelegate/session%28__didreceiveconnectionrequestfrompeer_%29.md) method is called to decide whether the peer should be connected. Your application calls this method to accept the request, or [denyConnectionFromPeer:](denyconnection%28frompeer_%29.md) to reject it.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Receiving Connections from a Remote Peer

- [denyConnectionFromPeer:](denyconnection%28frompeer_%29.md): Deprecated. Called by the delegate to reject a connection request received from a remote peer.
