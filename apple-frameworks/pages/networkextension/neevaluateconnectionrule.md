> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neevaluateconnectionrule](https://developer.apple.com/documentation/networkextension/neevaluateconnectionrule)

# NEEvaluateConnectionRule (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

`NEEvaluateConnectionRule` associates properties of network connections with an action.

## Declaration

```swift
class NEEvaluateConnectionRule
```

## Topics

### Initializing a Rule

- [init(matchDomains:andAction:)](neevaluateconnectionrule/init%28matchdomains_andaction_%29.md): Initialize an `NEEvaluateConnectionRule` instance with a list of destination host domains and an action.

### Accessing Rule Match Properties

- [matchDomains](neevaluateconnectionrule/matchdomains.md): An array of domains used to match the destination hostname of connections. If the destination hostname of a connection matches any of the domains in the array, then the connection matches the rule. Each domain is matched against the destination hostname using suffix matching, and each label in the domain must match an entire label in the hostname. For example, the domain `example.com` will match the hostname `www.example.com` but not `www.anotherexample.com`.
- [useDNSServers](neevaluateconnectionrule/usednsservers.md): If the rule matches the connection being established and the action is `NEEvaluateConnectionRuleActionConnectIfNeeded`, the DNS servers specified in this array are used to resolve the destination hostname of the connection while evaluating connectivity to the destination of the connection. If the resolution fails for any reason, the VPN is started.
- [probeURL](neevaluateconnectionrule/probeurl.md): An HTTP or HTTPS URL. If the rule matches the connection being established and the action is `NEEvaluateConnectionRuleActionConnectIfNeeded` and a request sent to this URL results in a response with an HTTP response code other than 200, then the VPN is started.

### Accessing the Rule Action

- [action](neevaluateconnectionrule/action.md): The action to take if the properties of the network connection being established match the rule.
- [NEEvaluateConnectionRuleAction](neevaluateconnectionruleaction.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Accessing connection rules

- [connectionRules](neondemandruleevaluateconnection/connectionrules.md): An array of [NEEvaluateConnectionRule](neevaluateconnectionrule.md) objects

# NEEvaluateConnectionRule (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

`NEEvaluateConnectionRule` associates properties of network connections with an action.

## Declaration

```objectivec
@interface NEEvaluateConnectionRule : NSObject
```

## Topics

### Initializing a Rule

- [initWithMatchDomains:andAction:](neevaluateconnectionrule/init%28matchdomains_andaction_%29.md): Initialize an `NEEvaluateConnectionRule` instance with a list of destination host domains and an action.

### Accessing Rule Match Properties

- [matchDomains](neevaluateconnectionrule/matchdomains.md): An array of domains used to match the destination hostname of connections. If the destination hostname of a connection matches any of the domains in the array, then the connection matches the rule. Each domain is matched against the destination hostname using suffix matching, and each label in the domain must match an entire label in the hostname. For example, the domain `example.com` will match the hostname `www.example.com` but not `www.anotherexample.com`.
- [useDNSServers](neevaluateconnectionrule/usednsservers.md): If the rule matches the connection being established and the action is `NEEvaluateConnectionRuleActionConnectIfNeeded`, the DNS servers specified in this array are used to resolve the destination hostname of the connection while evaluating connectivity to the destination of the connection. If the resolution fails for any reason, the VPN is started.
- [probeURL](neevaluateconnectionrule/probeurl.md): An HTTP or HTTPS URL. If the rule matches the connection being established and the action is `NEEvaluateConnectionRuleActionConnectIfNeeded` and a request sent to this URL results in a response with an HTTP response code other than 200, then the VPN is started.

### Accessing the Rule Action

- [action](neevaluateconnectionrule/action.md): The action to take if the properties of the network connection being established match the rule.
- [NEEvaluateConnectionRuleAction](neevaluateconnectionruleaction.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing connection rules

- [connectionRules](neondemandruleevaluateconnection/connectionrules.md): An array of [NEEvaluateConnectionRule](neevaluateconnectionrule.md) objects
