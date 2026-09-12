> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolikev2/mtu](https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/mtu)

# mtu (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.

## Declaration

```swift
var mtu: Int { get set }
```

## See Also

### Accessing other IKEv2 properties

- [deadPeerDetectionRate](deadpeerdetectionrate.md): The frequency at which the IKEv2 client will run the dead peer detection algorithm.
- [NEVPNIKEv2DeadPeerDetectionRate](../nevpnikev2deadpeerdetectionrate.md): An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.

# mtu (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.

## Declaration

```objectivec
@property NSUInteger mtu;
```

## See Also

### Accessing other IKEv2 properties

- [deadPeerDetectionRate](deadpeerdetectionrate.md): The frequency at which the IKEv2 client will run the dead peer detection algorithm.
- [NEVPNIKEv2DeadPeerDetectionRate](../nevpnikev2deadpeerdetectionrate.md): An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.
