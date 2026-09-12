> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2deadpeerdetectionrate](https://developer.apple.com/documentation/networkextension/nevpnikev2deadpeerdetectionrate)

# NEVPNIKEv2DeadPeerDetectionRate (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.

## Declaration

```swift
enum NEVPNIKEv2DeadPeerDetectionRate
```

## Topics

### Detection rates

- [NEVPNIKEv2DeadPeerDetectionRate.none](nevpnikev2deadpeerdetectionrate/none.md): Do not perform dead peer detection.
- [NEVPNIKEv2DeadPeerDetectionRate.low](nevpnikev2deadpeerdetectionrate/low.md): Run dead peer detection once every 30 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.
- [NEVPNIKEv2DeadPeerDetectionRate.medium](nevpnikev2deadpeerdetectionrate/medium.md): Run dead peer detection once every 10 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.
- [NEVPNIKEv2DeadPeerDetectionRate.high](nevpnikev2deadpeerdetectionrate/high.md): Run dead peer detection once every 1 minute. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.

### Initializers

- [init(rawValue:)](nevpnikev2deadpeerdetectionrate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing other IKEv2 properties

- [deadPeerDetectionRate](nevpnprotocolikev2/deadpeerdetectionrate.md): The frequency at which the IKEv2 client will run the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](nevpnprotocolikev2/useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](nevpnprotocolikev2/disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](nevpnprotocolikev2/disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](nevpnprotocolikev2/enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](nevpnprotocolikev2/enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](nevpnprotocolikev2/strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.
- [mtu](nevpnprotocolikev2/mtu.md): The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.

# NEVPNIKEv2DeadPeerDetectionRate (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.

## Declaration

```objectivec
enum NEVPNIKEv2DeadPeerDetectionRate : NSInteger;
```

## Topics

### Detection rates

- [NEVPNIKEv2DeadPeerDetectionRateNone](nevpnikev2deadpeerdetectionrate/none.md): Do not perform dead peer detection.
- [NEVPNIKEv2DeadPeerDetectionRateLow](nevpnikev2deadpeerdetectionrate/low.md): Run dead peer detection once every 30 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.
- [NEVPNIKEv2DeadPeerDetectionRateMedium](nevpnikev2deadpeerdetectionrate/medium.md): Run dead peer detection once every 10 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.
- [NEVPNIKEv2DeadPeerDetectionRateHigh](nevpnikev2deadpeerdetectionrate/high.md): Run dead peer detection once every 1 minute. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.

## See Also

### Accessing other IKEv2 properties

- [deadPeerDetectionRate](nevpnprotocolikev2/deadpeerdetectionrate.md): The frequency at which the IKEv2 client will run the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](nevpnprotocolikev2/useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](nevpnprotocolikev2/disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](nevpnprotocolikev2/disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](nevpnprotocolikev2/enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](nevpnprotocolikev2/enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](nevpnprotocolikev2/strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.
- [mtu](nevpnprotocolikev2/mtu.md): The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.
