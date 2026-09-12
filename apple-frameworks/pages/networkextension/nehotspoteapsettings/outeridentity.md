> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoteapsettings/outeridentity](https://developer.apple.com/documentation/networkextension/nehotspoteapsettings/outeridentity)

# outerIdentity (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.

## Declaration

```swift
var outerIdentity: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property is optional and is used only with TTLS, PEAP, and EAP-FAST networks.

## See Also

### Accessing EAP properties

- [isTLSClientCertificateRequired](istlsclientcertificaterequired.md): A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.
- [trustedServerNames](trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotEAPSettings.EAPType](eaptype.md): The EAP types that may be specified in [supportedEAPTypes](supportedeaptypes.md).
- [username](username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [NEHotspotEAPSettings.TLSVersion](tlsversion.md): The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](preferredtlsversion.md).
- [ttlsInnerAuthenticationType](ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotEAPSettings.TTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotEAPSettings.TTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md).

# outerIdentity (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.

## Declaration

```objectivec
@property (copy) NSString * outerIdentity;
```

<a id="Discussion"></a>

## Discussion

This property is optional and is used only with TTLS, PEAP, and EAP-FAST networks.

## See Also

### Accessing EAP properties

- [tlsClientCertificateRequired](istlsclientcertificaterequired.md): A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.
- [trustedServerNames](trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotConfigurationEAPType](eaptype.md): The EAP types that may be specified in [supportedEAPTypes](supportedeaptypes.md).
- [username](username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [NEHotspotConfigurationEAPTLSVersion](tlsversion.md): The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](preferredtlsversion.md).
- [ttlsInnerAuthenticationType](ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotConfigurationTTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotConfigurationTTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md).
