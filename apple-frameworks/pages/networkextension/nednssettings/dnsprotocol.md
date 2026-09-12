> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettings/dnsprotocol](https://developer.apple.com/documentation/networkextension/nednssettings/dnsprotocol)

# dnsProtocol (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The DNS protocol used by the server, such as HTTPS or TLS.

## Declaration

```swift
var dnsProtocol: NEDNSProtocol { get }
```

<a id="Discussion"></a>

## Discussion

By default, an [NEDNSSettings](../nednssettings.md) object will use [NEDNSProtocol.cleartext](../nednsprotocol/cleartext.md). In order to use encryption, create an [NEDNSOverHTTPSSettings](../nednsoverhttpssettings.md) or [NEDNSOverTLSSettings](../nednsovertlssettings.md) object.

## See Also

### Accessing DNS properties

- [servers](servers.md): The DNS server IP addresses.
- [searchDomains](searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](domainname.md): The primary domain of the tunnel.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [NEDNSProtocol](../nednsprotocol.md)

# dnsProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The DNS protocol used by the server, such as HTTPS or TLS.

## Declaration

```objectivec
@property (readonly) NEDNSProtocol dnsProtocol;
```

<a id="Discussion"></a>

## Discussion

By default, an [NEDNSSettings](../nednssettings.md) object will use [NEDNSProtocolCleartext](../nednsprotocol/cleartext.md). In order to use encryption, create an [NEDNSOverHTTPSSettings](../nednsoverhttpssettings.md) or [NEDNSOverTLSSettings](../nednsovertlssettings.md) object.

## See Also

### Accessing DNS properties

- [servers](servers.md): The DNS server IP addresses.
- [searchDomains](searchdomains.md): A list of domain strings used to fully qualify single-label host names.
- [domainName](domainname.md): The primary domain of the tunnel.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
- [matchDomainsNoSearch](matchdomainsnosearch.md): A Boolean that specifies if the domains in the `matchDomains` list should not be appended to the resolver’s list of search domains.
- [NEDNSProtocol](../nednsprotocol.md)
