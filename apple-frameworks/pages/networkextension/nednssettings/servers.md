> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettings/servers](https://developer.apple.com/documentation/networkextension/nednssettings/servers)

# servers (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The DNS server IP addresses.

## Declaration

```swift
var servers: [String] { get }
```

## See Also

### Accessing DNS properties

- [searchDomains](searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](domainname.md): The primary domain of the tunnel.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [dnsProtocol](dnsprotocol.md): The DNS protocol used by the server, such as HTTPS or TLS.
- [NEDNSProtocol](../nednsprotocol.md)

# servers (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The DNS server IP addresses.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * servers;
```

## See Also

### Accessing DNS properties

- [searchDomains](searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](domainname.md): The primary domain of the tunnel.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [dnsProtocol](dnsprotocol.md): The DNS protocol used by the server, such as HTTPS or TLS.
- [NEDNSProtocol](../nednsprotocol.md)
