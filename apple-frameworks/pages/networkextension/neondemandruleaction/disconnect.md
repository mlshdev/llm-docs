> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruleaction/disconnect](https://developer.apple.com/documentation/networkextension/neondemandruleaction/disconnect)

# NEOnDemandRuleAction.disconnect (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.

## Declaration

```swift
case disconnect
```

## See Also

### Rule Actions

- [NEOnDemandRuleAction.connect](connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleAction.evaluateConnection](evaluateconnection.md): Start the VPN after evaluating the destination host being accessed against the rule’s parameters.
- [NEOnDemandRuleAction.ignore](ignore.md): Do not start the VPN connection, but do not disconnect it if it is currently connected.

# NEOnDemandRuleActionDisconnect (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.

## Declaration

```objectivec
NEOnDemandRuleActionDisconnect
```

## See Also

### Rule Actions

- [NEOnDemandRuleActionConnect](connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleActionEvaluateConnection](evaluateconnection.md): Start the VPN after evaluating the destination host being accessed against the rule’s parameters.
- [NEOnDemandRuleActionIgnore](ignore.md): Do not start the VPN connection, but do not disconnect it if it is currently connected.
