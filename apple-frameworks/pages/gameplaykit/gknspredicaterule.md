> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknspredicaterule](https://developer.apple.com/documentation/gameplaykit/gknspredicaterule)

# GKNSPredicateRule (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A rule for use in a rule system that uses a Foundation [NSPredicate](../foundation/nspredicate.md) object to evaluate itself.

## Declaration

```swift
class GKNSPredicateRule
```

<a id="overview"></a>

## Overview

The [GKNSPredicateRule](gknspredicaterule.md) class is a specialized subclass of the [GKRule](gkrule.md) class (which represents rules to be used by [GKRuleSystem](gkrulesystem.md) objects). Custom subclasses of [GKNSPredicateRule](gknspredicaterule.md) use an [NSPredicate](../foundation/nspredicate.md) object to evaluate a rule, rather than requiring custom logic for evaluation as is the case with custom [GKRule](gkrule.md) subclasses.

For more information about rules and rule systems, read [Rule Systems](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/RuleSystems.html#//apple_ref/doc/uid/TP40015172-CH10) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

GameplayKit evaluates rules in the context of a [GKRuleSystem](gkrulesystem.md) object, so custom rule classes should be *functional*—that is, they generally should not carry independent state that affects their predicate or action.

<a id="Methods-to-Override"></a>

#### Methods to Override

Override the [performAction(in:)](gkrule/performaction%28in_%29.md) method to perform whatever actions should result when your rule is satisfied (that is, when its [predicate](gknspredicaterule/predicate.md) property evaluates to true in the context of the provided rule system).

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

- Use the [GKRule](gkrule.md) method [init(predicate:assertingFact:grade:)](gkrule/init%28predicate_assertingfact_grade_%29.md) or [init(predicate:retractingFact:grade:)](gkrule/init%28predicate_retractingfact_grade_%29.md) to create a rule that uses an [NSPredicate](../foundation/nspredicate.md) object for evaluation and whose action asserts or retracts a fact in the containing rule system.
- Use the [GKRule](gkrule.md) method [init(blockPredicate:action:)](gkrule/init%28blockpredicate_action_%29.md) method to quickly create a rule whose custom logic is contained in block objects.

## Topics

### Creating a Predicate-Based Rule

- [init(predicate:)](gknspredicaterule/init%28predicate_%29.md): Initializes a rule with the specified predicate.

### Evaluating a Rule

- [predicate](gknspredicaterule/predicate.md): A predicate to be tested when evaluating the rule.
- [evaluatePredicate(in:)](gknspredicaterule/evaluatepredicate%28in_%29.md): Returns a Boolean value indicating whether the rule’s predicate has been satisfied in the context of the specified rule system.

## Relationships

### Inherits From

- [GKRule](gkrule.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Rule Systems

- [GKRule](gkrule.md): A rule to be used in the context of a rule system, with a predicate to be tested and an action to be executed when the test succeeds.
- [GKRuleSystem](gkrulesystem.md): A list of rules, together with a context for evaluating them and interpreting results, for use in constructing data-driven logic or fuzzy logic systems.

# GKNSPredicateRule (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A rule for use in a rule system that uses a Foundation [NSPredicate](../foundation/nspredicate.md) object to evaluate itself.

## Declaration

```objectivec
@interface GKNSPredicateRule : GKRule
```

<a id="overview"></a>

## Overview

The [GKNSPredicateRule](gknspredicaterule.md) class is a specialized subclass of the [GKRule](gkrule.md) class (which represents rules to be used by [GKRuleSystem](gkrulesystem.md) objects). Custom subclasses of [GKNSPredicateRule](gknspredicaterule.md) use an [NSPredicate](../foundation/nspredicate.md) object to evaluate a rule, rather than requiring custom logic for evaluation as is the case with custom [GKRule](gkrule.md) subclasses.

For more information about rules and rule systems, read [Rule Systems](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/RuleSystems.html#//apple_ref/doc/uid/TP40015172-CH10) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

GameplayKit evaluates rules in the context of a [GKRuleSystem](gkrulesystem.md) object, so custom rule classes should be *functional*—that is, they generally should not carry independent state that affects their predicate or action.

<a id="Methods-to-Override"></a>

#### Methods to Override

Override the [performActionWithSystem:](gkrule/performaction%28in_%29.md) method to perform whatever actions should result when your rule is satisfied (that is, when its [predicate](gknspredicaterule/predicate.md) property evaluates to true in the context of the provided rule system).

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

- Use the [GKRule](gkrule.md) method [ruleWithPredicate:assertingFact:grade:](gkrule/init%28predicate_assertingfact_grade_%29.md) or [ruleWithPredicate:retractingFact:grade:](gkrule/init%28predicate_retractingfact_grade_%29.md) to create a rule that uses an [NSPredicate](../foundation/nspredicate.md) object for evaluation and whose action asserts or retracts a fact in the containing rule system.
- Use the [GKRule](gkrule.md) method [ruleWithBlockPredicate:action:](gkrule/init%28blockpredicate_action_%29.md) method to quickly create a rule whose custom logic is contained in block objects.

## Topics

### Creating a Predicate-Based Rule

- [initWithPredicate:](gknspredicaterule/init%28predicate_%29.md): Initializes a rule with the specified predicate.

### Evaluating a Rule

- [predicate](gknspredicaterule/predicate.md): A predicate to be tested when evaluating the rule.
- [evaluatePredicateWithSystem:](gknspredicaterule/evaluatepredicate%28in_%29.md): Returns a Boolean value indicating whether the rule’s predicate has been satisfied in the context of the specified rule system.

## Relationships

### Inherits From

- [GKRule](gkrule.md)

## See Also

### Rule Systems

- [GKRule](gkrule.md): A rule to be used in the context of a rule system, with a predicate to be tested and an action to be executed when the test succeeds.
- [GKRuleSystem](gkrulesystem.md): A list of rules, together with a context for evaluating them and interpreting results, for use in constructing data-driven logic or fuzzy logic systems.
