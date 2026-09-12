> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrule/salience](https://developer.apple.com/documentation/gameplaykit/gkrule/salience)

# salience (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The importance of the rule relative to others in a rule system’s agenda.

## Declaration

```swift
var salience: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A [GKRuleSystem](../gkrulesystem.md) object evaluates the rules in its [agenda](../gkrulesystem/agenda.md) list in order of decreasing salience.

Typically, you set the salience of a rule before calling the [add(\_:)](../gkrulesystem/add%28__%29-76jb5.md) or [add(\_:)](../gkrulesystem/add%28__%29-7u5zw.md) method, so that the system can insert the new rule into its agenda at the proper position. Changing the salience of a rule already in a rule system does not affect its order in the current agenda, but it does affect the order of the new agenda the rule system builds when you call its [reset()](../gkrulesystem/reset%28%29.md) method.

# salience (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The importance of the rule relative to others in a rule system’s agenda.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger salience;
```

<a id="Discussion"></a>

## Discussion

A [GKRuleSystem](../gkrulesystem.md) object evaluates the rules in its [agenda](../gkrulesystem/agenda.md) list in order of decreasing salience.

Typically, you set the salience of a rule before calling the [addRule:](../gkrulesystem/add%28__%29-76jb5.md) or [addRulesFromArray:](../gkrulesystem/add%28__%29-7u5zw.md) method, so that the system can insert the new rule into its agenda at the proper position. Changing the salience of a rule already in a rule system does not affect its order in the current agenda, but it does affect the order of the new agenda the rule system builds when you call its [reset](../gkrulesystem/reset%28%29.md) method.
