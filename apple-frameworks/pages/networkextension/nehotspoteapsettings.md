> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoteapsettings](https://developer.apple.com/documentation/networkextension/nehotspoteapsettings)

# NEHotspotEAPSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.

## Declaration

```swift
class NEHotspotEAPSettings
```

## Topics

### Accessing EAP properties

- [isTLSClientCertificateRequired](nehotspoteapsettings/istlsclientcertificaterequired.md): A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.
- [trustedServerNames](nehotspoteapsettings/trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](nehotspoteapsettings/supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotEAPSettings.EAPType](nehotspoteapsettings/eaptype.md): The EAP types that may be specified in [supportedEAPTypes](nehotspoteapsettings/supportedeaptypes.md).
- [username](nehotspoteapsettings/username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](nehotspoteapsettings/password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](nehotspoteapsettings/preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [NEHotspotEAPSettings.TLSVersion](nehotspoteapsettings/tlsversion.md): The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](nehotspoteapsettings/preferredtlsversion.md).
- [outerIdentity](nehotspoteapsettings/outeridentity.md): The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.
- [ttlsInnerAuthenticationType](nehotspoteapsettings/ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotEAPSettings.TTLSInnerAuthenticationType](nehotspoteapsettings/ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotEAPSettings.TTLSInnerAuthenticationType](nehotspoteapsettings/ttlsinnerauthenticationtype-swift.enum.md).

### Setting Keychain-based EAP Properties

- [setIdentity(\_:)](nehotspoteapsettings/setidentity%28__%29.md): Sets the client identity for EAP authentication.
- [setTrustedServerCertificates(\_:)](nehotspoteapsettings/settrustedservercertificates%28__%29.md): Sets trusted EAP server certificates for an enterprise Wi-Fi or Hotspot 2.0 network.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Wi-Fi network configuration

- [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md): A manager that applies and removes hotspot configurations of Wi-Fi networks.
- [NEHotspotConfiguration](nehotspotconfiguration.md): Configuration settings for a Wi-Fi network.
- [NEHotspotHS20Settings](nehotspoths20settings.md): Settings for configuring Hotspot 2.0 Wi-Fi networks.

# NEHotspotEAPSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.

## Declaration

```objectivec
@interface NEHotspotEAPSettings : NSObject
```

## Topics

### Accessing EAP properties

- [tlsClientCertificateRequired](nehotspoteapsettings/istlsclientcertificaterequired.md): A Boolean value indicating whether a network requires two-factor authentication or allows zero-factor authentication.
- [trustedServerNames](nehotspoteapsettings/trustedservernames.md): An array of server certificate common name strings used to verify a server’s certificate.
- [supportedEAPTypes](nehotspoteapsettings/supportedeaptypes.md): An array of supported EAP types.
- [NEHotspotConfigurationEAPType](nehotspoteapsettings/eaptype.md): The EAP types that may be specified in [supportedEAPTypes](nehotspoteapsettings/supportedeaptypes.md).
- [username](nehotspoteapsettings/username.md): The user name string for EAP authentication, encoded as UTF-8.
- [password](nehotspoteapsettings/password.md): The password component of the IEEE 802.1X authentication credential.
- [preferredTLSVersion](nehotspoteapsettings/preferredtlsversion.md): The Transport Layer Security (TLS) version to use during a TLS authentication handshake.
- [NEHotspotConfigurationEAPTLSVersion](nehotspoteapsettings/tlsversion.md): The EAPTLS Version identifiers that may be specified by [preferredTLSVersion](nehotspoteapsettings/preferredtlsversion.md).
- [outerIdentity](nehotspoteapsettings/outeridentity.md): The identity string to be used in the EAP-Identity/Response packet during outer EAP authentication.
- [ttlsInnerAuthenticationType](nehotspoteapsettings/ttlsinnerauthenticationtype-swift.property.md): The inner-layer authentication protocol used by a TTLS module.
- [NEHotspotConfigurationTTLSInnerAuthenticationType](nehotspoteapsettings/ttlsinnerauthenticationtype-swift.enum.md): The TTLS Inner Authentication Types that may be specified by [NEHotspotConfigurationTTLSInnerAuthenticationType](nehotspoteapsettings/ttlsinnerauthenticationtype-swift.enum.md).

### Setting Keychain-based EAP Properties

- [setIdentity:](nehotspoteapsettings/setidentity%28__%29.md): Sets the client identity for EAP authentication.
- [setTrustedServerCertificates:](nehotspoteapsettings/settrustedservercertificates%28__%29.md): Sets trusted EAP server certificates for an enterprise Wi-Fi or Hotspot 2.0 network.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Wi-Fi network configuration

- [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md): A manager that applies and removes hotspot configurations of Wi-Fi networks.
- [NEHotspotConfiguration](nehotspotconfiguration.md): Configuration settings for a Wi-Fi network.
- [NEHotspotHS20Settings](nehotspoths20settings.md): Settings for configuring Hotspot 2.0 Wi-Fi networks.
