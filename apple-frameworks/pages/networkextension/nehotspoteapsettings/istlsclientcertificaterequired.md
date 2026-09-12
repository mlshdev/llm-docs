> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoteapsettings/istlsclientcertificaterequired](https://developer.apple.com/documentation/networkextension/nehotspoteapsettings/istlsclientcertificaterequired)

# isTLSClientCertificateRequired (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.

## Declaration

```swift
var isTLSClientCertificateRequired: Bool { get set }
```

<a id="return-value"></a>

## Return Value

If `true`, the Wi-Fi network requires two-factor authentication for EAP-TTLS, PEAP and EAP-FAST. If `false`, the network requires zero-factor authentication for EAP-TLS. The default values are `true` if the EAP type is EAP-TLS and `false` for other EAP types.

<a id="Discussion"></a>

## Discussion

Optional. EAP Transport Layer Security (EAP-TLS) is an IETF open security standard that requires a client certificate in addition to a password (two-factor authentication). If an EAP-TTLS, PEAP or EAP-FAST network requires two-factor authentication then a client identity must be configured. If `isTLSClientCertificateRequired` returns false, a client identity need not be configured. If `isTLSClientCertificateRequired` returns true, your app must set the client identity by using [setIdentity(\_:)](setidentity%28__%29.md).

## See Also

### Accessing EAP properties

- [trustedServerNames](trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotEAPSettings.EAPType](eaptype.md): The EAP types that may be specified in [supportedEAPTypes](supportedeaptypes.md).
- [username](username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [NEHotspotEAPSettings.TLSVersion](tlsversion.md): The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](preferredtlsversion.md).
- [outerIdentity](outeridentity.md): The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.
- [ttlsInnerAuthenticationType](ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotEAPSettings.TTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotEAPSettings.TTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md).

# tlsClientCertificateRequired (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.

## Declaration

```objectivec
@property (getter=isTLSClientCertificateRequired) BOOL tlsClientCertificateRequired;
```

<a id="return-value"></a>

## Return Value

If `true`, the Wi-Fi network requires two-factor authentication for EAP-TTLS, PEAP and EAP-FAST. If `false`, the network requires zero-factor authentication for EAP-TLS. The default values are `true` if the EAP type is EAP-TLS and `false` for other EAP types.

<a id="Discussion"></a>

## Discussion

Optional. EAP Transport Layer Security (EAP-TLS) is an IETF open security standard that requires a client certificate in addition to a password (two-factor authentication). If an EAP-TTLS, PEAP or EAP-FAST network requires two-factor authentication then a client identity must be configured. If `isTLSClientCertificateRequired` returns false, a client identity need not be configured. If `isTLSClientCertificateRequired` returns true, your app must set the client identity by using [setIdentity:](setidentity%28__%29.md).

## See Also

### Accessing EAP properties

- [trustedServerNames](trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotConfigurationEAPType](eaptype.md): The EAP types that may be specified in [supportedEAPTypes](supportedeaptypes.md).
- [username](username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [NEHotspotConfigurationEAPTLSVersion](tlsversion.md): The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](preferredtlsversion.md).
- [outerIdentity](outeridentity.md): The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.
- [ttlsInnerAuthenticationType](ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotConfigurationTTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotConfigurationTTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md).
