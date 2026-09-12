> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrule/performaction(in:)](https://developer.apple.com/documentation/gameplaykit/gkrule/performaction(in:))

# performAction(in:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs actions that should result when the rule is satisfied in the context of the specified rule system.

## Declaration

```swift
func performAction(in system: GKRuleSystem)
```

<a id="Discussion"></a>

## Discussion

A rule system calls this method when evaluating its rules, if and only if the rule’s predicate has been satisfied (that is, the [evaluatePredicate(in:)](evaluatepredicate%28in_%29.md) method has returned [true](https://developer.apple.com/documentation/swift/true)), and after moving the rule from its [agenda](../gkrulesystem/agenda.md) list to its [executed](../gkrulesystem/executed.md) list.

If the rule was created with the [init(predicate:assertingFact:grade:)](init%28predicate_assertingfact_grade_%29.md) or [init(predicate:retractingFact:grade:)](init%28predicate_retractingfact_grade_%29.md), calling this method asserts or retracts the fact as specified in the provided rule system. If the rule was created with the [init(blockPredicate:action:)](init%28blockpredicate_action_%29.md) method, calling this method calls the action block. Otherwise, this method does nothing—subclasses should override this method to implement their own actions.

## See Also

### Evaluating a Rule

- [evaluatePredicate(in:)](evaluatepredicate%28in_%29.md): Returns a Boolean value indicating whether the rule has been satisfied in the context of the specified rule system.

# performActionWithSystem: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs actions that should result when the rule is satisfied in the context of the specified rule system.

## Declaration

```objectivec
- (void) performActionWithSystem:(GKRuleSystem *) system;
```

<a id="Discussion"></a>

## Discussion

A rule system calls this method when evaluating its rules, if and only if the rule’s predicate has been satisfied (that is, the [evaluatePredicateWithSystem:](evaluatepredicate%28in_%29.md) method has returned [true](https://developer.apple.com/documentation/swift/true)), and after moving the rule from its [agenda](../gkrulesystem/agenda.md) list to its [executed](../gkrulesystem/executed.md) list.

If the rule was created with the [ruleWithPredicate:assertingFact:grade:](init%28predicate_assertingfact_grade_%29.md) or [ruleWithPredicate:retractingFact:grade:](init%28predicate_retractingfact_grade_%29.md), calling this method asserts or retracts the fact as specified in the provided rule system. If the rule was created with the [ruleWithBlockPredicate:action:](init%28blockpredicate_action_%29.md) method, calling this method calls the action block. Otherwise, this method does nothing—subclasses should override this method to implement their own actions.

## See Also

### Evaluating a Rule

- [evaluatePredicateWithSystem:](evaluatepredicate%28in_%29.md): Returns a Boolean value indicating whether the rule has been satisfied in the context of the specified rule system.
