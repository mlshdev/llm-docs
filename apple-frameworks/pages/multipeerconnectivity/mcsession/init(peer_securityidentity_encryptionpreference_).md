> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/init(peer:securityidentity:encryptionpreference:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/init(peer:securityidentity:encryptionpreference:))

# init(peer:securityIdentity:encryptionPreference:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a Multipeer Connectivity session, providing security information.

> Use Network Framework instead

## Declaration

```swift
init(peer myPeerID: MCPeerID, securityIdentity identity: [Any]?, encryptionPreference: MCEncryptionPreference)
```

## Parameters

- `myPeerID`: A local identifier that represents the device on which your app is currently running.
- `identity`: An array containing information that can be used to identify the local peer to other nearby peers.

  The first object in this array should be a [SecIdentity](../../security/secidentity.md) object that provides the local peer’s identity.

  The remainder of the array should contain zero or more additional [SecCertificate](../../security/seccertificate.md) objects that provide any intermediate certificates that nearby peers might require when verifying the local peer’s identity. These certificates should be sent in certificate chain order.

  When you add other peers to the session, those peers receive your local peer’s certificate (extracted from the provided identity) and any additional certificates that you provided. It is the receiving peer’s responsibility to validate that certificate, if desired.
- `encryptionPreference`: An integer value that indicates whether encryption is required, preferred, or undesirable.

<a id="return-value"></a>

## Return Value

The initialized session object, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

All combinations of authentication (supplying an `identity` value or not) and `encryptionPreference` are legal. Using both authentication to establish a peer’s identity and encryption to secure the channel provides the most security, while using neither provides none, but the right combination depends upon the needs of your application. For example, one app might use authentication with unencrypted data if the source of the data must be established, but the data is not sensitive. Another app might use an unauthenticated but encrypted link to avoid eavesdropping among known peers.

This method throws an exception if the provided peer ID object is invalid or `nil`.

For more information, see [Initiating a Session](../mcsession.md#Initiating-a-Session).

## See Also

### Creating a Session

- [init(peer:)](init%28peer_%29.md): Deprecated. Creates a Multipeer Connectivity session.
- [delegate](delegate.md): Deprecated. The delegate object that handles session-related events.
- [encryptionPreference](encryptionpreference.md): Deprecated. A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.
- [myPeerID](mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](securityidentity.md): Deprecated. The security identity of the local peer.

# initWithPeer:securityIdentity:encryptionPreference: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a Multipeer Connectivity session, providing security information.

> Use Network Framework instead

## Declaration

```objectivec
- (instancetype) initWithPeer:(MCPeerID *) myPeerID securityIdentity:(NSArray *) identity encryptionPreference:(MCEncryptionPreference) encryptionPreference;
```

## Parameters

- `myPeerID`: A local identifier that represents the device on which your app is currently running.
- `identity`: An array containing information that can be used to identify the local peer to other nearby peers.

  The first object in this array should be a [SecIdentityRef](../../security/secidentity.md) object that provides the local peer’s identity.

  The remainder of the array should contain zero or more additional [SecCertificateRef](../../security/seccertificate.md) objects that provide any intermediate certificates that nearby peers might require when verifying the local peer’s identity. These certificates should be sent in certificate chain order.

  When you add other peers to the session, those peers receive your local peer’s certificate (extracted from the provided identity) and any additional certificates that you provided. It is the receiving peer’s responsibility to validate that certificate, if desired.
- `encryptionPreference`: An integer value that indicates whether encryption is required, preferred, or undesirable.

<a id="return-value"></a>

## Return Value

The initialized session object, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

All combinations of authentication (supplying an `identity` value or not) and `encryptionPreference` are legal. Using both authentication to establish a peer’s identity and encryption to secure the channel provides the most security, while using neither provides none, but the right combination depends upon the needs of your application. For example, one app might use authentication with unencrypted data if the source of the data must be established, but the data is not sensitive. Another app might use an unauthenticated but encrypted link to avoid eavesdropping among known peers.

This method throws an exception if the provided peer ID object is invalid or `nil`.

For more information, see [Initiating a Session](../mcsession.md#Initiating-a-Session).

## See Also

### Creating a Session

- [initWithPeer:](init%28peer_%29.md): Deprecated. Creates a Multipeer Connectivity session.
- [delegate](delegate.md): Deprecated. The delegate object that handles session-related events.
- [encryptionPreference](encryptionpreference.md): Deprecated. A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.
- [myPeerID](mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](securityidentity.md): Deprecated. The security identity of the local peer.
