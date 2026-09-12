> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/grade(forfact:)](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/grade(forfact:))

# grade(forFact:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the membership grade of the specified fact.

## Declaration

```swift
func grade(forFact fact: any NSObjectProtocol) -> Float
```

## Parameters

- `fact`: An object representing a truth claimed or rejected by the rule system. For details, see the [facts](facts.md) property.

<a id="return-value"></a>

## Return Value

A value in the range \[0.0, 1.0\] representing the fact’s membership grade.

<a id="Discussion"></a>

## Discussion

Each fact has a membership grade ranging from zero to 1.0, representing variable levels of truth, strength, or confidence for use in fuzzy logic. Use the [GKRuleSystem](../gkrulesystem.md) methods listed in Asserting and Retracting Facts to add or remove facts and set their membership grade—asserting a fact increases its grade, adding it to the array if not present; retracting a set reduces its grade, removing it from the array if its grade drops to zero.

If the specified fact is not in the [facts](facts.md) array, this method returns `0.0`.

## See Also

### Related Documentation

- [facts](facts.md): The list of facts claimed by the rule system.

### Drawing Conclusions from Facts

- [minimumGrade(forFacts:)](minimumgrade%28forfacts_%29.md): Returns the lowest membership grade among the specified facts.
- [maximumGrade(forFacts:)](maximumgrade%28forfacts_%29.md): Returns the highest membership grade among the specified facts.

# gradeForFact: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the membership grade of the specified fact.

## Declaration

```objectivec
- (float) gradeForFact:(id<NSObject>) fact;
```

## Parameters

- `fact`: An object representing a truth claimed or rejected by the rule system. For details, see the [facts](facts.md) property.

<a id="return-value"></a>

## Return Value

A value in the range \[0.0, 1.0\] representing the fact’s membership grade.

<a id="Discussion"></a>

## Discussion

Each fact has a membership grade ranging from zero to 1.0, representing variable levels of truth, strength, or confidence for use in fuzzy logic. Use the [GKRuleSystem](../gkrulesystem.md) methods listed in Asserting and Retracting Facts to add or remove facts and set their membership grade—asserting a fact increases its grade, adding it to the array if not present; retracting a set reduces its grade, removing it from the array if its grade drops to zero.

If the specified fact is not in the [facts](facts.md) array, this method returns `0.0`.

## See Also

### Related Documentation

- [facts](facts.md): The list of facts claimed by the rule system.

### Drawing Conclusions from Facts

- [minimumGradeForFacts:](minimumgrade%28forfacts_%29.md): Returns the lowest membership grade among the specified facts.
- [maximumGradeForFacts:](maximumgrade%28forfacts_%29.md): Returns the highest membership grade among the specified facts.
