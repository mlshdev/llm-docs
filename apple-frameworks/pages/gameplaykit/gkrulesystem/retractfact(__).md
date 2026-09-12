> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/retractfact(_:)](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/retractfact(_:))

# retractFact(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.

## Declaration

```swift
func retractFact(_ fact: any NSObjectProtocol)
```

## Parameters

- `fact`: An object representing a truth to be rejected by the rule system. For details, see the [facts](facts.md) property.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [retractFact(\_:grade:)](retractfact%28__grade_%29.md) method with a `grade` value of 1.0, thus reducing the fact’s membership grade to zero and removing it from the [facts](facts.md) array.

Upon asserting or retracting any facts, the system reevaluates the rules in its [agenda](agenda.md) list so any rules that depend on changes to the set of facts can perform their actions.

## See Also

### Asserting and Retracting Facts

- [facts](facts.md): The list of facts claimed by the rule system.
- [assertFact(\_:)](assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact(\_:grade:)](assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact(\_:grade:)](retractfact%28__grade_%29.md): Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.

# retractFact: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified fact from the fact set, and reevaluates the rules in the system’s agenda.

## Declaration

```objectivec
- (void) retractFact:(id<NSObject>) fact;
```

## Parameters

- `fact`: An object representing a truth to be rejected by the rule system. For details, see the [facts](facts.md) property.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [retractFact:grade:](retractfact%28__grade_%29.md) method with a `grade` value of 1.0, thus reducing the fact’s membership grade to zero and removing it from the [facts](facts.md) array.

Upon asserting or retracting any facts, the system reevaluates the rules in its [agenda](agenda.md) list so any rules that depend on changes to the set of facts can perform their actions.

## See Also

### Asserting and Retracting Facts

- [facts](facts.md): The list of facts claimed by the rule system.
- [assertFact:](assertfact%28__%29.md): Adds the specified fact to the fact set with a membership grade of 1.0, and reevaluates the rules in the system’s agenda.
- [assertFact:grade:](assertfact%28__grade_%29.md): Increases the membership grade of the specified fact by the specified amount, adding it to the fact set if necessary, and reevaluates the rules in the system’s agenda.
- [retractFact:grade:](retractfact%28__grade_%29.md): Reduces the membership grade of the specified fact by the specified amount, removing it from the fact set if necessary, and reevaluates the rules in the system’s agenda.
