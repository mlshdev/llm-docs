> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrulesystem/minimumgrade(forfacts:)](https://developer.apple.com/documentation/gameplaykit/gkrulesystem/minimumgrade(forfacts:))

# minimumGrade(forFacts:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the lowest membership grade among the specified facts.

## Declaration

```swift
func minimumGrade(forFacts facts: [Any]) -> Float
```

## Parameters

- `facts`: An array of objects representing truths claimed or rejected by the rule system. For details, see the [facts](facts.md) property.

<a id="return-value"></a>

## Return Value

The lowest membership grade in the array of facts.

<a id="Discussion"></a>

## Discussion

In fuzzy logic, this method is called the AND Zadeh operator, because it corresponds to the AND operator in Boolean logic.

> **Note**

>  If a fact is not in the [facts](facts.md) array, its membership grade for purposes of this operation is implicitly zero.

## See Also

### Related Documentation

- [facts](facts.md): The list of facts claimed by the rule system.

### Drawing Conclusions from Facts

- [grade(forFact:)](grade%28forfact_%29.md): Returns the membership grade of the specified fact.
- [maximumGrade(forFacts:)](maximumgrade%28forfacts_%29.md): Returns the highest membership grade among the specified facts.

# minimumGradeForFacts: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the lowest membership grade among the specified facts.

## Declaration

```objectivec
- (float) minimumGradeForFacts:(NSArray *) facts;
```

## Parameters

- `facts`: An array of objects representing truths claimed or rejected by the rule system. For details, see the [facts](facts.md) property.

<a id="return-value"></a>

## Return Value

The lowest membership grade in the array of facts.

<a id="Discussion"></a>

## Discussion

In fuzzy logic, this method is called the AND Zadeh operator, because it corresponds to the AND operator in Boolean logic.

> **Note**

>  If a fact is not in the [facts](facts.md) array, its membership grade for purposes of this operation is implicitly zero.

## See Also

### Related Documentation

- [facts](facts.md): The list of facts claimed by the rule system.

### Drawing Conclusions from Facts

- [gradeForFact:](grade%28forfact_%29.md): Returns the membership grade of the specified fact.
- [maximumGradeForFacts:](maximumgrade%28forfacts_%29.md): Returns the highest membership grade among the specified facts.
