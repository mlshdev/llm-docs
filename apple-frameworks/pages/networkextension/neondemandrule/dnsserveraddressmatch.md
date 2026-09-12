> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandrule/dnsserveraddressmatch](https://developer.apple.com/documentation/networkextension/neondemandrule/dnsserveraddressmatch)

# dnsServerAddressMatch (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

DNS server addresses that identify a network.

## Declaration

```swift
var dnsServerAddressMatch: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

An array of DNS server IP addresses represented as `NSString` objects. If each of the current default DNS servers is equal to one of the strings in this array and all of the other conditions in the rule match, then the rule matches. If this property is nil (the default), then the default DNS servers do not factor into the rule match.

## See Also

### Accessing match parameters

- [dnsSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [ssidMatch](ssidmatch.md): SSIDs that identify a network.
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.

# DNSServerAddressMatch (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

DNS server addresses that identify a network.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * DNSServerAddressMatch;
```

<a id="Discussion"></a>

## Discussion

An array of DNS server IP addresses represented as `NSString` objects. If each of the current default DNS servers is equal to one of the strings in this array and all of the other conditions in the rule match, then the rule matches. If this property is nil (the default), then the default DNS servers do not factor into the rule match.

## See Also

### Accessing match parameters

- [DNSSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [SSIDMatch](ssidmatch.md): SSIDs that identify a network.
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.
