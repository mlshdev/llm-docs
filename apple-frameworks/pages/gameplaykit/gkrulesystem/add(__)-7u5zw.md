> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/add(_:)-7u5zw](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/add(_:)-7u5zw)

# add(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified list of rules to the system.

## Declaration

```swift
func add(_ rules: [GKRule])
```

## Parameters

- `rules`: An array of rule objects.

<a id="Discussion"></a>

## Discussion

Adding rules to the system also adds them to the [agenda](agenda.md) list, in decreasing order of the rules’ [salience](../gkrule/salience.md) values. Rules with the same salience are added to the agenda in the order of the specified array.

## See Also

### Related Documentation

- [agenda](agenda.md): The list of rules to be considered when evaluating the system.

### Managing a System’s List of Rules

- [rules](rules.md): The list of rules to be executed when evaluating the system.
- [add(\_:)](add%28__%29-76jb5.md): Adds the specified rule to the system.
- [removeAllRules()](removeallrules%28%29.md): Removes all rules from the system.

# addRulesFromArray: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified list of rules to the system.

## Declaration

```objectivec
- (void) addRulesFromArray:(NSArray<GKRule *> *) rules;
```

## Parameters

- `rules`: An array of rule objects.

<a id="Discussion"></a>

## Discussion

Adding rules to the system also adds them to the [agenda](agenda.md) list, in decreasing order of the rules’ [salience](../gkrule/salience.md) values. Rules with the same salience are added to the agenda in the order of the specified array.

## See Also

### Related Documentation

- [agenda](agenda.md): The list of rules to be considered when evaluating the system.

### Managing a System’s List of Rules

- [rules](rules.md): The list of rules to be executed when evaluating the system.
- [addRule:](add%28__%29-76jb5.md): Adds the specified rule to the system.
- [removeAllRules](removeallrules%28%29.md): Removes all rules from the system.
