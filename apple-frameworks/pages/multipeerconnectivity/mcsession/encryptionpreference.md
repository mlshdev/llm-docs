> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/encryptionpreference](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/encryptionpreference)

# encryptionPreference (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.

> Use Network Framework instead

## Declaration

```swift
var encryptionPreference: MCEncryptionPreference { get }
```

<a id="Discussion"></a>

## Discussion

You set this value when you initialize the session object. It cannot be changed later. For possible values, see [MCEncryptionPreference](../mcencryptionpreference.md)

## See Also

### Creating a Session

- [init(peer:)](init%28peer_%29.md): Deprecated. Creates a Multipeer Connectivity session.
- [init(peer:securityIdentity:encryptionPreference:)](init%28peer_securityidentity_encryptionpreference_%29.md): Deprecated. Creates a Multipeer Connectivity session, providing security information.
- [delegate](delegate.md): Deprecated. The delegate object that handles session-related events.
- [myPeerID](mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](securityidentity.md): Deprecated. The security identity of the local peer.

# encryptionPreference (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, readonly) MCEncryptionPreference encryptionPreference;
```

```objectivec
@property (atomic, readonly) MCEncryptionPreference encryptionPreference;
```

<a id="Discussion"></a>

## Discussion

You set this value when you initialize the session object. It cannot be changed later. For possible values, see [MCEncryptionPreference](../mcencryptionpreference.md)

## See Also

### Creating a Session

- [initWithPeer:](init%28peer_%29.md): Deprecated. Creates a Multipeer Connectivity session.
- [initWithPeer:securityIdentity:encryptionPreference:](init%28peer_securityidentity_encryptionpreference_%29.md): Deprecated. Creates a Multipeer Connectivity session, providing security information.
- [delegate](delegate.md): Deprecated. The delegate object that handles session-related events.
- [myPeerID](mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](securityidentity.md): Deprecated. The security identity of the local peer.
