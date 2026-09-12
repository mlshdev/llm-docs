> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolikev2/certificatetype](https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/certificatetype)

# certificateType (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The type of the certificate in the identity configured in `identityReference` or `identityData`.

## Declaration

```swift
var certificateType: NEVPNIKEv2CertificateType { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [NEVPNIKEv2CertificateType.RSA](../nevpnikev2certificatetype/rsa.md).

## See Also

### Accessing certificate properties

- [serverCertificateIssuerCommonName](servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [serverCertificateCommonName](servercertificatecommonname.md): A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.
- [NEVPNIKEv2CertificateType](../nevpnikev2certificatetype.md): An enumeration of certificate type values.

# certificateType (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The type of the certificate in the identity configured in `identityReference` or `identityData`.

## Declaration

```objectivec
@property NEVPNIKEv2CertificateType certificateType;
```

<a id="Discussion"></a>

## Discussion

The default value is [NEVPNIKEv2CertificateTypeRSA](../nevpnikev2certificatetype/rsa.md).

## See Also

### Accessing certificate properties

- [serverCertificateIssuerCommonName](servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [serverCertificateCommonName](servercertificatecommonname.md): A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.
- [NEVPNIKEv2CertificateType](../nevpnikev2certificatetype.md): An enumeration of certificate type values.
