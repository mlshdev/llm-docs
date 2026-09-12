> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettings](https://developer.apple.com/documentation/networkextension/nednssettings)

# NEDNSSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The DNS resolver settings of a network tunnel or a system-wide configuration.

## Declaration

```swift
class NEDNSSettings
```

## Topics

### Initializing DNS settings

- [init(servers:)](nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.

### Accessing DNS properties

- [servers](nednssettings/servers.md): The DNS server IP addresses.
- [searchDomains](nednssettings/searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](nednssettings/domainname.md): The primary domain of the tunnel.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](nednssettings/matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [dnsProtocol](nednssettings/dnsprotocol.md): The DNS protocol used by the server, such as HTTPS or TLS.
- [NEDNSProtocol](nednsprotocol.md)

### Instance Properties

- [allowFailover](nednssettings/allowfailover.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md)
- [NEDNSOverTLSSettings](nednsovertlssettings.md)

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

### Related Documentation

- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md): The DNS resolver settings for a DNS-over-HTTPS server.
- [NEDNSOverTLSSettings](nednsovertlssettings.md): The DNS resolver settings for a DNS-over-TLS server.

### Provider

- [NEDNSProxyProvider](nednsproxyprovider.md): The principal class for a DNS proxy provider app extension.

# NEDNSSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The DNS resolver settings of a network tunnel or a system-wide configuration.

## Declaration

```objectivec
@interface NEDNSSettings : NSObject
```

## Topics

### Initializing DNS settings

- [initWithServers:](nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.

### Accessing DNS properties

- [servers](nednssettings/servers.md): The DNS server IP addresses.
- [searchDomains](nednssettings/searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](nednssettings/domainname.md): The primary domain of the tunnel.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](nednssettings/matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [dnsProtocol](nednssettings/dnsprotocol.md): The DNS protocol used by the server, such as HTTPS or TLS.
- [NEDNSProtocol](nednsprotocol.md)

### Instance Properties

- [allowFailover](nednssettings/allowfailover.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md)
- [NEDNSOverTLSSettings](nednsovertlssettings.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Related Documentation

- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md): The DNS resolver settings for a DNS-over-HTTPS server.
- [NEDNSOverTLSSettings](nednsovertlssettings.md): The DNS resolver settings for a DNS-over-TLS server.

### Provider

- [NEDNSProxyProvider](nednsproxyprovider.md): The principal class for a DNS proxy provider app extension.
