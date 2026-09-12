> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2certificatetype](https://developer.apple.com/documentation/networkextension/nevpnikev2certificatetype)

# NEVPNIKEv2CertificateType (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of certificate type values.

## Declaration

```swift
enum NEVPNIKEv2CertificateType
```

## Topics

### Certificate types

- [NEVPNIKEv2CertificateType.RSA](nevpnikev2certificatetype/rsa.md): The RSA certificate type.
- [NEVPNIKEv2CertificateType.ECDSA256](nevpnikev2certificatetype/ecdsa256.md): The ECDSA with p-256 curve certificate type.
- [NEVPNIKEv2CertificateType.ECDSA384](nevpnikev2certificatetype/ecdsa384.md): The ECDSA with p-384 curve certificate type.
- [NEVPNIKEv2CertificateType.ECDSA521](nevpnikev2certificatetype/ecdsa521.md): The ECDSA with p-521 curve certificate type.
- [NEVPNIKEv2CertificateType.ed25519](nevpnikev2certificatetype/ed25519.md): The Edwards 25519 curve certificate type.
- [NEVPNIKEv2CertificateType.RSAPSS](nevpnikev2certificatetype/rsapss.md): The RSA-PSS certificate type.

### Initializers

- [init(rawValue:)](nevpnikev2certificatetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing certificate properties

- [serverCertificateIssuerCommonName](nevpnprotocolikev2/servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [serverCertificateCommonName](nevpnprotocolikev2/servercertificatecommonname.md): A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.
- [certificateType](nevpnprotocolikev2/certificatetype.md): The type of the certificate in the identity configured in `identityReference` or `identityData`.

# NEVPNIKEv2CertificateType (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of certificate type values.

## Declaration

```objectivec
enum NEVPNIKEv2CertificateType : NSInteger;
```

## Topics

### Certificate types

- [NEVPNIKEv2CertificateTypeRSA](nevpnikev2certificatetype/rsa.md): The RSA certificate type.
- [NEVPNIKEv2CertificateTypeECDSA256](nevpnikev2certificatetype/ecdsa256.md): The ECDSA with p-256 curve certificate type.
- [NEVPNIKEv2CertificateTypeECDSA384](nevpnikev2certificatetype/ecdsa384.md): The ECDSA with p-384 curve certificate type.
- [NEVPNIKEv2CertificateTypeECDSA521](nevpnikev2certificatetype/ecdsa521.md): The ECDSA with p-521 curve certificate type.
- [NEVPNIKEv2CertificateTypeEd25519](nevpnikev2certificatetype/ed25519.md): The Edwards 25519 curve certificate type.
- [NEVPNIKEv2CertificateTypeRSAPSS](nevpnikev2certificatetype/rsapss.md): The RSA-PSS certificate type.

## See Also

### Accessing certificate properties

- [serverCertificateIssuerCommonName](nevpnprotocolikev2/servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [serverCertificateCommonName](nevpnprotocolikev2/servercertificatecommonname.md): A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.
- [certificateType](nevpnprotocolikev2/certificatetype.md): The type of the certificate in the identity configured in `identityReference` or `identityData`.
