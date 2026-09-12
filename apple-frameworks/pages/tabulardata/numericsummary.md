> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/numericsummary](https://developer.apple.com/documentation/tabulardata/numericsummary)

# NumericSummary

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A summary of a numerical column.

## Declaration

```swift
struct NumericSummary<Element> where Element : BinaryFloatingPoint
```

## Topics

### Creating a Summary

- [init()](numericsummary/init%28%29.md): Creates an empty numeric summary with default values.
- [init(someCount:noneCount:mean:standardDeviation:min:max:median:firstQuartile:thirdQuartile:)](numericsummary/init%28somecount_nonecount_mean_standarddeviation_min_max_median_firstquartile_thirdquartile_%29.md): Creates an empty numeric summary.

### Inspecting a Summary

- [debugDescription](numericsummary/debugdescription.md): A text representation of the summary’s statistics suitable for debugging.
- [someCount](numericsummary/somecount.md): The number of non-missing elements in the column.
- [noneCount](numericsummary/nonecount.md): The number of missing elements in the column.
- [totalCount](numericsummary/totalcount.md): The total number of elements in the column.

### Getting Statistical Values

- [max](numericsummary/max.md): The largest value, excluding missing elements.
- [mean](numericsummary/mean.md): The arithmetic mean of a column’s values that excludes missing elements.
- [median](numericsummary/median.md): The midpoint value that’s above half of the non-missing elements’ values and below the other half’s values.
- [min](numericsummary/min.md): The smallest value, excluding missing elements.
- [standardDeviation](numericsummary/standarddeviation.md): The standard deviation of a column’s values that excludes missing elements.
- [firstQuartile](numericsummary/firstquartile.md): The value that’s above 25% of the non-missing elements’ values.
- [thirdQuartile](numericsummary/thirdquartile.md): The value that’s above 75% of the non-missing elements’ values.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Statistical Summaries

- [CategoricalSummary](categoricalsummary.md): A categorical summary of a collection’s elements.
- [AnyCategoricalSummary](anycategoricalsummary.md): A type-erased categorical summary.
