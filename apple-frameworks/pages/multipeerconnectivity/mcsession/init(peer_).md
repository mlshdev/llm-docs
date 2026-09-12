> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/init(peer:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/init(peer:))

# init(peer:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a Multipeer Connectivity session.

> Use Network Framework instead

## Declaration

```swift
convenience init(peer myPeerID: MCPeerID)
```

## Parameters

- `myPeerID`: A local identifier that represents the device on which your app is currently running.

<a id="return-value"></a>

## Return Value

The initialized session object, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is equivalent to calling [init(peer:securityIdentity:encryptionPreference:)](init%28peer_securityidentity_encryptionpreference_%29.md) with a `nil` identity and an encryption setting that varies based on which version of the SDK was used to link the application. On apps linked on or after iOS 9, the encryption is set to [MCEncryptionPreference.required](../mcencryptionpreference/required.md). On apps linked prior to iOS 9, the encryption is set to [MCEncryptionPreference.optional](../mcencryptionpreference/optional.md).

This method throws an exception if the provided peer ID object is invalid or `nil`.

For more information, see [Initiating a Session](../mcsession.md#Initiating-a-Session).

## See Also

### Creating a Session

- [init(peer:securityIdentity:encryptionPreference:)](init%28peer_securityidentity_encryptionpreference_%29.md): Deprecated. Creates a Multipeer Connectivity session, providing security information.
- [delegate](delegate.md): Deprecated. The delegate object that handles session-related events.
- [encryptionPreference](encryptionpreference.md): Deprecated. A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.
- [myPeerID](mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](securityidentity.md): Deprecated. The security identity of the local peer.

# initWithPeer: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a Multipeer Connectivity session.

> Use Network Framework instead

## Declaration

```objectivec
- (instancetype) initWithPeer:(MCPeerID *) myPeerID;
```

## Parameters

- `myPeerID`: A local identifier that represents the device on which your app is currently running.

<a id="return-value"></a>

## Return Value

The initialized session object, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is equivalent to calling [initWithPeer:securityIdentity:encryptionPreference:](init%28peer_securityidentity_encryptionpreference_%29.md) with a `nil` identity and an encryption setting that varies based on which version of the SDK was used to link the application. On apps linked on or after iOS 9, the encryption is set to [MCEncryptionRequired](../mcencryptionpreference/required.md). On apps linked prior to iOS 9, the encryption is set to [MCEncryptionOptional](../mcencryptionpreference/optional.md).

This method throws an exception if the provided peer ID object is invalid or `nil`.

For more information, see [Initiating a Session](../mcsession.md#Initiating-a-Session).

## See Also

### Creating a Session

- [initWithPeer:securityIdentity:encryptionPreference:](init%28peer_securityidentity_encryptionpreference_%29.md): Deprecated. Creates a Multipeer Connectivity session, providing security information.
- [delegate](delegate.md): Deprecated. The delegate object that handles session-related events.
- [encryptionPreference](encryptionpreference.md): Deprecated. A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.
- [myPeerID](mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](securityidentity.md): Deprecated. The security identity of the local peer.
