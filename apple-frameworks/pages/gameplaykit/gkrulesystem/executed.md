> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/executed](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/executed)

# executed (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of rules whose actions have been performed during evaluation of the system.

## Declaration

```swift
var executed: [GKRule] { get }
```

<a id="Discussion"></a>

## Discussion

When you call the [evaluate()](evaluate%28%29.md) method, the system considers each rule in the [agenda](agenda.md) list in order. If a rule on the agenda is satisfied—that is, its predicate returns [true](https://developer.apple.com/documentation/swift/true) and it executes its action—the system moves that rule to the [executed](executed.md) list.

## See Also

### Related Documentation

- [rules](rules.md): The list of rules to be executed when evaluating the system.

### Evaluating a Rule System

- [evaluate()](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [agenda](agenda.md): The list of rules to be considered when evaluating the system.
- [reset()](reset%28%29.md): Returns the rule system to its original agenda and clears all facts.

# executed (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of rules whose actions have been performed during evaluation of the system.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<GKRule *> * executed;
```

<a id="Discussion"></a>

## Discussion

When you call the [evaluate](evaluate%28%29.md) method, the system considers each rule in the [agenda](agenda.md) list in order. If a rule on the agenda is satisfied—that is, its predicate returns [true](https://developer.apple.com/documentation/swift/true) and it executes its action—the system moves that rule to the [executed](executed.md) list.

## See Also

### Related Documentation

- [rules](rules.md): The list of rules to be executed when evaluating the system.

### Evaluating a Rule System

- [evaluate](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [agenda](agenda.md): The list of rules to be considered when evaluating the system.
- [reset](reset%28%29.md): Returns the rule system to its original agenda and clears all facts.
