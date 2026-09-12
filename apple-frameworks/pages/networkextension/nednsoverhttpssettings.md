> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsoverhttpssettings](https://developer.apple.com/documentation/networkextension/nednsoverhttpssettings)

# NEDNSOverHTTPSSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The DNS resolver settings for a DNS-over-HTTPS server.

## Declaration

```swift
class NEDNSOverHTTPSSettings
```

## Topics

### Configuring server properties

- [serverURL](nednsoverhttpssettings/serverurl.md): The URL of a DNS-over-HTTPS server.
- [init(servers:)](nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.

### Configuring client properties

- [identityReference](nednsoverhttpssettings/identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the DNS client credential.

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
- [NEDNSOverTLSSettings](nednsovertlssettings.md): The DNS resolver settings for a DNS-over-TLS server.

# NEDNSOverHTTPSSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The DNS resolver settings for a DNS-over-HTTPS server.

## Declaration

```objectivec
@interface NEDNSOverHTTPSSettings : NEDNSSettings
```

## Topics

### Configuring server properties

- [serverURL](nednsoverhttpssettings/serverurl.md): The URL of a DNS-over-HTTPS server.
- [initWithServers:](nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.

### Configuring client properties

- [identityReference](nednsoverhttpssettings/identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the DNS client credential.

## Relationships

### Inherits From

- [NEDNSSettings](nednssettings.md)

## See Also

### DNS configuration

- [NEDNSSettingsManager](nednssettingsmanager.md): An object you use to create and manage a DNS settings configuration.
- [NEDNSOverTLSSettings](nednsovertlssettings.md): The DNS resolver settings for a DNS-over-TLS server.
