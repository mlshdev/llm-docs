> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/retractfact(_:grade:)](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/retractfact(_:grade:))

# retractFact(\_:grade:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.

## Declaration

```swift
func retractFact(_ fact: any NSObjectProtocol, grade: Float)
```

## Parameters

- `fact`: An object representing a truth to be claimed or rejected by the rule system. For details, see the [facts](facts.md) property.
- `grade`: The amount by which to reduce the fact’s membership grade.

<a id="Discussion"></a>

## Discussion

Each fact has a membership grade ranging from zero to 1.0, representing variable levels of truth, strength, or confidence for use in fuzzy logic. Calling this method reduces the fact’s grade by the amount specified in the `grade` parameter; reducing a fact’s grade to zero or below removes it from the [facts](facts.md) array.

Upon asserting or retracting any facts, the system reevaluates the rules in its [agenda](agenda.md) list so any rules that depend on changes to the set of facts can perform their actions.

## See Also

### Asserting and Retracting Facts

- [facts](facts.md): The list of facts claimed by the rule system.
- [assertFact(\_:)](assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact(\_:grade:)](assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact(\_:)](retractfact%28__%29.md): Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.

# retractFact:grade: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.

## Declaration

```objectivec
- (void) retractFact:(id<NSObject>) fact grade:(float) grade;
```

## Parameters

- `fact`: An object representing a truth to be claimed or rejected by the rule system. For details, see the [facts](facts.md) property.
- `grade`: The amount by which to reduce the fact’s membership grade.

<a id="Discussion"></a>

## Discussion

Each fact has a membership grade ranging from zero to 1.0, representing variable levels of truth, strength, or confidence for use in fuzzy logic. Calling this method reduces the fact’s grade by the amount specified in the `grade` parameter; reducing a fact’s grade to zero or below removes it from the [facts](facts.md) array.

Upon asserting or retracting any facts, the system reevaluates the rules in its [agenda](agenda.md) list so any rules that depend on changes to the set of facts can perform their actions.

## See Also

### Asserting and Retracting Facts

- [facts](facts.md): The list of facts claimed by the rule system.
- [assertFact:](assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact:grade:](assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact:](retractfact%28__%29.md): Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.
