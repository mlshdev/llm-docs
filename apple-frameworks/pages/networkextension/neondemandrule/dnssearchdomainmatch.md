> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandrule/dnssearchdomainmatch](https://developer.apple.com/documentation/networkextension/neondemandrule/dnssearchdomainmatch)

# dnsSearchDomainMatch (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

DNS search domains that identify a network.

## Declaration

```swift
var dnsSearchDomainMatch: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

An array of [NSString](../../foundation/nsstring.md) objects. If the current default search domain is equal to one of the strings in this array and all of the other conditions in the rule match, then the rule matches. If this property is nil (the default), then the current default search domain does not factor into the rule match.

## See Also

### Accessing match parameters

- [dnsServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [ssidMatch](ssidmatch.md): SSIDs that identify a network.
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.

# DNSSearchDomainMatch (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

DNS search domains that identify a network.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * DNSSearchDomainMatch;
```

<a id="Discussion"></a>

## Discussion

An array of [NSString](../../foundation/nsstring.md) objects. If the current default search domain is equal to one of the strings in this array and all of the other conditions in the rule match, then the rule matches. If this property is nil (the default), then the current default search domain does not factor into the rule match.

## See Also

### Accessing match parameters

- [DNSServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [SSIDMatch](ssidmatch.md): SSIDs that identify a network.
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.
