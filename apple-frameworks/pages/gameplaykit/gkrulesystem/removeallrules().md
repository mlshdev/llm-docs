> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkrulesystem/removeallrules()

# removeAllRules() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes all rules from the system.

## Declaration

```swift
func removeAllRules()
```

<a id="Discussion"></a>

## Discussion

Calling this method also empties the [agenda](agenda.md) and [executed](executed.md) arrays.

## See Also

### Related Documentation

- [agenda](agenda.md): The list of rules to be considered when evaluating the system.
- [executed](executed.md): The list of rules whose actions have been performed during evaluation of the system.

### Managing a System’s List of Rules

- [rules](rules.md): The list of rules to be executed when evaluating the system.
- [add(\_:)](add%28__%29-76jb5.md): Adds the specified rule to the system.
- [add(\_:)](add%28__%29-7u5zw.md): Adds the specified list of rules to the system.

# removeAllRules (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes all rules from the system.

## Declaration

```objectivec
- (void) removeAllRules;
```

<a id="Discussion"></a>

## Discussion

Calling this method also empties the [agenda](agenda.md) and [executed](executed.md) arrays.

## See Also

### Related Documentation

- [agenda](agenda.md): The list of rules to be considered when evaluating the system.
- [executed](executed.md): The list of rules whose actions have been performed during evaluation of the system.

### Managing a System’s List of Rules

- [rules](rules.md): The list of rules to be executed when evaluating the system.
- [addRule:](add%28__%29-76jb5.md): Adds the specified rule to the system.
- [addRulesFromArray:](add%28__%29-7u5zw.md): Adds the specified list of rules to the system.
