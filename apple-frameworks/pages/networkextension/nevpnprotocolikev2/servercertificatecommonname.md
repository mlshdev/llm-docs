> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolikev2/servercertificatecommonname](https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/servercertificatecommonname)

# serverCertificateCommonName (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.

## Declaration

```swift
var serverCertificateCommonName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This string is used to help verify the identity of the IKEv2 server.

## See Also

### Accessing certificate properties

- [serverCertificateIssuerCommonName](servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [certificateType](certificatetype.md): The type of the certificate in the identity configured in `identityReference` or `identityData`.
- [NEVPNIKEv2CertificateType](../nevpnikev2certificatetype.md): An enumeration of certificate type values.

# serverCertificateCommonName (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string containing the value of the Subject Common Name field of the IKEv2 server’s certificate.

## Declaration

```objectivec
@property (copy, nullable) NSString * serverCertificateCommonName;
```

<a id="Discussion"></a>

## Discussion

This string is used to help verify the identity of the IKEv2 server.

## See Also

### Accessing certificate properties

- [serverCertificateIssuerCommonName](servercertificateissuercommonname.md): A string containing the value of the Subject Common Name field of the Certificate Authority certificate that issued the IKEv2 server’s certificate.
- [certificateType](certificatetype.md): The type of the certificate in the identity configured in `identityReference` or `identityData`.
- [NEVPNIKEv2CertificateType](../nevpnikev2certificatetype.md): An enumeration of certificate type values.
