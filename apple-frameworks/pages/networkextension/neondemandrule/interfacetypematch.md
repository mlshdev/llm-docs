> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandrule/interfacetypematch](https://developer.apple.com/documentation/networkextension/neondemandrule/interfacetypematch)

# interfaceTypeMatch (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An interface type to identify a network.

## Declaration

```swift
var interfaceTypeMatch: NEOnDemandRuleInterfaceType { get set }
```

<a id="Discussion"></a>

## Discussion

The type of interface that this rule matches. If the current primary network interface is of this type and all of the other conditions in the rule match, then the rule matches. If this property is `NEOnDemandRuleInterfaceTypeAny` (the default), then the current primary interface type does not factor into the rule match.

## See Also

### Accessing match parameters

- [dnsSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [dnsServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [ssidMatch](ssidmatch.md): SSIDs that identify a network.
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.

# interfaceTypeMatch (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An interface type to identify a network.

## Declaration

```objectivec
@property NEOnDemandRuleInterfaceType interfaceTypeMatch;
```

<a id="Discussion"></a>

## Discussion

The type of interface that this rule matches. If the current primary network interface is of this type and all of the other conditions in the rule match, then the rule matches. If this property is `NEOnDemandRuleInterfaceTypeAny` (the default), then the current primary interface type does not factor into the rule match.

## See Also

### Accessing match parameters

- [DNSSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [DNSServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [SSIDMatch](ssidmatch.md): SSIDs that identify a network.
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.
