> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruledisconnect](https://developer.apple.com/documentation/networkextension/neondemandruledisconnect)

# NEOnDemandRuleDisconnect (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A VPN On Demand rule that disconnects the VPN.

## Declaration

```swift
class NEOnDemandRuleDisconnect
```

<a id="overview"></a>

## Overview

When rules of this class match, the VPN connection is not started, and the VPN connection is disconnected if it is not already disconnected.

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
- [NEOnDemandRuleIgnore](neondemandruleignore.md): A VPN On Demand rule that doesn’t change the status of the VPN.
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md): A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.

# NEOnDemandRuleDisconnect (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A VPN On Demand rule that disconnects the VPN.

## Declaration

```objectivec
@interface NEOnDemandRuleDisconnect : NEOnDemandRule
```

<a id="overview"></a>

## Overview

When rules of this class match, the VPN connection is not started, and the VPN connection is disconnected if it is not already disconnected.

## Relationships

### Inherits From

- [NEOnDemandRule](neondemandrule.md)

## See Also

### Settings

- [NEOnDemandRuleConnect](neondemandruleconnect.md): A VPN On Demand rule that connects the VPN.
- [NEOnDemandRuleIgnore](neondemandruleignore.md): A VPN On Demand rule that doesn’t change the status of the VPN.
- [NEOnDemandRuleEvaluateConnection](neondemandruleevaluateconnection.md): A VPN On Demand rule that evaluate the app’s connection to determine whether to run its action.
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.
