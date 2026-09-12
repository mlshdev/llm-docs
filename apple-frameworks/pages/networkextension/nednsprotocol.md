> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsprotocol](https://developer.apple.com/documentation/networkextension/nednsprotocol)

# NEDNSProtocol (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
enum NEDNSProtocol
```

## Topics

### DNS protocols

- [NEDNSProtocol.cleartext](nednsprotocol/cleartext.md): The DNS server uses cleartext UDP or TCP over port 53.
- [NEDNSProtocol.TLS](nednsprotocol/tls.md): The DNS server uses DNS-over-TLS.
- [NEDNSProtocol.HTTPS](nednsprotocol/https.md): The DNS server uses DNS-over-HTTPS.

### Initializers

- [init(rawValue:)](nednsprotocol/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing DNS properties

- [servers](nednssettings/servers.md): The DNS server IP addresses.
- [searchDomains](nednssettings/searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](nednssettings/domainname.md): The primary domain of the tunnel.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](nednssettings/matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [dnsProtocol](nednssettings/dnsprotocol.md): The DNS protocol used by the server, such as HTTPS or TLS.

# NEDNSProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
enum NEDNSProtocol : NSInteger;
```

## Topics

### DNS protocols

- [NEDNSProtocolCleartext](nednsprotocol/cleartext.md): The DNS server uses cleartext UDP or TCP over port 53.
- [NEDNSProtocolTLS](nednsprotocol/tls.md): The DNS server uses DNS-over-TLS.
- [NEDNSProtocolHTTPS](nednsprotocol/https.md): The DNS server uses DNS-over-HTTPS.

## See Also

### Accessing DNS properties

- [servers](nednssettings/servers.md): The DNS server IP addresses.
- [searchDomains](nednssettings/searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](nednssettings/domainname.md): The primary domain of the tunnel.
- [matchDomains](nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](nednssettings/matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [dnsProtocol](nednssettings/dnsprotocol.md): The DNS protocol used by the server, such as HTTPS or TLS.
