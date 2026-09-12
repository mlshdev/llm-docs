> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruleinterfacetype](https://developer.apple.com/documentation/networkextension/neondemandruleinterfacetype)

# NEOnDemandRuleInterfaceType (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
enum NEOnDemandRuleInterfaceType
```

## Topics

### Interface Types

- [NEOnDemandRuleInterfaceType.any](neondemandruleinterfacetype/any.md): Match any interface type
- [NEOnDemandRuleInterfaceType.ethernet](neondemandruleinterfacetype/ethernet.md): Match wired ethernet interfaces
- [NEOnDemandRuleInterfaceType.wiFi](neondemandruleinterfacetype/wifi.md): Match Wi-Fi interfaces
- [NEOnDemandRuleInterfaceType.cellular](neondemandruleinterfacetype/cellular.md): Match cellular data interfaces

### Initializers

- [init(rawValue:)](neondemandruleinterfacetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing match parameters

- [dnsSearchDomainMatch](neondemandrule/dnssearchdomainmatch.md): DNS search domains that identify a network.
- [dnsServerAddressMatch](neondemandrule/dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](neondemandrule/interfacetypematch.md): An interface type to identify a network.
- [ssidMatch](neondemandrule/ssidmatch.md): SSIDs that identify a network.
- [probeURL](neondemandrule/probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.

# NEOnDemandRuleInterfaceType (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
enum NEOnDemandRuleInterfaceType : NSInteger;
```

## Topics

### Interface Types

- [NEOnDemandRuleInterfaceTypeAny](neondemandruleinterfacetype/any.md): Match any interface type
- [NEOnDemandRuleInterfaceTypeEthernet](neondemandruleinterfacetype/ethernet.md): Match wired ethernet interfaces
- [NEOnDemandRuleInterfaceTypeWiFi](neondemandruleinterfacetype/wifi.md): Match Wi-Fi interfaces
- [NEOnDemandRuleInterfaceTypeCellular](neondemandruleinterfacetype/cellular.md): Match cellular data interfaces

## See Also

### Accessing match parameters

- [DNSSearchDomainMatch](neondemandrule/dnssearchdomainmatch.md): DNS search domains that identify a network.
- [DNSServerAddressMatch](neondemandrule/dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](neondemandrule/interfacetypematch.md): An interface type to identify a network.
- [SSIDMatch](neondemandrule/ssidmatch.md): SSIDs that identify a network.
- [probeURL](neondemandrule/probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.
