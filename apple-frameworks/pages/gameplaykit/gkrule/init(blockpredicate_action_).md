> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrule/init(blockpredicate:action:)](https://developer.apple.com/documentation/gameplaykit/gkrule/init(blockpredicate:action:))

# init(blockPredicate:action:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a rule whose predicate is evaluated and action is executed through the specified blocks.

## Declaration

```swift
convenience init(blockPredicate predicate: @escaping (GKRuleSystem) -> Bool, action: @escaping (GKRuleSystem) -> Void)
```

## Parameters

- `action`: A block to be invoked after the rule’s predicate is satisfied. The block takes a single parameter:

  - **system**: The rule system in whose context the rule is executing its action.

<a id="return-value"></a>

## Return Value

A new rule object.

<a id="Discussion"></a>

## Discussion

Rules created using this method can run arbitrary code in their predicate and action, but do not encode their predicate or action when archiving with the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) class. For archivable rules, use the [GKRule](../gkrule.md) methods listed in Creating Data-Driven Rules.

# ruleWithBlockPredicate:action: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a rule whose predicate is evaluated and action is executed through the specified blocks.

## Declaration

```objectivec
+ (instancetype) ruleWithBlockPredicate:(BOOL (^)(GKRuleSystem *)) predicate action:(void (^)(GKRuleSystem *)) action;
```

## Parameters

- `action`: A block to be invoked after the rule’s predicate is satisfied. The block takes a single parameter:

  - **system**: The rule system in whose context the rule is executing its action.

<a id="return-value"></a>

## Return Value

A new rule object.

<a id="Discussion"></a>

## Discussion

Rules created using this method can run arbitrary code in their predicate and action, but do not encode their predicate or action when archiving with the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) class. For archivable rules, use the [GKRule](../gkrule.md) methods listed in Creating Data-Driven Rules.
