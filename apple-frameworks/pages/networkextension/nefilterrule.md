> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterrule](https://developer.apple.com/documentation/networkextension/nefilterrule)

# NEFilterRule (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A rule for filters that combines a rule to match network traffic and an action to take when the rule matches.

## Declaration

```swift
class NEFilterRule
```

## Topics

### Creating a Filter Rule

- [init(networkRule:action:)](nefilterrule/init%28networkrule_action_%29.md): Creates a new filter rule from a network rule and an action to take when network traffic matches.

### Inspecting Filter Rule Properties

- [networkRule](nefilterrule/networkrule.md): The network rule that defines the network traffic characteristics that this filter rule matches.
- [action](nefilterrule/action.md): The action to take when this rule matches network traffic.

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

### Creating Filter Settings

- [init(rules:defaultAction:)](nefiltersettings/init%28rules_defaultaction_%29.md): Creates a new settings instance from an array of rules and a default action.

# NEFilterRule (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A rule for filters that combines a rule to match network traffic and an action to take when the rule matches.

## Declaration

```objectivec
@interface NEFilterRule : NSObject
```

## Topics

### Creating a Filter Rule

- [initWithNetworkRule:action:](nefilterrule/init%28networkrule_action_%29.md): Creates a new filter rule from a network rule and an action to take when network traffic matches.

### Inspecting Filter Rule Properties

- [networkRule](nefilterrule/networkrule.md): The network rule that defines the network traffic characteristics that this filter rule matches.
- [action](nefilterrule/action.md): The action to take when this rule matches network traffic.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Creating Filter Settings

- [initWithRules:defaultAction:](nefiltersettings/init%28rules_defaultaction_%29.md): Creates a new settings instance from an array of rules and a default action.
