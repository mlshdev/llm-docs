> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neondemandruleevaluateconnection/connectionrules](https://developer.apple.com/documentation/networkextension/neondemandruleevaluateconnection/connectionrules)

# connectionRules (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An array of [NEEvaluateConnectionRule](../neevaluateconnectionrule.md) objects

## Declaration

```swift
var connectionRules: [NEEvaluateConnectionRule]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each `NEEvaluateConnectionRule` object defines a behavior to take for connections that match the domain of the rule. Each rule is evaluated in order against the properties of a network connection being established. An example configuration has two connection rules: a rule matching `myserver.example.com` with the domain action [NEEvaluateConnectionRuleAction.neverConnect](../neevaluateconnectionruleaction/neverconnect.md), followed by a rule matching `example.com` with the domain action [NEEvaluateConnectionRuleAction.connectIfNeeded](../neevaluateconnectionruleaction/connectifneeded.md). This configuration would cause all connections to hostnames in `example.com` that do not resolve on the current network to trigger the VPN, except for `myserver.example.com`.

## See Also

### Accessing connection rules

- [NEEvaluateConnectionRule](../neevaluateconnectionrule.md): `NEEvaluateConnectionRule` associates properties of network connections with an action.

# connectionRules (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An array of [NEEvaluateConnectionRule](../neevaluateconnectionrule.md) objects

## Declaration

```objectivec
@property (copy, nullable) NSArray<NEEvaluateConnectionRule *> * connectionRules;
```

<a id="Discussion"></a>

## Discussion

Each `NEEvaluateConnectionRule` object defines a behavior to take for connections that match the domain of the rule. Each rule is evaluated in order against the properties of a network connection being established. An example configuration has two connection rules: a rule matching `myserver.example.com` with the domain action [NEEvaluateConnectionRuleActionNeverConnect](../neevaluateconnectionruleaction/neverconnect.md), followed by a rule matching `example.com` with the domain action [NEEvaluateConnectionRuleActionConnectIfNeeded](../neevaluateconnectionruleaction/connectifneeded.md). This configuration would cause all connections to hostnames in `example.com` that do not resolve on the current network to trigger the VPN, except for `myserver.example.com`.

## See Also

### Accessing connection rules

- [NEEvaluateConnectionRule](../neevaluateconnectionrule.md): `NEEvaluateConnectionRule` associates properties of network connections with an action.
