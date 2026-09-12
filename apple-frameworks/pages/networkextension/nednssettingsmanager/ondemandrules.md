> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager/ondemandrules](https://developer.apple.com/documentation/networkextension/nednssettingsmanager/ondemandrules)

# onDemandRules (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A list of ordered rules that defines the networks on which the DNS settings will apply.

## Declaration

```swift
var onDemandRules: [NEOnDemandRule]? { get set }
```

<a id="Discussion"></a>

## Discussion

An On Demand rule with the action [NEOnDemandRuleAction.connect](../neondemandruleaction/connect.md) defines a network on which the DNS settings apply. An On Demand rule with the action [NEOnDemandRuleAction.disconnect](../neondemandruleaction/disconnect.md) causes DNS settings to not apply. An On Demand rule with the action of [NEOnDemandRuleAction.evaluateConnection](../neondemandruleaction/evaluateconnection.md) can be used to enable the DNS settings on a network with excluded domains, as specified using a [NEEvaluateConnectionRuleAction.neverConnect](../neevaluateconnectionruleaction/neverconnect.md) rule.

## See Also

### Accessing DNS configuration properties

- [isEnabled](isenabled.md): A Boolean you use to query the enabled state of the DNS settings configuration.
- [dnsSettings](dnssettings.md): An object that contains the configuration settings for a DNS server.
- [localizedDescription](localizeddescription.md): A string that contains the display name of the DNS settings configuration.

# onDemandRules (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A list of ordered rules that defines the networks on which the DNS settings will apply.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NEOnDemandRule *> * onDemandRules;
```

<a id="Discussion"></a>

## Discussion

An On Demand rule with the action [NEOnDemandRuleActionConnect](../neondemandruleaction/connect.md) defines a network on which the DNS settings apply. An On Demand rule with the action [NEOnDemandRuleActionDisconnect](../neondemandruleaction/disconnect.md) causes DNS settings to not apply. An On Demand rule with the action of [NEOnDemandRuleActionEvaluateConnection](../neondemandruleaction/evaluateconnection.md) can be used to enable the DNS settings on a network with excluded domains, as specified using a [NEEvaluateConnectionRuleActionNeverConnect](../neevaluateconnectionruleaction/neverconnect.md) rule.

## See Also

### Accessing DNS configuration properties

- [enabled](isenabled.md): A Boolean you use to query the enabled state of the DNS settings configuration.
- [dnsSettings](dnssettings.md): An object that contains the configuration settings for a DNS server.
- [localizedDescription](localizeddescription.md): A string that contains the display name of the DNS settings configuration.
