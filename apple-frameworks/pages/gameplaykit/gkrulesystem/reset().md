> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/reset()](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/reset())

# reset() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the rule system to its original agenda and clears all facts.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

Calling this method restarts the evaluation process: the system removes all rules from the current [agenda](agenda.md) and [executed](executed.md) lists and empties the [facts](facts.md) set. (However, the rule’s [state](state.md) dictionary is left unchanged.) The system then automatically repopulates its agenda according to the [salience](../gkrule/salience.md) of each rule in the [rules](rules.md) array.

## See Also

### Evaluating a Rule System

- [evaluate()](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [agenda](agenda.md): The list of rules to be considered when evaluating the system.
- [executed](executed.md): The list of rules whose actions have been performed during evaluation of the system.

# reset (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the rule system to its original agenda and clears all facts.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

Calling this method restarts the evaluation process: the system removes all rules from the current [agenda](agenda.md) and [executed](executed.md) lists and empties the [facts](facts.md) set. (However, the rule’s [state](state.md) dictionary is left unchanged.) The system then automatically repopulates its agenda according to the [salience](../gkrule/salience.md) of each rule in the [rules](rules.md) array.

## See Also

### Evaluating a Rule System

- [evaluate](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [agenda](agenda.md): The list of rules to be considered when evaluating the system.
- [executed](executed.md): The list of rules whose actions have been performed during evaluation of the system.
