> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/facts](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/facts)

# facts (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of facts claimed by the rule system.

## Declaration

```swift
var facts: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

A fact is any object representing a truth claimed by the rule system. You can use any type of object to represent the facts in your system: simple data types like strings and numbers typically suffice, but you can also use custom objects from your game’s data model.

Each fact has a membership grade ranging from zero to 1.0, representing variable levels of truth, strength, or confidence for use in fuzzy logic. Asserting a fact increases its grade, adding it to the array if not present; retracting a set reduces its grade, removing it from the array if its grade drops to zero. Use the [GKRuleSystem](../gkrulesystem.md) methods listed in Drawing Conclusions from Facts to examine the grade of a fact or of a combination of facts.

## See Also

### Asserting and Retracting Facts

- [assertFact(\_:)](assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact(\_:grade:)](assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact(\_:)](retractfact%28__%29.md): Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.
- [retractFact(\_:grade:)](retractfact%28__grade_%29.md): Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.

# facts (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of facts claimed by the rule system.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray * facts;
```

<a id="Discussion"></a>

## Discussion

A fact is any object representing a truth claimed by the rule system. You can use any type of object to represent the facts in your system: simple data types like strings and numbers typically suffice, but you can also use custom objects from your game’s data model.

Each fact has a membership grade ranging from zero to 1.0, representing variable levels of truth, strength, or confidence for use in fuzzy logic. Asserting a fact increases its grade, adding it to the array if not present; retracting a set reduces its grade, removing it from the array if its grade drops to zero. Use the [GKRuleSystem](../gkrulesystem.md) methods listed in Drawing Conclusions from Facts to examine the grade of a fact or of a combination of facts.

## See Also

### Asserting and Retracting Facts

- [assertFact:](assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact:grade:](assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact:](retractfact%28__%29.md): Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.
- [retractFact:grade:](retractfact%28__grade_%29.md): Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.
