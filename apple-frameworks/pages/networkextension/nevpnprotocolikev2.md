> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolikev2](https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2)

# NEVPNProtocolIKEv2 (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Settings for an IKEv2 VPN configuration.

## Declaration

```swift
class NEVPNProtocolIKEv2
```

<a id="overview"></a>

## Overview

Instances of this class are thread safe.

## Topics

### Accessing IKEv2 Security Association parameters

- [ikeSecurityAssociationParameters](nevpnprotocolikev2/ikesecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the initial IKE security association to be negotiated with the IKEv2 server.
- [childSecurityAssociationParameters](nevpnprotocolikev2/childsecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the child IPSec security associations to be negotiated for each IKEv2 policy.
- [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md): Parameters for an IKEv2 Security Association.

### Accessing certificate properties

- [serverCertificateIssuerCommonName](nevpnprotocolikev2/servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [serverCertificateCommonName](nevpnprotocolikev2/servercertificatecommonname.md): A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.
- [certificateType](nevpnprotocolikev2/certificatetype.md): The type of the certificate in the identity configured in `identityReference` or `identityData`.
- [NEVPNIKEv2CertificateType](nevpnikev2certificatetype.md): An enumeration of certificate type values.

### Accessing TLS version properties

- [minimumTLSVersion](nevpnprotocolikev2/minimumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [maximumTLSVersion](nevpnprotocolikev2/maximumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [NEVPNIKEv2TLSVersion](nevpnikev2tlsversion.md): An enumeration of TLS Versions for use in EAP-TLS.

### Accessing other IKEv2 properties

- [deadPeerDetectionRate](nevpnprotocolikev2/deadpeerdetectionrate.md): The frequency at which the IKEv2 client will run the dead peer detection algorithm.
- [NEVPNIKEv2DeadPeerDetectionRate](nevpnikev2deadpeerdetectionrate.md): An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](nevpnprotocolikev2/useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](nevpnprotocolikev2/disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](nevpnprotocolikev2/disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](nevpnprotocolikev2/enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](nevpnprotocolikev2/enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](nevpnprotocolikev2/strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.
- [mtu](nevpnprotocolikev2/mtu.md): The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.

### Supporting Wi-Fi assist

- [enableFallback](nevpnprotocolikev2/enablefallback.md): A property to enable the use of cellular data when Wi-Fi connectivity is poor.

### Supporting quantum-secure cryptography

- [allowPostQuantumKeyExchangeFallback](nevpnprotocolikev2/allowpostquantumkeyexchangefallback.md): A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.
- [ppkConfiguration](nevpnprotocolikev2/ppkconfiguration.md): The configuration for a post-quantum pre-shared key (PPK).
- [NEVPNIKEv2PPKConfiguration](nevpnikev2ppkconfiguration.md): A class that manages parameters of a post-quantum pre-shared key (PPK).

## Relationships

### Inherits From

- [NEVPNProtocolIPSec](nevpnprotocolipsec.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### VPN configuration

- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NEVPNProtocolIPSec](nevpnprotocolipsec.md): Settings for an IPsec VPN configuration.
- [NEVPNProtocol](nevpnprotocol.md): Settings common to both IKEv2 and IPsec VPN configurations.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

# NEVPNProtocolIKEv2 (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Settings for an IKEv2 VPN configuration.

## Declaration

```objectivec
@interface NEVPNProtocolIKEv2 : NEVPNProtocolIPSec
```

<a id="overview"></a>

## Overview

Instances of this class are thread safe.

## Topics

### Accessing IKEv2 Security Association parameters

- [IKESecurityAssociationParameters](nevpnprotocolikev2/ikesecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the initial IKE security association to be negotiated with the IKEv2 server.
- [childSecurityAssociationParameters](nevpnprotocolikev2/childsecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md) object containing the parameters for the child IPSec security associations to be negotiated for each IKEv2 policy.
- [NEVPNIKEv2SecurityAssociationParameters](nevpnikev2securityassociationparameters.md): Parameters for an IKEv2 Security Association.

### Accessing certificate properties

- [serverCertificateIssuerCommonName](nevpnprotocolikev2/servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [serverCertificateCommonName](nevpnprotocolikev2/servercertificatecommonname.md): A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.
- [certificateType](nevpnprotocolikev2/certificatetype.md): The type of the certificate in the identity configured in `identityReference` or `identityData`.
- [NEVPNIKEv2CertificateType](nevpnikev2certificatetype.md): An enumeration of certificate type values.

### Accessing TLS version properties

- [minimumTLSVersion](nevpnprotocolikev2/minimumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [maximumTLSVersion](nevpnprotocolikev2/maximumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [NEVPNIKEv2TLSVersion](nevpnikev2tlsversion.md): An enumeration of TLS Versions for use in EAP-TLS.

### Accessing other IKEv2 properties

- [deadPeerDetectionRate](nevpnprotocolikev2/deadpeerdetectionrate.md): The frequency at which the IKEv2 client will run the dead peer detection algorithm.
- [NEVPNIKEv2DeadPeerDetectionRate](nevpnikev2deadpeerdetectionrate.md): An enumeration of values for the frequency at which the IKEv2 client runs the dead peer detection algorithm.
- [useConfigurationAttributeInternalIPSubnet](nevpnprotocolikev2/useconfigurationattributeinternalipsubnet.md): A Boolean indicating whether or not the IKEv2 client should use the INTERNAL_IP4_SUBNET and/or INTERNAL_IP6_SUBNET attributes sent by the IKEv2 server.
- [disableMOBIKE](nevpnprotocolikev2/disablemobike.md): A Boolean indicating whether or not MOBIKE should be disabled for the IKEv2 sessions.
- [disableRedirect](nevpnprotocolikev2/disableredirect.md): A Boolean indicating whether or not IKEv2 server redirects are disabled.
- [enablePFS](nevpnprotocolikev2/enablepfs.md): A Boolean indicating whether or not Perfect Forward Secrecy is enabled.
- [enableRevocationCheck](nevpnprotocolikev2/enablerevocationcheck.md): Enable revocation checking of the IKEv2 server certificate.
- [strictRevocationCheck](nevpnprotocolikev2/strictrevocationcheck.md): Require a “not revoked” result when checking if the certificate identifying the server is revoked.
- [mtu](nevpnprotocolikev2/mtu.md): The Maximum Transmission Unit (MTU) size in bytes to assign to the tunnel interface.

### Supporting Wi-Fi assist

- [enableFallback](nevpnprotocolikev2/enablefallback.md): A property to enable the use of cellular data when Wi-Fi connectivity is poor.

### Supporting quantum-secure cryptography

- [allowPostQuantumKeyExchangeFallback](nevpnprotocolikev2/allowpostquantumkeyexchangefallback.md): A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.
- [ppkConfiguration](nevpnprotocolikev2/ppkconfiguration.md): The configuration for a post-quantum pre-shared key (PPK).
- [NEVPNIKEv2PPKConfiguration](nevpnikev2ppkconfiguration.md): A class that manages parameters of a post-quantum pre-shared key (PPK).

## Relationships

### Inherits From

- [NEVPNProtocolIPSec](nevpnprotocolipsec.md)

## See Also

### VPN configuration

- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NEVPNProtocolIPSec](nevpnprotocolipsec.md): Settings for an IPsec VPN configuration.
- [NEVPNProtocol](nevpnprotocol.md): Settings common to both IKEv2 and IPsec VPN configurations.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.
