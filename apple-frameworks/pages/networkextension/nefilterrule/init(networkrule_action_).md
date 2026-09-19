> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefilterrule/init(networkrule:action:)

# init(networkRule:action:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a new filter rule from a network rule and an action to take when network traffic matches.

## Declaration

```swift
init(networkRule: NENetworkRule, action: NEFilterAction)
```

## Parameters

- `networkRule`: An [NENetworkRule](../nenetworkrule.md) object that defines the network traffic characteristics that this rule matches.
- `action`: The action to take when the network rule matches.

# initWithNetworkRule:action: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates a new filter rule from a network rule and an action to take when network traffic matches.

## Declaration

```objectivec
- (instancetype) initWithNetworkRule:(NENetworkRule *) networkRule action:(NEFilterAction) action;
```

## Parameters

- `networkRule`: An [NENetworkRule](../nenetworkrule.md) object that defines the network traffic characteristics that this rule matches.
- `action`: The action to take when the network rule matches.
