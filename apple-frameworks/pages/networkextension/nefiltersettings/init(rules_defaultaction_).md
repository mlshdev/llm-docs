> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersettings/init(rules:defaultaction:)](https://developer.apple.com/documentation/networkextension/nefiltersettings/init(rules:defaultaction:))

# init(rules:defaultAction:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a new settings instance from an array of rules and a default action.

## Declaration

```swift
init(rules: [NEFilterRule], defaultAction: NEFilterAction)
```

## Parameters

- `rules`: An array containing an ordered list of [NEFilterRule](../nefilterrule.md) objects. The maximum number of rules that this array can contain is 1000.
- `defaultAction`: The [NEFilterAction](../nefilteraction.md) to take for flows of network data that don’t match any of the specified rules. The default `defaultAction` is [NEFilterAction.filterData](../nefilteraction/filterdata.md). If `defaultAction` is [NEFilterAction.allow](../nefilteraction/allow.md) or [NEFilterAction.drop](../nefilteraction/drop.md), then the `rules` array must contain at least one [NEFilterRule](../nefilterrule.md).

## See Also

### Creating Filter Settings

- [NEFilterRule](../nefilterrule.md): A rule for filters that combines a rule to match network traffic and an action to take when the rule matches.

# initWithRules:defaultAction: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates a new settings instance from an array of rules and a default action.

## Declaration

```objectivec
- (instancetype) initWithRules:(NSArray<NEFilterRule *> *) rules defaultAction:(NEFilterAction) defaultAction;
```

## Parameters

- `rules`: An array containing an ordered list of [NEFilterRule](../nefilterrule.md) objects. The maximum number of rules that this array can contain is 1000.
- `defaultAction`: The [NEFilterAction](../nefilteraction.md) to take for flows of network data that don’t match any of the specified rules. The default `defaultAction` is [NEFilterActionFilterData](../nefilteraction/filterdata.md). If `defaultAction` is [NEFilterActionAllow](../nefilteraction/allow.md) or [NEFilterActionDrop](../nefilteraction/drop.md), then the `rules` array must contain at least one [NEFilterRule](../nefilterrule.md).

## See Also

### Creating Filter Settings

- [NEFilterRule](../nefilterrule.md): A rule for filters that combines a rule to match network traffic and an action to take when the rule matches.
