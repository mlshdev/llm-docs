> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruleaction/evaluateconnection](https://developer.apple.com/documentation/networkextension/neondemandruleaction/evaluateconnection)

# NEOnDemandRuleAction.evaluateConnection (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the VPN after evaluating the destination host being accessed against the rule’s parameters.

## Declaration

```swift
case evaluateConnection
```

## See Also

### Rule Actions

- [NEOnDemandRuleAction.connect](connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleAction.disconnect](disconnect.md): Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.
- [NEOnDemandRuleAction.ignore](ignore.md): Do not start the VPN connection, but do not disconnect it if it is currently connected.

# NEOnDemandRuleActionEvaluateConnection (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the VPN after evaluating the destination host being accessed against the rule’s parameters.

## Declaration

```objectivec
NEOnDemandRuleActionEvaluateConnection
```

## See Also

### Rule Actions

- [NEOnDemandRuleActionConnect](connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleActionDisconnect](disconnect.md): Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.
- [NEOnDemandRuleActionIgnore](ignore.md): Do not start the VPN connection, but do not disconnect it if it is currently connected.
