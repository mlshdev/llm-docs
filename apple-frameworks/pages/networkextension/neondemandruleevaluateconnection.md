> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruleevaluateconnection](https://developer.apple.com/documentation/networkextension/neondemandruleevaluateconnection)

# NEOnDemandRuleEvaluateConnection (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.

## Declaration

```swift
class NEOnDemandRuleEvaluateConnection
```

<a id="overview"></a>

## Overview

When rules of this class match, the properties of the network connection being established are matched against a set of connection rules. The action of the matched rule (if any) is used to determine whether or not the VPN will be started.

## Topics

### Accessing connection rules

- [connectionRules](neondemandruleevaluateconnection/connectionrules.md): An array of [NEEvaluateConnectionRule](neevaluateconnectionrule.md) objects
- [NEEvaluateConnectionRule](neevaluateconnectionrule.md): `NEEvaluateConnectionRule` associates properties of network connections with an action.

## Relationships

### Inherits From

- [NEOnDemandRule](neondemandrule.md)

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
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.

# NEOnDemandRuleEvaluateConnection (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.

## Declaration

```objectivec
@interface NEOnDemandRuleEvaluateConnection : NEOnDemandRule
```

<a id="overview"></a>

## Overview

When rules of this class match, the properties of the network connection being established are matched against a set of connection rules. The action of the matched rule (if any) is used to determine whether or not the VPN will be started.

## Topics

### Accessing connection rules

- [connectionRules](neondemandruleevaluateconnection/connectionrules.md): An array of [NEEvaluateConnectionRule](neevaluateconnectionrule.md) objects
- [NEEvaluateConnectionRule](neevaluateconnectionrule.md): `NEEvaluateConnectionRule` associates properties of network connections with an action.

## Relationships

### Inherits From

- [NEOnDemandRule](neondemandrule.md)

## See Also

### Settings

- [NEOnDemandRuleConnect](neondemandruleconnect.md): A VPN On Demand rule that connects the VPN.
- [NEOnDemandRuleDisconnect](neondemandruledisconnect.md): A VPN On Demand rule that disconnects the VPN.
- [NEOnDemandRuleIgnore](neondemandruleignore.md): A VPN On Demand rule that doesn’t change the status of the VPN.
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.
