> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neondemandruleconnect

# NEOnDemandRuleConnect (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A VPN On Demand rule that connects the VPN.

## Declaration

```swift
class NEOnDemandRuleConnect
```

<a id="overview"></a>

## Overview

When rules of this class match, the system starts the VPN connection whenever an application running on the system opens a network connection.

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

- [NEOnDemandRuleDisconnect](neondemandruledisconnect.md): A VPN On Demand rule that disconnects the VPN.
- [NEOnDemandRuleIgnore](neondemandruleignore.md): A VPN On Demand rule that doesn’t change the status of the VPN.
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md): A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.

# NEOnDemandRuleConnect (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A VPN On Demand rule that connects the VPN.

## Declaration

```objectivec
@interface NEOnDemandRuleConnect : NEOnDemandRule
```

<a id="overview"></a>

## Overview

When rules of this class match, the system starts the VPN connection whenever an application running on the system opens a network connection.

## Relationships

### Inherits From

- [NEOnDemandRule](neondemandrule.md)

## See Also

### Settings

- [NEOnDemandRuleDisconnect](neondemandruledisconnect.md): A VPN On Demand rule that disconnects the VPN.
- [NEOnDemandRuleIgnore](neondemandruleignore.md): A VPN On Demand rule that doesn’t change the status of the VPN.
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md): A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.
