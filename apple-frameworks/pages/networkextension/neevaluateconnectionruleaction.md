> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neevaluateconnectionruleaction](https://developer.apple.com/documentation/networkextension/neevaluateconnectionruleaction)

# NEEvaluateConnectionRuleAction (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
enum NEEvaluateConnectionRuleAction
```

## Topics

### Rule Actions

- [NEEvaluateConnectionRuleAction.connectIfNeeded](neevaluateconnectionruleaction/connectifneeded.md): Start the VPN if connections to the matching hostname cannot be resolved.
- [NEEvaluateConnectionRuleAction.neverConnect](neevaluateconnectionruleaction/neverconnect.md): Do not start the VPN.

### Initializers

- [init(rawValue:)](neevaluateconnectionruleaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Rule Action

- [action](neevaluateconnectionrule/action.md): The action to take if the properties of the network connection being established match the rule.

# NEEvaluateConnectionRuleAction (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
enum NEEvaluateConnectionRuleAction : NSInteger;
```

## Topics

### Rule Actions

- [NEEvaluateConnectionRuleActionConnectIfNeeded](neevaluateconnectionruleaction/connectifneeded.md): Start the VPN if connections to the matching hostname cannot be resolved.
- [NEEvaluateConnectionRuleActionNeverConnect](neevaluateconnectionruleaction/neverconnect.md): Do not start the VPN.

## See Also

### Accessing the Rule Action

- [action](neevaluateconnectionrule/action.md): The action to take if the properties of the network connection being established match the rule.
