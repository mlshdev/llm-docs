> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandrule](https://developer.apple.com/documentation/networkextension/neondemandrule)

# NEOnDemandRule (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A base class shared by all VPN On Demand rules.

## Declaration

```swift
class NEOnDemandRule
```

<a id="overview"></a>

## Overview

Each rule is defined by a single action and a set of optional matching conditions. The action defines how the system should trigger the VPN when the conditions are met, such as connecting automatically for all connections, connecting conditionally, or disconnecting. The optional conditions describe parameters of a network. Some common rules include disconnecting the VPN on a trusted, internal network, and triggering on all other networks. When rules are defined in an array, they are evaluated in order and the action of the first rule to match all conditions is chosen.

Instances of the `NEOnDemandRule` class should be created through one of its subclasses: [NEOnDemandRuleConnect](neondemandruleconnect.md), [NEOnDemandRuleDisconnect](neondemandruledisconnect.md), [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md), or [NEOnDemandRuleIgnore](neondemandruleignore.md).

## Topics

### Accessing match parameters

- [dnsSearchDomainMatch](neondemandrule/dnssearchdomainmatch.md): DNS search domains that identify a network.
- [dnsServerAddressMatch](neondemandrule/dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](neondemandrule/interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](neondemandruleinterfacetype.md)
- [ssidMatch](neondemandrule/ssidmatch.md): SSIDs that identify a network.
- [probeURL](neondemandrule/probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.

### Accessing the rule action

- [action](neondemandrule/action.md): The action of the On Demand Rule.
- [NEOnDemandRuleAction](neondemandruleaction.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEOnDemandRuleConnect](neondemandruleconnect.md)
- [NEOnDemandRuleDisconnect](neondemandruledisconnect.md)
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md)
- [NEOnDemandRuleIgnore](neondemandruleignore.md)

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

### Settings

- [NEOnDemandRuleConnect](neondemandruleconnect.md): A VPN On Demand rule that connects the VPN.
- [NEOnDemandRuleDisconnect](neondemandruledisconnect.md): A VPN On Demand rule that disconnects the VPN.
- [NEOnDemandRuleIgnore](neondemandruleignore.md): A VPN On Demand rule that doesn’t change the status of the VPN.
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md): A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.

# NEOnDemandRule (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A base class shared by all VPN On Demand rules.

## Declaration

```objectivec
@interface NEOnDemandRule : NSObject
```

<a id="overview"></a>

## Overview

Each rule is defined by a single action and a set of optional matching conditions. The action defines how the system should trigger the VPN when the conditions are met, such as connecting automatically for all connections, connecting conditionally, or disconnecting. The optional conditions describe parameters of a network. Some common rules include disconnecting the VPN on a trusted, internal network, and triggering on all other networks. When rules are defined in an array, they are evaluated in order and the action of the first rule to match all conditions is chosen.

Instances of the `NEOnDemandRule` class should be created through one of its subclasses: [NEOnDemandRuleConnect](neondemandruleconnect.md), [NEOnDemandRuleDisconnect](neondemandruledisconnect.md), [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md), or [NEOnDemandRuleIgnore](neondemandruleignore.md).

## Topics

### Accessing match parameters

- [DNSSearchDomainMatch](neondemandrule/dnssearchdomainmatch.md): DNS search domains that identify a network.
- [DNSServerAddressMatch](neondemandrule/dnsserveraddressmatch.md): DNS server addresses that identify a network.
- [interfaceTypeMatch](neondemandrule/interfacetypematch.md): An interface type to identify a network.
- [NEOnDemandRuleInterfaceType](neondemandruleinterfacetype.md)
- [SSIDMatch](neondemandrule/ssidmatch.md): SSIDs that identify a network.
- [probeURL](neondemandrule/probeurl.md): A URL to probe when all other network identifiers match to validate that an expected resource is available.

### Accessing the rule action

- [action](neondemandrule/action.md): The action of the On Demand Rule.
- [NEOnDemandRuleAction](neondemandruleaction.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEOnDemandRuleConnect](neondemandruleconnect.md)
- [NEOnDemandRuleDisconnect](neondemandruledisconnect.md)
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md)
- [NEOnDemandRuleIgnore](neondemandruleignore.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Settings

- [NEOnDemandRuleConnect](neondemandruleconnect.md): A VPN On Demand rule that connects the VPN.
- [NEOnDemandRuleDisconnect](neondemandruledisconnect.md): A VPN On Demand rule that disconnects the VPN.
- [NEOnDemandRuleIgnore](neondemandruleignore.md): A VPN On Demand rule that doesn’t change the status of the VPN.
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md): A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.
