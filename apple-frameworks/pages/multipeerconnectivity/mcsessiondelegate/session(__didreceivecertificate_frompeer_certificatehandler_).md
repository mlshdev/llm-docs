> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessiondelegate/session(_:didreceivecertificate:frompeer:certificatehandler:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsessiondelegate/session(_:didreceivecertificate:frompeer:certificatehandler:))

# session(\_:didReceiveCertificate:fromPeer:certificateHandler:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called to validate the client certificate provided by a peer when the connection is first established.

> Use Network Framework instead

## Declaration

```swift
optional func session(_ session: MCSession, didReceiveCertificate certificate: [Any]?, fromPeer peerID: MCPeerID, certificateHandler: @escaping (Bool) -> Void)
```

## Parameters

- `session`: The session that the nearby peer wishes to join.
- `certificate`: A certificate chain, presented as an array of SecCertificateRef certificate objects. The first certificate in this chain is the peer’s certificate, which is derived from the identity that the peer provided when it called the [init(peer:securityIdentity:encryptionPreference:)](../mcsession/init%28peer_securityidentity_encryptionpreference_%29.md) method. The other certificates are the (optional) additional chain certificates provided in that same array.

  If the nearby peer did not provide a security identity, then this parameter’s value is `nil`.
- `peerID`: The peer ID of the sender.
- `certificateHandler`: Your app should call this handler with a value of [true](https://developer.apple.com/documentation/swift/true) if the nearby peer should be allowed to join the session, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Your app should inspect the nearby peer’s certificate, and then should decide whether to trust that certificate. Upon making that determination, your app should call the provided `certificateHandler` block, passing either [true](https://developer.apple.com/documentation/swift/true) (to trust the nearby peer) or [false](https://developer.apple.com/documentation/swift/false) (to reject it).

For information about validating certificates, read [Cryptographic Services Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011172).

> **Important**

>  The multipeer connectivity framework makes no attempt to validate the peer-provided identity or certificates in any way. If your delegate does not implement this method, all certificates are accepted automatically.

## See Also

### MCSession Delegate Methods

- [session(\_:didReceive:fromPeer:)](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session(\_:didStartReceivingResourceWithName:fromPeer:with:)](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:)](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session(\_:didReceive:withName:fromPeer:)](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session(\_:peer:didChange:)](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.

# session:didReceiveCertificate:fromPeer:certificateHandler: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called to validate the client certificate provided by a peer when the connection is first established.

> Use Network Framework instead

## Declaration

```objectivec
- (void) session:(MCSession *) session didReceiveCertificate:(NSArray *) certificate fromPeer:(MCPeerID *) peerID certificateHandler:(void (^)(BOOL accept)) certificateHandler;
```

## Parameters

- `session`: The session that the nearby peer wishes to join.
- `certificate`: A certificate chain, presented as an array of SecCertificateRef certificate objects. The first certificate in this chain is the peer’s certificate, which is derived from the identity that the peer provided when it called the [initWithPeer:securityIdentity:encryptionPreference:](../mcsession/init%28peer_securityidentity_encryptionpreference_%29.md) method. The other certificates are the (optional) additional chain certificates provided in that same array.

  If the nearby peer did not provide a security identity, then this parameter’s value is `nil`.
- `peerID`: The peer ID of the sender.
- `certificateHandler`: Your app should call this handler with a value of [true](https://developer.apple.com/documentation/swift/true) if the nearby peer should be allowed to join the session, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Your app should inspect the nearby peer’s certificate, and then should decide whether to trust that certificate. Upon making that determination, your app should call the provided `certificateHandler` block, passing either [true](https://developer.apple.com/documentation/swift/true) (to trust the nearby peer) or [false](https://developer.apple.com/documentation/swift/false) (to reject it).

For information about validating certificates, read [Cryptographic Services Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011172).

> **Important**

>  The multipeer connectivity framework makes no attempt to validate the peer-provided identity or certificates in any way. If your delegate does not implement this method, all certificates are accepted automatically.

## See Also

### MCSession Delegate Methods

- [session:didReceiveData:fromPeer:](session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session:didStartReceivingResourceWithName:fromPeer:withProgress:](session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session:didFinishReceivingResourceWithName:fromPeer:atURL:withError:](session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session:didReceiveStream:withName:fromPeer:](session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session:peer:didChangeState:](session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
