> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknspredicaterule/init(predicate:)](https://developer.apple.com/documentation/gameplaykit/gknspredicaterule/init(predicate:))

# init(predicate:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a rule with the specified predicate.

## Declaration

```swift
init(predicate: NSPredicate)
```

## Parameters

- `predicate`: A predicate to be tested when evaluating the rule.

<a id="return-value"></a>

## Return Value

A new predicate-based rule object.

<a id="Discussion"></a>

## Discussion

Rules based on [NSPredicate](../../foundation/nspredicate.md) objects typically test information in the [state](../gkrulesystem/state.md) dictionary of the rule system evaluating the rule. For example, the following code creates a rule you might use to determine whether an enemy character in a game behaves aggressively.

**Swift**

```swift
// MyNSPredicateRule is a GKNSPredicateRule subclass
let healthTest = NSPredicate(format: "$player.health > 50")
let rule = MyNSPredicateRule(predicate: healthTest)
```

**Objective-C**

```objc
// MyNSPredicateRule is a GKNSPredicateRule subclass
NSPredicate *healthTest = [NSPredicate predicateWithFormat:@"$player.health > 50"];
MyNSPredicateRule *rule = [MyNSPredicateRule alloc] initWithPredicate:healthTest];
```

This example presumes the rule system’s state dictionary contains an object for the key `player`, which in turn exposes a numeric value for the key `health`. The [GKNSPredicateRule](../gknspredicaterule.md) class by itself does nothing in its [performAction(in:)](../gkrule/performaction%28in_%29.md) method—to create actions for predicate-based rules, you must subclass [GKNSPredicateRule](../gknspredicaterule.md).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# initWithPredicate: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a rule with the specified predicate.

## Declaration

```objectivec
- (instancetype) initWithPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: A predicate to be tested when evaluating the rule.

<a id="return-value"></a>

## Return Value

A new predicate-based rule object.

<a id="Discussion"></a>

## Discussion

Rules based on [NSPredicate](../../foundation/nspredicate.md) objects typically test information in the [state](../gkrulesystem/state.md) dictionary of the rule system evaluating the rule. For example, the following code creates a rule you might use to determine whether an enemy character in a game behaves aggressively.

**Swift**

```swift
// MyNSPredicateRule is a GKNSPredicateRule subclass
let healthTest = NSPredicate(format: "$player.health > 50")
let rule = MyNSPredicateRule(predicate: healthTest)
```

**Objective-C**

```objc
// MyNSPredicateRule is a GKNSPredicateRule subclass
NSPredicate *healthTest = [NSPredicate predicateWithFormat:@"$player.health > 50"];
MyNSPredicateRule *rule = [MyNSPredicateRule alloc] initWithPredicate:healthTest];
```

This example presumes the rule system’s state dictionary contains an object for the key `player`, which in turn exposes a numeric value for the key `health`. The [GKNSPredicateRule](../gknspredicaterule.md) class by itself does nothing in its [performActionWithSystem:](../gkrule/performaction%28in_%29.md) method—to create actions for predicate-based rules, you must subclass [GKNSPredicateRule](../gknspredicaterule.md).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).
