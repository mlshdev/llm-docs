> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknspredicaterule/predicate](https://developer.apple.com/documentation/gameplaykit/gknspredicaterule/predicate)

# predicate (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A predicate to be tested when evaluating the rule.

## Declaration

```swift
var predicate: NSPredicate { get }
```

<a id="Discussion"></a>

## Discussion

When the rule is evaluated, GameplayKit tests this predicate against the GKRuleSystem object evaluating the rule.

## See Also

### Evaluating a Rule

- [evaluatePredicate(in:)](evaluatepredicate%28in_%29.md): Returns a Boolean value indicating whether the rule’s predicate has been satisfied in the context of the specified rule system.

# predicate (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A predicate to be tested when evaluating the rule.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

When the rule is evaluated, GameplayKit tests this predicate against the GKRuleSystem object evaluating the rule.

## See Also

### Evaluating a Rule

- [evaluatePredicateWithSystem:](evaluatepredicate%28in_%29.md): Returns a Boolean value indicating whether the rule’s predicate has been satisfied in the context of the specified rule system.
