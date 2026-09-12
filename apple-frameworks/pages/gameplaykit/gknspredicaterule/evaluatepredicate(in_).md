> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknspredicaterule/evaluatepredicate(in:)](https://developer.apple.com/documentation/gameplaykit/gknspredicaterule/evaluatepredicate(in:))

# evaluatePredicate(in:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the rule’s predicate has been satisfied in the context of the specified rule system.

## Declaration

```swift
func evaluatePredicate(in system: GKRuleSystem) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rule is satisfied (and its action should be executed); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [GKNSPredicateRule](../gknspredicaterule.md) class overrides this method to use its [predicate](predicate.md) property for testing the rule. Subclasses of [GKNSPredicateRule](../gknspredicaterule.md) do not need to override this method.

## See Also

### Evaluating a Rule

- [predicate](predicate.md): A predicate to be tested when evaluating the rule.

# evaluatePredicateWithSystem: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the rule’s predicate has been satisfied in the context of the specified rule system.

## Declaration

```objectivec
- (BOOL) evaluatePredicateWithSystem:(GKRuleSystem *) system;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rule is satisfied (and its action should be executed); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [GKNSPredicateRule](../gknspredicaterule.md) class overrides this method to use its [predicate](predicate.md) property for testing the rule. Subclasses of [GKNSPredicateRule](../gknspredicaterule.md) do not need to override this method.

## See Also

### Evaluating a Rule

- [predicate](predicate.md): A predicate to be tested when evaluating the rule.
