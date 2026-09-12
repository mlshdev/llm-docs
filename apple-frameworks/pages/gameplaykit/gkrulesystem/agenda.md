> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/agenda](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/agenda)

# agenda (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of rules to be considered when evaluating the system.

## Declaration

```swift
var agenda: [GKRule] { get }
```

<a id="Discussion"></a>

## Discussion

The agenda holds the rules to be considered when evaluating the system, listed in order of their [salience](../gkrule/salience.md) values (or, for rules with the same salience, the order in which they were added to the system). During evaluation of the rule system, if a rule on the [agenda](agenda.md) list is satisfied—that is, its predicate returns [true](https://developer.apple.com/documentation/swift/true) and it executes its action—the system moves that rule to the [executed](executed.md) list.

Changing the salience of a rule already in the rule system does not adjust its position in the agenda, but does determine the order of the new agenda when resetting the system.

## See Also

### Related Documentation

- [rules](rules.md): The list of rules to be executed when evaluating the system.

### Evaluating a Rule System

- [evaluate()](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [executed](executed.md): The list of rules whose actions have been performed during evaluation of the system.
- [reset()](reset%28%29.md): Returns the rule system to its original agenda and clears all facts.

# agenda (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of rules to be considered when evaluating the system.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<GKRule *> * agenda;
```

<a id="Discussion"></a>

## Discussion

The agenda holds the rules to be considered when evaluating the system, listed in order of their [salience](../gkrule/salience.md) values (or, for rules with the same salience, the order in which they were added to the system). During evaluation of the rule system, if a rule on the [agenda](agenda.md) list is satisfied—that is, its predicate returns [true](https://developer.apple.com/documentation/swift/true) and it executes its action—the system moves that rule to the [executed](executed.md) list.

Changing the salience of a rule already in the rule system does not adjust its position in the agenda, but does determine the order of the new agenda when resetting the system.

## See Also

### Related Documentation

- [rules](rules.md): The list of rules to be executed when evaluating the system.

### Evaluating a Rule System

- [evaluate](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
- [executed](executed.md): The list of rules whose actions have been performed during evaluation of the system.
- [reset](reset%28%29.md): Returns the rule system to its original agenda and clears all facts.
