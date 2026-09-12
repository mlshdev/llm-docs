> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrule/evaluatepredicate(in:)](https://developer.apple.com/documentation/gameplaykit/gkrule/evaluatepredicate(in:))

# evaluatePredicate(in:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the rule has been satisfied in the context of the specified rule system.

## Declaration

```swift
func evaluatePredicate(in system: GKRuleSystem) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rule is satisfied (and its action should be executed); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A rule system calls this method when evaluating its rules.

If the rule was created with the [init(predicate:assertingFact:grade:)](init%28predicate_assertingfact_grade_%29.md) or [init(predicate:retractingFact:grade:)](init%28predicate_retractingfact_grade_%29.md), calling this method returns the result of testing the predicate against the provided rule system. If the rule was created with the [init(blockPredicate:action:)](init%28blockpredicate_action_%29.md) method, calling this method calls the predicate block and returns the result. Otherwise, this method always returns [false](https://developer.apple.com/documentation/swift/false)—subclasses should override this method to implement their own predicate tests.

## See Also

### Evaluating a Rule

- [performAction(in:)](performaction%28in_%29.md): Performs actions that should result when the rule is satisfied in the context of the specified rule system.

# evaluatePredicateWithSystem: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the rule has been satisfied in the context of the specified rule system.

## Declaration

```objectivec
- (BOOL) evaluatePredicateWithSystem:(GKRuleSystem *) system;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rule is satisfied (and its action should be executed); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A rule system calls this method when evaluating its rules.

If the rule was created with the [ruleWithPredicate:assertingFact:grade:](init%28predicate_assertingfact_grade_%29.md) or [ruleWithPredicate:retractingFact:grade:](init%28predicate_retractingfact_grade_%29.md), calling this method returns the result of testing the predicate against the provided rule system. If the rule was created with the [ruleWithBlockPredicate:action:](init%28blockpredicate_action_%29.md) method, calling this method calls the predicate block and returns the result. Otherwise, this method always returns [false](https://developer.apple.com/documentation/swift/false)—subclasses should override this method to implement their own predicate tests.

## See Also

### Evaluating a Rule

- [performActionWithSystem:](performaction%28in_%29.md): Performs actions that should result when the rule is satisfied in the context of the specified rule system.
