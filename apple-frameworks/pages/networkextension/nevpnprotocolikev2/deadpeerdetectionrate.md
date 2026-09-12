> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolikev2/deadpeerdetectionrate](https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/deadpeerdetectionrate)

# deadPeerDetectionRate (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The frequency at which the IKEv2 client will run the dead peer detection algorithm.

## Declaration

```swift
var deadPeerDetectionRate: NEVPNIKEv2DeadPeerDetectionRate { get set }
```

<a id="Discussion"></a>

## Discussion

The IKEv2 client periodically communicates with the IKEv2 server to detect when communication with the IKEv2 server has been interrupted. This property specifies how frequently this communication takes place. The default is [NEVPNIKEv2DeadPeerDetectionRate.medium](../nevpnikev2deadpeerdetectionrate/medium.md).

## See Also

### Accessing other IKEv2 properties

- [NEVPNIKEv2DeadPeerDetectionRate](../nevpnikev2deadpeerdetectionrate.md): An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.
- [mtu](mtu.md): The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.

# deadPeerDetectionRate (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The frequency at which the IKEv2 client will run the dead peer detection algorithm.

## Declaration

```objectivec
@property NEVPNIKEv2DeadPeerDetectionRate deadPeerDetectionRate;
```

<a id="Discussion"></a>

## Discussion

The IKEv2 client periodically communicates with the IKEv2 server to detect when communication with the IKEv2 server has been interrupted. This property specifies how frequently this communication takes place. The default is [NEVPNIKEv2DeadPeerDetectionRateMedium](../nevpnikev2deadpeerdetectionrate/medium.md).

## See Also

### Accessing other IKEv2 properties

- [NEVPNIKEv2DeadPeerDetectionRate](../nevpnikev2deadpeerdetectionrate.md): An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.
- [mtu](mtu.md): The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.
