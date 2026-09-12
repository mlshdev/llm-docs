> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandrule/probeurl](https://developer.apple.com/documentation/networkextension/neondemandrule/probeurl)

# probeURL (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A URL to probe when all other network identifiers match to validate that an expected resource is available.

## Declaration

```swift
var probeURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

An HTTP or HTTPS URL. If a request sent to this URL results in a HTTP 200 OK response and all of the other conditions in the rule match, then then rule matches. If this property is nil (the default), then an HTTP request does not factor into the rule match.

## See Also

### Accessing match parameters

- [dnsSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [dnsServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [ssidMatch](ssidmatch.md): SSIDs that identify a network.

# probeURL (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A URL to probe when all other network identifiers match to validate that an expected resource is available.

## Declaration

```objectivec
@property (copy, nullable) NSURL * probeURL;
```

<a id="Discussion"></a>

## Discussion

An HTTP or HTTPS URL. If a request sent to this URL results in a HTTP 200 OK response and all of the other conditions in the rule match, then then rule matches. If this property is nil (the default), then an HTTP request does not factor into the rule match.

## See Also

### Accessing match parameters

- [DNSSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [DNSServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [SSIDMatch](ssidmatch.md): SSIDs that identify a network.
