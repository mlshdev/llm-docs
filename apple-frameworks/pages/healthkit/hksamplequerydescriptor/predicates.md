> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequerydescriptor/predicates](https://developer.apple.com/documentation/healthkit/hksamplequerydescriptor/predicates)

# predicates

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An array of sample predicates that define the type of data that the query returns.

## Declaration

```swift
var predicates: [HKSamplePredicate<Sample>] { get set }
```

<a id="Discussion"></a>

## Discussion

To query for multiple types of data, provide a sample predicate for each type. If your [HKSamplePredicate](../hksamplepredicate.md) instances return different [HKSample](../hksample.md) subclasses, use [sample(type:predicate:)](../hksamplepredicate/sample%28type_predicate_%29.md) to create the sample predicates.

## See Also

### Accessing Query Properties

- [limit](limit.md): The maximum number of samples that the query returns.
- [sortDescriptors](sortdescriptors.md): An array that specifies the order of the results that the query returns.
