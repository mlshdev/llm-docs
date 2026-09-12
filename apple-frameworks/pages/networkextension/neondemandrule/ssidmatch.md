> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandrule/ssidmatch](https://developer.apple.com/documentation/networkextension/neondemandrule/ssidmatch)

# ssidMatch (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

SSIDs that identify a network.

## Declaration

```swift
var ssidMatch: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

An array of [NSString](../../foundation/nsstring.md) objects. If the Service Set Identifier (SSID) of the current primary connected network matches one of the strings in this array and all of the other conditions in the rule match, then the rule matches. If this property is nil (the default), then the current primary connected network SSID does not factor into the rule match.

## See Also

### Accessing match parameters

- [dnsSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [dnsServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.

# SSIDMatch (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

SSIDs that identify a network.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * SSIDMatch;
```

<a id="Discussion"></a>

## Discussion

An array of [NSString](../../foundation/nsstring.md) objects. If the Service Set Identifier (SSID) of the current primary connected network matches one of the strings in this array and all of the other conditions in the rule match, then the rule matches. If this property is nil (the default), then the current primary connected network SSID does not factor into the rule match.

## See Also

### Accessing match parameters

- [DNSSearchDomainMatch](dnssearchdomainmatch.md): DNS search domains that identify a network.
- [DNSServerAddressMatch](dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](../neondemandruleinterfacetype.md)
- [probeURL](probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.
