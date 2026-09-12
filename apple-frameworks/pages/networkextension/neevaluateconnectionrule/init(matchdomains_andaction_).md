> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neevaluateconnectionrule/init(matchdomains:andaction:)](https://developer.apple.com/documentation/networkextension/neevaluateconnectionrule/init(matchdomains:andaction:))

# init(matchDomains:andAction:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize an `NEEvaluateConnectionRule` instance with a list of destination host domains and an action.

## Declaration

```swift
init(matchDomains domains: [String], andAction action: NEEvaluateConnectionRuleAction)
```

## Parameters

- `domains`: An array of domains used to match the destination hostname of connections. If the destination hostname of a connection matches any of the domains in the array, then the connection matches the rule. Each domain is matched against the destination hostname using suffix matching, and each label in the domain must match an entire label in the hostname. For example, the domain `example.com` will match the hostname `www.example.com` but not `www.anotherexample.com`.
- `action`: The action to apply for connections matching the rule.

# initWithMatchDomains:andAction: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize an `NEEvaluateConnectionRule` instance with a list of destination host domains and an action.

## Declaration

```objectivec
- (instancetype) initWithMatchDomains:(NSArray<NSString *> *) domains andAction:(NEEvaluateConnectionRuleAction) action;
```

## Parameters

- `domains`: An array of domains used to match the destination hostname of connections. If the destination hostname of a connection matches any of the domains in the array, then the connection matches the rule. Each domain is matched against the destination hostname using suffix matching, and each label in the domain must match an entire label in the hostname. For example, the domain `example.com` will match the hostname `www.example.com` but not `www.anotherexample.com`.
- `action`: The action to apply for connections matching the rule.
