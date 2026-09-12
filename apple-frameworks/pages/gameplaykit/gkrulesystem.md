> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem](https://developer.apple.com/documentation/gameplaykit/gkrulesystem)

# GKRuleSystem (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A list of rules, together with a context for evaluating them and interpreting results, for use in constructing data-driven logic or fuzzy logic systems.

## Declaration

```swift
class GKRuleSystem
```

<a id="overview"></a>

## Overview

A [GKRuleSystem](gkrulesystem.md) object manages a list of rules ([GKRule](gkrule.md) objects). A rule system also offers methods for evaluating its list of rules in a context defined by two features: a [state](gkrulesystem/state.md) dictionary containing information to be tested by rules, and a set of [facts](gkrulesystem/facts.md) representing the conclusions drawn as a result of rule evaluation. You can evaluate facts based on a binary truth state—that is, a fact either is or is not in the set—or on a continuously variable membership grade, representing different levels of veracity, confidence, or strength for use in fuzzy logic.

You construct a rule system by creating [GKRule](gkrule.md) objects and adding them to the system’s list of rules. There are multiple ways to construct rules: for greater reusability, use the methods listed in Creating Data-Driven Rules; or for greater flexibility, use the [init(blockPredicate:action:)](gkrule/init%28blockpredicate_action_%29.md) method or create a custom subclass of [GKRule](gkrule.md) or [GKNSPredicateRule](gknspredicaterule.md). Then, add rules to the system with the methods listed in Managing a System’s List of Rules below.

To evaluate a system, call the [evaluate()](gkrulesystem/evaluate%28%29.md) method. This method processes each rule in the system in the order it appears in the system’s [agenda](gkrulesystem/agenda.md) list. You set this order with the [salience](gkrule/salience.md) property of each rule, or with the order in which you add rules to the system. As the system processes each rule, it tests the rule’s [evaluatePredicate(in:)](gkrule/evaluatepredicate%28in_%29.md) method to determine whether the rule is satisfied in the context of the system. If the rule’s predicate is satisfied, the system executes the rule’s [performAction(in:)](gkrule/performaction%28in_%29.md) method and moves the rule to the [executed](gkrulesystem/executed.md) list (so the further evaluation of the agenda doesn’t repeatedly trigger the rule’s action).

Rules typically use the system’s [state](gkrulesystem/state.md) dictionary as input and its set of [facts](gkrulesystem/facts.md) as output. (However, more complex systems can include sets of rules whose predicates test facts or whose actions mutate the system’s state.) After evaluating a rule system, you can examine the set of facts it has produced using the methods listed in Drawing Conclusions from Facts below. You can then use the presence of a fact in the set, the value of its membership grade, or the combined membership grades of a group of facts to influence the behaviors in your game.

For more information about rules and rule systems, read [Rule Systems](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/RuleSystems.html#//apple_ref/doc/uid/TP40015172-CH10) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Rule System

- [init()](gkrulesystem/init%28%29.md): Initializes a new, empty rule system.

### Managing State Information

- [state](gkrulesystem/state.md): A dictionary of state information to be evaluated by the system’s rules.

### Managing a System’s List of Rules

- [rules](gkrulesystem/rules.md): The list of rules to be executed when evaluating the system.
- [add(\_:)](gkrulesystem/add%28__%29-76jb5.md): Adds the specified rule to the system.
- [add(\_:)](gkrulesystem/add%28__%29-7u5zw.md): Adds the specified list of rules to the system.
- [removeAllRules()](gkrulesystem/removeallrules%28%29.md): Removes all rules from the system.

### Evaluating a Rule System

- [evaluate()](gkrulesystem/evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [agenda](gkrulesystem/agenda.md): The list of rules to be considered when evaluating the system.
- [executed](gkrulesystem/executed.md): The list of rules whose actions have been performed during evaluation of the system.
- [reset()](gkrulesystem/reset%28%29.md): Returns the rule system to its original agenda and clears all facts.

### Asserting and Retracting Facts

- [facts](gkrulesystem/facts.md): The list of facts claimed by the rule system.
- [assertFact(\_:)](gkrulesystem/assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact(\_:grade:)](gkrulesystem/assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact(\_:)](gkrulesystem/retractfact%28__%29.md): Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.
- [retractFact(\_:grade:)](gkrulesystem/retractfact%28__grade_%29.md): Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.

### Drawing Conclusions from Facts

- [grade(forFact:)](gkrulesystem/grade%28forfact_%29.md): Returns the membership grade of the specified fact.
- [minimumGrade(forFacts:)](gkrulesystem/minimumgrade%28forfacts_%29.md): Returns the lowest membership grade among the specified facts.
- [maximumGrade(forFacts:)](gkrulesystem/maximumgrade%28forfacts_%29.md): Returns the highest membership grade among the specified facts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [GKNSPredicateRule](gknspredicaterule.md): A rule for use in a rule system that uses a Foundation [NSPredicate](../foundation/nspredicate.md) object to evaluate itself.

# GKRuleSystem (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A list of rules, together with a context for evaluating them and interpreting results, for use in constructing data-driven logic or fuzzy logic systems.

## Declaration

```objectivec
@interface GKRuleSystem : NSObject
```

<a id="overview"></a>

## Overview

A [GKRuleSystem](gkrulesystem.md) object manages a list of rules ([GKRule](gkrule.md) objects). A rule system also offers methods for evaluating its list of rules in a context defined by two features: a [state](gkrulesystem/state.md) dictionary containing information to be tested by rules, and a set of [facts](gkrulesystem/facts.md) representing the conclusions drawn as a result of rule evaluation. You can evaluate facts based on a binary truth state—that is, a fact either is or is not in the set—or on a continuously variable membership grade, representing different levels of veracity, confidence, or strength for use in fuzzy logic.

You construct a rule system by creating [GKRule](gkrule.md) objects and adding them to the system’s list of rules. There are multiple ways to construct rules: for greater reusability, use the methods listed in Creating Data-Driven Rules; or for greater flexibility, use the [ruleWithBlockPredicate:action:](gkrule/init%28blockpredicate_action_%29.md) method or create a custom subclass of [GKRule](gkrule.md) or [GKNSPredicateRule](gknspredicaterule.md). Then, add rules to the system with the methods listed in Managing a System’s List of Rules below.

To evaluate a system, call the [evaluate](gkrulesystem/evaluate%28%29.md) method. This method processes each rule in the system in the order it appears in the system’s [agenda](gkrulesystem/agenda.md) list. You set this order with the [salience](gkrule/salience.md) property of each rule, or with the order in which you add rules to the system. As the system processes each rule, it tests the rule’s [evaluatePredicateWithSystem:](gkrule/evaluatepredicate%28in_%29.md) method to determine whether the rule is satisfied in the context of the system. If the rule’s predicate is satisfied, the system executes the rule’s [performActionWithSystem:](gkrule/performaction%28in_%29.md) method and moves the rule to the [executed](gkrulesystem/executed.md) list (so the further evaluation of the agenda doesn’t repeatedly trigger the rule’s action).

Rules typically use the system’s [state](gkrulesystem/state.md) dictionary as input and its set of [facts](gkrulesystem/facts.md) as output. (However, more complex systems can include sets of rules whose predicates test facts or whose actions mutate the system’s state.) After evaluating a rule system, you can examine the set of facts it has produced using the methods listed in Drawing Conclusions from Facts below. You can then use the presence of a fact in the set, the value of its membership grade, or the combined membership grades of a group of facts to influence the behaviors in your game.

For more information about rules and rule systems, read [Rule Systems](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/RuleSystems.html#//apple_ref/doc/uid/TP40015172-CH10) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Rule System

- [init](gkrulesystem/init%28%29.md): Initializes a new, empty rule system.

### Managing State Information

- [state](gkrulesystem/state.md): A dictionary of state information to be evaluated by the system’s rules.

### Managing a System’s List of Rules

- [rules](gkrulesystem/rules.md): The list of rules to be executed when evaluating the system.
- [addRule:](gkrulesystem/add%28__%29-76jb5.md): Adds the specified rule to the system.
- [addRulesFromArray:](gkrulesystem/add%28__%29-7u5zw.md): Adds the specified list of rules to the system.
- [removeAllRules](gkrulesystem/removeallrules%28%29.md): Removes all rules from the system.

### Evaluating a Rule System

- [evaluate](gkrulesystem/evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [agenda](gkrulesystem/agenda.md): The list of rules to be considered when evaluating the system.
- [executed](gkrulesystem/executed.md): The list of rules whose actions have been performed during evaluation of the system.
- [reset](gkrulesystem/reset%28%29.md): Returns the rule system to its original agenda and clears all facts.

### Asserting and Retracting Facts

- [facts](gkrulesystem/facts.md): The list of facts claimed by the rule system.
- [assertFact:](gkrulesystem/assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact:grade:](gkrulesystem/assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact:](gkrulesystem/retractfact%28__%29.md): Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.
- [retractFact:grade:](gkrulesystem/retractfact%28__grade_%29.md): Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.

### Drawing Conclusions from Facts

- [gradeForFact:](gkrulesystem/grade%28forfact_%29.md): Returns the membership grade of the specified fact.
- [minimumGradeForFacts:](gkrulesystem/minimumgrade%28forfacts_%29.md): Returns the lowest membership grade among the specified facts.
- [maximumGradeForFacts:](gkrulesystem/maximumgrade%28forfacts_%29.md): Returns the highest membership grade among the specified facts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Rule Systems

- [GKRule](gkrule.md): A rule to be used in the context of a rule system, with a predicate to be tested and an action to be executed when the test succeeds.
- [GKNSPredicateRule](gknspredicaterule.md): A rule for use in a rule system that uses a Foundation [NSPredicate](../foundation/nspredicate.md) object to evaluate itself.
