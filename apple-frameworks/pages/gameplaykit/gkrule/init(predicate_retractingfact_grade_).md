> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrule/init(predicate:retractingfact:grade:)](https://developer.apple.com/documentation/gameplaykit/gkrule/init(predicate:retractingfact:grade:))

# init(predicate:retractingFact:grade:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a data-driven rule with the specified predicate, whose action retracts a fact in the rule system evaluating the rule.

## Declaration

```swift
convenience init(predicate: NSPredicate, retractingFact fact: any NSObjectProtocol, grade: Float)
```

## Parameters

- `fact`: An object representing a fact to retract when the rule’s predicate is satisfied. (For details on facts in rule systems, see the [facts](../gkrulesystem/facts.md) property in [GKRuleSystem](../gkrulesystem.md).)
- `grade`: An amount by which to decrease the fact’s membership grade if the rule’s predicate is satisfied.

<a id="return-value"></a>

## Return Value

A new rule object.

<a id="Discussion"></a>

## Discussion

Rules created using this method encode their predicate and action when archived with the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) class. You can use this feature to support saving and loading rules, editing rules in-game, or building tools that separate your gameplay design and game programming tasks.

Rules based on [NSPredicate](../../foundation/nspredicate.md) objects typically test information in the [state](../gkrulesystem/state.md) dictionary of the rule system evaluating the rule. For example, the following code creates a rule you might use to determine whether an enemy character in a game behaves aggressively. (This example presumes the rule system’s state dictionary contains an object for the key `player`, which in turn exposes a numeric value for the key `health`.)

**Swift**

```swift
let healthTest = NSPredicate(format: "$player.health > 50")
let rule = GKRule(predicate: healthTest, retractingFact: "player_weak", grade: 0.5)
```

**Objective-C**

```objc
NSPredicate *healthTest = [NSPredicate predicateWithFormat:@"$player.health > 50"];
GKRule *rule = [GKRule ruleWithPredicate:healthTest retractingFact:@"player_weak" grade:0.5];
```

## See Also

### Creating Data-Driven Rules

- [init(predicate:assertingFact:grade:)](init%28predicate_assertingfact_grade_%29.md): Creates a data-driven rule with the specified predicate, whose action asserts a fact in the rule system evaluating the rule.

# ruleWithPredicate:retractingFact:grade: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a data-driven rule with the specified predicate, whose action retracts a fact in the rule system evaluating the rule.

## Declaration

```objectivec
+ (instancetype) ruleWithPredicate:(NSPredicate *) predicate retractingFact:(id<NSObject>) fact grade:(float) grade;
```

## Parameters

- `fact`: An object representing a fact to retract when the rule’s predicate is satisfied. (For details on facts in rule systems, see the [facts](../gkrulesystem/facts.md) property in [GKRuleSystem](../gkrulesystem.md).)
- `grade`: An amount by which to decrease the fact’s membership grade if the rule’s predicate is satisfied.

<a id="return-value"></a>

## Return Value

A new rule object.

<a id="Discussion"></a>

## Discussion

Rules created using this method encode their predicate and action when archived with the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) class. You can use this feature to support saving and loading rules, editing rules in-game, or building tools that separate your gameplay design and game programming tasks.

Rules based on [NSPredicate](../../foundation/nspredicate.md) objects typically test information in the [state](../gkrulesystem/state.md) dictionary of the rule system evaluating the rule. For example, the following code creates a rule you might use to determine whether an enemy character in a game behaves aggressively. (This example presumes the rule system’s state dictionary contains an object for the key `player`, which in turn exposes a numeric value for the key `health`.)

**Swift**

```swift
let healthTest = NSPredicate(format: "$player.health > 50")
let rule = GKRule(predicate: healthTest, retractingFact: "player_weak", grade: 0.5)
```

**Objective-C**

```objc
NSPredicate *healthTest = [NSPredicate predicateWithFormat:@"$player.health > 50"];
GKRule *rule = [GKRule ruleWithPredicate:healthTest retractingFact:@"player_weak" grade:0.5];
```

## See Also

### Creating Data-Driven Rules

- [ruleWithPredicate:assertingFact:grade:](init%28predicate_assertingfact_grade_%29.md): Creates a data-driven rule with the specified predicate, whose action asserts a fact in the rule system evaluating the rule.
