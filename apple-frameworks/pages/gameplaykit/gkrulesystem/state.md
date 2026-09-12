> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/state](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/state)

# state (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A dictionary of state information to be evaluated by the system’s rules.

## Declaration

```swift
var state: NSMutableDictionary { get }
```

<a id="Discussion"></a>

## Discussion

This dictionary is mutable—some rules might alter the system’s state when executed. If you change this dictionary’s contents outside of a rule action, you must reset and reevaluate the system.

## See Also

### Related Documentation

- [reset()](reset%28%29.md): Returns the rule system to its original agenda and clears all facts.
- [evaluate()](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.

# state (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A dictionary of state information to be evaluated by the system’s rules.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSMutableDictionary * state;
```

<a id="Discussion"></a>

## Discussion

This dictionary is mutable—some rules might alter the system’s state when executed. If you change this dictionary’s contents outside of a rule action, you must reset and reevaluate the system.

## See Also

### Related Documentation

- [reset](reset%28%29.md): Returns the rule system to its original agenda and clears all facts.
- [evaluate](evaluate%28%29.md): Evaluates the rule system, executing the list of rules in its agenda.
