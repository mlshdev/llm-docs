> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsovertlssettings](https://developer.apple.com/documentation/networkextension/nednsovertlssettings)

# NEDNSOverTLSSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The DNS resolver settings for a DNS-over-TLS server.

## Declaration

```swift
class NEDNSOverTLSSettings
```

## Topics

### Configuring server properties

- [serverName](nednsovertlssettings/servername.md): The TLS name of a DNS-over-TLS server.
- [init(servers:)](nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.

### Configuring client properties

- [identityReference](nednsovertlssettings/identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the DNS client credential.

## Relationships

### Inherits From

- [NEDNSSettings](nednssettings.md)

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

### DNS configuration

- [NEDNSSettingsManager](nednssettingsmanager.md): An object you use to create and manage a DNS settings configuration.
- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md): The DNS resolver settings for a DNS-over-HTTPS server.

# NEDNSOverTLSSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The DNS resolver settings for a DNS-over-TLS server.

## Declaration

```objectivec
@interface NEDNSOverTLSSettings : NEDNSSettings
```

## Topics

### Configuring server properties

- [serverName](nednsovertlssettings/servername.md): The TLS name of a DNS-over-TLS server.
- [initWithServers:](nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.

### Configuring client properties

- [identityReference](nednsovertlssettings/identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the DNS client credential.

## Relationships

### Inherits From

- [NEDNSSettings](nednssettings.md)

## See Also

### DNS configuration

- [NEDNSSettingsManager](nednssettingsmanager.md): An object you use to create and manage a DNS settings configuration.
- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md): The DNS resolver settings for a DNS-over-HTTPS server.
