> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruleaction/ignore](https://developer.apple.com/documentation/networkextension/neondemandruleaction/ignore)

# NEOnDemandRuleAction.ignore (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Do not start the VPN connection, but do not disconnect it if it is currently connected.

## Declaration

```swift
case ignore
```

## See Also

### Rule Actions

- [NEOnDemandRuleAction.connect](connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleAction.disconnect](disconnect.md): Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.
- [NEOnDemandRuleAction.evaluateConnection](evaluateconnection.md): Start the VPN after evaluating the destination host being accessed against the rule’s parameters.

# NEOnDemandRuleActionIgnore (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Do not start the VPN connection, but do not disconnect it if it is currently connected.

## Declaration

```objectivec
NEOnDemandRuleActionIgnore
```

## See Also

### Rule Actions

- [NEOnDemandRuleActionConnect](connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleActionDisconnect](disconnect.md): Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.
- [NEOnDemandRuleActionEvaluateConnection](evaluateconnection.md): Start the VPN after evaluating the destination host being accessed against the rule’s parameters.
