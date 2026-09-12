> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruleaction](https://developer.apple.com/documentation/networkextension/neondemandruleaction)

# NEOnDemandRuleAction (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
enum NEOnDemandRuleAction
```

## Topics

### Rule Actions

- [NEOnDemandRuleAction.connect](neondemandruleaction/connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleAction.disconnect](neondemandruleaction/disconnect.md): Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.
- [NEOnDemandRuleAction.evaluateConnection](neondemandruleaction/evaluateconnection.md): Start the VPN after evaluating the destination host being accessed against the rule’s parameters.
- [NEOnDemandRuleAction.ignore](neondemandruleaction/ignore.md): Do not start the VPN connection, but do not disconnect it if it is currently connected.

### Initializers

- [init(rawValue:)](neondemandruleaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the rule action

- [action](neondemandrule/action.md): The action of the On Demand Rule.

# NEOnDemandRuleAction (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
enum NEOnDemandRuleAction : NSInteger;
```

## Topics

### Rule Actions

- [NEOnDemandRuleActionConnect](neondemandruleaction/connect.md): Start the VPN connection for every connection attempt.
- [NEOnDemandRuleActionDisconnect](neondemandruleaction/disconnect.md): Do not start the VPN connection, and disconnect the VPN connection if it is not currently disconnected.
- [NEOnDemandRuleActionEvaluateConnection](neondemandruleaction/evaluateconnection.md): Start the VPN after evaluating the destination host being accessed against the rule’s parameters.
- [NEOnDemandRuleActionIgnore](neondemandruleaction/ignore.md): Do not start the VPN connection, but do not disconnect it if it is currently connected.

## See Also

### Accessing the rule action

- [action](neondemandrule/action.md): The action of the On Demand Rule.
