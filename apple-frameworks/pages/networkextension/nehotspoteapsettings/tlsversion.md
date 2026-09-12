> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoteapsettings/tlsversion](https://developer.apple.com/documentation/networkextension/nehotspoteapsettings/tlsversion)

# NEHotspotEAPSettings.TLSVersion (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](preferredtlsversion.md).

## Declaration

```swift
enum TLSVersion
```

## Topics

### Initializers

- [init(rawValue:)](tlsversion/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing EAP properties

- [isTLSClientCertificateRequired](istlsclientcertificaterequired.md): A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.
- [trustedServerNames](trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotEAPSettings.EAPType](eaptype.md): The EAP types that may be specified in [supportedEAPTypes](supportedeaptypes.md).
- [username](username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [outerIdentity](outeridentity.md): The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.
- [ttlsInnerAuthenticationType](ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotEAPSettings.TTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotEAPSettings.TTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md).

# NEHotspotConfigurationEAPTLSVersion (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](preferredtlsversion.md).

## Declaration

```objectivec
enum NEHotspotConfigurationEAPTLSVersion : NSInteger;
```

## Topics

### Enumeration Cases

- [NEHotspotConfigurationEAPTLSVersion_1_0](../nehotspotconfigurationeaptlsversion/nehotspotconfigurationeaptlsversion_1_0.md): Network EAPTLS version 1.0.
- [NEHotspotConfigurationEAPTLSVersion_1_1](../nehotspotconfigurationeaptlsversion/nehotspotconfigurationeaptlsversion_1_1.md): Network EAPTLS version 1.1.
- [NEHotspotConfigurationEAPTLSVersion_1_2](../nehotspotconfigurationeaptlsversion/nehotspotconfigurationeaptlsversion_1_2.md): Network EAPTLS version 1.2.

## See Also

### Accessing EAP properties

- [tlsClientCertificateRequired](istlsclientcertificaterequired.md): A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.
- [trustedServerNames](trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotConfigurationEAPType](eaptype.md): The EAP types that may be specified in [supportedEAPTypes](supportedeaptypes.md).
- [username](username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [outerIdentity](outeridentity.md): The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.
- [ttlsInnerAuthenticationType](ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotConfigurationTTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotConfigurationTTLSInnerAuthenticationType](ttlsinnerauthenticationtype-swift.enum.md).
